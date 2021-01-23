// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ":root {\n  --lightblue: #20abd7;\n  --white: #fff;\n  --lighttext: #666;\n  /* ADD ACCENT TEXT*/\n  /*\n\t--mediumblue: #157493;\n\t--darkblue: #105970;\n\t*/\n  --maxcontentwidth: 1000px;\n  --borderdetails: 1px solid rgba(0, 0, 0, 0.2);\n  --shadowdetails: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  --rounding: 0px;\n  --sectionmargin: 6px;\n  --blockpadding: 0.3em;\n}\n\nhtml,\nbody,\n#root,\n.app {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}