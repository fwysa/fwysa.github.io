import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import CONSTANTS from "../constants.js";
import db from "../internal/db.js";
import EditableMultipleChoice from "../widget/editablemultiplechoice.js";
import ButtonFunc from "../widget/buttonfunc.js";
import NewNameBar from "../widget/newnamebar.js";
function AddNamesPage() {
  const [ward, setWard] = useState("");
  const [fheGroup, setFheGroup] = useState("");
  const [names, setNames] = useState([]);
  const addNameHandler = () => {
    const updateArray = [...names, {}];
    setNames(updateArray);
  };
  const updateNameHandler = (n) => {
    console.log("UPDATING NAMES FROM", names, " TO ", n);
    setNames(n);
  };
  const formattedNames = names.map((n, ind) => {
    console.log("FORMATTING names");
    return /* @__PURE__ */ h(NewNameBar, {
      whole: names,
      updatecb: updateNameHandler,
      ind
    });
  });
  const submitHandler = () => {
    console.log("SUBMIT", names);
    names.forEach((n) => {
      if (n.name !== "") {
        console.log(n.name);
        db.addUser(n.name, () => {
          db.updateDoc(n.name, "user", (us) => {
            console.log("UPDATE USER", us);
            us.info = {
              ...us.info,
              fheGroup,
              homeWard: ward,
              gender: n.gender
            };
            us.contact = {
              ...us.contact,
              ...n.contact
            };
            return us;
          });
        });
      }
    });
    setNames([]);
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h("span", null, "Add Names")), /* @__PURE__ */ h("div", {
    className: "whitebackground common"
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    val: ward,
    setcb: setWard,
    show: true,
    choices: CONSTANTS.homeWards
  }, /* @__PURE__ */ h("strong", null, "Home Ward:")), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h(EditableMultipleChoice, {
    val: fheGroup,
    setcb: setFheGroup,
    show: true,
    choices: CONSTANTS.fheGroups
  }, /* @__PURE__ */ h("strong", null, "HE Group:"))), /* @__PURE__ */ h("hr", null), formattedNames, /* @__PURE__ */ h(ButtonFunc, {
    cb: addNameHandler
  }, "Add Name"), /* @__PURE__ */ h(ButtonFunc, {
    cb: submitHandler
  }, "Submit"));
}
export default AddNamesPage;
