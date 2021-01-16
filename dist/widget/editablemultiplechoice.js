import {h} from "../../web_modules/preact.js";
export default function EditableMultipleChoice(props) {
  const options = props.choices.map((v) => {
    return /* @__PURE__ */ h("option", {
      value: v
    }, v);
  });
  const editChangeHandler = (e) => {
    props.setcb(e.target.value);
  };
  const normal = /* @__PURE__ */ h("span", null, props.val);
  const editing = /* @__PURE__ */ h("span", null, /* @__PURE__ */ h("select", {
    value: props.val,
    onChange: editChangeHandler
  }, options));
  return /* @__PURE__ */ h("span", {
    className: "editablemultiplechoice"
  }, /* @__PURE__ */ h("span", null, props.children, " "), " ", props.show ? editing : normal);
}
