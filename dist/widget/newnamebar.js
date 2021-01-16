import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import EditableText from "./editabletext.js";
import EditableMultipleChoice from "./editablemultiplechoice.js";
import CONSTANTS from "../constants.js";
export default function NewNameBar(props) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [individualPhone, setIndividualPhone] = useState("");
  const [individualEmail, setIndividualEmail] = useState("");
  const [householdPhone, setHouseholdPhone] = useState("");
  const [householdEmail, setHouseholdEmail] = useState("");
  useEffect(() => {
    let nArr = [...props.whole];
    nArr[props.ind] = {
      name,
      gender,
      contact: {
        individual: {
          phone: individualPhone,
          email: individualEmail
        },
        household: {
          phone: householdPhone,
          email: householdEmail
        }
      }
    };
    props.updatecb(nArr);
  }, [name, gender, individualPhone, individualEmail, householdPhone, householdEmail]);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground newnamebar"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(EditableText, {
    val: name,
    setcb: setName,
    show: true
  }, "Name:"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: gender,
    setcb: setGender,
    choices: CONSTANTS.genders,
    show: true
  }, " Gender:"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("p", null, "Individual"), /* @__PURE__ */ h(EditableText, {
    val: individualPhone,
    setcb: setIndividualPhone,
    show: true
  }, "Phone:"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    val: individualEmail,
    setcb: setIndividualEmail,
    show: true
  }, " Email:"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("p", null, "Household"), /* @__PURE__ */ h(EditableText, {
    val: householdPhone,
    setcb: setHouseholdPhone,
    show: true
  }, "Phone:"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableText, {
    val: householdEmail,
    setcb: setHouseholdEmail,
    show: true
  }, " Email:")));
}
