import {h} from "../../web_modules/preact.js";
import {useUser} from "../db/hooks.js";
function TestPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("p", {
    className: "whitebackground"
  }, "You've stumbled upon the test page, burdened by centuries of dust. There's nothing to explore here though, just this box of text :("));
}
export default TestPage;
