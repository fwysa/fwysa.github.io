import {h} from "../../web_modules/preact.js";
import "./css/note.css.proxy.js";
import {useState} from "../../web_modules/preact/hooks.js";
import EditableText from "./editable/text.js";
import DB from "../db/db.js";
export default function Note(props) {
  const d = new Date(props.data.created);
  const formattedDate = d.toLocaleTimeString() + " " + d.toLocaleDateString();
  const [note, setNote] = useState(props.data.note);
  const [editing, setEditing] = useState(false);
  const normal = /* @__PURE__ */ h("span", null, note);
  const edit = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("textarea", {
    placeholder: "Enter note here",
    value: note,
    onChange: (e) => {
      setNote(e.target.value);
    }
  }));
  const editHandler = (e) => {
    e.preventDefault();
    if (editing) {
      setEditing(false);
      props.data.note = note;
      DB.put(props.data);
    } else {
      setEditing(true);
    }
  };
  const deleteHandler = (e) => {
    e.preventDefault();
    props.data._deleted = true;
    DB.put(props.data);
  };
  return /* @__PURE__ */ h("div", {
    className: "whitebackground note"
  }, /* @__PURE__ */ h("div", null, editing ? edit : normal), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "smaller notelower"
  }, /* @__PURE__ */ h("span", null, formattedDate), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", {
    className: "padright"
  }, props.data.author), /* @__PURE__ */ h("span", null, "| "), /* @__PURE__ */ h("a", {
    href: "",
    onClick: editHandler
  }, editing ? "save" : "edit"), /* @__PURE__ */ h("span", null, " | "), /* @__PURE__ */ h("a", {
    href: "",
    onClick: deleteHandler
  }, "delete"), /* @__PURE__ */ h("span", null, " |"))));
}
