!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},a={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in i)return i[e].exports;if(e in a){var n=a[e];delete a[e];var t={id:e,exports:{}};return i[e]=t,n.call(t.exports,t,t.exports),t.exports}var o=Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,i){a[e]=i},e.parcelRequired7c6=n),n.register("dzRKM",function(i,a){"use strict";var n=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw Error("unable to locate global object")}();i.exports=a=n.fetch,n.fetch&&(a.default=n.fetch.bind(n)),a.Headers=n.Headers,a.Request=n.Request,a.Response=n.Response});let t=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}];n("dzRKM")("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM"}}).then(e=>e.json()).then(e=>{if(e.results.length>=1){var i,a;let n=(a=20,i=Math.ceil(i=1),Math.floor(Math.random()*((a=Math.floor(a))-i+1))+i),s=e.results[n],l=function({data:e}){let i=function(e){let i=e.map(e=>{let i=t.find(i=>i.id===e);return i.name});return i.join(", ")}(e.genre_ids);return`<div class="upcoming-card">
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
                        <li class="upcoming-li-text"> <p class="upcoming-genreNames"><span class ="upcoming-black">Genre</span> <span class="upcoming-genre">${i}</span> </p></li>
                        </ul>
                        </div>
            <h2 class="upcoming-about">ABOUT</h2>
            <p class="upcoming-overview">${e.overview}</p>
            <button type="button" class="film-button js-watch">Add to my library</button>
        </div>`}({data:s});o.insertAdjacentHTML("beforeend",l)}}).catch(e=>console.error("error:"+e));let o=document.querySelector(".container-upcoming");var s=n("eswKy");let l=document.querySelector(".weekly-trends_gallery");(0,s.createCardsCatalog)("https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20",l,3),n("j0U4W")}();
//# sourceMappingURL=index.d4e84a97.js.map
