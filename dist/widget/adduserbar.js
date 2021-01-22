import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import DB from "../db/db.js";
export default function AddUserBar() {
  const [name, setName] = useState("");
  const clickHandler = () => {
    DB.addUser(name);
    setName("");
  };
  return /* @__PURE__ */ h("div", {
    className: "whitebackground adduser"
  }, /* @__PURE__ */ h("span", null, "Add a name:"), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("input", {
    value: name,
    onChange: (e) => {
      setName(e.target.value);
    },
    type: "text",
    placeholder: "Enter new name"
  }), /* @__PURE__ */ h("button", {
    onClick: clickHandler
  }, "Submit"));
}
