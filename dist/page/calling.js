import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import {useCallers, useSearch} from "../db/hooks.js";
import {callScript, textScript} from "./helper/callscripts.js";
import Section from "../element/section.js";
import Selection from "../element/selection.js";
import Bio from "../widget/bio.js";
import SearchResults from "../widget/searchresults.js";
function CallingPage() {
  const [callers, ,] = useCallers();
  const [name, setName] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const search = useSearch({
    type: "user",
    assignedCaller: name
  });
  const assignedNames = search.map((n) => {
    return /* @__PURE__ */ h(Section, {
      abstract: n.name
    }, /* @__PURE__ */ h(Bio, {
      name: n.name
    }), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
      className: "whitebackground"
    }, /* @__PURE__ */ h("span", null, "Stuff here for actual calling / adding notes. If they contacted, have them set the preferred contact info for a person if they know it")), /* @__PURE__ */ h(Section, {
      abstract: "Phone Call / Voicemail"
    }, callScript), /* @__PURE__ */ h(Section, {
      abstract: "Text"
    }, textScript), /* @__PURE__ */ h(Section, {
      abstract: "Information for Call and Follow up Text / Email"
    }));
  });
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("span", null, "Select your name:\xA0"), /* @__PURE__ */ h(Selection, {
    value: name,
    cb: setName,
    options: callers
  })), name !== "" ? /* @__PURE__ */ h("div", null, assignedNames) : null);
}
export default CallingPage;
