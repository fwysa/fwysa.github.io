// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".header {\n  height: 55px;\n  background-color: var(--white);\n  /*background-image: linear-gradient(to right, white, var(--lightblue));*/\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.2); /* CHANGE */\n  padding: 5px;\n}\n\n.header .logo img {\n  max-height: 55px;\n  padding: 0px;\n  margin: 0px;\n}\n\n/*\n.header div {\n\tpadding-left: 0.4em;\n\tpadding-right: 0.4em;\n}\n*/\n\n.header .icons {\n  display: flex;\n}\n\n.header .dummylogoright {\n  width: 74px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}