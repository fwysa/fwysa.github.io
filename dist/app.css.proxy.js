// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(var(--white), var(--lightblue));\n  display: flex;\n  flex-direction: column;\n}\n\n.page {\n  width: 100%;\n  max-width: var(--maxcontentwidth);\n  align-self: center;\n  overflow: auto;\n}\n\n.page c0 {\n  padding: 0;\n}\n\n.whitebackground {\n  margin: var(--sectionmargin);\n  padding: var(--blockpadding);\n  border: var(--borderdetails);\n  background-color: var(--white);\n  border-radius: var(--rounding);\n  box-shadow: var(--shadowdetails);\n}\n\n.highlight {\n  background-color: var(--lightblue) !important;\n}\n\n.horizontal {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  flex-wrap: wrap;\n  overflow: auto;\n}\n\n.nowrap {\n  flex-wrap: nowrap !important;\n}\n\n.vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.padright {\n  margin-right: var(--sectionmargin);\n}\n\n.padleft {\n  margin-left: var(--sectionmargin);\n}\n\n.smaller {\n  font-size: smaller;\n}\n\n.bold {\n  font-weight: bold;\n}\n\nhr {\n  margin-top: 0.2em;\n  margin-bottom: 0.1em;\n  margin-left: 0;\n  margin-right: 0;\n}\n\ntextarea {\n  width: 100%;\n}\n\n.fullwidth {\n  width: 100%;\n}\n\n.fullheight {\n  height: 100%;\n}\n\n.full {\n  width: 100%;\n  height: 100%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}