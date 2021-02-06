import {h} from "../../web_modules/preact.js";
import {useLogin} from "../db/hooks.js";
export default function AccessControl(props) {
  const loginInfo = useLogin();
  const urlComponents = window.location.href.split("/");
  if (urlComponents.length !== 4) {
    console.log("URL COMPONENT LENGTH IS NOT 4", window.location.href);
  }
  urlComponents.pop();
  const baseURL = urlComponents.join("/");
  if (loginInfo === void 0) {
    window.location.href = baseURL + "/login";
    return null;
  } else if (loginInfo === false) {
    return null;
  } else {
    if (props.allowed.indexOf(loginInfo.role) < 0) {
      window.location.href = baseURL + "/denied";
      return null;
    } else {
      return props.children;
    }
  }
}
