import {h} from "../../web_modules/preact.js";
export default function EditableText(props) {
  const editChangeHandler = (e) => {
    props.setcb(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, props.val);
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    type: "text",
    value: props.val,
    onChange: editChangeHandler
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
