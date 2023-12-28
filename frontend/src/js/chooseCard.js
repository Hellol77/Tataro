let cardCount = 0;
const chooseCardSelect = document.getElementById("chooseCard_select");
const cardBox = document.getElementById("chooseCard_cardBox");

function createCard() {
  const image = document.createElement("img");
  image.classList.add("chooseCard_card");
  image.src = "./card-backside.png";
  return image;
}

function toggleCardSelection(card) {
  if (card.classList.contains("chooseCard_card_onclick")) {
    // Deselect card
    chooseCardSelect.style.display = "none";
    card.classList.remove("chooseCard_card_onclick");
    cardCount -= 1;
  } else {
    // Select card
    if (cardCount < 3) {
      cardCount += 1;
      card.classList.add("chooseCard_card_onclick");
    }
  }

  chooseCardSelect.style.display = cardCount === 3 ? "flex" : "none";
}

function handleCardClick(event) {
  const clickedCard = event.target;
  toggleCardSelection(clickedCard);
}

for (let i = 1; i < 79; i++) {
  const card = createCard();
  cardBox.appendChild(card);
}

const cards = document.querySelectorAll(".chooseCard_card");

cards.forEach(card => {
  card.addEventListener("click", handleCardClick);
});