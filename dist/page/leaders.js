import {h} from "../../web_modules/preact.js";
import ButtonLink from "../element/buttonlink.js";
import SS from "../element/sectionsubtitle.js";
import Section from "../element/section.js";
import FakeLink from "../element/fakelink.js";
function LeaderPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "/notes"
  }, "YSA Info"), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Relief Society and Elders Quorum"), /* @__PURE__ */ h(ButtonLink, {
    href: "/addnames"
  }, "Add Names"), /* @__PURE__ */ h(ButtonLink, {
    href: "/assign"
  }, "Assign Fellowshippers"), /* @__PURE__ */ h(ButtonLink, {
    href: "/reports"
  }, "Reports")), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Home Evening Group Leaders"), /* @__PURE__ */ h(ButtonLink, {
    href: "/heleaders"
  }, "HE Groups"), /* @__PURE__ */ h(Section, {
    abstract: /* @__PURE__ */ h(FakeLink, null, "Blurbs"),
    centered: true
  }, /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/1YFIrhwQA3CBK5F70_A8JudSFDbrTzlEJoZE0JaXlBc0/edit?usp=sharing"
  }, "Cameron"), /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/15NTOf7GAfBy-7ygyhagohJTg_5H8td380m-uCtZta1E/edit?usp=sharing"
  }, "Maryville"), /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/1rmrw1_qJfiF6Q8aHo__JFjzWQa15ZMIYpL89_KDELr8/edit?usp=sharing"
  }, "Gallatin"), /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/1ndaF8FSBP5WtTzGKL3Mfmhba44bafvgLUcVgsG9lOYU/edit?usp=sharing"
  }, "Kearney"), /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/1NAKrnWUAsRouiRbLsP2rammYsL_UT8I7VvCOqaTFfSs/edit?usp=sharing"
  }, "Virtual"))), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Fellowshippers"), /* @__PURE__ */ h(ButtonLink, {
    href: "/calling"
  }, "Calling Dashboard")), /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Activities and Facebook"), /* @__PURE__ */ h(ButtonLink, {
    href: "/"
  }, "Activity Group"), /* @__PURE__ */ h(ButtonLink, {
    href: "https://docs.google.com/document/d/1H2Bk0TcUIcdA-m5u6N8HRbGFK7e0kXc8hKTUmu4lLnQ/edit?usp=sharing"
  }, "Activity Blurb"), /* @__PURE__ */ h(ButtonLink, {
    href: "/"
  }, "Facebook Group")));
}
export default LeaderPage;
