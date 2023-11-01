// 버튼을 선택했을때 다른페이지로 가게하는 자바스크립트 모음
const startPage = document.getElementById("start_page");
const startButton = document.getElementById("first_button");
const insertPage = document.getElementById("insert_page");
const insertValue = document.getElementById("insert_text_input_value");
const insertButton = document.getElementById("second_button");
const chooseCardPage = document.getElementById("chooseCard_page");
const chooseCardButton = document.getElementById("chooseCard_select");
const cardResultPage = document.getElementById("cardResult_page");
const cardResultButton = document.getElementById("result");
const totalResultPage = document.getElementById("totalResult_page");
const totalResultButton = document.getElementById("totalResult_Button");
const totalResultShareButton = document.getElementById(
  "totalResultShare_button"
);
const totalResultResumeButton = document.getElementById(
  "totalResultResume_button"
);
const totalResultInputValue = document.getElementById(
  "totalResult_input_value"
);
const shareButtonReload = document.getElementById("sharePageButtonReload");
const sharePage = document.getElementById("share_page");

insertValue.addEventListener("focus", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

totalResultInputValue.addEventListener("focus", function () {
  window.scrollTo(0, document.body.scrollHeight);
});

startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  insertPage.style.display = "flex";
});
insertButton.addEventListener("click", (e) => {
  if (insertValue.value == "") {
    return;
  } else {
    getTaro();
    insertPage.style.display = "none";
    chooseCardPage.style.display = "flex";
  }
});
chooseCardButton.addEventListener("click", () => {
  chooseCardPage.style.display = "none";
  cardResultPage.style.display = "flex";
});
cardResultButton.addEventListener("click", () => {
  cardResultPage.style.display = "none";
  totalResultPage.style.display = "flex";
});
// totalResultShareButton.addEventListener("click", () => {
//   totalResultPage.style.display = "none";
//   sharePage.style.display = "flex";
// });
// totalResultResumeButton.addEventListener("click", () => {
//   window.location.reload();
// });
totalResultButton.addEventListener("click", () => {
  if (chatInput.disabled == true || chatInput.value == "") {
    return;
  } else {
    getTaro();
  }
});

shareButtonReload.addEventListener("click", () => {
  window.location.reload();
});

function inputEnterKey() {
  if (insertValue.value == "") {
    return;
  } else {
    getTaro();
    insertPage.style.display = "none";
    chooseCardPage.style.display = "flex";
  }
}

function totalResultInputEnterKey() {
  if (totalResultInputValue.value == "") {
    return;
  } else {
    getTaro();
  }
}
