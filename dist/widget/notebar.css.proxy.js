// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".notelower {\n\tfont-size: smaller;\n\tcolor: var(--lighttext);\n\tdisplay: flex;\n\tflex-direction: row;\n\tjustify-content: space-between;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}