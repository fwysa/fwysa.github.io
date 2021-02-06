import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import PouchDBFind from "../../web_modules/pouchdb-find.js";
import PouchDB from "../../web_modules/pouchdb-browser.js";
PouchDB.plugin(PouchDBFind);
import CONSTANTS from "../constants.js";
const LOCAL_USER = "_local/user";
const AUTH_URL = "https://n6cgwh88a9.execute-api.us-east-1.amazonaws.com/test";
"https://bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix:82c46900cd9ba0d2f0a7174710f99b447960bd385bf07c94b30be16f556bcd1a@bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix.cloudantnosqldb.appdomain.cloud/ocz";
const SYNC_OPTS = {
  live: true,
  retry: true
};
class DB {
  constructor() {
    this.pouchdb = new PouchDB("ocz");
    this.DBURL = "";
    this.role = "";
    this.userID = "";
    this.finishedLogin = null;
    let t = this;
    this.waitForLogin = new Promise((re, rj) => {
      console.log("WAITING FOR LOGIN");
      t.finishedLogin = re;
      t.checkForExistingLogin();
    });
    this.replicationReady = this.startReplication();
    this.changeListeners = {};
    this.listenForChanges();
    this.listenID = 0;
    this.nameIDMatrix = {};
    this.IDNameMatrix = {};
    this.matrixReady = this.populateMatrices();
    this.ready = this.matrixReady;
  }
  assignLoginInfo(o) {
    this.DBURL = o.couch;
    this.role = o.role;
    this.userID = o.userID;
  }
  checkForExistingLogin() {
    let t = this;
    this.pouchdb.get(LOCAL_USER).then((d) => {
      t.assignLoginInfo(d);
      t.finishedLogin(d);
    }).catch((err) => {
      console.log("No local user found, not yet logged in.");
    });
  }
  login(user, pass) {
    const url = AUTH_URL + "?action=login&user=" + encodeURI(user) + "&pass=" + encodeURI(pass);
    console.log(url);
    let t = this;
    fetch(url).then((d) => d.json()).then((r) => {
      if (!r.ok) {
        console.log("LOGIN FAILED", r);
      } else {
        console.log("LOGIN SUCCESS", r);
        t.assignLoginInfo(r);
        t.pouchdb.put({_id: LOCAL_USER, ...r}).catch(console.log);
        t.finishedLogin(r);
      }
    });
  }
  logout() {
    this.DBURL = "";
    this.role = "";
    this.userID = "";
    let t = this;
    this.pouchdb.get(LOCAL_USER).then((d) => {
      d._deleted = true;
      return t.pouchdb.put(d);
    }).catch(console.log);
  }
  startReplication(cb) {
    let t = this;
    return this.waitForLogin.then(() => {
      return new Promise((re, rj) => {
        this.pouchdb.replicate.from(t.DBURL).on("complete", (info) => {
          console.log("1. FINISHED INITIAL REPLICATION");
          re();
          this.pouchdb.sync(t.DBURL, SYNC_OPTS).on("error", (e) => {
            console.log("SYNC ERROR", e);
          });
        }).on("error", (e) => {
          console.log("INITIAL REPLICATION ERROR", e);
          rj();
        });
      });
    });
  }
  populateMatrices() {
    let NI = this.nameIDMatrix;
    let IN = this.IDNameMatrix;
    let t = this;
    return this.replicationReady.then(() => {
      return new Promise((re, rj) => {
        t.pouchdb.find({selector: {type: "user"}}).then((res) => {
          res.docs.forEach((d) => {
            NI[d.name] = d._id;
            IN[d._id] = d.name;
          });
          console.log("2. MATRICES POPULATED");
          re();
        }).catch(console.log);
      });
    });
  }
  addChangeListener(cb) {
    let i = String(this.listenID);
    this.listenID++;
    this.changeListeners[i] = cb;
    return i;
  }
  removeChangeListener(i) {
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
  get(id) {
    return this.ready.then(() => {
      return this.pouchdb.get(id);
    });
  }
  put(doc) {
    return this.ready.then(() => {
      return this.pouchdb.put(doc);
    });
  }
  find(selector) {
    return this.ready.then(() => {
      return this.pouchdb.find({selector}).then((res) => res.docs);
    });
  }
}
let DB_INSTANCE = new DB();
console.log("DB:", DB_INSTANCE);
export default DB_INSTANCE;
export {LOCAL_USER};
