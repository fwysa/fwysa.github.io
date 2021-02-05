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
function useDBRecentChanges(type = "", id = "") {
  const [last, setLast] = useState({});
  useEffect(() => {
    let chg = DB_INSTANCE.addChangeListener((doc) => {
      if ((type === "" || type === doc.type) && (id === "" || id === doc._id)) {
        setLast(doc);
      }
    });
    return () => {
      DB_INSTANCE.removeChangeListener(chg);
    };
  }, [type, id]);
  return last;
}
function useDoc(id) {
  const [currentDoc, setCurrentDoc] = useState({});
  const change = useDBRecentChanges("", id);
  useEffect(() => {
    DB_INSTANCE.get(id, (doc) => {
      setCurrentDoc(doc);
    });
  }, [id, change]);
  const updateDoc = (changeset) => {
    const changed = applyChangeset(currentDoc, changeset);
    DB_INSTANCE.put(changed);
  };
  return [currentDoc, updateDoc];
}
function useName(id) {
  const [currentDoc] = useDoc(id);
  if (currentDoc === void 0) {
    return void 0;
  } else {
    return currentDoc.name;
  }
}
function useNotes(id) {
  const [currentNotes, setCurrentNotes] = useState([]);
  const change = useDBRecentChanges("note");
  useEffect(() => {
    DB_INSTANCE.find({type: "note", parentID: id}, (docs) => {
      setCurrentNotes(docs);
    });
  }, [id, change]);
  const addNote = (author, noteText, meta = {}) => {
    let n = applyChangeset(genDocBase("note"), {
      parentID: id,
      note: noteText,
      author
    });
    n = applyChangeset(n, meta);
    DB_INSTANCE.put(n);
  };
  return [[...currentNotes].reverse(), addNote];
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
function useProperty(id, property) {
  const [currentDoc, setCurrentDoc] = useState({});
  const change = useDBRecentChanges("", id);
  useEffect(() => {
    DB_INSTANCE.get(id, (doc) => {
      setCurrentDoc(doc);
    });
  }, [id, change]);
  const updateUserProperty = (val) => {
    let changeset = {};
    changeset[property] = val;
    const changed = applyChangeset(currentDoc, changeset);
    DB_INSTANCE.put(changed);
  };
  let ret = currentDoc[property];
  if (ret === void 0) {
    ret = "";
  }
  return [ret, updateUserProperty];
}
function useSearch(selector) {
  const [results, setResults] = useState([]);
  const change = useDBRecentChanges("", "");
  useEffect(() => {
    DB_INSTANCE.find(selector, (docs) => {
      setResults(docs);
    });
  }, [selector, change]);
  return results;
}
function useList(id) {
  const [currentList, setCurrentList] = useState({list: []});
  const change = useDBRecentChanges("meta", id);
  useEffect(() => {
    DB_INSTANCE.get(id, (doc) => {
      if (doc === void 0) {
        let base = genDocBase("meta");
        base._id = id;
        base.list = [];
        DB_INSTANCE.put(base);
      } else {
        setCurrentList(doc);
      }
    });
  }, [name, change]);
  const addToList = (id2) => {
    let newList = [...currentList.list];
    newList.push(id2);
    let n = applyChangeset(currentList, {list: newList});
    DB_INSTANCE.put(n);
  };
  const removeFromList = (id2) => {
    let newList = [...currentList.list];
    const ind = newList.indexOf(id2);
    if (ind > -1) {
      newList.splice(ind, 1);
    }
    let n = applyChangeset(currentList, {list: newList});
    DB_INSTANCE.put(n);
  };
  return [currentList.list, addToList, removeFromList];
}
function usePromise(p, def) {
  const [state, setState] = useState(def);
  useEffect(() => {
    p.then((r) => {
      console.log("GOT PROMISED STATE", r);
      setState(r);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return state;
}
export {
  useDoc,
  useList,
  useSearch,
  useProperty,
  useNotes,
  useNames,
  usePromise
};
