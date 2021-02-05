// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bioabovefold {\n  display: flex;\n  flex-direction: column;\n  /*justify-content: space-between;*/\n}\n\n.bioupper {\n  display: flex;\n  flex-direction: row;\n}\n\n.bioimg {\n  min-width: 100px;\n}\n\n.bioinfo {\n  margin-left: 5px;\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.bioinfoupper {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  white-space: nowrap;\n}\n\n.biobuttons {\n  display: flex;\n  flex-direction: row;\n}\n\n.biobuttons img {\n  margin-top: -0.2em;\n  margin-bottom: -0.2em;\n  max-height: 1.7em;\n}\n\n.biobuttons .expandbutton {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.userdata {\n  font-weight: bold;\n}\n\n.bioinfostatus {\n  padding: var(--blockpadding);\n  border: var(--borderdetails);\n  box-shadow: var(--shadowdetails);\n  margin-bottom: var(--blockpadding);\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}