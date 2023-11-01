import { cardArray } from "./constants/Cards";
import Controller from "./controllers/controller";
import Store from "./store/cardStore";
import cardResultView from "./views/CardResult";
import ChooseCardView from "./views/ChooseCard";
import InsertView from "./views/Insert";
import ShareView from "./views/Share";
import StartView from "./views/Start";
import TotalResultView from "./views/TotalResult";
import tataroLogo from "./assets/imgs/tataro.png";
import "/src/assets/css/style.css";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(cardArray);

  const views = {
    startView: new StartView(tataroLogo),
    chooseCardView: new ChooseCardView(),
    cardResultView: new cardResultView(),
    totalResultView: new TotalResultView(),
    shareView: new ShareView(),
    insertView: new InsertView(),
  };

  new Controller(store, views);
}
