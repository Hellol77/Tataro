import View from "./View";
import { qs } from "../helper";

export default class ChooseCardView extends View {
  constructor() {
    super(qs("#app"));
  }
  show() {}
}
