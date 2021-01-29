import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import {useCallers} from "../db/hooks.js";
import {callScript, textScript} from "./helper/callscripts.js";
import Section from "../element/section.js";
import HL from "../element/horizontallabel.js";
import Selection from "../element/selection.js";
import Bio from "../widget/bio.js";
import SearchResults from "../widget/searchresults.js";
import CONSTANTS from "../constants.js";
function CallingPage() {
  const [callers, ,] = useCallers();
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  const selector = {
    type: "user",
    assignedCaller: name,
    status: CONSTANTS.statuses[1]
  };
  const formatName = (n) => {
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
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h(HL, {
    label: "Select your name:"
  }, /* @__PURE__ */ h(Selection, {
    value: name,
    cb: setName,
    options: callers
  }), name !== "" ? /* @__PURE__ */ h("span", {
    className: "padleft"
  }, /* @__PURE__ */ h("strong", null, "(", count, ")")) : null)), name !== "" ? /* @__PURE__ */ h(SearchResults, {
    selector,
    cb: formatName,
    countcb: setCount
  }) : null);
}
export default CallingPage;
