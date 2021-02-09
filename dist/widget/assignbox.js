import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import {useList, useProperty} from "../db/hooks.js";
import {mapIDToName, IDToName, nameToID} from "../db/helper.js";
import "./css/assignbox.css.proxy.js";
import CONSTANTS from "../constants.js";
import Selection from "../element/selection.js";
export default function AssignBox(props) {
  const [status, setStatus] = useProperty(props.id, "status");
  const [assignedCaller, setAssignedCaller] = useProperty(props.id, "assignedCaller");
  const [assignedCallerName, setAssignedCallerName] = useState("");
  useEffect(() => {
    IDToName(assignedCaller).then(setAssignedCallerName).catch(console.log);
  }, [assignedCaller]);
  const [callerIDs, ,] = useList(CONSTANTS.lists.callers);
  const [names, setNames] = useState([]);
  useEffect(() => {
    mapIDToName(callerIDs).then(setNames).catch(console.log);
  }, [callerIDs]);
  const assignHandler = () => {
    if (status === CONSTANTS.statuses[0]) {
      setStatus(CONSTANTS.statuses[1]);
    }
  };
  const setCallerHandler = (n) => {
    nameToID(n).then(setAssignedCaller).catch(console.log);
  };
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "assignbox"
  }, /* @__PURE__ */ h(Selection, {
    value: assignedCallerName,
    cb: setCallerHandler,
    options: names
  }), /* @__PURE__ */ h("button", {
    onClick: assignHandler
  }, "Assign")));
}
