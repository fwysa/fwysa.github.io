import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Section from "../widget/section.js";
import Note from "../widget/note.js";
import AddUserBar from "../widget/adduserbar.js";
import AddNoteBar from "../widget/addnotebar.js";
import Bio from "../widget/bio.js";
import Selection from "../widget/selection.js";
import Block from "../widget/block.js";
import EmbeddedDoc from "../widget/embedded_doc.js";
import "./helper/page.css.proxy.js";
import DB from "../internal/db.js";
const ADD_USER = "* Add Name *";
let db = new DB();
console.log(db);
function Page() {
  const [listOfNames, setListOfNames] = useState([]);
  const [refreshNames, setRefreshNames] = useState(false);
  const [refreshNotes, setRefreshNotes] = useState(false);
  const [name, setName] = useState("");
  const [curUser, setCurUser] = useState({});
  const [notes, setNotes] = useState([]);
  const [addingUser, setAddingUser] = useState(false);
  const [addingNote, setAddingNote] = useState(false);
  useEffect(() => {
    console.log("REFRESHING NAMES");
    db.getUserNames((newNames) => {
      newNames.push(ADD_USER);
      setListOfNames(newNames);
      setRefreshNames(false);
    });
  }, [refreshNames]);
  useEffect(() => {
    if (name !== "" && name !== ADD_USER) {
      db.getUser(name, (user) => {
        console.log("GOT USER", user);
        setCurUser(user);
      });
    }
  }, [name]);
  useEffect(() => {
    setRefreshNotes(false);
    if (name !== "") {
      if (name === ADD_USER) {
        console.log("ADDING USER");
        setAddingUser(true);
      } else {
        setAddingUser(false);
        console.log("RETRIEVE NOTES FOR ", name);
        db.getNotes(name, (res) => {
          res.reverse();
          setNotes(res);
        });
      }
    }
  }, [name, refreshNotes]);
  useEffect(() => {
    console.log("INSPECTING CHANGES");
    let chg = db.pouchdb.changes({
      since: "now",
      live: true,
      include_docs: true
    }).on("change", (c) => {
      setRefreshNames(true);
      if (c.doc.name === name) {
        console.log("Someone changed a note");
        setRefreshNotes(true);
      } else {
        console.log("No need to refresh notes, we're on", name, "and they're on", c.doc.name);
      }
      console.log("CHANGE", c);
    }).on("error", (e) => {
      console.log("SYNC ERROR (abort is normal / from reload)", e);
    });
    return () => {
      console.log("IGNORING CHANGES");
      chg.cancel();
    };
  }, [name]);
  const formattedNotes = notes.map((n) => {
    return /* @__PURE__ */ h(Note, {
      data: n
    });
  });
  const addUserHandler = (newUserName) => {
    db.addUser(newUserName, () => {
      setAddingUser(false);
      setRefreshNames(true);
      setName(newUserName);
    });
  };
  const addNoteHandler = (newAuthor, newNote) => {
    db.addNote(name, newAuthor, newNote, () => {
      setRefreshNotes(true);
      setAddingNote(false);
    });
  };
  const clickNoteHandler = () => {
    setAddingNote(true);
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h(Selection, {
    selectValues: listOfNames,
    cb: (choice) => {
      setName(choice);
    }
  }), addingUser ? /* @__PURE__ */ h(AddUserBar, {
    cb: addUserHandler
  }) : null, curUser.name !== void 0 ? /* @__PURE__ */ h(Bio, {
    data: curUser
  }) : null, curUser.name !== void 0 ? /* @__PURE__ */ h(AddNoteBar, {
    editing: addingNote,
    clickcb: clickNoteHandler,
    addcb: addNoteHandler
  }) : null, /* @__PURE__ */ h("div", {
    className: "notes"
  }, formattedNotes));
}
export default Page;
