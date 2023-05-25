const totalResultChatBox = document.querySelector(".totalResult_chatBox");
const questionInput = document.querySelector(".insert_text_input");
const chatInput = document.querySelector(".totalResult_input");
const shareMychat = document.querySelector(".share_myChat");
const shareTataroChat = document.querySelector(".share_tataroChat");
let first = true;
let userMessages = [];
let assistantMessages = [];

let myFirstQuestion;
let tataroFirstAnswer;
// 채팅 보낸 시간을 리턴하는 함수
const sendTime = () => {
  const time = new Date();
  const hour = time.getHours();
  let minutes = time.getMinutes();
  let meridiem; // 오전, 오후 구분
  let hour2; // 시간
  let minutes2;
  if (hour < 12) {
    meridiem = "오전";
    hour2 = hour;
  } else {
    meridiem = "오후";
    hour2 = hour - 12;
  }
  if (minutes < 10) {
    minutes = "0" + minutes.toString();
  }
  const myChatTimeString = `${meridiem} ${hour2}:${minutes}`;
  return myChatTimeString;
};

// 내 채팅을 채팅창에 넣기
const myChat = () => {
  const myChatBox = document.createElement("div");
  myChatBox.classList.add("totalResult_myChatBox");
  const myChatTime = document.createElement("div");
  myChatTime.classList.add("totalResult_myChatTime");
  const myChat = document.createElement("div");
  myChat.classList.add("totalResult_myChat");
  myChatTime.innerText = sendTime();
  myChatBox.appendChild(myChatTime);

  // 첫번째 질문
  if (!!questionInput.value == true) {
    myChat.innerText = questionInput.value;
    myFirstQuestion = questionInput.value;
    userMessages.push(questionInput.value);

    //카드 세장 뽑기 프론트 버전
    userMessages.push(
      `${selectTaro[0][1]} ${selectTaro[1][1]} ${selectTaro[2][1]}`
    );

    myQuestion = questionInput.value;
    questionInput.value = "";
  } else {
    myChat.innerText = chatInput.value;
    userMessages.push(chatInput.value);
    chatInput.value = "";
  }
  myChatBox.appendChild(myChat);
  totalResultChatBox.appendChild(myChatBox);
  return myQuestion;
};

//타타로 채팅을 채팅창에 넣기
const tataroChat = (assistant, myQuestion) => {
  const tataroChatBox = document.createElement("div");
  tataroChatBox.classList.add("totalResult_tataroChatBox");
  const tataroChatTime = document.createElement("div");
  tataroChatTime.classList.add("totalResult_tataroChatTime");
  const tataroChat = document.createElement("div");
  tataroChat.classList.add("totalResult_tataroChat");
  tataroChat.innerText = assistant;
  tataroChatTime.innerText = sendTime();
  tataroChatBox.appendChild(tataroChatTime);
  //타타로의 첫 채팅인 경우
  if (first == true) {
    first = false;
    const totalResultButton = document.createElement("div");
    totalResultButton.classList.add("totalResult_button");
    const totalResultShare = document.createElement("div");
    totalResultShare.classList.add("totalResult_share");
    totalResultShare.innerText = "공유하기";
    const totalResultResume = document.createElement("div");
    totalResultResume.classList.add("totalResult_share");
    totalResultResume.innerText = "다시하기";
    totalResultButton.appendChild(totalResultShare);
    totalResultButton.appendChild(totalResultResume);
    tataroChat.appendChild(totalResultButton);
    shareMychat.innerText = myQuestion;
    tataroFirstAnswer = assistant;

    totalResultResume.addEventListener("click", () => {
      window.location.reload();
    });
    totalResultShare.addEventListener("click", () => {
      totalResultPage.style.display = "none";
      sharePage.style.display = "flex";
    });
    shareTataroChat.innerText = assistant;
  }
  tataroChatBox.appendChild(tataroChat);
  totalResultChatBox.appendChild(tataroChatBox);
  totalResultChatBox.scrollTop = totalResultChatBox.scrollHeight;
};

//스피너 추가 함수
const setSpinner = () => {
  const spinnerBox = document.createElement("div");
  spinnerBox.classList.add("spinner");
  const spinner = document.createElement("div");
  spinner.classList.add("totalResult_tataroChat");
  spinner.innerHTML = '<i class="fa fa-spinner fa-spin"></i>';
  spinnerBox.appendChild(spinner);
  totalResultChatBox.appendChild(spinnerBox);
  totalResultChatBox.scrollTop = totalResultChatBox.scrollHeight;
};

const eraseSpinner = () => {
  const spinnerBox = document.querySelector(".spinner");
  totalResultChatBox.removeChild(spinnerBox);
};

async function getTaro() {
  try {
    chatInput.disabled = true;
    const myQuestion = myChat();
    // 타로 질문 주고 결과 받는 api
    setSpinner();
    const response = await fetch(
      " https://jivbftmrucu77b73iap3ofhydq0uhuzr.lambda-url.ap-northeast-2.on.aws/taro",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userMessages: userMessages,
          assistantMessages: assistantMessages,
        }),
      }
    );
    const data = await response.json();
    assistantMessages.push(data.assistant);
    eraseSpinner();
    tataroChat(data.assistant, myQuestion);
    chatInput.disabled = false;
    return data;
  } catch (error) {
    window.alert("서버 에러입니다. 다시 접속해주세요!");
    console.log(error);
  }
}

function shareMessage() {
  Kakao.Share.sendDefault({
    objectType: "feed",
    itemContent: {
      profileText: "타로보는 타타로",
    },
    content: {
      title: myFirstQuestion,
      description: tataroFirstAnswer,
      imageUrl: "https://ifh.cc/g/7hBLkx.jpg",
      link: {
        // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
        mobileWebUrl: "https://tataro.pages.dev/",
        webUrl: "https://tataro.pages.dev/",
      },
    },

    buttons: [
      {
        title: "타로보기",
        link: {
          mobileWebUrl: "https://tataro.pages.dev/",
          webUrl: "https://tataro.pages.dev/",
        },
      },
    ],
  });
}
