import SimpleLightbox from 'simplelightbox';
import { getUser, getTrailer } from './API';
import { onOpenModal } from '../../common/modal/film-overview/overview';

const hero = document.querySelector('.hero');

window.addEventListener('resize', updateCinemaText);

function updateCinemaText() {
  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const cinemaText = document.getElementById('cinema-text');

  if (screenWidth >= 768) {
    cinemaText.textContent =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers. Decorate your space, choose your films, and stock up on snacks for the full experience.";
  } else {
    cinemaText.textContent =
      "Is a guide to creating a personalized movie theater experience. You'll need a projector, screen, and speakers.";
  }
}

updateCinemaText();

getUser()
  .then(renderHero)
  .catch(error => console.log(error));

function renderHero({ results }) {
  const randomNumber = Math.floor(Math.random() * (results.length - 1));
  const movieTheDay = results[randomNumber];

  hero.innerHTML = '';
  hero.style.backgroundImage = `linear-gradient(86.77deg, #111111 30.38%, rgba(17, 17, 17, 0) 65.61%), url(https://image.tmdb.org/t/p/original${movieTheDay.backdrop_path})`;

  const markUp = `
    <div class="hero-wrapper">
        <div class="hero-wrapper-text">
            <h1 class="title">${
              movieTheDay.original_title || movieTheDay.name
            }</h1>
            <div id="rating-stars"></div>
            <p class="text">${movieTheDay.overview.slice(0, 250) + '...'} </p>
        </div>
        <div class="hero-btn-wrapper" data-id=${movieTheDay.id}>
            <button type="button" class="button hero-btn hero-button-js">Watch trailer</button>
            <button type="button" class="button button-js modal-btn">More details</button>
        </div>
    </div>
    `;
  hero.innerHTML = markUp;
  hero.classList.add('hero-js');
  let rating = movieTheDay.vote_average;
  showRating(rating);

  const detailsButton = document.querySelector('.modal-btn');
  detailsButton.addEventListener('click', onOpenModal);
}

function showRating(rating) {
  const filledStarsWidth = (rating / 10) * 100;
  let starsHTML = '<div class="star filled-star" style="width: ' + filledStarsWidth + '%;">';
  starsHTML += '&#9733;'.repeat(5);
  starsHTML += '</div>';
  const ratingStarsElement = document.getElementById('rating-stars');
  ratingStarsElement.innerHTML = starsHTML;
}

// function watchTrailer({ data }) {
//     const watchButton = document.querySelector('.hero-button-js');
//     const trailers = data.results;
//     if (trailers.length !== 0) {
//         const randomIndex = Math.floor(Math.random() * (trailers.length - 1));
//         const randomTrailer = trailers[randomIndex];
//         watchButton.addEventListener('click', () => {
//             const instance = basicLightbox.create(`
//             <iframe width="560" height="315" src="https://www.youtube.com/embed/${randomTrailer.key}" frameborder="0"></iframe>
//             <iframe
//             id="vimeo-player"
//             src="https://player.vimeo.com/video/236203659"
//             width="640"
//             height="360"
//             frameborder="0"
//             allowfullscreen
//             allow="autoplay; encrypted-media"
//           ></iframe>
//             `);
//             instance.show();
//         });
//     }
// }
