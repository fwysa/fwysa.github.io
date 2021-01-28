import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import CONSTANTS from "../constants.js";
import DB from "../db/db.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import Selection from "../element/selection.js";
import ButtonFunc from "../element/buttonfunc.js";
import NewNameBar from "../widget/newnamebar.js";
function AddNamesPage() {
  const [ward, setWard] = useState("");
  const [fheGroup, setFheGroup] = useState("");
  const [source, setSource] = useState(CONSTANTS.sources[0]);
  const [status, setStatus] = useState(CONSTANTS.statuses[0]);
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
        DB.addUser(n.name, () => {
          DB.updateRecord(n.name, "user", (rec) => {
            let change = {
              ...n,
              homeWard: ward,
              fheGroup,
              source,
              status
            };
            return {...rec, ...change};
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
  }, /* @__PURE__ */ h(SS, null, "Add Names"), /* @__PURE__ */ h("span", null, `First, enter in info shared by everyone you're adding, then click "Add Name" and enter in info for each individual.`)), /* @__PURE__ */ h("div", {
    className: "whitebackground common"
  }, /* @__PURE__ */ h(SS, null, "Common"), /* @__PURE__ */ h(HL, {
    label: "Home Ward:"
  }, /* @__PURE__ */ h(Selection, {
    value: ward,
    cb: setWard,
    options: CONSTANTS.homeWards
  })), /* @__PURE__ */ h(HL, {
    label: "HE Group:"
  }, /* @__PURE__ */ h(Selection, {
    value: fheGroup,
    cb: setFheGroup,
    options: CONSTANTS.fheGroups
  })), /* @__PURE__ */ h(HL, {
    label: "Source:"
  }, /* @__PURE__ */ h(Selection, {
    value: source,
    cb: setSource,
    options: CONSTANTS.sources
  })), /* @__PURE__ */ h(HL, {
    label: "Status:"
  }, /* @__PURE__ */ h(Selection, {
    value: status,
    cb: setStatus,
    options: CONSTANTS.statuses
  }))), /* @__PURE__ */ h("hr", null), formattedNames, /* @__PURE__ */ h(ButtonFunc, {
    cb: addNameHandler
  }, "Add Name"), /* @__PURE__ */ h(ButtonFunc, {
    cb: submitHandler
  }, "Submit"));
}
export default AddNamesPage;
