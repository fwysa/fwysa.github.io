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
    DB_INSTANCE.find({type: "user", name}, (docs2) => {
      setCurrentUser(docs2[0]);
    });
    setCurrentUser(docs[0]);
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
    DB_INSTANCE.find({type: "note", name}, (docs2) => {
      setCurrentNotes(docs2);
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
    DB_INSTANCE.find({type: "user"}, (docs2) => {
      const sorted = sortByName(docs2);
      setNames(docs2.map((d) => d.name));
    });
  }, [change]);
  return names;
}
function useUserProperty(name, property) {
  const [currentUser, setCurrentUser] = useState(EMPTY_USER_TEMPLATE);
  const change = useDBRecentChanges("user", name);
  useEffect(() => {
    DB_INSTANCE.find({type: "user", name}, (docs2) => {
      setCurrentUser(docs2[0]);
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
function useCallers() {
  const [callers, setCallers] = useState({list: []});
  const change = useDBRecentChanges("meta", "callers");
  useEffect(() => {
    DB_INSTANCE.find({type: "meta", name: "callers"}, (docs2) => {
      if (docs2.length === 0) {
        let base = genDocBase("meta", "callers");
        base.list = [];
        DB_INSTANCE.put(base);
      } else {
        setCallers(docs2[0]);
      }
    });
  }, [change]);
  const addCaller = (name) => {
    let newList = [...callers.list];
    newList.push(name);
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.put(n);
  };
  const removeCaller = (name) => {
    let newList = [...callers.list];
    const ind = newList.indexOf(name);
    if (ind > -1) {
      newList.splice(ind, 1);
    }
    let n = applyChangeset(callers, {list: newList});
    DB_INSTANCE.put(n);
  };
  return [callers.list.sort(), addCaller, removeCaller];
}
function useSearch(selector) {
  const [results, setResults] = useState([]);
  const change = useDBRecentChanges("", "");
  useEffect(() => {
    DB_INSTANCE.find(selector, (docs2) => {
      setResults(sortByName(docs2));
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
