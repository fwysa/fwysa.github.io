import {h} from "../../web_modules/preact.js";
import {useList, useUserProperty} from "../db/hooks.js";
import "./css/assignbox.css.proxy.js";
import CONSTANTS from "../constants.js";
import Selection from "../element/selection.js";
export default function AssignBox(props) {
  const [status, setStatus] = useUserProperty(props.name, "status");
  const [assignedCaller, setAssignedCaller] = useUserProperty(props.name, "assignedCaller");
  const [names, ,] = useList("callers");
  const assignHandler = () => {
    if (status === CONSTANTS.statuses[0]) {
      setStatus(CONSTANTS.statuses[1]);
    }
  };
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "assignbox"
  }, /* @__PURE__ */ h(Selection, {
    value: assignedCaller,
    cb: setAssignedCaller,
    options: names
  }), /* @__PURE__ */ h("button", {
    onClick: assignHandler
  }, "Assign")));
}
