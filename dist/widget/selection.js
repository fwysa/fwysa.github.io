import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import "./selection.css.proxy.js";
export default function Selection(props) {
  const [val, setVal] = useState("");
  let options = props.selectValues.map((val2) => {
    return /* @__PURE__ */ h("option", {
      value: val2
    }, val2);
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground selection"
  }, /* @__PURE__ */ h("select", {
    value: val,
    class: "selectbox",
    onChange: (e) => {
      setVal(e.target.value);
      props.cb(e.target.value);
    }
  }, options));
}
