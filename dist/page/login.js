import {h} from "../../web_modules/preact.js";
import {useState} from "../../web_modules/preact/hooks.js";
import SS from "../element/sectionsubtitle.js";
import HL from "../element/horizontallabel.js";
import FakeLink from "../element/fakelink.js";
import DB from "../db/db.js";
import {redirect} from "../db/helper.js";
function LoginPage() {
  const [normalLogin, setNormalLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const strings = normalLogin ? {
    loginBanner: "Login",
    usernameBanner: "Username:",
    passwordBanner: "Password:",
    button: "Login",
    speal: "Have a code to create a login? Click here."
  } : {
    loginBanner: "Create New User:",
    usernameBanner: "New Username:",
    passwordBanner: "New Password:",
    button: "Create",
    speal: "Return to normal login."
  };
  const messages = {
    noexist: "That user does not exist.",
    duplication: "The server has encountered an internal error which theoretically should not be possible. Needless to say, this isn't working right now. REASON: Auth duplication.",
    incorrect: "That password is not correct.",
    "no matching code": "No code matches the one you entered.",
    "code duplication": "The server has encountered an internal error, which shouldn't be possible. Needless to say, this isn't working right now. REASON: Code duplication."
  };
  const loginHandler = () => {
    setError("");
    setLoading(true);
    if (normalLogin) {
      normalLoginHandler();
    } else {
      newUserHandler();
    }
  };
  const normalLoginHandler = () => {
    console.log("LOGIN WITH", user, pass);
    DB.login(user, pass).then((r) => {
      setLoading(false);
      console.log("LOGIN RESULT", r);
      if (!r.ok) {
        setError(messages[r.reason]);
      } else {
        console.log("LOGIN SUCCESS!", r.role);
        redirect("leaders");
      }
    });
  };
  const newUserHandler = () => {
    console.log("CREATE NEW USER WITH", code, user, pass);
    DB.createAuth(code, user, pass).then((r) => {
      setLoading(false);
      console.log(r);
      if (!r.ok) {
        setError(messages[r.reason]);
      } else {
        console.log("CREATE SUCCESS");
        setLoading(true);
        normalLoginHandler();
      }
    });
  };
  const changeModeHandler = () => {
    setUser("");
    setPass("");
    setCode("");
    setNormalLogin(!normalLogin);
  };
  return /* @__PURE__ */ h("div", {
    className: "page"
  }, /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h(SS, null, strings.loginBanner), error !== "" ? /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h("span", null, error)) : null, loading ? /* @__PURE__ */ h("div", {
    className: "whitebackground"
  }, /* @__PURE__ */ h("span", null, "Loading...")) : null, !normalLogin ? /* @__PURE__ */ h(HL, {
    label: "Code:"
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: code,
    onChange: (e) => {
      setCode(e.target.value);
    }
  })) : null, /* @__PURE__ */ h(HL, {
    label: strings.usernameBanner
  }, /* @__PURE__ */ h("input", {
    type: "text",
    value: user,
    onChange: (e) => {
      setUser(e.target.value);
    }
  })), /* @__PURE__ */ h(HL, {
    label: strings.passwordBanner
  }, /* @__PURE__ */ h("input", {
    type: "password",
    value: pass,
    onChange: (e) => {
      setPass(e.target.value);
    }
  })), /* @__PURE__ */ h("button", {
    onClick: loginHandler
  }, strings.button), /* @__PURE__ */ h("span", {
    onClick: changeModeHandler,
    className: "smaller padleft"
  }, /* @__PURE__ */ h(FakeLink, null, strings.speal))));
}
export default LoginPage;
