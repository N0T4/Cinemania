const e=document.querySelector(".theme-switcher");function t(){"light"===localStorage.getItem("theme-mode")&&(e.setAttribute("checked",!0),document.body.classList.add("light-theme"))}e.addEventListener("change",(function(){"light"===localStorage.getItem("theme-mode")?localStorage.removeItem("theme-mode"):localStorage.setItem("theme-mode","light");document.body.classList.toggle("light-theme"),t()})),t();const o=document.querySelector(".menu-btn"),c=document.querySelector(".header__menu");function d(e){"BUTTON"!==e.target.nodeName&&"NAV"!==e.target.nodeName&&"LI"!==e.target.nodeName&&(c.classList.remove("active"),document.body.classList.remove("lock"),document.body.removeEventListener("click",d))}o.addEventListener("click",(function(){c.classList.add("active"),document.body.classList.add("lock"),document.body.addEventListener("click",d)}));
//# sourceMappingURL=library.91b56579.js.map
