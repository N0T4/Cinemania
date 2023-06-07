import { createCardsCatalog } from '../../common/card/card.js';
import { renderPhotoCard } from '../../common/card/card.js';
import Notiflix from 'notiflix'
 Notiflix.Notify.init({
  info: {
    background: 'var(--orange)',
    backOverlayColor: 'var(--black)',
    textColor: 'var(--black)',
  },
});
import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.catalog-search-form'),
  input: document.querySelector('.catalog-search-input'),
  selectYear: document.getElementById('selectYear'),
  selectCountry: document.getElementById('selectCountry'),
  clearInputBtn: document.querySelector('.catalog-cross-clear-btn'),
  searchBtn: document.getElementById('searchBtn'),
  messageOopsNotFind: document.querySelector('.oops-not-find'),
  messageСhooseMovie: document.querySelector('.choose-movie'),
};
const newCatalogElement = document.querySelector('.catalog-section');
// console.log(refs.form);
// console.log(refs.input);
// console.log(refs.selectYear);
// console.log(refs.selectCountry);
// console.log(refs.clearInputBtn);
// console.log(refs.searchBtn);
// console.log(refs.messageOopsNotFind);
// console.log(refs.messageСhooseMovie);

refs.input.addEventListener('input', throttle(onInput, 1000));

function onInput(e) {
  refs.clearInputBtn.classList.remove('catalog-cross-clear-btn-hide');
  const inputValue = e.target.value.trim();
  console.log(inputValue);
  if (inputValue === '') {
    Notiflix.Notify.info('Please, enter the name of the movie');
    refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
    refs.messageСhooseMovie.classList.remove('choose-movie-hide');
    refs.messageOopsNotFind.classList.add('oops-not-find-hide');
    newCatalogElement.innerHTML = '';
  }
}

refs.form.addEventListener('submit', onSubmit);

let searchQueryInput = '';
let selectYear = '';
let selectCountry = '';

function onSubmit(event) {
  event.preventDefault();
  searchQueryInput = event.currentTarget.elements.searchQuery.value.trim();
  selectYear = event.currentTarget.elements.selectedYear.value;
  selectCountry = event.currentTarget.elements.selectedCountry.value.toString();

  // console.log(searchQueryInput);
  // console.log(selectYear);
  // console.log(selectCountry);
  if (searchQueryInput !== '') {
    const catalogURL = `https://api.themoviedb.org/3/search/movie?query=${searchQueryInput}&include_adult=false&language=en-US&primary_release_year=${selectYear}&region${selectCountry}page=1`;
    renderMovie(catalogURL);
  }
  if (
    searchQueryInput === '' &&
    selectYear !== 'year' // selectCountry === 'country'
  ) {
    const onlyYearURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${selectYear}&sort_by=popularity.desc`;
    renderMovie(onlyYearURL);
  }
  // else {
  //   //   refs.messageСhooseMovie.classList.remove('choose-movie-hide');
  //   //   newCatalogElement.innerHTML = '';
  //   // }
  // }
}

refs.clearInputBtn.addEventListener('click', onClickClearCrossBtn);

function onClickClearCrossBtn(e) {
  e.preventDefault();
  // console.log('клікнули по хрестику');
  refs.form.reset();
  refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
  refs.messageСhooseMovie.classList.add('choose-movie-hide');
  refs.messageOopsNotFind.classList.add('oops-not-find-hide');
  const catalogTrendingURL =
    'https://api.themoviedb.org/3/trending/all/week?page=1';
  newCatalogElement.innerHTML = '';
  createCardsCatalog(catalogTrendingURL, newCatalogElement);
}

function getFilm(URL) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2NhM2NiZjM4NDk2MGQ2NDEwN2EzYzVkNzAxNTViOCIsInN1YiI6IjY0N2E3OTYyY2FlZjJkMDBkZjg4MGNhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9FyD_Xuprwhf78eJyu1Ew5c52DJhC0pkIeyoylTof04',
    },
  };

  fetch(URL, options)
    .then(response => response.json())
    .then(({ results }) => {
      console.log(results);
      if (results.length === 0) {
        console.log('oops');
        newCatalogElement.innerHTML = '';
        refs.messageСhooseMovie.classList.add('choose-movie-hide');
        refs.messageOopsNotFind.classList.remove('oops-not-find-hide');
      }
      results.forEach(filmInfoObject => {
        renderPhotoCard(filmInfoObject, newCatalogElement);
      });
    })
    .catch(err => console.error(err));
}
function renderMovie(URL) {
  newCatalogElement.innerHTML = '';

  refs.messageСhooseMovie.classList.add('choose-movie-hide');
  refs.messageOopsNotFind.classList.add('oops-not-find-hide');
  refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
  getFilm(URL);

  refs.form.reset();
}


