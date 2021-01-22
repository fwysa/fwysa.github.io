// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".section .bar {\n  margin: 0px;\n  padding: var(--sectionmargin);\n  display: flex;\n  justify-content: space-between;\n  /*align-content: center; NEEDED?*/\n}\n\n.section .bar img {\n  margin: -7px;\n  margin-right: 0px;\n  max-height: 2em;\n}\n\n.section .content {\n  padding: var(--sectionmargin);\n  display: flex;\n  flex-direction: column;\n}\n\n.section .content hr {\n  margin-top: -8px;\n  margin-bottom: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}