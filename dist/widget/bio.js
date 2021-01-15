import {h} from "../../web_modules/preact.js";
import "./bio.css.proxy.js";
export default function Bio(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground bio"
  }, /* @__PURE__ */ h("div", {
    className: "bioimg"
  }), /* @__PURE__ */ h("div", {
    className: "bioinfo"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfoupper"
  }, /* @__PURE__ */ h("span", null, props.data.name)), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "bioinfolower"
  })));
}
