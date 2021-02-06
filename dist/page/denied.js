import {h} from "../../web_modules/preact.js";
import FakeLink from "../element/fakelink.js";
import {redirect} from "../db/helper.js";
function DeniedPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h("span", null, "Denied. You don't have access to this page.", " ", /* @__PURE__ */ h("span", {
    onClick: () => {
      redirect("");
    }
  }, /* @__PURE__ */ h(FakeLink, null, "Click here")), " ", "to go to the home page.")));
}
export default DeniedPage;
