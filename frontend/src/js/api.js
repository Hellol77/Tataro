import { selectTaro } from "./cardResult";
import { shareMessage } from "./kakaoShareMessage";
import { sharePage, totalResultPage } from "./link";

const totalResultChatBox = document.querySelector(".totalResult_chatBox");
const questionInput = document.querySelector(".insert_text_input");
const chatInput = document.querySelector(".totalResult_input");
const shareMychat = document.querySelector(".share_myChat");
const shareTataroChat = document.querySelector(".share_tataroChat");
let first = true;
let userMessages = [];
let assistantMessages = [];
export let userFirstAnswer = "";
export let tataroFirstAnswer = "";
// let index = 0;
// let myFirstQuestion;
// let tataroFirstAnswer;
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
    userFirstAnswer = questionInput.value;
    // myFirstQuestion = questionInput.value;
    userMessages.push(questionInput.value); //사용자 질문 저장

    //카드 세장 뽑기 프론트 버전
    userMessages.push(
      `${selectTaro[0][1]} ${selectTaro[1][1]} ${selectTaro[2][1]}`
    );

    const myQuestion = questionInput.value;
    questionInput.value = "";
    myChatBox.appendChild(myChat);
    totalResultChatBox.appendChild(myChatBox);
    return myQuestion;
  } else {
    myChat.innerText = chatInput.value;
    userMessages.push(chatInput.value);
    chatInput.value = "";
    const myQuestion = chatInput.value;
    myChatBox.appendChild(myChat);
    totalResultChatBox.appendChild(myChatBox);
    return myQuestion;
  }
};

const type = (assistant, typewriter, index) => {
  totalResultChatBox.scrollTop = totalResultChatBox.scrollHeight;
  if (index < assistant.length) {
    if (assistant[index] === "<" || assistant[index] === ">") {
      index = index + 2;
    }
    typewriter.innerHTML = assistant.slice(0, index + 1);
    index++;
    setTimeout(() => type(assistant, typewriter, index), Math.random() * 150);
  }
  if (index == assistant.length) {
    typewriter.innerHTML = assistant.slice(0, index);
    chatInput.disabled = false; // input의 비활성화를 풀어준다.

    return;
  }
};

//타타로 채팅을 채팅창에 넣기
const tataroChat = (assistant, myQuestion, isSuccess) => {
  const tataroChatBox = document.createElement("div");
  tataroChatBox.classList.add("totalResult_tataroChatBox");
  const tataroChatTime = document.createElement("div");
  tataroChatTime.classList.add("totalResult_tataroChatTime");
  const tataroChat = document.createElement("div");
  tataroChat.classList.add("totalResult_tataroChat");
  const tataroChatTextBox = document.createElement("div");

  const totalResultButton = document.createElement("div");
  const totalResultShare = document.createElement("button");
  const blessings = document.createElement("a");
  const totalResultDetail = document.createElement("div");

  tataroChatTime.innerText = sendTime();
  tataroChatBox.appendChild(tataroChatTime);
  totalResultButton.classList.add("totalResult_button");

  //타타로의 첫 채팅인 경우
  if (first == true) {
    totalResultShare.classList.add("totalResult_share");
    totalResultShare.innerText = "타로 내용 공유";
    totalResultShare.addEventListener("click", () => {
      shareMessage();
    });

    totalResultDetail.classList.add("totalResult_share");
    totalResultDetail.innerText = "자세히 보기";
    totalResultDetail.addEventListener("click", () => {
      totalResultPage.style.display = "none";
      sharePage.style.display = "flex";
    });

    totalResultButton.appendChild(totalResultShare);
    totalResultButton.appendChild(totalResultDetail);
    shareMychat.innerText = myQuestion;
    tataroFirstAnswer = assistant;

    shareTataroChat.innerText = assistant;
  }
  tataroChatBox.appendChild(tataroChat);
  tataroChat.appendChild(tataroChatTextBox);
  tataroChat.appendChild(totalResultButton);
  totalResultChatBox.appendChild(tataroChatBox);
  if (isSuccess == true && first == true) {
    type(
      `${assistant} <br><br> 다른 질문이 있으시다면 언제든지 말씀해주세요.`,
      tataroChatTextBox,
      0
    );
    first = false;
    return;
  }
  if (isSuccess == true && first == false) {
    blessings.classList.add("totalResult_share");
    blessings.innerText = "복채 보내기";
    blessings.href = "https://toss.me/hellol77";
    blessings.target = "_blank";
    totalResultButton.appendChild(blessings);
    type(
      `${assistant} <br><br> 다른 질문이 있으시다면 언제든지 말씀해주세요. <br><br> 작지만 소중한 복채가 서비스 운영에 큰 힘이 됩니다. `,
      tataroChatTextBox,
      0
    );
    return;
  }
  type(assistant, tataroChatTextBox, 0);
  first = false;
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

export async function getTaro() {
  try {
    // 정상적으로 실행될 때 수행되는 곳
    chatInput.disabled = true; // 타타로에게 답변을 받기 전에 사용자가 다시 질문을 보내면 error가 나기 때문에 input 비활성화를 해준다.
    const myQuestion = myChat(); // 사용자의 질문을 채팅창에 나타나게하는 함수
    setSpinner(); // 타타로에게 답변이 오기전 스피너 생성 함수

    // 타로 질문 주고 결과 받는 api, userMessages 와 assistantMessages에 사용자와 타타로가 대화할때마다 대화를 저장한다.
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

    const assistant = data.assistant;
    if (assistant == "") {
      eraseSpinner();
      tataroChat(
        "죄송해요. 질문을 다시 입력하거나 새로고침 해주세요.",
        myQuestion,
        false
      );
      return;
    }
    assistantMessages.push(assistant); // 타타로의 답변을 저장
    eraseSpinner(); // 스피너 지워주는 함수
    tataroChat(assistant, myQuestion, true); // 타타로의 답변을 채팅창에 나타나게하는 함수
    return data;
  } catch (error) {
    //에러가 났을때 수행되는 곳
    eraseSpinner();
    tataroChat(
      "죄송해요. 질문을 다시 입력하거나 새로고침 해주세요.",
      userMessages[0],
      false
    );
    console.log("error", error);
  }
}
