// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".section {\n\tmargin: 8px;\n\tpadding: 0px;\n\tborder: 1px solid rgba(0,0,0,0.2);\n\tbackground-color: #fff; /*FIXME*/\n\tborder-radius: 8px;\n\tbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /*Values taken from w3c*/\n\ttransition: 0.3s box-shadow;\n}\n\n/* REMOVED b/c distracting\n.section:hover {\n\tbackground-color: #eee;\n\tbox-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n\n.section:active {\n\tbackground-color: #ddd;\n}\n*/\n\n.section .bar {\n\tmargin: 0px;\n\tpadding: 8px;\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-content: center; /*NEEDED?*/\n}\n\n.section .bar img {\n\tmargin: -7px;\n\tmargin-right: 0px;\n\tmax-height: 2em;\n}\n\n.section .content {\n\tpadding: 8px;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\n.section .content hr {\n\tmargin-top: -8px;\n\tmargin-left: 0;\n\tmargin-right: 0;\n\tmargin-bottom: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}