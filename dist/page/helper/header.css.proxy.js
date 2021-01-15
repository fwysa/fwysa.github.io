// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n\tbackground-color: white;\n\t/*background-image: linear-gradient(to right, white, var(--lightblue));*/\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\tborder: 2px solid rgba(0,0,0,0.2); /* CHANGE */\n\tpadding: 5px;\n\toverflow: auto;\n}\n\n/*\n.header div {\n\tpadding-left: 0.4em;\n\tpadding-right: 0.4em;\n}\n*/\n\n.header .icons {\n\tdisplay: flex;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}