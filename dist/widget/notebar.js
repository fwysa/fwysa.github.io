import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import {useNotes} from "../db/hooks.js";
import Note from "../element/note.js";
export default function NoteBar(props) {
  const [author, setAuthor] = useState("");
  const [noteText, setNoteText] = useState("");
  const [notes, addNote] = useNotes(props.name);
  const setNoteHandler = (e) => {
    setNoteText(e.target.value);
  };
  const setAuthorHandler = (e) => {
    setAuthor(e.target.value);
  };
  const noteAddHandler = () => {
    addNote(author, noteText);
    setNoteText("");
  };
  const formattedNotes = notes.map((n) => {
    return /* @__PURE__ */ h(Note, {
      data: n
    });
  });
  return /* @__PURE__ */ h("div", {
    className: "notebar"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground addnote"
  }, /* @__PURE__ */ h("span", null, "Add a note:"), /* @__PURE__ */ h("textarea", {
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
  }, "Add"))), /* @__PURE__ */ h("div", {
    className: "notebarnotes"
  }, formattedNotes));
}
