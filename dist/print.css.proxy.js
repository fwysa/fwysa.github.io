// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@media only print {\n  .app {\n    background-image: none;\n    background-color: white;\n  }\n  .page {\n    overflow: visible;\n  }\n  .nopagebreak {\n    page-break-inside: avoid;\n  }\n  .printnoshow {\n    display: none !important;\n  }\n  .onlyshowprint {\n    display: inline;\n  }\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}