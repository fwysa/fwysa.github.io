import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import remove_icon from "../img/outline_highlight_off_black_18dp.png.proxy.js";
import Selection from "../element/selection.js";
import {useNames, useList} from "../db/hooks.js";
import {mapIDToName, nameToID} from "../db/helper.js";
import "./css/list.css.proxy.js";
export default function List(props) {
  const [newName, setNewName] = useState("");
  const [newID, setNewID] = useState("");
  const nameList = useNames();
  const [callers, addCaller, removeCaller] = useList(props.list);
  const [callerNames, setCallerNames] = useState([]);
  useEffect(() => {
    if (newName !== "") {
      nameToID(newName).then((r) => {
        setNewID(r);
      });
    }
  }, [newName]);
  useEffect(() => {
    if (callers.length > 0) {
      mapIDToName(callers).then((r) => {
        setCallerNames(r);
      });
    }
  }, [callers]);
  const formattedNames = callers.map((n, i) => {
    const getName = () => {
      if (callerNames.length > i) {
        return callerNames[i];
      } else {
        return "Loading...";
      }
    };
    return /* @__PURE__ */ h("div", {
      className: "horizontal caller"
    }, /* @__PURE__ */ h("div", {
      onClick: () => {
        removeCaller(n);
      }
    }, /* @__PURE__ */ h("img", {
      src: remove_icon
    })), /* @__PURE__ */ h("span", null, getName()));
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground callerlist"
  }, /* @__PURE__ */ h("span", null, props.label), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", null, formattedNames), /* @__PURE__ */ h("div", {
    className: "horizontal"
  }, /* @__PURE__ */ h(Selection, {
    value: newName,
    options: nameList,
    cb: setNewName
  }), /* @__PURE__ */ h("button", {
    onClick: (e) => {
      addCaller(newID);
      setNewName("");
    }
  }, "Add")));
}
