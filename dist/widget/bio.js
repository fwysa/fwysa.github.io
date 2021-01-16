import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import expand_less from "./img/round_expand_less_black_18dp.png.proxy.js";
import expand_more from "./img/round_expand_more_black_18dp.png.proxy.js";
import create_icon from "./img/outline_create_black_18dp.png.proxy.js";
import save_icon from "./img/outline_save_black_18dp.png.proxy.js";
import EditableText from "./editabletext.js";
import EditableCheckBox from "./editablecheckbox.js";
import EditableMultipleChoice from "./editablemultiplechoice.js";
import CONSTANTS from "../constants.js";
import "./bio.css.proxy.js";
export default function Bio(props) {
  const [showMore, setShowMore] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [gender, setGender] = useState(props.data.info.gender);
  const [status, setStatus] = useState(props.data.info.status);
  const [homeEveningGroup, setHomeEveningGroup] = useState(props.data.info.fheGroup);
  const [homeWard, setHomeWard] = useState(props.data.info.homeWard);
  const [preferredContactType, setPreferredContactType] = useState(props.data.contact.preferred.type);
  const [preferredContactValue, setPreferredContactValue] = useState(props.data.contact.preferred.value);
  const [notifyFHE, setNotifyFHE] = useState(props.data.contact.notify.homeEvening);
  const [notifyActivities, setNotifyActivities] = useState(props.data.contact.notify.wardActivity);
  const showMoreClickHandler = () => {
    if (isEditing) {
      saveEditedUser();
      setIsEditing(false);
    }
    setShowMore(!showMore);
  };
  const editClickHandler = () => {
    if (!isEditing) {
      setShowMore(true);
    } else {
      saveEditedUser();
    }
    setIsEditing(!isEditing);
  };
  const saveEditedUser = () => {
    console.log("Saving edited user");
    let co = props.data;
    co.info.gender = gender;
    co.info.status = status;
    co.info.fheGroup = homeEveningGroup;
    co.info.homeWard = homeWard;
    co.contact.preferred.type = preferredContactType;
    co.contact.preferred.value = preferredContactValue;
    co.contact.notify.homeEvening = notifyFHE;
    co.contact.notify.wardActivity = notifyActivities;
    props.updateusercb(co, (res) => {
      console.log("Updated user", res);
    });
  };
  const belowFold = /* @__PURE__ */ h("div", {
    className: "biobelowfold"
  });
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
  }, /* @__PURE__ */ h("span", null, props.data.name), /* @__PURE__ */ h("div", {
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
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    val: gender,
    setcb: setGender,
    show: isEditing,
    choices: CONSTANTS.genders
  }, /* @__PURE__ */ h("strong", null, "Gender:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: status,
    setcb: setStatus,
    show: isEditing,
    choices: CONSTANTS.statuses
  }, /* @__PURE__ */ h("strong", null, "Status:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: homeEveningGroup,
    setcb: setHomeEveningGroup,
    show: isEditing,
    choices: CONSTANTS.fheGroups
  }, /* @__PURE__ */ h("strong", null, "Home Evening Group:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: homeWard,
    setcb: setHomeWard,
    show: isEditing,
    choices: CONSTANTS.homeWards
  }, /* @__PURE__ */ h("strong", null, "Home Ward:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: preferredContactType,
    setcb: setPreferredContactType,
    show: isEditing,
    choices: CONSTANTS.contactMethods
  }, /* @__PURE__ */ h("strong", null, "Preferred Contact:")), /* @__PURE__ */ h(EditableText, {
    val: preferredContactValue,
    setcb: setPreferredContactValue,
    show: isEditing
  }), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableCheckBox, {
    val: notifyFHE,
    setcb: setNotifyFHE,
    show: isEditing
  }, "Notify: FHE?"), /* @__PURE__ */ h(EditableCheckBox, {
    val: notifyActivities,
    setcb: setNotifyActivities,
    show: isEditing
  }, " Activities?")))), showMore ? /* @__PURE__ */ h("hr", null) : null, showMore ? belowFold : null);
}
