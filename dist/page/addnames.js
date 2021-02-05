import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import CONSTANTS from "../constants.js";
import DB from "../db/db.js";
import {
  EMPTY_USER_TEMPLATE,
  genDocBase,
  applyChangeset
} from "../db/helper.js";
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
  const [ids, setIDs] = useState([]);
  const addNameHandler = () => {
    const base = applyChangeset(applyChangeset(genDocBase("user"), EMPTY_USER_TEMPLATE), {
      homeWard: ward,
      fheGroup,
      source,
      status,
      name: "Name here"
    });
    DB.put(base);
    const updateArray = [...ids, base._id];
    setIDs(updateArray);
  };
  const formattedNames = ids.map((n) => {
    console.log("FORMATTING names", n);
    return /* @__PURE__ */ h(NewNameBar, {
      id: n
    });
  });
  const submitHandler = () => {
    console.log("SUBMIT", ids);
    const curURL = window.location.href;
    const newURL = curURL.substring(0, curURL.indexOf("addnames")) + "leaders";
    setIDs([]);
    console.log("Redirect may be hacky", newURL);
    window.location.href = newURL;
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Add Names"), /* @__PURE__ */ h("span", null, `Enter "Common Info" shared by everyone you're adding, then click "Add Name" and enter in info for each individual. Click "Submit" to save.`)), /* @__PURE__ */ h("div", {
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
    options: CONSTANTS.sources,
    addblank: true,
    allowblank: true
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
