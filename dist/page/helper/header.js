import {h} from "../../../web_modules/preact.js";
import HeaderLogin from "../../widget/headerlogin.js";
import {redirect} from "../../db/helper.js";
import img_bg from "../../img/background.png.proxy.js";
import "./header.css.proxy.js";
export default function Header() {
  return /* @__PURE__ */ h("div", {
    className: "header"
  }, /* @__PURE__ */ h("div", {
    className: "logo"
  }, /* @__PURE__ */ h("a", {
    href: "/"
  }, /* @__PURE__ */ h("img", {
    src: img_bg
  }))), /* @__PURE__ */ h("div", {
    className: "onlyshowprint"
  }, /* @__PURE__ */ h("h1", null, "Far West YSA Outreach Report"), /* @__PURE__ */ h("div", {
    className: "horizontal flexcenter"
  }, /* @__PURE__ */ h("div", null), /* @__PURE__ */ h("span", null, "Dated: ", new Date().toLocaleDateString()), /* @__PURE__ */ h("div", null))), /* @__PURE__ */ h("div", {
    className: "onlyshowprint dummylogoright"
  }), /* @__PURE__ */ h("div", {
    className: "icons printnoshow"
  }, /* @__PURE__ */ h("button", {
    onClick: () => {
      redirect("leaders");
    }
  }, "Leaders"), /* @__PURE__ */ h("button", {
    onClick: () => {
      redirect("form");
    }
  }, "Form"), /* @__PURE__ */ h(HeaderLogin, null)));
}
