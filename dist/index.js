import {h, render} from "../web_modules/preact.js";
import "../web_modules/preact/devtools.js";
import App from "./app.js";
import "./index.css.proxy.js";
render(/* @__PURE__ */ h(App, null), document.getElementById("root"));
