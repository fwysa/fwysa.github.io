import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../widget/selection.js";
import Bio from "../widget/bio.js";
import NoteBar from "../widget/notebar.js";
import AddUserBar from "../widget/adduserbar.js";
import {useUser, useNotes, useNames} from "../db/hooks.js";
import DB from "../db/db.js";
function NotePage() {
  const names = useNames();
  const [name, setName] = useState("");
  const [user, updateUser] = useUser(name);
  console.log(names, name, user);
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("span", null, "Choose a name:\xA0"), /* @__PURE__ */ h(Selection, {
    options: names,
    cb: (choice) => {
      setName(choice);
    },
    addblank: true
  })), user !== void 0 && user.name !== "" && user.name !== void 0 ? /* @__PURE__ */ h(Bio, {
    name
  }) : null, /* @__PURE__ */ h(AddUserBar, null), user !== void 0 && user.name !== "" && user.name !== void 0 ? /* @__PURE__ */ h(NoteBar, {
    name
  }) : null);
}
export default NotePage;
