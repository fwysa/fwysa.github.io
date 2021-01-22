import {h} from "../../web_modules/preact.js";
import {useUser, useNotes, useUserProperty} from "../db/hooks.js";
function TestPage() {
  const [gender, updateGender] = useUserProperty("Kian Musser", "gender");
  const clickHandler = () => {
    updateGender("Male");
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("p", null, "TestPage"), /* @__PURE__ */ h("p", null, gender), /* @__PURE__ */ h("button", {
    onClick: clickHandler
  }, "Submit"));
}
export default TestPage;
