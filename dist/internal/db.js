import PouchDBFind from "../../web_modules/pouchdb-find.js";
import PouchDB from "../../web_modules/pouchdb-browser.js";
PouchDB.plugin(PouchDBFind);
const CLOUDANT_URL = "https://bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix:82c46900cd9ba0d2f0a7174710f99b447960bd385bf07c94b30be16f556bcd1a@bd155bbe-8d8e-42a6-9a3a-4d316144c379-bluemix.cloudantnosqldb.appdomain.cloud/ocz";
const SYNC_OPTS = {
  live: true,
  retry: true
};
class DB {
  constructor() {
    this.pouchdb = new PouchDB("ocz");
    this.pouchdb.replicate.from(CLOUDANT_URL).on("complete", (info) => {
      console.log("FINISHED INITIAL REPLICATION");
      this.pouchdb.sync(CLOUDANT_URL, SYNC_OPTS).on("error", (e) => {
        console.log("SYNC ERROR", e);
      });
    }).on("error", (e) => {
      console.log("INITIAL REPLICATION ERROR", e);
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
    u.info = {
      status: "uncontacted",
      source: "",
      gender: "",
      homeWard: "",
      fheGroup: "",
      imageUrl: ""
    };
    u.contact = {
      preferred: {
        type: "",
        value: ""
      },
      individual: {
        phone: "",
        email: ""
      },
      household: {
        phone: "",
        email: ""
      },
      notify: {
        homeEvening: false,
        wardActivity: false
      },
      facebook: {
        notified: false
      }
    };
    this.pouchdb.put(u, (err, result) => {
      if (err) {
        console.log(err);
      }
      if (cb !== void 0) {
        cb(result);
      }
    });
  }
  updateUser(name, cb) {
    this.pouchdb.find({
      selector: {
        name,
        type: "user"
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
  updateRecord(dat, cb) {
    this.pouchdb.put(dat, (err, result) => {
      if (err) {
        console.log("UPDATE RECORD ERROR", err);
      } else {
        cb(result);
      }
    });
    console.log("UPDATE RECORD", dat);
  }
  getUser(name, cb) {
    this.pouchdb.find({
      selector: {
        name,
        type: "user"
      }
    }).then((res) => {
      cb(res.docs[0]);
    }).catch((err) => {
      console.log(err);
    });
  }
  getNotes(name, cb) {
    this.pouchdb.find({
      selector: {
        name,
        type: "note"
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
}
export default DB;
