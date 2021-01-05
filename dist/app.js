import {h} from "../web_modules/preact.js";
import Page from "./page.js";
import Header from "./header.js";
import "./app.css.proxy.js";
function App() {
  return /* @__PURE__ */ h("div", {
    className: "app"
  }, /* @__PURE__ */ h(Header, null), /* @__PURE__ */ h(Page, null));
}
export default App;
