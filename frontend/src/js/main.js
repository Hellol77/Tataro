import "./chooseCard.js";
import "./key.js";
import "./kakaoShareMessage.js";
import "./link.js";
import "./api.js";
import "./cardResult.js";
import "./download.js";
import "../style/style.css";
import "../img/tataro.png";
import "../img/card-backside.png";
import { selectTaroFun } from "./cardResult.js";

document.addEventListener("DOMContentLoaded", function () {
  selectTaroFun();
  const inputArea = document.querySelector(".input-area");
  const originalHeight = window.innerHeight;

  window.addEventListener("resize", () => {
    const currentHeight = window.innerHeight;
    if (currentHeight < originalHeight) {
      inputArea.style.marginBottom = `${originalHeight - currentHeight}px`;
    } else {
      inputArea.style.marginBottom = "0px";
    }
  });
});
