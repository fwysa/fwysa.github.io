// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".page {\n\twidth: 100%;\n\tmax-width: 1000px; /*FIXME*/\n\talign-self: center;\n}\n\n.page .c0 {\n\tpadding: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}