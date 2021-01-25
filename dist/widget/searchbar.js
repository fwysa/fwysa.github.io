import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import CONSTANTS from "../constants.js";
export default function SearchBar(props) {
  const [gender, setGender] = useState("");
  const [homeWard, setHomeWard] = useState("");
  const formatSelector = () => {
    let base = {
      type: "user"
    };
    if (gender !== "") {
      base.gender = gender;
    }
    if (homeWard !== "") {
      base.homeWard = homeWard;
    }
    return base;
  };
  useEffect(() => {
    props.cb(formatSelector());
  }, [gender, homeWard]);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("div", null, /* @__PURE__ */ h("span", {
    className: "padright"
  }, "Filter ", /* @__PURE__ */ h("strong", null, "(", props.count, ")"), ":")), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt padleft padright"
  }, /* @__PURE__ */ h("span", null, "Gender"), /* @__PURE__ */ h(Selection, {
    value: gender,
    cb: setGender,
    options: CONSTANTS.genders,
    addblank: true,
    allowblank: true
  })), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt"
  }, /* @__PURE__ */ h("span", null, "Home Ward"), /* @__PURE__ */ h(Selection, {
    value: homeWard,
    cb: setHomeWard,
    options: CONSTANTS.homeWards,
    addblank: true,
    allowblank: true
  })));
}
