import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
export default function AddUserBar(props) {
  const [name, setName] = useState("");
  return /* @__PURE__ */ h("div", {
    className: "whitebackground adduser"
  }, /* @__PURE__ */ h("input", {
    value: name,
    onChange: (e) => {
      setName(e.target.value);
    },
    type: "text",
    placeholder: "Enter new name"
  }), /* @__PURE__ */ h("button", {
    onClick: () => {
      props.cb(name);
    }
  }, "Submit"));
}
