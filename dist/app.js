import {Router} from "../web_modules/preact-router.js";
import {h} from "../web_modules/preact.js";
import Header from "./page/helper/header.js";
import "./app.css.proxy.js";
import "./print.css.proxy.js";
import DefaultPage from "./page/default.js";
import NotePage from "./page/note.js";
import LeaderPage from "./page/leaders.js";
import AddNamesPage from "./page/addnames.js";
import AssignPage from "./page/assign.js";
import TestPage from "./page/test.js";
import CallingPage from "./page/calling.js";
import ReportPage from "./page/reports.js";
import FHEGLPage from "./page/fhegl.js";
import LoginPage from "./page/login.js";
import DeniedPage from "./page/denied.js";
import TempGenAuthPage from "./page/tempgenauth.js";
function App() {
  return /* @__PURE__ */ h("div", {
    className: "app"
  }, /* @__PURE__ */ h(Header, null), /* @__PURE__ */ h(Router, null, /* @__PURE__ */ h(DefaultPage, {
    path: "/"
  }), /* @__PURE__ */ h(LoginPage, {
    path: "/login"
  }), /* @__PURE__ */ h(DeniedPage, {
    path: "/denied"
  }), /* @__PURE__ */ h(NotePage, {
    path: "/notes"
  }), /* @__PURE__ */ h(LeaderPage, {
    path: "/leaders"
  }), /* @__PURE__ */ h(AddNamesPage, {
    path: "/addnames"
  }), /* @__PURE__ */ h(AssignPage, {
    path: "/assign"
  }), /* @__PURE__ */ h(TestPage, {
    path: "/test"
  }), /* @__PURE__ */ h(CallingPage, {
    path: "/calling"
  }), /* @__PURE__ */ h(ReportPage, {
    path: "/reports"
  }), /* @__PURE__ */ h(FHEGLPage, {
    path: "/heleaders"
  }), /* @__PURE__ */ h(TempGenAuthPage, {
    path: "/tempgenauth"
  })));
}
export default App;
