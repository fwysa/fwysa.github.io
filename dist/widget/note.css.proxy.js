// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".note hr {\n\tmargin-top: 0.2em;\n\tmargin-bottom: 0.1em;\n}\n\n.notelower {\n\tfont-size: smaller;\n\tcolor: #666;\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}