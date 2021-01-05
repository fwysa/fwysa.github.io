import {h} from "../web_modules/preact.js";
import "./block.css.proxy.js";
export default function Block(props) {
  return /* @__PURE__ */ h("div", {
    className: "block"
  }, props.children);
}
