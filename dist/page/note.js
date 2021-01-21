import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Selection from "../widget/selection.js";
import Bio from "../widget/bio.js";
import NoteBar from "../widget/notebar.js";
import AddUserBar from "../widget/adduserbar.js";
import DB, {useUser, useNotes, useNames} from "../internal/db.js";
function NotePage() {
  const names = useNames();
  const [name, setName] = useState("");
  const [user, updateUser] = useUser(name);
  console.log(names, name, user);
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(Selection, {
    selectValues: names,
    cb: (choice) => {
      setName(choice);
    }
  }), user !== void 0 && user.name !== "" && user.name !== void 0 ? /* @__PURE__ */ h(Bio, {
    name
  }) : null, /* @__PURE__ */ h(AddUserBar, null), user !== void 0 && user.name !== "" && user.name !== void 0 ? /* @__PURE__ */ h(NoteBar, {
    name
  }) : null);
}
export default NotePage;
