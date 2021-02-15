import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import AccessControl from "../widget/accesscontrol.js";
import Section from "../element/section.js";
import Selection from "../element/selection.js";
import SearchBar from "../widget/searchbar.js";
import SearchResults from "../widget/searchresults.js";
import WholeUserInfo from "../widget/wholeuserinfo.js";
import {useNotes} from "../db/hooks.js";
import {sortByName} from "../db/helper.js";
function NotePage() {
  const [count, setCount] = useState(0);
  const [selector, setSelector] = useState({type: "user"});
  const updateSelector = (s) => {
    setSelector(s);
    console.log("selector now", s);
  };
  const listUsers = (m) => {
    if (m.type !== "user") {
      console.log("Got a not user?!", m);
      return "";
    }
    return /* @__PURE__ */ h(Section, {
      key: m._id,
      abstract: m.name
    }, /* @__PURE__ */ h(WholeUserInfo, {
      id: m._id
    }));
  };
  return /* @__PURE__ */ h(AccessControl, {
    allowed: "notes"
  }, /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(SearchBar, {
    count,
    cb: updateSelector
  }), /* @__PURE__ */ h(SearchResults, {
    selector,
    cb: listUsers,
    countcb: setCount,
    sort: sortByName
  })));
}
export default NotePage;
