import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import DB from "../db/db.js";
import {redirect} from "../db/helper.js";
import {useLogin} from "../db/hooks.js";
export default function HeaderLink(props) {
  const loginInfo = useLogin();
  const label = loginInfo !== void 0 ? "Logout" : "Login";
  const clickHandler = () => {
    if (loginInfo === void 0) {
      redirect("login");
    } else {
      DB.logout();
      redirect("");
    }
  };
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("button", {
    onClick: clickHandler
  }, label));
}
