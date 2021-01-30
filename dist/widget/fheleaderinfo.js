import {h} from "../../web_modules/preact.js";
import {useUser} from "../db/hooks.js";
export default function FHELeaderInfo(props) {
  const [u] = useUser(props.name);
  const fontClasses = u.fheGroup === props.current.fheGroup ? "smaller bold" : "smaller";
  return /* @__PURE__ */ h("div", {
    className: fontClasses
  }, /* @__PURE__ */ h("span", {
    className: "padright"
  }, u.fheGroup, ":"), /* @__PURE__ */ h("span", {
    className: "padright"
  }, u.name), /* @__PURE__ */ h("span", null, u.preferredContactValue));
}
