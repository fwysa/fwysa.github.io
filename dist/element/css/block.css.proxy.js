// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".block {\n  padding: 5px;\n  /* width: max-content; */\n  border: var(--borderdetails);\n  border-radius: var(--rounding);\n  margin-left: 1em;\n  margin-right: 1em;\n  align-self: center;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}