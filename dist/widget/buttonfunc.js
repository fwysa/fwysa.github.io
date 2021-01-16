import {h} from "../../web_modules/preact.js";
import "./buttonlink.css.proxy.js";
export default function ButtonLink(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground button",
    onClick: props.cb
  }, /* @__PURE__ */ h("a", {
    href: "#"
  }, /* @__PURE__ */ h("div", {
    className: "buttonchild"
  }, props.children)));
}
