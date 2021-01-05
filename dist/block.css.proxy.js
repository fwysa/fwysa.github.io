// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".block {\n\tpadding: 5px;\n\twidth: max-content;\n\tborder: 1px solid rgba(0,0,0,0.2);\n\tborder-radius: 5px;\n\tmargin-left: 1em;\n\tmargin-right: 1em;\n\talign-self: center;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}