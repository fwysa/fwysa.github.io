import {h} from "../../web_modules/preact.js";
import "./note.css.proxy.js";
export default function Note(props) {
  const date = new Date(props.data._id);
  const formattedDate = date.toLocaleDateString() + " " + date.toLocaleTimeString();
  return /* @__PURE__ */ h("div", {
    className: "whitebackground note"
  }, /* @__PURE__ */ h("span", null, props.data.note), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "notelower"
  }, /* @__PURE__ */ h("span", null, formattedDate), /* @__PURE__ */ h("span", null, props.data.author)));
}
