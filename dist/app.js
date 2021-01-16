import {Router} from "../web_modules/preact-router.js";
import {h} from "../web_modules/preact.js";
import Header from "./page/helper/header.js";
import "./app.css.proxy.js";
import DefaultPage from "./page/default.js";
import NotePage from "./page/note.js";
import LeaderPage from "./page/leaders.js";
import AddNamesPage from "./page/addnames.js";
function App() {
  return /* @__PURE__ */ h("div", {
    className: "app"
  }, /* @__PURE__ */ h(Header, null), /* @__PURE__ */ h(Router, null, /* @__PURE__ */ h(DefaultPage, {
    path: "/"
  }), /* @__PURE__ */ h(NotePage, {
    path: "/notes"
  }), /* @__PURE__ */ h(LeaderPage, {
    path: "/leaders"
  }), /* @__PURE__ */ h(AddNamesPage, {
    path: "/addnames"
  })));
}
export default App;
