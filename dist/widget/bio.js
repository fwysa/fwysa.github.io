import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import {useNames, useUserProperty} from "../db/hooks.js";
import expand_less from "./img/round_expand_less_black_18dp.png.proxy.js";
import expand_more from "./img/round_expand_more_black_18dp.png.proxy.js";
import create_icon from "./img/outline_create_black_18dp.png.proxy.js";
import save_icon from "./img/outline_save_black_18dp.png.proxy.js";
import EditableText from "./editabletext.js";
import EditableTextArea from "./editabletextarea.js";
import EditableCheckBox from "./editablecheckbox.js";
import EditableMultipleChoice from "./editablemultiplechoice.js";
import CONSTANTS from "../constants.js";
import "./bio.css.proxy.js";
export default function Bio(props) {
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const nameList = useNames();
  const showMoreClickHandler = () => {
    if (isEditing) {
      setIsEditing(false);
    }
    setShowMore(!showMore);
  };
  const editClickHandler = () => {
    setShowMore(!isEditing);
    setIsEditing(!isEditing);
  };
  const belowFold = /* @__PURE__ */ h("div", {
    className: "biobelowfold"
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "source",
    show: isEditing,
    options: CONSTANTS.sources
  }, /* @__PURE__ */ h("strong", null, "Source:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableCheckBox, {
    name: props.name,
    property: "notifiedFacebook",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Notified on Facebook?")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableTextArea, {
    name: props.name,
    property: "infotext",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Info:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    name: props.name,
    property: "individualPhone",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Individual Phone:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    name: props.name,
    property: "individualEmail",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Individual Email:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    name: props.name,
    property: "householdPhone",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Household Phone:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    name: props.name,
    property: "householdEmail",
    show: isEditing
  }, /* @__PURE__ */ h("strong", null, "Household Email:")));
  return /* @__PURE__ */ h("div", {
    className: "whitebackground bio"
  }, /* @__PURE__ */ h("div", {
    className: "bioabovefold"
  }, /* @__PURE__ */ h("div", {
    className: "bioimg",
    onClick: showMoreClickHandler
  }), /* @__PURE__ */ h("div", {
    className: "bioinfo"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfoupper"
  }, /* @__PURE__ */ h("span", null, props.name), /* @__PURE__ */ h("div", {
    className: "fullwidth biobuttons"
  }, /* @__PURE__ */ h("div", {
    className: "expandbutton",
    onClick: showMoreClickHandler
  }, /* @__PURE__ */ h("img", {
    src: showMore ? expand_less : expand_more
  })), /* @__PURE__ */ h("div", {
    className: "editbutton",
    onClick: editClickHandler
  }, /* @__PURE__ */ h("img", {
    src: isEditing ? save_icon : create_icon
  })))), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "bioinfolower"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfostatus"
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "status",
    show: isEditing,
    options: CONSTANTS.statuses
  }, /* @__PURE__ */ h("strong", null, "Status:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "assignedCaller",
    show: isEditing,
    options: nameList
  }, /* @__PURE__ */ h("strong", null, "Assigned Caller:"))), /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "gender",
    show: isEditing,
    options: CONSTANTS.genders
  }, /* @__PURE__ */ h("strong", null, "Gender:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "fheGroup",
    show: isEditing,
    options: CONSTANTS.fheGroups
  }, /* @__PURE__ */ h("strong", null, "Home Evening Group:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "homeWard",
    show: isEditing,
    options: CONSTANTS.homeWards
  }, /* @__PURE__ */ h("strong", null, "Home Ward:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.name,
    property: "preferredContactType",
    show: isEditing,
    options: CONSTANTS.contactMethods
  }, /* @__PURE__ */ h("strong", null, "Preferred Contact:")), /* @__PURE__ */ h(EditableText, {
    name: props.name,
    property: "preferredContactValue",
    show: isEditing
  }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableCheckBox, {
    name: props.name,
    property: "notifyHomeEvening",
    show: isEditing
  }, "Notify: FHE?"), /* @__PURE__ */ h(EditableCheckBox, {
    name: props.name,
    property: "notifyWardActivity",
    show: isEditing
  }, " ", "Activities?")))), showMore ? /* @__PURE__ */ h("hr", null) : null, showMore ? belowFold : null);
}
