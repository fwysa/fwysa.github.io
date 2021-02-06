import {h} from "../../web_modules/preact.js";
import {useLogin} from "../db/hooks.js";
import {redirect} from "../db/helper.js";
export default function AccessControl(props) {
  const loginInfo = useLogin();
  if (loginInfo === void 0) {
    redirect("login");
    return null;
  } else if (loginInfo === false) {
    return null;
  } else {
    if (props.allowed.indexOf(loginInfo.role) < 0) {
      redirect("denied");
      return null;
    } else {
      return props.children;
    }
  }
}
