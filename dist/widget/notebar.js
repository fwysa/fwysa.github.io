import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import {useNotes} from "../db/hooks.js";
import Note from "../element/note.js";
export default function NoteBar(props) {
  const [author, setAuthor] = useState("");
  const [noteText, setNoteText] = useState("");
  const [notes, addNote] = useNotes(props.id);
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
  notes.sort((a, b) => {
    const dateA = new Date(a.created);
    const dateB = new Date(b.created);
    return dateB - dateA;
  });
  const formattedNotes = notes.map((n) => {
    return /* @__PURE__ */ h(Note, {
      key: n._id,
      data: n
    });
  });
  const bg = props.nobg === true ? "addnote" : "whitebackground addnote";
  return /* @__PURE__ */ h("div", {
    className: "notebar nopagebreak"
  }, props.hideadd !== true ? /* @__PURE__ */ h("div", {
    className: bg
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
  }, "Add"))) : null, /* @__PURE__ */ h("div", {
    className: "notebarnotes"
  }, formattedNotes));
}
