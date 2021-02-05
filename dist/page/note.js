import {h} from "../../web_modules/preact.js";
import {useState, useEffect} from "../../web_modules/preact/hooks.js";
import Section from "../element/section.js";
import Selection from "../element/selection.js";
import SearchBar from "../widget/searchbar.js";
import SearchResults from "../widget/searchresults.js";
import WholeUserInfo from "../widget/wholeuserinfo.js";
import {useNotes, useNames} from "../db/hooks.js";
import {sortByName, nameToID} from "../db/helper.js";
function NotePage() {
  const names = useNames();
  const [name, setName] = useState("");
  const [id, setID] = useState("");
  const [count, setCount] = useState(0);
  const [selector, setSelector] = useState({type: "user"});
  useEffect(() => {
    if (name === "") {
      setID("");
    } else {
      nameToID(name).then((r) => {
        setID(r);
      });
    }
  }, [name]);
  const updateSelector = (s) => {
    setName("");
    setSelector(s);
    console.log("selector now", s);
  };
  const updateName = (n) => {
    setName(n);
  };
  const listUsers = (m) => {
    if (m.type !== "user") {
      console.log("Got a not user?!", m);
      return "";
    }
    return /* @__PURE__ */ h(Section, {
      key: m._id,
      abstract: m.name
    }, /* @__PURE__ */ h(WholeUserInfo, {
      id: m._id
    }));
  };
  console.log("CURRENTID", id);
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground horizontal"
  }, /* @__PURE__ */ h("span", {
    className: "padright"
  }, "Choose a name:"), /* @__PURE__ */ h(Selection, {
    value: name,
    options: names,
    cb: updateName,
    addblank: true,
    allowblank: true
  }), /* @__PURE__ */ h("span", {
    className: "padleft padright"
  }, /* @__PURE__ */ h("strong", null, "OR")), /* @__PURE__ */ h(SearchBar, {
    count,
    cb: updateSelector
  })), id !== "" ? /* @__PURE__ */ h(WholeUserInfo, {
    id
  }) : /* @__PURE__ */ h(SearchResults, {
    selector,
    cb: listUsers,
    countcb: setCount,
    sort: sortByName
  }));
}
export default NotePage;
