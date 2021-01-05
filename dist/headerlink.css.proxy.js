// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".outericon {\n\tmargin-left: 0.3em;\n\tmargin-right: 0.3em;\n}\n.outericon a {\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.outericon img {\n\talign-self: center;\n\twidth: 2em;\n}\n\n.outericon span {\n\tfont-size: smaller;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}