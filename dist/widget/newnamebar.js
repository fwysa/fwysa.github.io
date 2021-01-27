import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
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
      individualPhone,
      individualEmail,
      householdPhone,
      householdEmail
    };
    props.updatecb(nArr);
  }, [
    name,
    gender,
    individualPhone,
    individualEmail,
    householdPhone,
    householdEmail
  ]);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground newnamebar"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h(HL, {
    label: "Name:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: name,
    onChange: (e) => {
      setName(e.target.value);
    }
  })), /* @__PURE__ */ h(HL, {
    label: "Gender:"
  }, /* @__PURE__ */ h(Selection, {
    value: gender,
    cb: setGender,
    options: CONSTANTS.genders
  })), /* @__PURE__ */ h(SS, null, "Individual"), /* @__PURE__ */ h(HL, {
    label: "Phone:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: individualPhone,
    onChange: (e) => {
      setIndividualPhone(e.target.value);
    }
  })), /* @__PURE__ */ h(HL, {
    label: "Email:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: individualEmail,
    onChange: (e) => {
      setIndividualEmail(e.target.value);
    }
  })), /* @__PURE__ */ h(SS, null, "Household"), /* @__PURE__ */ h(HL, {
    label: "Phone:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: householdPhone,
    onChange: (e) => {
      setHouseholdPhone(e.target.value);
    }
  })), /* @__PURE__ */ h(HL, {
    label: "Email:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: householdEmail,
    onChange: (e) => {
      setHouseholdEmail(e.target.value);
    }
  }))));
}
