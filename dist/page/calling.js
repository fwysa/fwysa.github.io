import {h} from "../../web_modules/preact.js";
import {useEffect, useState} from "../../web_modules/preact/hooks.js";
import {useList} from "../db/hooks.js";
import {sortByName, nameToID, mapIDToName} from "../db/helper.js";
import {callScript, textScript} from "./helper/callscripts.js";
import Section from "../element/section.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import Selection from "../element/selection.js";
import Bio from "../widget/bio.js";
import WholeUserInfo from "../widget/wholeuserinfo.js";
import SearchResults from "../widget/searchresults.js";
import FHELeaderInfoBox from "../widget/fheleaderinfobox.js";
import CallingForm from "../widget/callingform.js";
import CONSTANTS from "../constants.js";
function CallingPage() {
  const [callerIDs, ,] = useList(CONSTANTS.lists.callers);
  const [callers, setCallers] = useState([]);
  const [status, setStatus] = useState(CONSTANTS.statuses[1]);
  const [selector, setSelector] = useState({
    type: "user",
    status,
    assignedCaller: "NONEXISTENT"
  });
  useEffect(() => {
    if (callerIDs.length > 0) {
      mapIDToName(callerIDs).then((r) => {
        setCallers(r);
      });
    }
  }, [callerIDs]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [selectedName, setSelectedName] = useState("");
  useEffect(() => {
    nameToID(name).then((r) => {
      setSelector({...selector, assignedCaller: r});
    });
  }, [name]);
  useEffect(() => {
    if (status === "") {
      delete selector.status;
      setSelector({...selector});
    } else {
      setSelector({...selector, status});
    }
  }, [status]);
  const formatName = (n) => {
    return /* @__PURE__ */ h(Section, {
      key: n._id,
      abstract: n.name
    }, /* @__PURE__ */ h(WholeUserInfo, {
      id: n._id,
      hideadd: true,
      extrainfo: true
    }), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
      className: "whitebackground highlight"
    }, /* @__PURE__ */ h(CallingForm, {
      current: n
    })), /* @__PURE__ */ h(Section, {
      abstract: "Phone Call / Voicemail"
    }, callScript), /* @__PURE__ */ h(Section, {
      abstract: "Text"
    }, textScript), /* @__PURE__ */ h(Section, {
      abstract: "Information for Call and Follow up Text / Email"
    }, /* @__PURE__ */ h(SS, null, "Links"), /* @__PURE__ */ h("span", null, "Link to website:", " ", /* @__PURE__ */ h("a", {
      href: "https://fwysa.github.io"
    }, "https://fwysa.github.io")), /* @__PURE__ */ h("span", null, "Link to Facebook:", " ", /* @__PURE__ */ h("a", {
      href: "https://www.facebook.com/groups/1281844478535182"
    }, "Far West Missouri Stake YSA")), /* @__PURE__ */ h(SS, null, "HE Group Leaders"), /* @__PURE__ */ h(FHELeaderInfoBox, {
      current: n
    })));
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
  }, /* @__PURE__ */ h("strong", null, "(", count, ")")) : null), /* @__PURE__ */ h("span", {
    className: "padleft"
  }), /* @__PURE__ */ h(HL, {
    label: "Select a status:"
  }, /* @__PURE__ */ h(Selection, {
    value: status,
    cb: setStatus,
    options: CONSTANTS.statuses,
    addblank: true,
    allowblank: true
  }))), name !== "" ? /* @__PURE__ */ h(SearchResults, {
    sort: sortByName,
    selector,
    cb: formatName,
    countcb: setCount
  }) : null);
}
export default CallingPage;
