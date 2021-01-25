import {h} from "../../web_modules/preact.js";
import "./css/sectionsubtitle.css.proxy.js";
export default function SectionSubtitle(props) {
  return /* @__PURE__ */ h("div", {
    className: "sectionsubtitle"
  }, /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("strong", null, props.children)), /* @__PURE__ */ h("hr", null));
}
