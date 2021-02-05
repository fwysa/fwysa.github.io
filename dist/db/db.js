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
class DB {
  constructor() {
    this.pouchdb = new PouchDB("ocz");
    this.replicationReady = this.startReplication();
    this.changeListeners = {};
    this.listenForChanges();
    this.listenID = 0;
    this.nameIDMatrix = {};
    this.IDNameMatrix = {};
    this.matrixReady = this.populateMatrices();
  }
  startReplication(cb) {
    return new Promise((re, rj) => {
      this.pouchdb.replicate.from(CLOUDANT_URL).on("complete", (info) => {
        console.log("1. FINISHED INITIAL REPLICATION");
        re();
        this.pouchdb.sync(CLOUDANT_URL, SYNC_OPTS).on("error", (e) => {
          console.log("SYNC ERROR", e);
        });
      }).on("error", (e) => {
        console.log("INITIAL REPLICATION ERROR", e);
        rj();
      });
    });
  }
  populateMatrices() {
    let NI = this.nameIDMatrix;
    let IN = this.IDNameMatrix;
    let t = this;
    return this.replicationReady.then(() => {
      return new Promise((re, rj) => {
        t.find({type: "user"}, (docs) => {
          docs.forEach((d) => {
            NI[d.name] = d._id;
            IN[d._id] = d.name;
          });
          console.log("2. MATRICES POPULATED");
          re();
        });
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
  get(id, cb) {
    this.pouchdb.get(id).then((res) => {
      cb(res);
    }).catch((err) => {
      console.log("GET ERROR", err, "ID:", id);
    });
  }
  put(dat, cb) {
    this.pouchdb.put(dat).then((res) => {
      if (cb !== void 0) {
        cb(res);
      }
    }).catch((err) => {
      console.log("UPDATE RECORD ERROR", err);
    });
  }
  find(selector, cb) {
    this.pouchdb.find({selector}).then((res) => {
      cb(res.docs);
    }).catch((err) => {
      console.log(err);
    });
  }
  remove(doc) {
    return this.pouchdb.remove(doc);
  }
}
let DB_INSTANCE = new DB();
console.log("DB:", DB_INSTANCE);
export default DB_INSTANCE;
