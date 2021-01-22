import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import CallerList from "../widget/callerlist.js";
import SearchResults from "../widget/searchresults.js";
function AssignPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(SearchResults, {
    selector: {name: "Kian Musser"}
  }), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(CallerList, null));
}
export default AssignPage;
