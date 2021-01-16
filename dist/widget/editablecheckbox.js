import {h} from "../../web_modules/preact.js";
export default function EditableCheckBox(props) {
  const editChangeHandler = (e) => {
    props.setcb(e.target.checked);
  };
  console.log("RECEIVED VALUE", props.val, typeof props.val);
  const normal = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    checked: props.val,
    type: "checkbox",
    disabled: true
  }));
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("input", {
    checked: props.val,
    type: "checkbox",
    onChange: editChangeHandler
  }));
  return /* @__PURE__ */ h("span", {
    className: "editabletext"
  }, /* @__PURE__ */ h("span", null, props.children), " ", props.show ? editing : normal);
}
