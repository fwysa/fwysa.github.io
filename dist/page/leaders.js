import {h} from "../../web_modules/preact.js";
import ButtonLink from "../widget/buttonlink.js";
function LeaderPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "/"
  }, "Main Page"), /* @__PURE__ */ h(ButtonLink, {
    href: "/notes"
  }, "Info and Notes"), /* @__PURE__ */ h(ButtonLink, {
    href: "/addnames"
  }, "Bulk Add Names"), /* @__PURE__ */ h(ButtonLink, {
    href: "/assign"
  }, "Assign Names to Callers"), /* @__PURE__ */ h(ButtonLink, {
    href: "/calling"
  }, "Calling Dashboard"));
}
export default LeaderPage;
