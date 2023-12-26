import { on } from "../helper";
import { qs } from "../helper";

export default class View {
  constructor() {
    this.element = qs("#app");
    return this;
  }
  //   hide() {
  //     this.element.style.display = "none";
  //     return this;
  //   }
  showAndHide(node) {
    this.element.innerHTML = node;
    return this;
  }
  // on(eventName, handler) {
  //   on(eventName, handler);
  //   return this;
  // }
  bindEvents(eventListeners) {
    eventListeners.forEach(({ element, type, listener }) => {
      element = element || this.element;
      element.addEventListener(type, listener);
    });
  }
}
