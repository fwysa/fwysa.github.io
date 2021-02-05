import {h} from "../../../web_modules/preact.js";
import Selection from "../selection.js";
import {useProperty} from "../../db/hooks.js";
import {IDToName, nameToID} from "../../db/helper.js";
export default function EditableMultipleChoice(props) {
  const [value, setValue] = useProperty(props.id, props.property);
  const showValue = props.asnames === true ? IDToName(value) : value;
  const normal = /* @__PURE__ */ h("span", null, showValue);
  const opts = props.asnames === true ? props.options.map((i) => IDToName(i)) : props.options;
  const editing = /* @__PURE__ */ h(Selection, {
    value: showValue,
    cb: (v) => {
      if (props.asnames === true) {
        setValue(nameToID(v));
      } else {
        setValue(v);
      }
    },
    options: opts
  });
  return /* @__PURE__ */ h("span", {
    className: "editablemultiplechoice"
  }, /* @__PURE__ */ h("span", null, props.children, " "), " ", props.show ? editing : normal);
}
