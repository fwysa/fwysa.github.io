import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import db from "../internal/db.js";
import NameList from "../widget/namelist.js";
function AssignPage() {
  const [callerNames, setCallerNames] = useState([]);
  useEffect(() => {
    db.getCallers((list) => {
      setCallerNames(list);
    });
  }, []);
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("p", {
    className: "whitebackground"
  }, "Callers"), /* @__PURE__ */ h(NameList, {
    names: callerNames,
    addcb: console.log,
    removecb: console.log
  }));
}
export default AssignPage;
