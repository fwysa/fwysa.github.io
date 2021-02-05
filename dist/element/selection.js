import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
export default function Selection(props) {
  let options = props.options.map((val) => {
    return /* @__PURE__ */ h("option", {
      value: val
    }, val);
  });
  if (props.addblank) {
    options.unshift(/* @__PURE__ */ h("option", {
      value: ""
    }));
  }
  if (props.addhidden) {
    options.unshift(/* @__PURE__ */ h("optgroup", {
      disabled: true,
      hidden: true
    }));
  }
  return /* @__PURE__ */ h("div", {
    className: "selection"
  }, /* @__PURE__ */ h("select", {
    value: props.value,
    onChange: (e) => {
      if (!props.addblank || e.target.value !== "") {
        props.cb(e.target.value);
      } else {
        if (props.allowblank) {
          props.cb(e.target.value);
        } else {
          console.log("Tried to submit blank value");
        }
      }
    }
  }, options));
}
