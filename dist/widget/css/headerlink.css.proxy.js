// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".outericon {\n  margin-left: 0.3em;\n  margin-right: 0.3em;\n}\n.outericon a {\n  display: flex;\n  flex-direction: column;\n}\n\n.outericon img {\n  align-self: center;\n  width: 2em;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}