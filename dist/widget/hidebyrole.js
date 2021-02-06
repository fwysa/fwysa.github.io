import {h} from "../../web_modules/preact.js";
import {useLogin} from "../db/hooks.js";
export default function HideByRole(props) {
  const loginInfo = useLogin();
  if (loginInfo === void 0) {
    return null;
  } else if (loginInfo === false) {
    return null;
  } else {
    if (props.allowed.indexOf(loginInfo.role) < 0) {
      return null;
    } else {
      return props.children;
    }
  }
}
