import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import remove_icon from "./img/outline_highlight_off_black_18dp.png.proxy.js";
export default function NameList(props) {
  const [newName, setNewName] = useState("");
  const addHandler = (n) => {
    props.addcb(n);
  };
  const removeHandler = (n) => {
    props.removecb(n);
  };
  const formattedNames = props.names.map((n) => {
    return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", null, n), /* @__PURE__ */ h("div", {
      onClick: () => {
        removeHandler(n);
      }
    }, /* @__PURE__ */ h("img", {
      src: remove_icon
    })));
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground namelist"
  }, /* @__PURE__ */ h("div", null, formattedNames), /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("input", {
    type: "text",
    value: newName,
    onChange: (e) => {
      setNewName(e.target.value);
    },
    placeholder: "Add a new caller"
  }), /* @__PURE__ */ h("button", {
    onClick: (e) => {
      addHandler(newName);
    }
  }, "Submit")));
}
