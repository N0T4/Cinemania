import { renderPhotoCard } from '../../common/card/card.js';
import Notiflix from 'notiflix';
Notiflix.Notify.init({
  info: {
    background: 'var(--orange)',
    backOverlayColor: 'var(--black)',
    textColor: 'var(--black)',
  },
});
import throttle from 'lodash.throttle';
import createPagination from '../pagination/pagination.js';
import { MovieApi } from './api.js';

const refs = {
  form: document.querySelector('.catalog-search-form'),
  input: document.querySelector('.catalog-search-input'),
  selectYear: document.getElementById('selectYear'),
  selectCountry: document.getElementById('selectCountry'),
  clearInputBtn: document.querySelector('.catalog-cross-clear-btn'),
  searchBtn: document.getElementById('searchBtn'),
  messageOopsNotFind: document.querySelector('.oops-not-find'),
  messageСhooseMovie: document.querySelector('.choose-movie'),
  pagination: document.querySelector('.tui-pagination'),
};
const newCatalogElement = document.querySelector('.catalog-section');

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
    refs.pagination.classList.add('tui-pagination-hide');
    newCatalogElement.innerHTML = '';
  }
}

const pagination = createPagination();
const pageForPagination = pagination.getCurrentPage();
// console.log(pageForPagination);

const services = new MovieApi();

services
  .getTrendingMovieData(pageForPagination)
  .then(({ results, total_results }) => {
    // console.log(results);
    // console.log(total_results);
    // console.log(newCatalogElement);
    renderFromResults(results);
  })
  .catch(error => {
    console.log(error);
  });
pagination.on('afterMove', getByTrendingMovie);

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  pagination.off('afterMove', getByTrendingMovie);
  // pagination.off('afterMove', getRenderByQuery);

  const searchQueryInput = event.currentTarget.elements.searchQuery.value.trim();
  const selectYear = event.currentTarget.elements.selectedYear.value;
  const selectCountry = event.currentTarget.elements.selectedCountry.value.toString();

  // console.log(searchQueryInput);
  // console.log(selectYear);
  // console.log(selectCountry);

  services.searchQuery = searchQueryInput;
  services.selectYear = selectYear;
  services.selectCountry = selectCountry;

  console.log(pageForPagination);
  if (searchQueryInput !== '') {
    services
      .getMoviesByQueryData(pageForPagination)
      .then(({ results, total_results }) => {
        if (results.length === 0) {
          console.log('oops');
          newCatalogElement.innerHTML = '';
          refs.messageСhooseMovie.classList.add('choose-movie-hide');
          refs.messageOopsNotFind.classList.remove('oops-not-find-hide');
          refs.pagination.classList.add('tui-pagination-hide');
          refs.form.reset();
          refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
        }

        pagination.reset(total_results);
        // console.log(results);
        // console.log(total_results);
        // console.log(newCatalogElement);
        renderFromResults(results);
      })
      .catch(error => console.log(error));
    hideNotificationShowPagination();

    pagination.on('afterMove', getRenderByQuery);
  } else if (searchQueryInput === '') {
    services
      .getFilmYearData(pageForPagination)
      .then(({ results, total_results }) => {
        pagination.reset(total_results);
        console.log(results);
        console.log(total_results);
        console.log(newCatalogElement);
        renderFromResults(results);
        // console.log('успіх перша сторінка рік');
      })
      .catch(error => console.log(error));
    hideNotificationShowPagination();

    pagination.on('afterMove', getRenderByYear);
  }
}

refs.clearInputBtn.addEventListener('click', onClickClearCrossBtn);

function onClickClearCrossBtn(e) {
  e.preventDefault();
  // console.log('клікнули по хрестику');
  refs.form.reset();
  refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
  hideNotificationShowPagination();

  services
    .getTrendingMovieData(pageForPagination)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      pagination.reset(total_results);
      renderFromResults(results);
      //  console.log('успіх');
    })
    .catch(error => {
      console.log(error);
    });

  pagination.on('afterMove', getByTrendingMovie);
}

function renderFromResults(results) {
  newCatalogElement.innerHTML = '';
  results.forEach(result => {
    renderPhotoCard(result, newCatalogElement);
    // console.log('успішно зарендерилось');
  });
}

function getByTrendingMovie(e) {
  const currentPage = e.page;
  console.log(currentPage);
  services
    .getTrendingMovieData(currentPage)
    .then(({ results, total_results }) => {
      // console.log(results);
      // console.log(total_results);
      // console.log(newCatalogElement);
      renderFromResults(results);
    })
    .catch(error => console.log(error));
}
function getRenderByQuery(event) {
  const currentPage = event.page;
  services
    .getMoviesByQueryData(currentPage)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      renderFromResults(results);
      // console.log('успіх наступна сторінка по пошуку');
    })
    .catch(error => console.log(error));
}

function getRenderByYear(event) {
  const currentPage = event.page;
  services
    .getFilmYearData(currentPage)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      renderFromResults(results);

      // console.log('успіх рік пагінація');
    })
    .catch(error => console.log(error));
}

function hideNotificationShowPagination() {
  refs.messageСhooseMovie.classList.add('choose-movie-hide');
  refs.messageOopsNotFind.classList.add('oops-not-find-hide');
  refs.pagination.classList.remove('tui-pagination-hide');
}
