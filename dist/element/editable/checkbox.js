import {h} from "../../../web_modules/preact.js";
import {useProperty} from "../../db/hooks.js";
export default function EditableCheckBox(props) {
  const [value, setValue] = useProperty(props.id, props.property);
  const editChangeHandler = (e) => {
    setValue(e.target.checked);
  };
  const normal = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    checked: value,
    type: "checkbox",
    disabled: true
  }));
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    checked: value,
    type: "checkbox",
    onChange: editChangeHandler
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
