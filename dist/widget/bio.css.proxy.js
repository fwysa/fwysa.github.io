// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bioabovefold {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n\n.bioimg {\n\tmin-width: 100px;\n\tbackground-color: lightblue;\n}\n.bioinfo {\n\tmargin-left: 5px;\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bioinfo hr {\n\tmargin-top: 0.2em;\n\tmargin-bottom: 0.1em;\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n\n.bioinfolower {\n\tfont-size: smaller;\n}\n\n.userdata {\n\tfont-weight: bold;\n}\n\n.biobelowfold {\n\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}