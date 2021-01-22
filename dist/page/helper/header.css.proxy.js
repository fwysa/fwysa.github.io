// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n  background-color: white;\n  /*background-image: linear-gradient(to right, white, var(--lightblue));*/\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border: 2px solid rgba(0, 0, 0, 0.2); /* CHANGE */\n  padding: 5px;\n  overflow: auto;\n}\n\n/*\n.header div {\n\tpadding-left: 0.4em;\n\tpadding-right: 0.4em;\n}\n*/\n\n.header .icons {\n  display: flex;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}