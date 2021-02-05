import {h} from "../../web_modules/preact.js";
import Bio from "./bio.js";
import NoteBar from "./notebar.js";
export default function WholeUserInfo(props) {
  return /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(Bio, {
    id: props.id,
    extrainfo: props.extrainfo
  })), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h(NoteBar, {
    id: props.id,
    hideadd: props.hideadd
  }));
}
