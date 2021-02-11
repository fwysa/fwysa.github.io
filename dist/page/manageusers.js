import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import Selection from "../element/selection.js";
import SearchResults from "../widget/searchresults.js";
import AuthShow from "../widget/authshow.js";
import PendingAuthShow from "../widget/pendingauthshow.js";
import CONSTANTS from "../constants.js";
import {useNames} from "../db/hooks.js";
import {genDocBase, nameToID} from "../db/helper.js";
import DB from "../db/db.js";
function ManageUsersPage() {
  const [userCount, setUserCount] = useState(null);
  const [codeCount, setCodeCount] = useState(null);
  const userShow = userCount !== null ? /* @__PURE__ */ h("span", null, "(", userCount, ")") : null;
  const codeShow = codeCount !== null ? /* @__PURE__ */ h("span", null, "(", codeCount, ")") : null;
  const userSelector = {
    type: "auth"
  };
  const codeSelector = {
    type: "pendingauth"
  };
  const listUsers = (a) => {
    return /* @__PURE__ */ h(AuthShow, {
      val: a
    });
  };
  const listCodes = (p) => {
    return /* @__PURE__ */ h(PendingAuthShow, {
      val: p
    });
  };
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
  }, /* @__PURE__ */ h(SS, null, "Current Users: ", userShow), /* @__PURE__ */ h(SearchResults, {
    selector: userSelector,
    cb: listUsers,
    countcb: setUserCount
  })), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Generate a new code:"), /* @__PURE__ */ h(HL, {
    label: "Name:"
  }, /* @__PURE__ */ h(Selection, {
    value: curName,
    cb: setCurName,
    options: names
  })), /* @__PURE__ */ h(HL, {
    label: "Role:"
  }, /* @__PURE__ */ h(Selection, {
    value: curRole,
    cb: setCurRole,
    options: CONSTANTS.roles
  })), /* @__PURE__ */ h("button", {
    onClick: generateHandler
  }, "Generate Code"), result !== "" ? /* @__PURE__ */ h("hr", null) : null, /* @__PURE__ */ h("span", null, result.code)), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Pending Codes: ", codeShow), /* @__PURE__ */ h(SearchResults, {
    selector: codeSelector,
    cb: listCodes,
    countcb: setCodeCount
  })));
}
export default ManageUsersPage;
