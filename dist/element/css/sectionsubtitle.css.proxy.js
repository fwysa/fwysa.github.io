// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".sectionsubtitle hr {\n  margin-top: -0.1em;\n  width: 8em;\n}\n\n.sectionsubtitle {\n  margin-bottom: 0.1em;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}