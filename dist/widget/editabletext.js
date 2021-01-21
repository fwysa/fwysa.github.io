import {h} from "../../web_modules/preact.js";
import {useUserProperty} from "../internal/db.js";
export default function EditableText(props) {
  const [value, setValue] = useUserProperty(props.name, props.property);
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
