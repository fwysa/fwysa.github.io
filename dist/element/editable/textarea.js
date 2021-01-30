import {h} from "../../../web_modules/preact.js";
import {useUserProperty} from "../../db/hooks.js";
export default function EditableText(props) {
  const [value, setValue] = useUserProperty(props.name, props.property);
  const editChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("textarea", {
    value,
    placeholder: "Add useful info here",
    disabled: true
  }));
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("textarea", {
    className: props.highlight === true ? "highlight" : "",
    value,
    onChange: editChangeHandler,
    placeholder: "Add useful info here"
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
