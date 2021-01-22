import {h} from "../../web_modules/preact.js";
import {useSearch} from "../db/hooks.js";
import Bio from "./bio.js";
import Note from "./note.js";
export default function SearchResults(props) {
  const results = useSearch(props.selector);
  const formattedResults = results.map((r) => {
    if (r.type === "user") {
      return /* @__PURE__ */ h(Bio, {
        name: r.name
      });
    } else if (r.type === "note") {
      return /* @__PURE__ */ h(Note, {
        data: r
      });
    } else {
      console.log("Not a user", r);
    }
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground searchresults"
  }, formattedResults);
}
