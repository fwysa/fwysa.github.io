import {h} from "../../../web_modules/preact.js";
import {useProperty} from "../../db/hooks.js";
export default function EditableText(props) {
  const [value, setValue] = useProperty(props.id, props.property);
  const editChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, value);
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    type: "text",
    value,
    onChange: editChangeHandler
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
