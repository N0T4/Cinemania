!function(){var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},t=n.parcelRequired7c6;null==t&&((t=function(n){if(n in e)return e[n].exports;if(n in o){var t=o[n];delete o[n];var a={id:n,exports:{}};return e[n]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+n+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(n,e){o[n]=e},n.parcelRequired7c6=t),t.register("dzRKM",(function(e,o){"use strict";var t=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n)return n;throw new Error("unable to locate global object")}();e.exports=o=t.fetch,t.fetch&&(o.default=t.fetch.bind(t)),o.Headers=t.Headers,o.Request=t.Request,o.Response=t.Response}));function a(n,e){return n=Math.ceil(n),e=Math.floor(e),Math.floor(Math.random()*(e-n+1))+n}t("dzRKM")("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM"}}).then((function(n){return n.json()})).then((function(n){if(n.results.length>=1){var e=a(1,20),o=n.results[e],t=function(n){var e=n.data;return'<div class="upcoming-card">\n <div class="upcoming-foto">\n<picture class="upcoming-load-foto">\n      <source srcset="https://image.tmdb.org/t/p/original/'.concat(e.backdrop_path,'" media="(min-width: 1200px)" class="upcoming-foto-desktop" loading="lazy"/>\n      <source srcset="https://image.tmdb.org/t/p/original/').concat(e.backdrop_path,'" media="(min-width: 768px)" class="upcoming-foto-tablet" loading="lazy"/>\n      <source srcset="https://image.tmdb.org/t/p/original/').concat(e.poster_path,'" media="(min-width: 320px)" class="upcoming-foto-mobile" loading="lazy"/>\n       <img src="https://image.tmdb.org/t/p/original/').concat(e.poster_path,'" alt="Poster film" style="width: 805px" loading="lazy"/>\n    </picture>\n</div>\n  </div>\n  <div class="upcoming-info">\n          <h2 class="upcoming-title-film">').concat(e.title,'</h2>\n <div class="upcoming-movie">\n                <div class="upcoming-info-left">\n                    <div class="upcoming-release">\n                        <ul class="upcoming-ul-text">\n                        <div class="upcoming-colomb">\n                         <li class="upcoming-li-text"><p class="upcoming-text"> <span class ="upcoming-black">Release date</span> <span class="upcoming-release-data">').concat(e.release_date,'</span></p></li>\n                        <li class="upcoming-li-text"><p class="upcoming-text"><span class ="upcoming-black">Vote/Votes</span>\n<div class="upcoming-info-votes"><span class="upcoming-white">').concat(e.vote_average,'</span> <span\n                                class="slash">/</span>\n                            <span class="upcoming-white">\n                               ').concat(e.vote_count,'</span> </div> </p></li>\n                        </div>\n                        <div>\n                        <li class="upcoming-li-text"> <p class="upcoming-text"> <span class ="upcoming-black">Popularity</span> <span class="upcoming-popularity">').concat(e.popularity,'</span> </p></li>\n                        <li class="upcoming-li-text"> <p class="upcoming-text"><span class ="upcoming-black">Genre</span> <span class="upcoming-genre">').concat(e.genreNames,'</span> </p></li>\n                        </ul>\n                        </div>\n            <h2 class="upcoming-about">ABOUT</h2>\n            <p class="upcoming-overview">').concat(e.overview,'</p>\n            <button class="upcoming-button" type="button">Add to Library</button>\n        </div>')}({data:o});i.insertAdjacentHTML("beforeend",t),console.log(o.title);var s=o.genre_ids;console.log(s[1]),console.log(n.results.length)}console.log(n)})).catch((function(n){return console.error("error:"+n)})),console.log(a(1,20));var i=document.querySelector(".container-upcoming");var s=t("eswKy"),c=document.querySelector(".weekly-trends_gallery");(0,s.createCardsCatalog)("https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20",c,3)}();
//# sourceMappingURL=index.19d17645.js.map
