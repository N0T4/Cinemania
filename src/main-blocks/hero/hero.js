import {getUser} from "./API"
import {onOpenModal} from "../../common/modal/film-overview/overview"

import {getTrailer, watchTrailer, openNoTrailerModal} from "../../common/modal/trailer-mod/trailer"



const hero = document.querySelector(".hero")
const button = document.querySelector('.button-js');


window.addEventListener("resize", updateCinemaText);
button.addEventListener('click', ()=>{window.location.href = 'library.html'});

function updateLibraryHero(){
    if (window.location.href.includes('library')) {
        hero.innerHTML = '';
        hero.classList.add("hero-library")
        const libMurkup = `
                <div class="hero-wrapper">
                    <div class="hero-wrapper-text library-hero-wrapper-text">
                        <h1 class="title">Create Your Dream Cinema</h1>
                        <p class="text" >Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks.</p>
                    </div>
                </div>        
        `;
        hero.innerHTML = libMurkup;
      }
}
getUser().then(res =>{
    if(res.results.length === 0){
        updateCinemaText()
    } else{
        if(window.location.href.includes('library')){
            updateLibraryHero()
        }else{
            renderHero(res)
        }
    }
    }).catch(error=> console.log(error))

function renderHero({results}){
    const randomNumber = Math.floor(Math.random() * (results.length- 1)) ;
    const movieTheDay = results[randomNumber];
    // overview
    // original_name
    // backdrop_path
    // id

    hero.innerHTML="";
    hero.style.backgroundImage = `linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/original${movieTheDay.backdrop_path})`;
    const markUp = `
        <div class="hero-wrapper">
            <div class="hero-wrapper-text" >
                <h1 class="title">${movieTheDay.original_title || movieTheDay.name }</h1>
                <div id="rating-stars"></div>
                <p class="text">${movieTheDay.overview.slice(0, 250) + '...'} </p>
            </div>
            <div class="hero-btn-wrapper" data-id=${movieTheDay.id}>
                <button type="button" class="button hero-btn hero-button-js">Watch trailer</button>
                <button type="button" class="button button-js modal-btn">More details</button>
            </div>
        </div>
    `
    hero.innerHTML = markUp;
    hero.classList.add(".hero-js")
    let rating = movieTheDay.vote_average;
    showRating(rating)

    const detailsButton = document.querySelector(".modal-btn")
    detailsButton.addEventListener("click", onOpenModal)

    // getTrailer(movieTheDay.id).then(watchTrailer).catch()
    getTrailer(movieTheDay.id).then(res=>{
        if(res === undefined || res.data.results.length === 0 ||  res.data === undefined){
         openNoTrailerModal()
        }else{
          watchTrailer(res)
        }
    }).catch(error => console.log(error))
    
}
function showRating(rating) {
  const filledStarsWidth = (rating / 10) * 100;
  let starsHTML =
    '<div class="star filled-star" style="width: ' + filledStarsWidth + '%;">';
  starsHTML += '&#9733;'.repeat(5);
  starsHTML += '</div>';
  const ratingStarsElement = document.getElementById('rating-stars');
  ratingStarsElement.innerHTML = starsHTML;
}
function updateCinemaText() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let cinemaText = document.getElementById("cinema-text");
    if(cinemaText === null){
        return
    }
    if (screenWidth >= 768) {
      cinemaText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
    }  else {
      cinemaText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    }
}


