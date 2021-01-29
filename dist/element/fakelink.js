import {h} from "../../web_modules/preact.js";
export default function FakeLink(props) {
  return /* @__PURE__ */ h("a", {
    href: "",
    onClick: (e) => {
      e.preventDefault();
    }
  }, props.children);
}
