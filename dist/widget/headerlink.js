import {h} from "../../web_modules/preact.js";
import "./headerlink.css.proxy.js";
export default function HeaderLink(props) {
  return /* @__PURE__ */ h("div", {
    className: "outericon"
  }, /* @__PURE__ */ h("a", {
    href: props.src
  }, /* @__PURE__ */ h("img", {
    src: props.img
  }), /* @__PURE__ */ h("span", {
    className: "smaller"
  }, props.text)));
}
