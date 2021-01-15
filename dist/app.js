import {Router} from "../web_modules/preact-router.js";
import {h} from "../web_modules/preact.js";
import DefaultPage from "./page/default.js";
import NotePage from "./page/note.js";
import Header from "./page/helper/header.js";
import "./app.css.proxy.js";
function App() {
  return /* @__PURE__ */ h("div", {
    className: "app"
  }, /* @__PURE__ */ h(Header, null), /* @__PURE__ */ h(Router, null, /* @__PURE__ */ h(DefaultPage, {
    path: "/"
  }), /* @__PURE__ */ h(NotePage, {
    path: "/notes"
  })));
}
export default App;
