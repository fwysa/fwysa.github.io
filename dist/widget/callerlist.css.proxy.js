// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".caller {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.caller img {\n  margin-right: 0.5em;\n  max-height: 1.5em;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}