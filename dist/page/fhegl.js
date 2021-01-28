import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import Selection from "../element/selection.js";
import SearchResults from "../widget/searchresults.js";
import CONSTANTS from "../constants.js";
function FHEGLPage() {
  const [group, setGroup] = useState("");
  const [count, setCount] = useState(0);
  const selector = {
    type: "user",
    fheGroup: group
  };
  const formatPeople = (r) => {
    return /* @__PURE__ */ h("p", null, JSON.stringify(r));
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Choose an HE Group:"), /* @__PURE__ */ h(Selection, {
    value: group,
    cb: setGroup,
    options: CONSTANTS.fheGroups
  })), group !== "" ? /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Group (", count, ")"), /* @__PURE__ */ h(SearchResults, {
    selector,
    cb: formatPeople,
    countcb: setCount
  })) : null);
}
export default FHEGLPage;
