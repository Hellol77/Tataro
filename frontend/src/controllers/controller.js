import { qs } from "../helper";

export default class Controller {
  constructor(
    store,
    {
      startView,
      // chooseCardView,
      // cardResultView,
      // totalResultView,
      // shareView,
      // insertView,
    }
  ) {
    this.store = store;
    this.startView = startView;
    // this.chooseCardView = chooseCardView;
    // this.cardResultView = cardResultView;
    // this.shareView = shareView;
    // this.totalResultView = totalResultView;
    // this.insertView = insertView;
    this.play();
  }

  play() {
    this.startView.play();
    this.startView.addEvent( console.log("hi"));
  }
}
