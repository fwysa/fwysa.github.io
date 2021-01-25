import {h} from "../../web_modules/preact.js";
import "./css/buttons.css.proxy.js";
export default function ButtonLink(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground button",
    onClick: props.cb
  }, /* @__PURE__ */ h("a", {
    href: "#",
    onClick: (e) => {
      e.preventDefault();
    }
  }, /* @__PURE__ */ h("div", {
    className: "buttonchild"
  }, props.children)));
}
