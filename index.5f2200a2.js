!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=e.parcelRequired7c6;function s(e,t){return e=Math.ceil(e),Math.floor(Math.random()*((t=Math.floor(t))-e+1))+e}null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var i=o[e];delete o[e];var s={id:e,exports:{}};return t[e]=s,i.call(s.exports,s,s.exports),s.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){o[e]=t},e.parcelRequired7c6=i),i.register("dzRKM",function(t,o){"use strict";var i=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==e)return e;throw Error("unable to locate global object")}();t.exports=o=i.fetch,i.fetch&&(o.default=i.fetch.bind(i)),o.Headers=i.Headers,o.Request=i.Request,o.Response=i.Response}),i("dzRKM")("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",{method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGE2Mzc1Njc2Yzg4MmNkNzI2M2JlODllNDgyNzZhYSIsInN1YiI6IjY0N2IwODA1Y2FlZjJkMDBkZjg4NmEyYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y3unbtieg939bn1NjBgnTgTaFVHKi0UnTf-vDtqQanM"}}).then(e=>e.json()).then(e=>{if(e.results.length>=1){let t=s(1,20),o=e.results[t],i=function({data:e}){return`<div class="upcoming-card">
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
        </div>`}({data:o});n.insertAdjacentHTML("beforeend",i),console.log(o.title);let a=o.genre_ids;console.log(a[1]),console.log(e.results.length)}console.log(e)}).catch(e=>console.error("error:"+e)),console.log(s(1,20));let n=document.querySelector(".container-upcoming");var a=i("eswKy");let l=document.querySelector(".weekly-trends_gallery");(0,a.createCardsCatalog)("https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20",l,3)}();
//# sourceMappingURL=index.5f2200a2.js.map
