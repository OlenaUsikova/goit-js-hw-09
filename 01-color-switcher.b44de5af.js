const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");function o(){setTimeout((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)}t.addEventListener("click",o),e.addEventListener("click",clearTimeout(o));
//# sourceMappingURL=01-color-switcher.b44de5af.js.map
