// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".app {\n\twidth: 100%;\n\theight: 100%;\n\tbackground-image: linear-gradient(white, var(--lightblue));\n\tdisplay: flex;\n\tflex-direction: column;\n\toverflow: auto;\n}\n\n.whitebackground {\n\tmargin: 8px;\n\tpadding: 5px;\n\tborder: 1px solid rgba(0,0,0,0.2);\n\tbackground-color: #fff; /*FIXME*/\n\tborder-radius: 8px;\n\tbox-shadow: 0 4px 8px 0 rgba(0,0,0,0.2); /*Values taken from w3c*/\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}