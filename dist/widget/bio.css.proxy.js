// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".bio {\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n\n.bioinfo {\n\tflex-grow: 1;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.bioinfo hr {\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}