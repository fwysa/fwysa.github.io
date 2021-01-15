import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
export default function AddUserBar(props) {
  const [author, setAuthor] = useState("");
  const [noteText, setNoteText] = useState("");
  const setNoteHandler = (e) => {
    setNoteText(e.target.value);
  };
  const setAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const noteAddHandler = () => {
    props.addcb(author, noteText);
  };
  const less = /* @__PURE__ */ h("div", {
    className: "whitebackground addnote"
  }, /* @__PURE__ */ h("button", {
    onClick: props.clickcb
  }, "Add Note"));
  const more = /* @__PURE__ */ h("div", {
    className: "whitebackground addnote"
  }, /* @__PURE__ */ h("textarea", {
    value: noteText,
    onChange: setNoteHandler,
    placeholder: "Enter note here"
  }), /* @__PURE__ */ h("div", {
    className: "addnotelower"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: author,
    onChange: setAuthorHandler,
    placeholder: "Enter your name here"
  }), /* @__PURE__ */ h("button", {
    onClick: noteAddHandler
  }, "Add")));
  return props.editing ? more : less;
}
