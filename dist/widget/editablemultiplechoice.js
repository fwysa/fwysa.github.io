import {h} from "../../web_modules/preact.js";
import Selection from "./selection.js";
import {useUserProperty} from "../db/hooks.js";
export default function EditableMultipleChoice(props) {
  const [value, setValue] = useUserProperty(props.name, props.property);
  const editChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, value);
  const editing = /* @__PURE__ */ h(Selection, {
    value,
    cb: editChangeHandler,
    options: props.options
  });
  return /* @__PURE__ */ h("span", {
    className: "editablemultiplechoice"
  }, /* @__PURE__ */ h("span", null, props.children, " "), " ", props.show ? editing : normal);
}
