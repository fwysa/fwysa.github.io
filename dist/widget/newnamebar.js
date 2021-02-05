import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import CONSTANTS from "../constants.js";
import NoteBar from "./notebar.js";
import EditableText from "../element/editable/text.js";
import EditableTextArea from "../element/editable/textarea.js";
import EditableMultipleChoice from "../element/editable/multiplechoice.js";
export default function NewNameBar(props) {
  return /* @__PURE__ */ h("div", {
    className: "whitebackground newnamebar"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(HL, {
    label: "Name:"
  }, /* @__PURE__ */ h(EditableText, {
    id: props.id,
    property: "name",
    show: true
  })), /* @__PURE__ */ h(HL, {
    label: "Gender:"
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    id: props.id,
    property: "gender",
    show: true,
    options: CONSTANTS.genders
  })), /* @__PURE__ */ h(SS, null, "Individual"), /* @__PURE__ */ h(HL, {
    label: "Phone:"
  }, /* @__PURE__ */ h(EditableText, {
    id: props.id,
    property: "individualPhone",
    show: true
  })), /* @__PURE__ */ h(HL, {
    label: "Email:"
  }, /* @__PURE__ */ h(EditableText, {
    id: props.id,
    property: "individualEmail",
    show: true
  })), /* @__PURE__ */ h(SS, null, "Household"), /* @__PURE__ */ h(HL, {
    label: "Phone:"
  }, /* @__PURE__ */ h(EditableText, {
    id: props.id,
    property: "householdPhone",
    show: true
  })), /* @__PURE__ */ h(HL, {
    label: "Email:"
  }, /* @__PURE__ */ h(EditableText, {
    id: props.id,
    property: "householdEmail",
    show: true
  })), /* @__PURE__ */ h(SS, null, "Info"), /* @__PURE__ */ h("span", null, "Info:"), /* @__PURE__ */ h(EditableTextArea, {
    id: props.id,
    property: "infotext",
    show: true
  }), /* @__PURE__ */ h(NoteBar, {
    id: props.id,
    nobg: true
  })));
}
