import {h} from "../../web_modules/preact.js";
import {useSearch} from "../db/hooks.js";
export default function SearchResults(props) {
  const results = useSearch(props.selector);
  if (props.countcb !== void 0) {
    props.countcb(results.length);
  }
  const formattedResults = results.map((r) => {
    return props.cb(r);
  });
  return /* @__PURE__ */ h("div", {
    className: "searchresults"
  }, formattedResults);
}
