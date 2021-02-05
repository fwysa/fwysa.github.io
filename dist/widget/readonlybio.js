import {h} from "../../web_modules/preact.js";
import HL from "../element/horizontallabel.js";
import "./css/bio.css.proxy.js";
export default function ReadOnlyBio(props) {
  return /* @__PURE__ */ h("div", {
    className: "bio"
  }, /* @__PURE__ */ h("div", {
    className: "bioabovefold"
  }, /* @__PURE__ */ h("div", {
    className: "bioupper"
  }, /* @__PURE__ */ h("div", {
    className: "bioimg"
  }), /* @__PURE__ */ h("div", {
    className: "bioinfo"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfoupper"
  }, /* @__PURE__ */ h("span", null, props.user.name)), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "smaller bioinfolower"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfostatus"
  }, /* @__PURE__ */ h("div", {
    className: "bionotify horizontal"
  }, /* @__PURE__ */ h(HL, {
    label: "Status:"
  }, props.user.status), /* @__PURE__ */ h("div", {
    className: "padleft horizontal"
  }, /* @__PURE__ */ h(HL, {
    label: "HE?"
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    checked: props.user.notifyHomeEvening
  })), /* @__PURE__ */ h(HL, {
    label: "Activities?"
  }, /* @__PURE__ */ h("input", {
    type: "checkbox",
    checked: props.user.notifyWardActivity
  })))), /* @__PURE__ */ h(HL, {
    label: "Assigned Fellowshipper:"
  }, props.user.assignedCaller)), /* @__PURE__ */ h(HL, {
    label: "Gender:"
  }, props.user.gender), /* @__PURE__ */ h(HL, {
    label: "Home Evening Group:"
  }, props.user.fheGroup), /* @__PURE__ */ h(HL, {
    label: "Home Ward:"
  }, props.user.homeWard), /* @__PURE__ */ h(HL, {
    label: "Preferred Contact:"
  }, props.user.preferredContactType, /* @__PURE__ */ h("span", {
    className: "padleft"
  }), props.user.preferredContactValue)))), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", null, "Info:"), /* @__PURE__ */ h("textarea", {
    value: props.user.infotext
  }))));
}
