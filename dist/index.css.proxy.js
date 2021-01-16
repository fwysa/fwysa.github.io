// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n\t--lightblue: #20abd7;\n\t--white: #fff;\n\t--lighttext: #666;\n\t/* ADD ACCENT TEXT*/\n\t/*\n\t--mediumblue: #157493;\n\t--darkblue: #105970;\n\t*/\n\t--borderdetails: 1px solid rgba(0,0,0,0.2);\n\t--shadowdetails: 0 4px 8px 0 rgba(0,0,0,0.2);\n\t--rounding: 4px;\n\t--sectionmargin: 6px;\n\t--blockpadding: 0.3em;\n}\n\nhtml, body, #root, .app {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}