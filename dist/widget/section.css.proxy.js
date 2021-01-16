// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".section .bar {\n\tmargin: 0px;\n\tpadding: var(--sectionmargin);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\t/*align-content: center; NEEDED?*/\n}\n\n.section .bar img {\n\tmargin: -7px;\n\tmargin-right: 0px;\n\tmax-height: 2em;\n}\n\n.section .content {\n\tpadding: var(--sectionmargin);\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.section .content hr {\n\tmargin-top: -8px;\n\tmargin-bottom: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}