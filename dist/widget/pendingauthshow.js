import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import delete_icon from "../img/round_delete_black_18dp.png.proxy.js";
import HL from "../element/horizontallabel.js";
import EditableMultipleChoice from "../element/editable/multiplechoice.js";
import CONSTANTS from "../constants.js";
import {IDToName} from "../db/helper.js";
import DB from "../db/db.js";
export default function PendingAuthShow(props) {
  const [name, setName] = useState("");
  useEffect(() => {
    IDToName(props.val.userID).then(setName).catch(console.log);
  }, [props.val.userID]);
  const deleteHandler = () => {
    props.val._deleted = true;
    DB.put(props.val).catch(console.log);
  };
  return /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("span", {
    onClick: deleteHandler
  }, /* @__PURE__ */ h("img", {
    className: "imgicon",
    src: delete_icon
  })), /* @__PURE__ */ h("span", {
    className: "padright"
  }, name, ': (code: "', props.val.code, '", role:', " "), /* @__PURE__ */ h(EditableMultipleChoice, {
    id: props.val._id,
    property: "role",
    options: CONSTANTS.roles,
    show: true
  }), /* @__PURE__ */ h("span", null, "\xA0)"));
}
