import {h, Fragment} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import CONSTANTS from "../constants.js";
import {useUserProperty, useNotes} from "../db/hooks.js";
import Selection from "../element/selection.js";
import Block from "../element/block.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import EditableCheckBox from "../element/editable/checkbox.js";
import EditableText from "../element/editable/text.js";
import EditableMultipleChoice from "../element/editable/multiplechoice.js";
export default function CallingForm(props) {
  const [action, setAction] = useState("");
  const [result, setResult] = useState("");
  const [currentNote, setCurrentNote] = useState("");
  const [newStatus, setNewStatus] = useState(props.current.status);
  const [currentStatus, setCurrentStatus] = useUserProperty(props.current.name, "status");
  const [, addNote] = useNotes(props.current.name);
  const submitHandler = () => {
    addNote(props.current.assignedCaller, currentNote, {
      metaSource: "callingform",
      actionTaken: action,
      result,
      oldStatus: currentStatus,
      newStatus
    });
    if (newStatus !== currentStatus) {
      setCurrentStatus(newStatus);
    }
    setAction("");
    setResult("");
    setCurrentNote("");
    setNewStatus("");
  };
  const updateAction = (v) => {
    setAction(v);
    setResult("");
    setNewStatus("");
  };
  const updateResult = (v) => {
    setResult(v);
    setNewStatus(props.current.status);
  };
  const resultChoices = CONSTANTS.communication.choiceMatrix[action].map((n) => {
    return CONSTANTS.communication.results[n];
  });
  const resultCode = CONSTANTS.communication.results.indexOf(result);
  let statusChoices = [];
  if (resultCode < 0) {
    console.log("INVALID RESULTCODE (this is normal)", resultCode);
  } else {
    statusChoices = CONSTANTS.communication.statusMatrix[resultCode].map((n) => {
      return CONSTANTS.statuses[n];
    });
  }
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("div", {
    className: "horizontal"
  }, /* @__PURE__ */ h(HL, {
    label: "Action Taken:"
  }, /* @__PURE__ */ h(Selection, {
    value: action,
    cb: updateAction,
    options: CONSTANTS.communication.contactMethods
  })), action !== "" ? /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h("span", {
    className: "padright"
  }), /* @__PURE__ */ h(HL, {
    label: "Result:"
  }, /* @__PURE__ */ h(Selection, {
    value: result,
    cb: updateResult,
    options: resultChoices
  }))) : null), result !== "" && statusChoices.length > 0 ? /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(SS, null, "Status"), statusChoices[0] === CONSTANTS.statuses[1] ? /* @__PURE__ */ h("span", {
    className: "smaller"
  }, "Keep as ", /* @__PURE__ */ h("strong", null, "assigned"), " until you've exhausted all forms of communication. Changing the status from", " ", /* @__PURE__ */ h("strong", null, "assigned"), " will remove", " ", /* @__PURE__ */ h("strong", null, props.current.name), " from your calling list.") : null, /* @__PURE__ */ h(Selection, {
    value: newStatus,
    cb: setNewStatus,
    options: statusChoices
  }), newStatus === CONSTANTS.statuses[2] || newStatus === CONSTANTS.statuses[7] ? /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(HL, {
    label: "Notify about FHE?"
  }, /* @__PURE__ */ h(EditableCheckBox, {
    show: true,
    name: props.current.name,
    property: "notifyHomeEvening"
  })), /* @__PURE__ */ h(HL, {
    label: "Notify about activities?"
  }, /* @__PURE__ */ h(EditableCheckBox, {
    show: true,
    name: props.current.name,
    property: "notifyWardActivity"
  })), /* @__PURE__ */ h(HL, {
    label: "Preferred Contact:"
  }, /* @__PURE__ */ h(EditableMultipleChoice, {
    name: props.current.name,
    property: "preferredContactType",
    show: true,
    options: CONSTANTS.contactMethods
  }), /* @__PURE__ */ h("span", {
    className: "padleft"
  }), /* @__PURE__ */ h(EditableText, {
    name: props.current.name,
    property: "preferredContactValue",
    show: true
  }))) : null) : null, result !== "" ? /* @__PURE__ */ h(Fragment, null, /* @__PURE__ */ h(SS, null, "Notes"), /* @__PURE__ */ h("textarea", {
    placeholder: "Enter note here...",
    value: currentNote,
    onChange: (e) => {
      setCurrentNote(e.target.value);
    }
  }), /* @__PURE__ */ h("button", {
    onClick: submitHandler
  }, "Submit form")) : null);
}
