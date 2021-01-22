import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import PouchDBFind from "../../web_modules/pouchdb-find.js";
import PouchDB from "../../web_modules/pouchdb-browser.js";
PouchDB.plugin(PouchDBFind);
import CONSTANTS from "../constants.js";
const CLOUDANT_URL = "https://bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix:82c46900cd9ba0d2f0a7174710f99b447960bd385bf07c94b30be16f556bcd1a@bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix.cloudantnosqldb.appdomain.cloud/ocz";
const SYNC_OPTS = {
  live: true,
  retry: true
};
const EMPTY_USER_TEMPLATE = {
  status: CONSTANTS.statuses[0],
  source: "",
  gender: "",
  homeWard: "",
  fheGroup: "",
  imageUrl: "",
  infotext: "",
  assignedCaller: "",
  preferredContactType: "",
  preferredContactValue: "",
  individualPhone: "",
  individualEmail: "",
  householdPhone: "",
  householdEmail: "",
  notifyHomeEvening: false,
  notifyWardActivity: false,
  notifiedFacebook: false
};
function applyChangeset(original, newset) {
  return {...original, ...newset};
}
class DB {
  constructor() {
    this.pouchdb = new PouchDB("ocz");
    this.startReplication();
    this.changeListeners = {};
    this.listenForChanges();
    this.listenID = 0;
  }
  startReplication() {
    this.pouchdb.replicate.from(CLOUDANT_URL).on("complete", (info) => {
      console.log("FINISHED INITIAL REPLICATION");
      this.pouchdb.sync(CLOUDANT_URL, SYNC_OPTS).on("error", (e) => {
        console.log("SYNC ERROR", e);
      });
    }).on("error", (e) => {
      console.log("INITIAL REPLICATION ERROR", e);
    });
  }
  addChangeListener(cb) {
    let i = String(this.listenID);
    this.listenID++;
    console.log("ADDING CHANGE LISTENER", i);
    this.changeListeners[i] = cb;
    return i;
  }
  removeChangeListener(i) {
    console.log("REMOVING CHANGE LISTENER", i);
    delete this.changeListeners[i];
  }
  listenForChanges() {
    let chg = this.pouchdb.changes({
      since: "now",
      live: true,
      include_docs: true
    }).on("change", (c) => {
      for (const [id, cb] of Object.entries(this.changeListeners)) {
        cb(c.doc);
      }
    }).on("error", (e) => {
      console.log(e);
    });
  }
  genDocBase(type, name) {
    return {
      _id: new Date().toISOString(),
      type,
      name
    };
  }
  addNote(name, author, note, cb) {
    let n = this.genDocBase("note", name);
    n.author = author;
    n.note = note;
    this.pouchdb.put(n, (err, result) => {
      if (err) {
        console.log(err);
      }
      cb(result);
    });
  }
  addUser(name, cb) {
    let u = this.genDocBase("user", name);
    u = applyChangeset(u, EMPTY_USER_TEMPLATE);
    this.pouchdb.put(u, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (cb !== void 0) {
        cb(result);
      }
    });
  }
  updateRecord(name, type, cb) {
    this.pouchdb.find({
      selector: {
        name,
        type
      }
    }).then((res) => {
      let ret = cb(res.docs[0]);
      this.pouchdb.put(ret, (err, result) => {
        if (err) {
          console.log(err);
        }
      });
    }).catch((err) => {
      console.log(err);
    });
  }
  putDoc(dat, cb) {
    this.pouchdb.put(dat, (err, result) => {
      if (err) {
        console.log("UPDATE RECORD ERROR", err);
      } else {
        if (cb !== void 0) {
          cb(result);
        }
      }
    });
  }
  getDocs(type, name, cb) {
    this.pouchdb.find({
      selector: {
        name,
        type
      }
    }).then((res) => {
      cb(res.docs);
    }).catch((err) => {
      console.log(err);
    });
  }
  getUserNames(cb) {
    this.pouchdb.find({
      selector: {
        type: "user"
      },
      fields: ["name"]
    }).then((res) => {
      let list = [];
      res.docs.forEach((elem) => {
        list.push(elem.name);
      });
      cb(list);
    }).catch((err) => {
      console.log(err);
    });
  }
  addCallerList() {
    let base = this.genDocBase("meta", "callers");
    base.list = [];
    this.pouchdb.put(base, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log(result);
    });
  }
}
let DB_INSTANCE = new DB();
console.log("DB:", DB_INSTANCE);
export default DB_INSTANCE;
export {EMPTY_USER_TEMPLATE, applyChangeset};
