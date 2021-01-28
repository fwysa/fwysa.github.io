import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import Selection from "../element/selection.js";
import CONSTANTS from "../constants.js";
function FHEGLPage() {
  const [group, setGroup] = useState("");
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Choose an HE Group:"), /* @__PURE__ */ h(Selection, {
    value: group,
    cb: setGroup,
    options: CONSTANTS.fheGroups
  })), /* @__PURE__ */ h("p", null, group));
}
export default FHEGLPage;
