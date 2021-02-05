import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import CONSTANTS from "../constants.js";
import {useList} from "../db/hooks.js";
import {
  sortListByName,
  IDToName,
  nameToID,
  mapIDToName
} from "../db/helper.js";
export default function SearchBar(props) {
  const initialGender = props.initialgender !== void 0 ? props.initialgender : "";
  const initialHomeWard = props.initialhomeward !== void 0 ? props.initialhomeward : "";
  const initialStatus = props.initialstatus !== void 0 ? props.initialstatus : "";
  const initialAssignedCaller = props.initialassignedcaller !== void 0 ? props.initialassignedcaller : "";
  const [callerIDs, ,] = useList(CONSTANTS.lists.callers);
  const [callers, setCallers] = useState([]);
  useEffect(() => {
    mapIDToName(callerIDs).then(sortListByName).then((r) => {
      setCallers(r);
    });
  }, [callerIDs]);
  const [gender, setGender] = useState(initialGender);
  const [homeWard, setHomeWard] = useState(initialHomeWard);
  const [status, setStatus] = useState(initialStatus);
  const [assignedCaller, setAssignedCaller] = useState(initialAssignedCaller);
  const [assignedCallerID, setAssignedCallerID] = useState("");
  useEffect(() => {
    nameToID(assignedCaller).then((r) => {
      setAssignedCallerID(r);
    });
  }, [assignedCaller]);
  const formatSelector = () => {
    let base = {
      type: "user"
    };
    if (gender !== "") {
      base.gender = gender;
    }
    if (homeWard !== "") {
      base.homeWard = homeWard;
    }
    if (status !== "") {
      base.status = status;
    }
    if (assignedCallerID !== "") {
      base.assignedCaller = assignedCallerID;
    }
    return base;
  };
  useEffect(() => {
    props.cb(formatSelector());
  }, [gender, homeWard, status, assignedCallerID]);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal nowrap"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", {
    className: "padright"
  }, "Filter ", /* @__PURE__ */ h("strong", null, "(", props.count, ")"), ":")), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt padleft padright"
  }, /* @__PURE__ */ h("span", null, "Gender"), /* @__PURE__ */ h(Selection, {
    value: gender,
    cb: setGender,
    options: CONSTANTS.genders,
    addblank: true,
    allowblank: true
  })), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt padright"
  }, /* @__PURE__ */ h("span", null, "Home Ward"), /* @__PURE__ */ h(Selection, {
    value: homeWard,
    cb: setHomeWard,
    options: CONSTANTS.homeWards,
    addblank: true,
    allowblank: true
  })), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt padright"
  }, /* @__PURE__ */ h("span", null, "Status"), /* @__PURE__ */ h(Selection, {
    value: status,
    cb: setStatus,
    options: CONSTANTS.statuses,
    addblank: true,
    allowblank: true
  })), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt"
  }, /* @__PURE__ */ h("span", null, "Fellowshipper"), /* @__PURE__ */ h(Selection, {
    value: assignedCaller,
    cb: setAssignedCaller,
    options: callers,
    addblank: true,
    allowblank: true
  })));
}
