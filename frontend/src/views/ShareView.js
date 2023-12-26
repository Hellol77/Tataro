import View from "./View";
import { qs } from "../helper";

export default class ShareView extends View {
  constructor() {
    super(qs("#app"));
  }
  show() {}
}
