import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import Selection from "../element/selection.js";
import SearchBar from "../widget/searchbar.js";
import SearchResults from "../widget/searchresults.js";
import ReadOnlyBio from "../widget/readonlybio.js";
import NoteBar from "../widget/notebar.js";
import {sortByName} from "../db/helper.js";
function ReportPage() {
  const [count, setCount] = useState("");
  const [selector, setSelector] = useState({type: "user"});
  console.log("SELECTOR NOW", selector);
  const formatUser = (u) => {
    console.log("FORMAT USER", u);
    return /* @__PURE__ */ h("div", {
      className: "whitebackground nopagebreak"
    }, /* @__PURE__ */ h(ReadOnlyBio, {
      user: u
    }), /* @__PURE__ */ h("span", null, "Notes:"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(NoteBar, {
      id: u._id,
      hideadd: true
    }));
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "printnoshow"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal firstgrow"
  }, /* @__PURE__ */ h(SearchBar, {
    cb: setSelector,
    count
  }), /* @__PURE__ */ h("button", {
    className: "bigpadded",
    onClick: () => {
      window.print();
    }
  }, "Print"))), /* @__PURE__ */ h(SearchResults, {
    sort: sortByName,
    selector,
    cb: formatUser,
    countcb: setCount
  }));
}
export default ReportPage;
