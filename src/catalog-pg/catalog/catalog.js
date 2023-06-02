import cardTemplate from '../../common/card/card.hbs';
import img from '../../images/no-poster-img.png';
// async function renderPhotoCards(array) {
//   console.log(array);
//   galleryEl.insertAdjacentHTML(
//     'beforeend',
//     array
//       .map(item => {
//         return cardTemplate(item);
//       })
//       .join('')
//   );
// }
const catalogElement = document.querySelector('.catalog-section');
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
let obj = {
  data: img,
};
function renderPhotoCards(imgData) {
  //   console.log(imgData);
  catalogElement.insertAdjacentHTML('beforeend', cardTemplate(imgData));
}
function renderPhotoCards2(filmData = {}) {
  let cardMarkup = `<a class="film-card">
  <img class="film-card__poster" src=${img} alt="" />
  <div class="film-card__wrapper">
    <h3 class="film-card__film-name">film-name</h3>
    <div class="film-card__film-info">
      <div class="film-card__genre-year-wrapper">
        <span class="film-card__genre">fantazy</span>
        <span>|</span>
        <span class="film-card__year">2023</span>
      </div>
      <span class="film-card__raiting" title="5">
        <div class="raiting-body">
          <div class="rating-active"></div>
        </div>
      </span>
    </div>
  </div>
</a>`;
  catalogElement.insertAdjacentHTML('beforeend', cardMarkup);
}

// renderPhotoCards(obj);
// renderPhotoCards2();

async function fetchTrendMovies() {
  let URL = `'https://api.themoviedb.org/3/trending//movie/day?language=en-US&api_key=9062ac2ecbf3fb95ac9375ecf065cc96'`;
  let films = await axios({
    method: 'get',
    url: URL,
  });
  console.log(films);
}
// fetchTrendMovies();

function fetchTrendMovies2() {
  let data = fetch(URL)
    .then(res => res.json())
    .then(console.log);
}
// fetchTrendMovies2();

function test() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYyYWMyZWNiZjNmYjk1YWM5Mzc1ZWNmMDY1Y2M5NiIsInN1YiI6IjY0Nzg1NDRhMDc2Y2U4MDBjNTBhZDZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dj9JHo6BS7b-nDH8R0SXWEYbjX-5KPxmVhRCe0GPRME',
    },
  };

  fetch(
    'https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20',
    options
  )
    .then(response => response.json())
    .then(response => {
      const { title, poster_path } = response.results[0]
        ? response.results[0]
        : { title: 'No Name', poster_path: false };

      let filmInfoObg = {
        title,
        fullPath: poster_path
          ? 'https://image.tmdb.org/t/p/original' + poster_path
          : img,
      };
      renderPhotoCards(filmInfoObg);
    })
    .catch(err => console.error(err));
}
// test();
function test2() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDYyYWMyZWNiZjNmYjk1YWM5Mzc1ZWNmMDY1Y2M5NiIsInN1YiI6IjY0Nzg1NDRhMDc2Y2U4MDBjNTBhZDZmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dj9JHo6BS7b-nDH8R0SXWEYbjX-5KPxmVhRCe0GPRME',
    },
  };

  fetch(
    'https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20',
    options
  )
    .then(response => response.json())
    .then(response => {
      console.log('1', response.results);
      response.results.forEach(element => {
        //____________

        const { title, poster_path, genre_ids, release_date, vote_average } =
          element;
        let genresInCard = getGenresToFilmCard(genre_ids);
        let filmYear = getFilmYear(release_date);
        let filmRaiting = getRating(vote_average);

        let filmInfoObg = {
          title,
          fullPath: poster_path
            ? 'https://image.tmdb.org/t/p/w500' + poster_path
            : img,
          genresInCard,
          filmYear,
          filmRaiting,
        };

        renderPhotoCards(filmInfoObg);
      });
    })
    .catch(err => console.error(err));
  //____________
}

test2();

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
