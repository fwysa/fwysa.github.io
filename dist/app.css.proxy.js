// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: linear-gradient(white, var(--lightblue));\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: auto;\n}\n\n.page {\n\twidth: 100%;\n\tmax-width: var(--maxcontentwidth);\n\talign-self: center;\n}\n\n.page c0 {\n\tpadding: 0;\n}\n\n.whitebackground {\n\tmargin: var(--sectionmargin);\n\tpadding: var(--blockpadding);\n\tborder: var(--borderdetails);\n\tbackground-color: var(--white);\n\tborder-radius: var(--rounding);\n\tbox-shadow: var(--shadowdetails);\n}\n\nhr {\n\tmargin-top: 0.2em;\n\tmargin-bottom: 0.1em;\n\tmargin-left: 0;\n\tmargin-right: 0;\n}\n\ntextarea {\n\twidth: 100%;\n}\n\n.fullwidth {\n\twidth: 100%;\n}\n\n.fullheight {\n\theight: 100%;\n}\n\n.full {\n\twidth: 100%;\n\theight: 100%;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}