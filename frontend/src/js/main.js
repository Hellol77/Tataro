import "./key.js";
import "./kakaoShareMessage.js";
import "./chooseCard.js";
import "./link.js";
import "./api.js";
import "./cardResult.js";
import "./download.js";
import "../style/style.css";
import "../img/tataro.png";
import "../img/card-backside.png";
import { chooseCard } from "./chooseCard.js";
import { selectTaroFun } from "./cardResult.js";

document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello from main.js!");
  chooseCard();
  selectTaroFun();

  // Add your project's initialization code or logic here
});
