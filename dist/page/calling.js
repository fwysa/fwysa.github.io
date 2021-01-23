import {h} from "../../web_modules/preact.js";
import {useUser, useNotes, useUserProperty} from "../db/hooks.js";
function CallingPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("p", {
    className: "whitebackground"
  }, "CallingPage"));
}
export default CallingPage;
