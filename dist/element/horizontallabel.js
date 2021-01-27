import {h} from "../../web_modules/preact.js";
export default function HorizontalLabel(props) {
  return /* @__PURE__ */ h("div", {
    className: "horizontal"
  }, /* @__PURE__ */ h("span", {
    className: "padright"
  }, props.label), props.children);
}
