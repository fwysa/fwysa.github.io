import {h} from "../../web_modules/preact.js";
import "./css/note.css.proxy.js";
export default function Note(props) {
  const d = new Date(props.data._id);
  const formattedDate = d.toLocaleTimeString() + " " + d.toLocaleDateString();
  return /* @__PURE__ */ h("div", {
    className: "whitebackground note"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", null, props.data.note)), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "smaller notelower"
  }, /* @__PURE__ */ h("span", null, formattedDate), /* @__PURE__ */ h("span", null, props.data.author)));
}
