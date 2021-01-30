import {h} from "../../web_modules/preact.js";
import {useList} from "../db/hooks.js";
import SS from "../element/sectionsubtitle.js";
import FHELeaderInfo from "./fheleaderinfo.js";
export default function FHELeaderInfoBox(props) {
  const [fheLeaders, ,] = useList("fheLeaders", true);
  const formattedLeaders = fheLeaders.map((n) => {
    return /* @__PURE__ */ h(FHELeaderInfo, {
      name: n,
      current: props.current
    });
  });
  return /* @__PURE__ */ h("div", null, formattedLeaders);
}
