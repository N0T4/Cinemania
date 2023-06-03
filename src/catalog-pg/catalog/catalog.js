import img from '../../images/no-poster-img.png';
import renderPhotoCard from '../../common/card/card.js';
const catalogElement = document.querySelector('.catalog-section');

const catalogURL =
  'https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20';
const filmGenres = [
  { id: 28, name: 'Action' },
  { id: 12, name: 'Adventure' },
  { id: 16, name: 'Animation' },
  { id: 35, name: 'Comedy' },
  { id: 80, name: 'Crime' },
  { id: 99, name: 'Documentary' },
  { id: 18, name: 'Drama' },
  { id: 10751, name: 'Family' },
  { id: 14, name: 'Fantasy' },
  { id: 36, name: 'History' },
  { id: 27, name: 'Horror' },
  { id: 10402, name: 'Music' },
  { id: 9648, name: 'Mystery' },
  { id: 10749, name: 'Romance' },
  { id: 878, name: 'Science Fiction' },
  { id: 10770, name: 'TV Movie' },
  { id: 53, name: 'Thriller' },
  { id: 10752, name: 'War' },
  { id: 37, name: 'Western' },
];

createCardsCatalog(catalogURL);

function createCardsCatalog(URL) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYyYWMyZWNiZjNmYjk1YWM5Mzc1ZWNmMDY1Y2M5NiIsInN1YiI6IjY0Nzg1NDRhMDc2Y2U4MDBjNTBhZDZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dj9JHo6BS7b-nDH8R0SXWEYbjX-5KPxmVhRCe0GPRME',
    },
  };

  fetch(URL, options)
    .then(response => response.json())
    .then(response => {
      response.results.forEach(
        ({ title, poster_path, genre_ids, release_date, vote_average }) => {
          let genresInCard = getGenresToFilmCard(genre_ids);
          let filmYear = getFilmYear(release_date);
          let filmRaiting = getRating(vote_average);

          let filmInfoObject = {
            title,
            fullPath: poster_path
              ? 'https://image.tmdb.org/t/p/w500' + poster_path
              : img,
            genresInCard,
            filmYear,
            filmRaiting,
          };

          renderPhotoCard(filmInfoObject, catalogElement);
        }
      );
    })
    .catch(err => console.error(err));
}

function getGenresToFilmCard(genresArray) {
  let firstGenre = filmGenres.find(el => el.id === genresArray[0]);
  let secondGenre = filmGenres.find(el => el.id === genresArray[1]);

  if (firstGenre === undefined) {
    firstGenre = {};
    firstGenre.name = '...';
  }
  if (secondGenre === undefined) {
    secondGenre = {};
    secondGenre.name = '';
  }
  return firstGenre.name + ', ' + secondGenre.name;
}

function getFilmYear(date) {
  if (!date) {
    return '...';
  }
  date = date.split('-');
  console.log(date[0]);
  return date[0];
}

function getRating(ratingData) {
  ratingData = ratingData.toFixed(1);
  return `${ratingData * 10}%`;
}
