import {h} from "../../web_modules/preact.js";
import "./buttonlink.css.proxy.js";
export default function ButtonLink(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground buttonlink"
  }, /* @__PURE__ */ h("a", {
    className: "full",
    href: props.href
  }, /* @__PURE__ */ h("div", {
    className: "buttonlinkchild"
  }, props.children)));
}
