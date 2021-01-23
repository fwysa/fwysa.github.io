import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import PouchDBFind from "../../web_modules/pouchdb-find.js";
import PouchDB from "../../web_modules/pouchdb-browser.js";
PouchDB.plugin(PouchDBFind);
import DB_INSTANCE, {EMPTY_USER_TEMPLATE, applyChangeset} from "./db.js";
function useDBRecentChanges(type = "", name = "") {
  const [last, setLast] = useState({});
  useEffect(() => {
    let chg = DB_INSTANCE.addChangeListener((doc) => {
      if ((type === "" || type === doc.type) && (name === "" || name === doc.name)) {
        setLast(doc);
      }
    });
    return () => {
      DB_INSTANCE.removeChangeListener(chg);
    };
  }, [type, name]);
  return last;
}
function useUser(name) {
  const [currentUser, setCurrentUser] = useState(EMPTY_USER_TEMPLATE);
  const change = useDBRecentChanges("user", name);
  useEffect(() => {
    DB_INSTANCE.getDocs("user", name, (docs) => {
      setCurrentUser(docs[0]);
    });
  }, [name, change]);
  const updateUser = (changeset) => {
    const changed = applyChangeset(currentUser, changeset);
    DB_INSTANCE.putDoc(changed);
  };
  return [currentUser, updateUser];
}
function useNotes(name) {
  const [currentNotes, setCurrentNotes] = useState([]);
  const change = useDBRecentChanges("note", name);
  useEffect(() => {
    DB_INSTANCE.getDocs("note", name, (docs) => {
      setCurrentNotes(docs);
    });
  }, [name, change]);
  const addNote = (author, noteText) => {
    let n = applyChangeset(DB_INSTANCE.genDocBase("note", name), {
      note: noteText,
      author
    });
    DB_INSTANCE.putDoc(n);
  };
  return [currentNotes, addNote];
}
function useNames() {
  const [names, setNames] = useState([]);
  const change = useDBRecentChanges("user", "");
  useEffect(() => {
    DB_INSTANCE.getUserNames(setNames);
  }, [change]);
  return names;
}
function useUserProperty(name, property) {
  const [currentUser, setCurrentUser] = useState(EMPTY_USER_TEMPLATE);
  const change = useDBRecentChanges("user", name);
  useEffect(() => {
    DB_INSTANCE.getDocs("user", name, (docs) => {
      setCurrentUser(docs[0]);
    });
  }, [name, change]);
  const updateUserProperty = (val) => {
    let changeset = {};
    changeset[property] = val;
    const changed = applyChangeset(currentUser, changeset);
    DB_INSTANCE.putDoc(changed);
  };
  return [currentUser[property], updateUserProperty];
}
function useCallers() {
  const [callers, setCallers] = useState({list: []});
  const change = useDBRecentChanges("meta", "callers");
  useEffect(() => {
    DB_INSTANCE.getDocs("meta", "callers", (docs) => {
      if (docs.length === 0) {
        DB_INSTANCE.addCallerList();
      } else {
        setCallers(docs[0]);
      }
    });
  }, [change]);
  const addCaller = (name) => {
    let newList = [...callers.list];
    newList.push(name);
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.putDoc(n);
  };
  const removeCaller = (name) => {
    let newList = [...callers.list];
    const ind = newList.indexOf(name);
    if (ind > -1) {
      newList.splice(ind, 1);
    }
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.putDoc(n);
  };
  return [callers.list, addCaller, removeCaller];
}
function useSearch(selector) {
  const [results, setResults] = useState([]);
  const change = useDBRecentChanges("", "");
  useEffect(() => {
    DB_INSTANCE.pouchdb.find({selector}).then((res) => {
      setResults(res.docs);
    }).catch((err) => {
      console.log(err);
    });
  }, [selector, change]);
  return results;
}
export {
  useDBRecentChanges,
  useUser,
  useNotes,
  useNames,
  useUserProperty,
  useCallers,
  useSearch
};
