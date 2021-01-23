import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import {useCallers} from "../db/hooks.js";
import Selection from "../widget/selection.js";
import SearchResults from "../widget/searchresults.js";
function CallingPage() {
  const [callers, ,] = useCallers();
  const [name, setName] = useState("");
  const customizeHandler = (r) => {
    return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("span", null, "Insert calling stuff here"));
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("span", null, "Select your name:\xA0"), /* @__PURE__ */ h(Selection, {
    value: name,
    cb: setName,
    options: callers
  })), name !== "" ? /* @__PURE__ */ h(SearchResults, {
    selector: {type: "user", assignedCaller: name},
    customize: customizeHandler
  }) : null);
}
export default CallingPage;
