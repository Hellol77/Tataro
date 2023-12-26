import { cardArray } from "./constants/Cards";
import Controller from "./controllers/controller";
import Store from "./store/cardStore";
import cardResultView from "./views/CardResultView";
import ChooseCardView from "./views/ChooseCardView";
import InsertView from "./views/InsertView";
import ShareView from "./views/ShareView";
import StartView from "./views/StartView";
import TotalResultView from "./views/TotalResultView";
import tataroLogo from "./assets/imgs/tataro.png";
import "/src/assets/css/style.css";

document.addEventListener("DOMContentLoaded", main);

function main() {
  const store = new Store(cardArray);

  const views = {
    startView: new StartView(tataroLogo),
    // chooseCardView: new ChooseCardView(),
    // cardResultView: new cardResultView(),
    // totalResultView: new TotalResultView(),
    // shareView: new ShareView(),
    // insertView: new InsertView(),
  };

  new Controller(store, views);
}
