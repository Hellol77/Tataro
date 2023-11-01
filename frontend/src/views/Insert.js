import View from "./View";
import { qs } from "../helper";

export default class InsertView extends View {
  constructor() {
    super(qs("#app"));
  }
  show() {}
}
