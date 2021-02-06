import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import CONSTANTS from "../constants.js";
import {useNames} from "../db/hooks.js";
import {genDocBase, nameToID} from "../db/helper.js";
import DB from "../db/db.js";
function TempGenAuthPage() {
  const names = useNames();
  const [curName, setCurName] = useState("");
  const [curID, setCurID] = useState("");
  const [curRole, setCurRole] = useState("");
  const [result, setResult] = useState("");
  useEffect(() => {
    if (curName !== "") {
      nameToID(curName).then(setCurID).catch(console.log);
    }
  }, [curName]);
  const generateHandler = () => {
    console.log("FIXME add admin verification");
    let base = genDocBase("pendingauth");
    base.role = curRole;
    base.userID = curID;
    DB.genCode().then((r) => {
      base.code = r;
      console.log(base);
      setResult(base);
      return DB.put(base);
    }).catch(console.log);
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(Selection, {
    value: curName,
    cb: setCurName,
    options: names
  }), /* @__PURE__ */ h(Selection, {
    value: curRole,
    cb: setCurRole,
    options: CONSTANTS.authorizationRoles
  }), /* @__PURE__ */ h("button", {
    onClick: generateHandler
  }, "Generate Code"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("span", null, result.code)));
}
export default TempGenAuthPage;
