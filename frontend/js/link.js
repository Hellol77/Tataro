// 버튼을 선택했을때 다른페이지로 가게하는 자바스크립트 모음
const startPage = document.getElementById("start_page");
const startButton = document.getElementById("first_button");
const insertPage = document.getElementById("insert_page");
const insertButton = document.getElementById("second_button");
const chooseCardPage = document.getElementById("chooseCard_page");
const chooseCardButton = document.getElementById("chooseCard_select");
const cardResultPage = document.getElementById("cardResult_page");
const cardResultButton = document.getElementById("result");
const totalResultPage = document.getElementById("totalResult_page");
const totalResultShareButton = document.getElementById(
  "totalResultShare_button"
);
const totalResultResumeButton = document.getElementById(
  "totalResultResume_button"
);
const shareButton = document.getElementById("sharePageButton");
const sharePage = document.getElementById("share_page");

startButton.addEventListener("click", () => {
  startPage.style.display = "none";
  insertPage.style.display = "flex";
});
insertButton.addEventListener("click", () => {
  insertPage.style.display = "none";
  chooseCardPage.style.display = "flex";
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
shareButton.addEventListener("click", () => {
  window.location.reload();
});

function inputEnterKey() {
  getTaro();
  insertPage.style.display = "none";
  chooseCardPage.style.display = "flex";
}
