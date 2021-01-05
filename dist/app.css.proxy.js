// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: linear-gradient(white, var(--lightblue));\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: auto;\n}\n/*\n.App {\n  text-align: center;\n}\n.App code {\n  background: #FFF3;\n  padding: 4px 8px;\n  border-radius: 4px;\n}\n.App p {\n  margin: 0.4rem;\n}\n\n.App-header {\n  background-color: #282c34;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  font-size: calc(10px + 2vmin);\n  color: white;\n}\n\n.App-link {\n  color: #61dafb;\n}\n\n.App-logo {\n  height: 36vmin;\n  margin-bottom: 3rem;\n}\n*/\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}