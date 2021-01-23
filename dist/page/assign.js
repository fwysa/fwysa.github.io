import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import CallerList from "../widget/callerlist.js";
import SearchResults from "../widget/searchresults.js";
import Section from "../widget/section.js";
import CONSTANTS from "../constants.js";
function AssignPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(Section, {
    abstract: CONSTANTS.statuses[0]
  }, /* @__PURE__ */ h(SearchResults, {
    selector: {type: "user", status: CONSTANTS.statuses[0]}
  })), /* @__PURE__ */ h(Section, {
    abstract: CONSTANTS.statuses[1]
  }, /* @__PURE__ */ h(SearchResults, {
    selector: {type: "user", status: CONSTANTS.statuses[1]}
  })), /* @__PURE__ */ h(Section, {
    abstract: CONSTANTS.statuses[2]
  }, /* @__PURE__ */ h(SearchResults, {
    selector: {type: "user", status: CONSTANTS.statuses[1]}
  })), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(CallerList, null));
}
export default AssignPage;
