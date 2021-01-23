import {h} from "../../web_modules/preact.js";
import {useSearch} from "../db/hooks.js";
import Bio from "./bio.js";
import Note from "./note.js";
export default function SearchResults(props) {
  const results = useSearch(props.selector);
  const formattedResults = results.map((r) => {
    let appended = "";
    if (props.customize !== void 0) {
      appended = props.customize(r);
    }
    if (r.type === "user") {
      return /* @__PURE__ */ h("div", {
        className: "whitebackground"
      }, /* @__PURE__ */ h(Bio, {
        name: r.name
      }), appended);
    } else if (r.type === "note") {
      return /* @__PURE__ */ h("div", {
        className: "whitebackground"
      }, /* @__PURE__ */ h(Note, {
        data: r
      }), /* @__PURE__ */ h("p", null, "FIXME: I'M A NOTE WITH AN EXTRA BACKGROUND"), appended);
    } else {
      console.log("Not a user or note", r);
    }
  });
  return /* @__PURE__ */ h("div", {
    className: "searchresults"
  }, formattedResults);
}
