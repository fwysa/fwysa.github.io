import {h} from "../../web_modules/preact.js";
import {useUserProperty} from "../internal/db.js";
export default function EditableMultipleChoice(props) {
  const [value, setValue] = useUserProperty(props.name, props.property);
  const options = props.choices.map((v) => {
    return /* @__PURE__ */ h("option", {
      value: v
    }, v);
  });
  const editChangeHandler = (e) => {
    setValue(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, value);
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("select", {
    value,
    onChange: editChangeHandler
  }, options));
  return /* @__PURE__ */ h("span", {
    className: "editablemultiplechoice"
  }, /* @__PURE__ */ h("span", null, props.children, " "), " ", props.show ? editing : normal);
}
