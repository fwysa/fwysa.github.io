import {h} from "../web_modules/preact.js";
export default function Button(props) {
  return /* @__PURE__ */ h("button", {
    className: "button",
    onClick: props.handler
  }, /* @__PURE__ */ h("span", null, props.children));
}
