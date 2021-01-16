import {h} from "../../web_modules/preact.js";
import ButtonLink from "../widget/buttonlink.js";
function LeaderPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "/"
  }, "Main Page"), /* @__PURE__ */ h(ButtonLink, {
    href: "/notes"
  }, "Notes"));
}
export default LeaderPage;
