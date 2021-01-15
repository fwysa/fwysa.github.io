import {h} from "../../../web_modules/preact.js";
import HeaderLink from "../../widget/headerlink.js";
import img_bg from "../../widget/img/background.png.proxy.js";
import img_bulletin from "../../widget/img/outline_article_black_18dp.png.proxy.js";
import img_form from "../../widget/img/outline_insert_chart_black_18dp.png.proxy.js";
import img_spreadsheet from "../../widget/img/outline_table_view_black_18dp.png.proxy.js";
import "./header.css.proxy.js";
export default function Header() {
  return /* @__PURE__ */ h("div", {
    className: "header"
  }, /* @__PURE__ */ h("div", {
    className: "logo"
  }, /* @__PURE__ */ h("img", {
    src: img_bg
  })), /* @__PURE__ */ h("div", {
    className: "icons"
  }, /* @__PURE__ */ h(HeaderLink, {
    text: "HE Leaders",
    img: img_bulletin,
    src: "https://drive.google.com/drive/folders/1wHdfCUdI_yxgCzZbtU9WkI5_g6D5qWdn"
  }), /* @__PURE__ */ h(HeaderLink, {
    text: "Form",
    img: img_form,
    src: "https://docs.google.com/forms/d/e/1FAIpQLSf9Tmhyx_Fjawej3s_hl1C2QX5bQENmwsb6IikbsffmhNUphg/viewform"
  }), /* @__PURE__ */ h(HeaderLink, {
    text: "OCZ",
    img: img_spreadsheet,
    src: "https://docs.google.com/spreadsheets/d/1xLlrttxmFczo1H1RiNajz1iOE5D_IAOIrlErUHn37t4/"
  })));
}
