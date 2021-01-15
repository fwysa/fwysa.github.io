// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n\t--lightblue: #20abd7;\n\t--mediumblue: #157493;\n\t--darkblue: #105970;\n}\n\nhtml, body, #root, .app {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}