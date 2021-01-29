import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import expand_less from "../img/round_expand_less_black_18dp.png.proxy.js";
import expand_more from "../img/round_expand_more_black_18dp.png.proxy.js";
import "./css/section.css.proxy.js";
export default function Section(props) {
  const [showing, setShowing] = useState(false);
  var content = /* @__PURE__ */ h("div", {
    className: "content"
  }, /* @__PURE__ */ h("hr", {
    className: "contentdivider"
  }), props.children);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground section"
  }, /* @__PURE__ */ h("div", {
    className: "bar",
    onClick: () => {
      setShowing(!showing);
    }
  }, props.centered === true ? /* @__PURE__ */ h("span", {
    className: "padleft"
  }) : null, /* @__PURE__ */ h("span", null, props.abstract), /* @__PURE__ */ h("img", {
    src: showing ? expand_less : expand_more
  })), showing ? content : null);
}
