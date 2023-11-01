import { qs } from "../helper";
import View from "./View";

export default class StartView extends View {
  constructor(img) {
    super(qs("#app"));
    this.img = img;
  }

  template() {
    return `<div class="content start" id="start_page">
    <div class="title_box">
      <div class="title_box_text-1">타로보는</div>
      <div class="title_box_text-2">타타로</div>
    </div>
    <div class="sub_title">인공지능 타타로가 타로를 봐줄게!</div>
    <img src="${this.img}" alt="tataro" class="index_tataro" />
    <button class="start_button" id="first_button">
      Start
    </button>
  </div>`;
  }
  show() {
    super.showAndHide(this.template());
  }
}
