import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import remove_icon from "../img/outline_highlight_off_black_18dp.png.proxy.js";
import Selection from "../element/selection.js";
import {useNames, useCallers} from "../db/hooks.js";
import "./css/callerlist.css.proxy.js";
export default function CallerList(props) {
  const [newName, setNewName] = useState("");
  const nameList = useNames();
  const [callers, addCaller, removeCaller] = useCallers();
  const formattedNames = callers.map((n) => {
    return /* @__PURE__ */ h("div", {
      className: "horizontal caller"
    }, /* @__PURE__ */ h("div", {
      onClick: () => {
        removeCaller(n);
      }
    }, /* @__PURE__ */ h("img", {
      src: remove_icon
    })), /* @__PURE__ */ h("span", null, n));
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground callerlist"
  }, /* @__PURE__ */ h("span", null, "Fellowshippers (List of Callers):"), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", null, formattedNames), /* @__PURE__ */ h("div", {
    className: "horizontal"
  }, /* @__PURE__ */ h(Selection, {
    value: newName,
    options: nameList,
    cb: setNewName
  }), /* @__PURE__ */ h("button", {
    onClick: (e) => {
      addCaller(newName);
      setNewName("");
    }
  }, "Add")));
}
