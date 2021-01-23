// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(white, var(--lightblue));\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.page {\n  width: 100%;\n  max-width: var(--maxcontentwidth);\n  align-self: center;\n}\n\n.page c0 {\n  padding: 0;\n}\n\n.whitebackground {\n  margin: var(--sectionmargin);\n  padding: var(--blockpadding);\n  border: var(--borderdetails);\n  background-color: var(--white);\n  border-radius: var(--rounding);\n  box-shadow: var(--shadowdetails);\n}\n\n.horizontal {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\nhr {\n  margin-top: 0.2em;\n  margin-bottom: 0.1em;\n  margin-left: 0;\n  margin-right: 0;\n}\n\ntextarea {\n  width: 100%;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.full {\n  width: 100%;\n  height: 100%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}