import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../element/selection.js";
import CONSTANTS from "../constants.js";
export default function SearchBar(props) {
  const [gender, setGender] = useState("");
  const [homeWard, setHomeWard] = useState("");
  const [status, setStatus] = useState("");
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
    if (status !== "") {
      base.status = status;
    }
    return base;
  };
  useEffect(() => {
    props.cb(formatSelector());
  }, [gender, homeWard, status]);
  return /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal nowrap"
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
    className: "vertical searchbaropt padright"
  }, /* @__PURE__ */ h("span", null, "Home Ward"), /* @__PURE__ */ h(Selection, {
    value: homeWard,
    cb: setHomeWard,
    options: CONSTANTS.homeWards,
    addblank: true,
    allowblank: true
  })), /* @__PURE__ */ h("div", {
    className: "vertical searchbaropt"
  }, /* @__PURE__ */ h("span", null, "Status"), /* @__PURE__ */ h(Selection, {
    value: status,
    cb: setStatus,
    options: CONSTANTS.statuses,
    addblank: true,
    allowblank: true
  })));
}
