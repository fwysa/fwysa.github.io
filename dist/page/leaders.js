import {h} from "../../web_modules/preact.js";
import ButtonLink from "../element/buttonlink.js";
function LeaderPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "/notes"
  }, "YSA Info and Notes"), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h("strong", null, "Add Names"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(ButtonLink, {
    href: "/addnames"
  }, "Add Names"), /* @__PURE__ */ h(ButtonLink, {
    href: "/assign"
  }, "Assign Fellowshipper")), /* @__PURE__ */ h(ButtonLink, {
    href: "/calling"
  }, "Calling Dashboard"));
}
export default LeaderPage;
