import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
export default function EmbeddedDoc(props) {
  const [content, setContent] = useState(false);
  useEffect(() => {
    setContent("loading...");
    var oReq = new XMLHttpRequest();
    oReq.onreadystatechange = () => {
      if (oReq.readyState == 4 && oReq.status == 200) {
        var raw = oReq.response.children[0].children[1].innerHTML;
        setContent(/* @__PURE__ */ h("div", {
          className: "embed",
          dangerouslySetInnerHTML: {__html: raw}
        }));
      }
    };
    oReq.open("GET", props.url);
    oReq.responseType = "document";
    oReq.send();
  }, []);
  return /* @__PURE__ */ h("div", {
    className: "embedded-doc"
  }, content);
}
