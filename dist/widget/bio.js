import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import "./bio.css.proxy.js";
export default function Bio(props) {
  const [showMore, setShowMore] = useState(false);
  const clickHandler = () => {
    setShowMore(!showMore);
  };
  const belowFold = /* @__PURE__ */ h("div", {
    className: "biobelowfold"
  });
  return /* @__PURE__ */ h("div", {
    className: "whitebackground bio",
    onClick: clickHandler
  }, /* @__PURE__ */ h("div", {
    className: "bioabovefold"
  }, /* @__PURE__ */ h("div", {
    className: "bioimg"
  }), /* @__PURE__ */ h("div", {
    className: "bioinfo"
  }, /* @__PURE__ */ h("div", {
    className: "bioinfoupper"
  }, /* @__PURE__ */ h("span", null, props.data.name)), /* @__PURE__ */ h("hr", null), /* @__PURE__ */ h("div", {
    className: "bioinfolower"
  }, /* @__PURE__ */ h("span", null, "Gender: ", /* @__PURE__ */ h("span", {
    className: "userdata"
  }, props.data.info.gender)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "Home Evening Group: ", /* @__PURE__ */ h("span", {
    className: "userdata"
  }, props.data.info.fheGroup)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "Home Ward: ", /* @__PURE__ */ h("span", {
    className: "userdata"
  }, props.data.info.homeWard)), /* @__PURE__ */ h("br", null), /* @__PURE__ */ h("span", null, "Preferred Contact: ", /* @__PURE__ */ h("span", {
    className: "userdata"
  }, props.data.contact.preferred.value, " (", props.data.contact.preferred.type, ")"))))), showMore ? /* @__PURE__ */ h("hr", null) : null, showMore ? belowFold : null);
}
