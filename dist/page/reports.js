import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import Selection from "../element/selection.js";
const REPORTS = ["Elders Quorum", "Relief Society"];
function ReportPage() {
  const [report, setReport] = useState("");
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, "Select a Report:"), /* @__PURE__ */ h(Selection, {
    value: report,
    cb: setReport,
    options: REPORTS
  })), /* @__PURE__ */ h("p", {
    className: "whitebackground"
  }, "Report for ", report, " goes here..."));
}
export default ReportPage;
