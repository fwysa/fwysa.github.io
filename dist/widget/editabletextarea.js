import {h} from "../../web_modules/preact.js";
export default function EditableText(props) {
  const editChangeHandler = (e) => {
    props.setcb(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("textarea", {
    value: props.val,
    placeholder: "Add useful info here",
    disabled: true
  }));
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("textarea", {
    value: props.val,
    onChange: editChangeHandler,
    placeholder: "Add useful info here"
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
