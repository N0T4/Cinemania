document.querySelector(".dropdown_button").addEventListener("click",function(){document.querySelector(".dropdown_list").classList.toggle("dropdown_list--visible"),this.classList.add("dropdown_button--active")}),document.addEventListener("DOMContentLoaded",function(){for(var e=document.querySelectorAll(".dropdown_item"),t=0;t<e.length;t++)e[t].addEventListener("click",function(){var e=this.closest(".dropdown");e.querySelector(".dropdown_button").textContent=this.textContent,e.querySelector(".dropdown_list").style.display="none"})}),document.addEventListener("click",function(e){e.target!==document.querySelector(".dropdown_button")&&document.querySelector(".dropdown_list").classList.remove("dropdown_list--visible")}),document.addEventListener("keydown",function(e){"Escape"===e.key&&document.querySelector(".dropdown_list").classList.remove("dropdown_list--visible")}),document.querySelectorAll(".dropdown_item").forEach(function(e){e.addEventListener("click",function(e){e.stopPropagation(),document.querySelector(".dropdown_button").innerText=this.innerText,document.querySelector(".dropdown_button").focus()})});const e=document.querySelectorAll(".box");document.querySelector(".dropdown").addEventListener("click",function(t){if("LI"!==t.target.tagName)return!1;let o=t.target.dataset.f;e.forEach(e=>{e.classList.remove("hide"),e.classList.contains(o)||"genre"===o||e.classList.add("hide")})});
//# sourceMappingURL=library.590c50c8.js.map
