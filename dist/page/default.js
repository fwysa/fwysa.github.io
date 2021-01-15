import {h} from "../../web_modules/preact.js";
import Section from "../widget/section.js";
import Block from "../widget/block.js";
import EmbeddedDoc from "../widget/embedded_doc.js";
import "./helper/page.css.proxy.js";
function DefaultPage() {
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(Section, {
    abstract: "Zoom Links"
  }, /* @__PURE__ */ h("p", null, "Sacrament Meeting, Sunday School, Elder's Quorum, Relief Society, Home Evening, and Self Reliance:"), /* @__PURE__ */ h(Block, null, /* @__PURE__ */ h("span", null, "Meeting ID: ", /* @__PURE__ */ h("a", {
    href: "https://us02web.zoom.us/j/83949872985?pwd=MFNJd0FqaWxZd0VhN1VMSWdhYU9udz09"
  }, "839 4987 2985")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "Passcode: No passcode required")), /* @__PURE__ */ h("p", null, "Institute:"), /* @__PURE__ */ h(Block, null, /* @__PURE__ */ h("span", null, "Meeting ID: ", /* @__PURE__ */ h("a", {
    href: "https://byui.zoom.us/j/6727612227"
  }, "672 761 2227")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "No passcode required")), /* @__PURE__ */ h("p", null, "Ward Bulletin: ", /* @__PURE__ */ h("a", {
    href: "https://docs.google.com/document/d/1gQjsqxztvckqbMVCGPzMPUiBKqdorx-uD1ELMQeVZhU/edit"
  }, "Link"))), /* @__PURE__ */ h(Section, {
    abstract: "Schedule an Interview"
  }, /* @__PURE__ */ h("p", null, "Want to talk with Bishop? ", /* @__PURE__ */ h("a", {
    href: "https://calendly.com/fwysabishop/visit?back=1&month=2020-12"
  }, "Schedule a visit")), /* @__PURE__ */ h(Section, {
    abstract: "Temple Recommend Interview"
  }, /* @__PURE__ */ h(Section, {
    abstract: "With Bishop"
  }, /* @__PURE__ */ h("p", null, "Use this link: ", /* @__PURE__ */ h("a", {
    href: "https://calendly.com/fwysabishop/temple-recommend-interview?month=2020-12&back=1"
  }, "Calendly link"))), /* @__PURE__ */ h(Section, {
    abstract: "With a Stake Presidency Member"
  }, /* @__PURE__ */ h("p", null, "Fill out this form: ", /* @__PURE__ */ h("a", {
    href: "https://farwestmissouristake.org/interview-request/"
  }, "Request an Interview Link"))))), /* @__PURE__ */ h(Section, {
    abstract: "Family Home Evening Info"
  }, /* @__PURE__ */ h(Section, {
    abstract: "Cameron"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vQXWa6XY49byuvrsZdYVRcGRJy2USSNV57yoq6fx32dongeY997xoHKMnfLZW5TXRN3khWAcDFDm_S_/pub?embedded=true"
  })), /* @__PURE__ */ h(Section, {
    abstract: "Kearney"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vQtXuJiK-KBxynhfjc13rEduxAHcV4fcXqKMZmm0U_boMKKdov--AwcbMr1hj6XxZOKY5aBJgfDM7Qf/pub?embedded=true"
  })), /* @__PURE__ */ h(Section, {
    abstract: "Maryville"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vR5FqLon16N6MjhPxsSWHwjRnbTY0YBcMv-oaAH64D92eVcC8pV-Ug0Me1-yuJsdXnbW97OjU_K1p2o/pub?embedded=true"
  })), /* @__PURE__ */ h(Section, {
    abstract: "Gallatin"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vQa6sc0fUAlp8ochjXWXRMiMV_a5gZna3pfSWlDKvEOZ6JGQeZax708RZycCHw9YVwWNU5iIW71dS3p/pub?embedded=true"
  })), /* @__PURE__ */ h(Section, {
    abstract: "Virtual"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vTjx8C22yQY-st19rOoYv9lXK_XklxodDlsXzVja24NIfwVS5lzYhxNOB9ftY4Zzh6sDOFzQfcpNM6Z/pub?embedded=true"
  }))), /* @__PURE__ */ h(Section, {
    abstract: "Activities"
  }, /* @__PURE__ */ h(EmbeddedDoc, {
    url: "https://docs.google.com/document/d/e/2PACX-1vRauqGGUJLsFZXECix3Ff3dtv_QikViUugRjbWa0u-kg9CGY-b-mq5bPlylSWjZzBgPGG1PAg0ARlym/pub?embedded=true"
  })));
}
export default DefaultPage;
