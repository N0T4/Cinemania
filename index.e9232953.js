!function(){function e(e,t,a,n){Object.defineProperty(e,t,{get:a,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function a(e){return e&&e.__esModule?e.default:e}var n={},o={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=i),i.register("iE7OH",function(t,a){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return o},function(e){return o=e});var n,o,i={};n=function(e){for(var t=Object.keys(e),a=0;a<t.length;a++)i[t[a]]=e[t[a]]},o=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("dzRKM",function(e,a){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("unable to locate global object")}();e.exports=a=n.fetch,n.fetch&&(a.default=n.fetch.bind(n)),a.Headers=n.Headers,a.Request=n.Request,a.Response=n.Response}),i.register("aNJCr",function(t,a){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});"use strict";var n,o={};n=function(e){var t=o[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[e]=t),t}}),i("iE7OH").register(JSON.parse('{"9Ke0H":"index.e9232953.js","f8189":"no-poster-img.f07343dd.png","fwjs5":"sharaevskiy.852834c5.jpeg","gN2zH":"puhach.0033a2d3.jpeg","6MLEV":"kalchenko.4964d434.jpeg","5jb7l":"badenkova.807f5675.jpeg","i61G3":"konovalova.1c5e9bfb.jpeg","druy7":"vorozhbit.4a9e6070.jpeg","fohb3":"neskroba.cf614adc.jpeg","gIrEl":"pokamiestova.6ff6dd7f.jpeg","dN1uO":"dimekhin.380678dd.jpeg","3Gr2N":"poliakov.e792724c.jpeg","cJw6J":"catalog.9160112c.js","iGgbm":"catalog.87fc4724.js","aTRsW":"catalog.6bb86755.js"}'));let r=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];i("dzRKM")("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM"}}).then(e=>e.json()).then(e=>{if(e.results.length>=1){var t,a;let n=(a=20,t=Math.ceil(t=1),Math.floor(Math.random()*((a=Math.floor(a))-t+1))+t),o=e.results[n],i=function({data:e}){let t=function(e){let t=e.map(e=>{let t=r.find(t=>t.id===e);return t.name});return t.join(", ")}(e.genre_ids);return`<div class="upcoming-card">
 <div class="upcoming-foto">
<picture class="upcoming-load-foto">
      <source srcset="https://image.tmdb.org/t/p/original/${e.backdrop_path}" media="(min-width: 1200px)" class="upcoming-foto-desktop" loading="lazy"/>
      <source srcset="https://image.tmdb.org/t/p/original/${e.backdrop_path}" media="(min-width: 768px)" class="upcoming-foto-tablet" loading="lazy"/>
      <source srcset="https://image.tmdb.org/t/p/original/${e.poster_path}" media="(min-width: 320px)" class="upcoming-foto-mobile" loading="lazy"/>
       <img src="https://image.tmdb.org/t/p/original/${e.poster_path}" alt="Poster film" style="width: 805px" loading="lazy"/>
    </picture>
</div>
  </div>
  <div class="upcoming-info">
          <h2 class="upcoming-title-film">${e.title}</h2>
 <div class="upcoming-movie">
                <div class="upcoming-info-left">
                    <div class="upcoming-release">
                        <ul class="upcoming-ul-text">
                        <div class="upcoming-colomb">
                         <li class="upcoming-li-text"><p class="upcoming-text"> <span class ="upcoming-black">Release date</span> <span class="upcoming-release-data">${e.release_date}</span></p></li>
                        <li class="upcoming-li-text"><p class="upcoming-text"><span class ="upcoming-black">Vote/Votes</span>
<div class="upcoming-info-votes"><span class="upcoming-white">${e.vote_average}</span> <span
                                class="slash">/</span>
                            <span class="upcoming-white">
                               ${e.vote_count}</span> </div> </p></li>
                        </div>
                        <div>
                        <li class="upcoming-li-text"> <p class="upcoming-text"> <span class ="upcoming-black">Popularity</span> <span class="upcoming-popularity">${e.popularity.toFixed(1)}</span> </p></li>
                        <li class="upcoming-li-text"> <p class="upcoming-genreNames"><span class ="upcoming-black">Genre</span> <span class="upcoming-genre">${t}</span> </p></li>
                        </ul>
                        </div>
            <h2 class="upcoming-about">ABOUT</h2>
            <p class="upcoming-overview">${e.overview}</p>
            <button class="upcoming-button" type="button">Add to Library</button>
        </div>`}({data:o});s.insertAdjacentHTML("beforeend",i)}}).catch(e=>console.error("error:"+e));let s=document.querySelector(".container-upcoming");var l=i("eswKy");let c=document.querySelector(".weekly-trends_gallery");(0,l.createCardsCatalog)("https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20",c,3),i("aNJCr").getBundleURL("9Ke0H"),i("iE7OH").resolve("f8189");var d={};d=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("fwjs5");var p={};p=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("gN2zH");var u={};u=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("6MLEV");var m={};m=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("5jb7l");var g={};g=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("i61G3");var f={};f=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("druy7");var v={};v=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("fohb3");var h={};h=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("gIrEl");var b={};b=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("dN1uO");var H={};H=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("3Gr2N");let y=document.querySelector(".students-overlay audio"),_=[{studentName:"Mikhail Sharaevsky",position:"Team-Lead, Scrum Master",photo:a(d)},{studentName:"Yaroslav Puhach",position:"Front-end developer",photo:a(p)},{studentName:"Natalia Kalchenko",position:"Front-end developer",photo:a(u)},{studentName:"Iryna Badenskova",position:"Front-end developer",photo:a(m)},{studentName:"Yana Konovalova",position:"Front-end developer",photo:a(g)},{studentName:"Andriy Vorozhbit",position:"Front-end developer",photo:a(f)},{studentName:"Oleksandr Neskroba",position:"Front-end developer",photo:a(v)},{studentName:"Hanna Pokamiestova",position:"Front-end developer",photo:a(h)},{studentName:"Maksym Dimekhin",position:"Front-end developer",photo:a(b)},{studentName:"Volodymyr Poliakov",position:"Front-end developer",photo:a(H)}],N=document.querySelector(".goit-students"),E=document.querySelector(".footer-students");N.addEventListener("click",e=>{let t;e.preventDefault(),t=_.map(({studentName:e,position:t,photo:a})=>`<div class="film-card">
    <img class="film-card__poster" src=${a} alt=${e} />
    <div class="film-card__wrapper">
        <h3 class="film-card__film-name">${e}</h3>
        <div class="film-card__film-info">
            <div class="film-card__genre-year-wrapper">
                <span class="film-card__genre">${t}</span>
                <span></span>
                <span class="film-card__year"></span>
            </div>
            
        </div>
    </div>
</div>`).join(""),E.innerHTML=t,function(){let e=document.querySelector(".students-overlay");e.classList.toggle("visually-hidden"),y.play(),function(e){let t=document.querySelector(".students-modal-close-btn");t.addEventListener("click",()=>{e.classList.add("visually-hidden"),y.pause()})}(e)}()})}();
//# sourceMappingURL=index.e9232953.js.map
