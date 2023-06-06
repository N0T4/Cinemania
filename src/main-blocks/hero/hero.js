import SimpleLightbox from "simplelightbox";
import {getUser, getTrailer} from "./API"

console.log(getUser);
console.log(getTrailer);

const hero = document.querySelector(".hero")

window.addEventListener("resize", updateCinemaText);

function updateCinemaText() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const cinemaText = document.getElementById("cinema-text");
  
    if (screenWidth >= 768) {
      cinemaText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
    }  else {
      cinemaText.textContent = "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
    }
  }
updateCinemaText();

getUser().then(renderHero).catch(error=> console.log(error))

function renderHero({results}){
    const randomNumber = Math.floor(Math.random() * (results.length- 1)) ;
    console.log(randomNumber);
    const movieTheDay = results[randomNumber]
    console.log(movieTheDay);

    // overview
    // original_name
    // backdrop_path
    // poster_path
    // title
    // release_date
    // id

    hero.innerHTML="";
    hero.style.backgroundImage = `linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/original${movieTheDay.backdrop_path})`;
   
    const markUp = `
    <div class="hero-wrapper">
        <div class="hero-wrapper-text">
            <h1 class="title">${movieTheDay.original_title || movieTheDay.name }</h1>
            <div id="rating-stars"></div>
            <p class="text">${movieTheDay.overview.slice(0, 250) + '...'} </p>
        </div>
        <div class="hero-btn-wrapper">
            <button type="button" class="button hero-btn hero-button-js">Watch trailer</button>
            <button type="button" class="button button-js">More details</button>
        </div>
    </div>
    `
    hero.innerHTML = markUp;
    hero.classList.add(".hero-js")
    let rating = movieTheDay.vote_average;
    showRating(rating)

}

function showRating(rating) {
  console.log("rating inside showRating", rating);
  const filledStarsWidth = (rating / 10) * 100;
  let starsHTML = '<div class="star filled-star" style="width: ' + filledStarsWidth + '%;">';
  starsHTML += '&#9733;'.repeat(5);
  starsHTML += '</div>';
  const ratingStarsElement = document.getElementById('rating-stars');
  ratingStarsElement.innerHTML = starsHTML;
}
