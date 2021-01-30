import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import PouchDBFind from "../../web_modules/pouchdb-find.js";
import PouchDB from "../../web_modules/pouchdb-browser.js";
PouchDB.plugin(PouchDBFind);
import DB_INSTANCE from "./db.js";
import {
  EMPTY_USER_TEMPLATE,
  applyChangeset,
  genDocBase,
  sortByName
} from "./helper.js";
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
    DB_INSTANCE.find({type: "user", name}, (docs) => {
      setCurrentUser(docs[0]);
    });
  }, [name, change]);
  const updateUser = (changeset) => {
    const changed = applyChangeset(currentUser, changeset);
    DB_INSTANCE.put(changed);
  };
  return [currentUser, updateUser];
}
function useNotes(name) {
  const [currentNotes, setCurrentNotes] = useState([]);
  const change = useDBRecentChanges("note", name);
  useEffect(() => {
    DB_INSTANCE.find({type: "note", name}, (docs) => {
      setCurrentNotes(docs);
    });
  }, [name, change]);
  const addNote = (author, noteText) => {
    let n = applyChangeset(genDocBase("note", name), {
      note: noteText,
      author
    });
    DB_INSTANCE.put(n);
  };
  return [currentNotes, addNote];
}
function useNames() {
  const [names, setNames] = useState([]);
  const change = useDBRecentChanges("user", "");
  useEffect(() => {
    DB_INSTANCE.find({type: "user"}, (docs) => {
      const sorted = sortByName(docs);
      setNames(docs.map((d) => d.name));
    });
  }, [change]);
  return names;
}
function useUserProperty(name, property) {
  const [currentUser, setCurrentUser] = useState(EMPTY_USER_TEMPLATE);
  const change = useDBRecentChanges("user", name);
  useEffect(() => {
    DB_INSTANCE.find({type: "user", name}, (docs) => {
      setCurrentUser(docs[0]);
    });
  }, [name, change]);
  const updateUserProperty = (val) => {
    let changeset = {};
    changeset[property] = val;
    const changed = applyChangeset(currentUser, changeset);
    DB_INSTANCE.put(changed);
  };
  return [currentUser[property], updateUserProperty];
}
function useList(name, dontSort = false) {
  const [callers, setCallers] = useState({list: []});
  const change = useDBRecentChanges("meta", name);
  useEffect(() => {
    DB_INSTANCE.find({type: "meta", name}, (docs) => {
      if (docs.length === 0) {
        let base = genDocBase("meta", name);
        base.list = [];
        DB_INSTANCE.put(base);
      } else {
        setCallers(docs[0]);
      }
    });
  }, [name, change]);
  const addCaller = (name2) => {
    let newList = [...callers.list];
    newList.push(name2);
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.put(n);
  };
  const removeCaller = (name2) => {
    let newList = [...callers.list];
    const ind = newList.indexOf(name2);
    if (ind > -1) {
      newList.splice(ind, 1);
    }
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.put(n);
  };
  if (!dontSort) {
    callers.list.sort();
  }
  return [callers.list, addCaller, removeCaller];
}
function useSearch(selector) {
  const [results, setResults] = useState([]);
  const change = useDBRecentChanges("", "");
  useEffect(() => {
    DB_INSTANCE.find(selector, (docs) => {
      setResults(sortByName(docs));
    });
  }, [selector, change]);
  return results;
}
const EMPTY_OBJECT = {data: {}};
function useObject(name) {
  const [doc, setDoc] = useState(EMPTY_OBJECT);
  const change = useDBRecentChanges("meta", name);
  useEffect(() => {
    DB_INSTANCE.find({type: "meta", name}, (docs) => {
      if (docs.length === 0) {
        const n = applyChangeset(genDocBase("meta", name), EMPTY_OBJECT);
        DB_INSTANCE.put(n);
      } else {
        setDoc(docs[0]);
      }
    });
  }, [name, change]);
  const updateObject = (mutatedObject) => {
    DB_INSTANCE.put(mutatedObject);
  };
  return [doc, updateObject];
}
export {
  useDBRecentChanges,
  useUser,
  useNotes,
  useNames,
  useUserProperty,
  useList,
  useSearch,
  useObject
};
