!function(){function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function o(e){return e&&e.__esModule?e.default:e}var n={},a={},i=t.parcelRequired7c6;function s(e,t){return e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1))+e}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequired7c6=i),i.register("iE7OH",function(t,o){"use strict";e(t.exports,"register",function(){return n},function(e){return n=e}),e(t.exports,"resolve",function(){return a},function(e){return a=e});var n,a,i={};n=function(e){for(var t=Object.keys(e),o=0;o<t.length;o++)i[t[o]]=e[t[o]]},a=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i.register("dzRKM",function(e,o){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw Error("unable to locate global object")}();e.exports=o=n.fetch,n.fetch&&(o.default=n.fetch.bind(n)),o.Headers=n.Headers,o.Request=n.Request,o.Response=n.Response}),i.register("aNJCr",function(t,o){e(t.exports,"getBundleURL",function(){return n},function(e){return n=e});"use strict";var n,a={};n=function(e){var t=a[e];return t||(t=function(){try{throw Error()}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(e)return(""+e[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),a[e]=t),t}}),i("iE7OH").register(JSON.parse('{"9Ke0H":"index.c2efcf77.js","f8189":"no-poster-img.62a23e4a.png","3t0Xz":"sharaevskiy.35143a91.jpg","inKnv":"puhach.9fcd29bb.jpg","a2S6X":"kalchenko.4449999f.jpg","cO2DS":"badenkova.0180d941.jpg","8SQLW":"konovalova.8c68872a.jpg","4Veom":"vorozhbit.742dabca.jpg","lOGFG":"neskroba.1d97d4f4.jpg","lgNBG":"pokamiestova.3a2c047a.jpg","jbyWq":"dimekhin.750a76c3.jpg","3gejM":"poliakov.34475f55.jpg","g5LES":"catalog.c3edd62e.js","68CEK":"catalog.5c945a5f.js"}')),i("dzRKM")("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM"}}).then(e=>e.json()).then(e=>{if(e.results.length>=1){let t=s(1,20),o=e.results[t],n=function({data:e}){return`<div class="upcoming-card">
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
                        <li class="upcoming-li-text"> <p class="upcoming-text"> <span class ="upcoming-black">Popularity</span> <span class="upcoming-popularity">${e.popularity}</span> </p></li>
                        <li class="upcoming-li-text"> <p class="upcoming-text"><span class ="upcoming-black">Genre</span> <span class="upcoming-genre">${e.genreNames}</span> </p></li>
                        </ul>
                        </div>
            <h2 class="upcoming-about">ABOUT</h2>
            <p class="upcoming-overview">${e.overview}</p>
            <button class="upcoming-button" type="button">Add to Library</button>
        </div>`}({data:o});r.insertAdjacentHTML("beforeend",n),console.log(o.title);let a=o.genre_ids;console.log(a[1]),console.log(e.results.length)}console.log(e)}).catch(e=>console.error("error:"+e)),console.log(s(1,20));let r=document.querySelector(".container-upcoming");var l=i("eswKy");let c=document.querySelector(".weekly-trends_gallery");(0,l.createCardsCatalog)("https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20",c,3),i("aNJCr").getBundleURL("9Ke0H"),i("iE7OH").resolve("f8189");var d={};d=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("3t0Xz");var p={};p=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("inKnv");var u={};u=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("a2S6X");var g={};g=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("cO2DS");var m={};m=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("8SQLW");var f={};f=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("4Veom");var v={};v=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("lOGFG");var h={};h=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("lgNBG");var b={};b=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("jbyWq");var H={};H=i("aNJCr").getBundleURL("9Ke0H")+i("iE7OH").resolve("3gejM");let _=[{studentName:"Mikhail Sharaevsky",position:"Team-Lead, Scrum Master",photo:o(d)},{studentName:"Yaroslav Puhach",position:"Front-end developer",photo:o(p)},{studentName:"Natalia Kalchenko",position:"Front-end developer",photo:o(u)},{studentName:"Iryna Badenskova",position:"Front-end developer",photo:o(g)},{studentName:"Yana Konovalova",position:"Front-end developer",photo:o(m)},{studentName:"Andriy Vorozhbit",position:"Front-end developer",photo:o(f)},{studentName:"Oleksandr Neskroba",position:"Front-end developer",photo:o(v)},{studentName:"Hanna Pokamiestova",position:"Front-end developer",photo:o(h)},{studentName:"Maksym Dimekhin",position:"Front-end developer",photo:o(b)},{studentName:"Volodymyr Poliakov",position:"Front-end developer",photo:o(H)}],y=document.querySelector(".goit-students"),N=document.querySelector(".footer-students");y.addEventListener("click",e=>{let t;e.preventDefault(),t=_.map(({studentName:e,position:t,photo:o})=>`<div class="film-card">
    <img class="film-card__poster" src=${o} alt=${e} />
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
</div>`).join(""),N.innerHTML=t,function(){let e=document.querySelector(".students-overlay");e.classList.toggle("visually-hidden"),function(e){let t=document.querySelector(".students-modal-close-btn");t.addEventListener("click",()=>{e.classList.add("visually-hidden")})}(e)}()})}();
//# sourceMappingURL=index.c2efcf77.js.map