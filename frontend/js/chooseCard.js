let cardCount = 0;
const chooseCardSelect = document.getElementById("chooseCard_select");

const cardBox = document.getElementById("chooseCard_cardBox");
for (let i = 1; i < 79; i++) {
  const image = document.createElement("img");
  image.classList.add("chooseCard_card");
  image.src = "img/card-backside.png";
  cardBox.appendChild(image);
}

const card = document.getElementsByClassName("chooseCard_card");
for (let i = 0; i < card.length; i++) {
  card.item(i).addEventListener("click", () => {
    if (card.item(i).classList.contains("chooseCard_card_onclick")) {
      // 카드선택을 취소하면 선택하기 버튼을 안보이게 한다.
      chooseCardSelect.style.display = "none";
      card.item(i).classList.remove("chooseCard_card_onclick");
      cardCount -= 1;
      return;
    }

    if (cardCount >= 3) {
      // 3개만 뽑을 수 있게한다.
      return;
    } else {
      //카드 뽑기
      cardCount += 1;
      if (cardCount == 3) {
        // 만약 3번째 카드를 선택하는 클릭일때 선택하기 버튼을 보이게 한다.
        chooseCardSelect.style.display = "flex";
      }
      card.item(i).classList.add("chooseCard_card_onclick");
    }
  });
}

if (cardCount == 3) {
  chooseCardSelect.style.display = "flex";
} else {
  chooseCardSelect.style.display = "none";
}
