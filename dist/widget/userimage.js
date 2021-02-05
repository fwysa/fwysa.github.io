import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import DB from "../db/db.js";
export default function UserImage(props) {
  const [imgSrc, setImgSrc] = useState("");
  useEffect(() => {
    DB.get(props.id, (d) => {
      setImgSrc(d.imageUrl);
      if (props.cb !== void 0) {
        props.cb(d.imageUrl);
      }
    });
  }, [props.id]);
  return /* @__PURE__ */ h("div", null, imgSrc !== "" ? /* @__PURE__ */ h("img", {
    className: "userimage",
    src: imgSrc
  }) : null);
}
