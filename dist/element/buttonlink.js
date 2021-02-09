import {h} from "../../web_modules/preact.js";
import "./css/buttons.css.proxy.js";
export default function ButtonLink(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground buttons"
  }, /* @__PURE__ */ h("a", {
    className: "full",
    href: props.href
  }, /* @__PURE__ */ h("div", {
    className: "buttonchild"
  }, props.children)));
}
