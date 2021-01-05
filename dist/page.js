import {h} from "../web_modules/preact.js";
import Section from "./section.js";
import Block from "./block.js";
import "./page.css.proxy.js";
function Page() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(Section, {
    abstract: "Zoom Links"
  }, /* @__PURE__ */ h("p", null, "Sacrament Meeting, Sunday School, Elder's Quorum, Relief Society, Self Reliance:"), /* @__PURE__ */ h(Block, null, /* @__PURE__ */ h("span", null, "Meeting ID: ", /* @__PURE__ */ h("a", {
    href: "https://us02web.zoom.us/j/83949872985?pwd=MFNJd0FqaWxZd0VhN1VMSWdhYU9udz09"
  }, "839 4987 2985")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "Passcode: 704698")), /* @__PURE__ */ h("p", null, "Institute and Home Evening:"), /* @__PURE__ */ h(Block, null, /* @__PURE__ */ h("span", null, "Meeting ID: ", /* @__PURE__ */ h("a", {
    href: "https://byui.zoom.us/j/6727612227"
  }, "672 761 2227")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "No passcode required"))), /* @__PURE__ */ h(Section, {
    abstract: "Schedule an Interview"
  }, /* @__PURE__ */ h(Section, {
    abstract: "Temple Recommend Interview"
  }, /* @__PURE__ */ h(Section, {
    abstract: "With Bishop"
  }, /* @__PURE__ */ h("p", null, "Use this link: ", /* @__PURE__ */ h("a", {
    href: "https://calendly.com/fwysabishop/temple-recommend-interview?month=2020-12&back=1"
  }, "Calendly link"))), /* @__PURE__ */ h(Section, {
    abstract: "With a Stake Presidency Member"
  }, /* @__PURE__ */ h("p", null, "Fill out this form: ", /* @__PURE__ */ h("a", {
    href: "https://farwestmissouristake.org/interview-request/"
  }, "Request an Interview Link")))), /* @__PURE__ */ h("p", null, "Need to talk with Bishop? ", /* @__PURE__ */ h("a", {
    href: "https://calendly.com/fwysabishop/visit?back=1&month=2020-12"
  }, "Schedule an interview."))), /* @__PURE__ */ h(Section, {
    abstract: "Family Home Evening Info"
  }, /* @__PURE__ */ h(Section, {
    abstract: "Cameron"
  }), /* @__PURE__ */ h(Section, {
    abstract: "Gallatin"
  }), /* @__PURE__ */ h(Section, {
    abstract: "Kearney"
  }), /* @__PURE__ */ h(Section, {
    abstract: "Maryville"
  }), /* @__PURE__ */ h(Section, {
    abstract: "Virtual"
  })));
}
export default Page;
