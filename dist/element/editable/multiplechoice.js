import {h} from "../../../web_modules/preact.js";
import {useState, useEffect} from "../../../web_modules/preact/hooks.js";
import Selection from "../selection.js";
import {useProperty} from "../../db/hooks.js";
import {mapIDToName, IDToName, nameToID} from "../../db/helper.js";
export default function EditableMultipleChoice(props) {
  const [value, setValue] = useProperty(props.id, props.property);
  const [nameValue, setNameValue] = useState("");
  const [nameOptions, setNameOptions] = useState([]);
  useEffect(() => {
    IDToName(value).then((r) => {
      setNameValue(r);
    });
  }, [value]);
  useEffect(() => {
    mapIDToName(props.options).then((r) => {
      setNameOptions(r);
    });
  }, [props.options]);
  const showValue = props.asnames === true ? nameValue : value;
  const normal = /* @__PURE__ */ h("span", null, showValue);
  const opts = props.asnames === true ? nameOptions : props.options;
  const editing = /* @__PURE__ */ h(Selection, {
    value: showValue,
    cb: (v) => {
      if (props.asnames === true) {
        nameToID(v).then((r) => {
          setValue(r);
        });
      } else {
        setValue(v);
      }
    },
    options: opts,
    addblank: props.addblank,
    allowblank: props.allowblank
  });
  return /* @__PURE__ */ h("span", {
    className: "editablemultiplechoice"
  }, /* @__PURE__ */ h("span", null, props.children, " "), " ", props.show ? editing : normal);
}
