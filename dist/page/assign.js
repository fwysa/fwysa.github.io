import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import AccessControl from "../widget/accesscontrol.js";
import List from "../widget/list.js";
import SearchResults from "../widget/searchresults.js";
import SearchBar from "../widget/searchbar.js";
import Section from "../element/section.js";
import AssignBox from "../widget/assignbox.js";
import Bio from "../widget/bio.js";
import Block from "../element/block.js";
import CONSTANTS from "../constants.js";
import {sortByName} from "../db/helper.js";
function AssignPage() {
  const [gender, setGender] = useState("");
  const [homeWard, setHomeWard] = useState("");
  const [count, setCount] = useState(0);
  const [selector, setSelector] = useState({type: "user"});
  const searchResultHandler = (r) => {
    if (r.type !== "user") {
      console.log("IF YOU'RE READING THIS, IT MEANS WE GOT A NOTE SOMEHOW?! Also, hi!", r);
      return "";
    }
    return /* @__PURE__ */ h(Section, {
      key: r._id,
      abstract: r.name
    }, /* @__PURE__ */ h(Bio, {
      id: r._id
    }), /* @__PURE__ */ h(AssignBox, {
      id: r._id
    }));
  };
  return /* @__PURE__ */ h(AccessControl, {
    allowed: "assign"
  }, /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(SearchBar, {
    initialstatus: CONSTANTS.statuses[0],
    cb: setSelector,
    count
  }), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(Block, null, /* @__PURE__ */ h("span", {
    className: "smaller"
  }, "* If you can't select the name of the person you want to assign the name to, scroll to the bottom and add it to the list of fellowshippers."))), /* @__PURE__ */ h(SearchResults, {
    selector,
    cb: searchResultHandler,
    countcb: setCount,
    sort: sortByName
  }), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(List, {
    label: "Fellowshippers (List of Callers):",
    list: CONSTANTS.lists.callers
  })));
}
export default AssignPage;
