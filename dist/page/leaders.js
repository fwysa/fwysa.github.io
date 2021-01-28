import {h} from "../../web_modules/preact.js";
import ButtonLink from "../element/buttonlink.js";
import SS from "../element/sectionsubtitle.js";
function LeaderPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "/notes"
  }, "YSA Info and Notes"), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Add Names"), /* @__PURE__ */ h(ButtonLink, {
    href: "/addnames"
  }, "Add Names"), /* @__PURE__ */ h(ButtonLink, {
    href: "/assign"
  }, "Assign Fellowshipper")), /* @__PURE__ */ h(ButtonLink, {
    href: "/calling"
  }, "Calling Dashboard"), /* @__PURE__ */ h(ButtonLink, {
    href: "/reports"
  }, "Reports"), /* @__PURE__ */ h(ButtonLink, {
    href: "/heleaders"
  }, "HE Group Leaders"));
}
export default LeaderPage;
