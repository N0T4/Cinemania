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
import { Unsplashapi } from './api.js';

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
console.log(pageForPagination);

const services = new Unsplashapi();

services
  .getTrendingMovieData(pageForPagination)
  .then(({ results, total_results }) => {
    console.log(results);
    console.log(total_results);
    console.log(newCatalogElement);
    results.forEach(result => {
      renderPhotoCard(result, newCatalogElement);
      console.log('успіх тренди');
    });
  })
  .catch(error => {
    console.log(error);
  });

pagination.on('afterMove', getByTrendingMovie);

function getByTrendingMovie(e) {
  const currentPage = e.page;
  console.log(currentPage);
  services
    .getTrendingMovieData(currentPage)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      newCatalogElement.innerHTML = '';
      results.forEach(result => {
        renderPhotoCard(result, newCatalogElement);
        console.log('успіх');
      });
    })
    .catch(error => console.log(error));
}

refs.form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();

  pagination.off('afterMove', getByTrendingMovie);

  newCatalogElement.innerHTML = '';

  searchQueryInput = event.currentTarget.elements.searchQuery.value.trim();
  selectYear = event.currentTarget.elements.selectedYear.value;
  selectCountry = event.currentTarget.elements.selectedCountry.value.toString();

  console.log(searchQueryInput);
  console.log(selectYear);
  console.log(selectCountry);

  services.searchQuery = searchQueryInput;
  services.selectYear = selectYear;
  services.selectCountry = selectCountry;

  pagination.off('afterMove', getRenderByQuery);
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

        // pagination.reset(total_results);
        console.log(results);
        console.log(total_results);
        console.log(newCatalogElement);
        newCatalogElement.innerHTML = '';
        results.forEach(result => {
          renderPhotoCard(result, newCatalogElement);
          console.log('успіх пошук квері');
        });
      })
      .catch(error => console.log(error));
    refs.messageOopsNotFind.classList.add('oops-not-find-hide');
    refs.messageСhooseMovie.classList.add('choose-movie-hide');
    refs.pagination.classList.remove('tui-pagination-hide');
    pagination.on('afterMove', getRenderByQuery);
  } else if (
    searchQueryInput === '' &&
    selectYear !== 'year' &&
    selectCountry == 'country'
  ) {
    pagination.off('afterMove', getRenderByQuery);

    const onlyYearURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${selectYear}&sort_by=popularity.desc`;
    console.log(selectYear);
    services
      .getFilmYearData(onlyYearURL, pageForPagination)
      .then(({ results, total_results }) => {
        // pagination.reset(total_results);
        console.log(results);
        console.log(total_results);
        console.log(newCatalogElement);
        newCatalogElement.innerHTML = '';
        results.forEach(result => {
          refs.messageOopsNotFind.classList.add('oops-not-find-hide');
          refs.pagination.classList.remove('tui-pagination-hide');
          renderPhotoCard(result, newCatalogElement);
          console.log('успіх перша сторінка рік');
        });
      })
      .catch(error => console.log(error));

    pagination.on('afterMove', getRenderByYear);
  }
  
}


function getRenderByQuery(event) {
  const currentPage = event.page;
  services
    .getMoviesByQueryData(currentPage)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      newCatalogElement.innerHTML = '';
      results.forEach(result => {
        renderPhotoCard(result, newCatalogElement);
        console.log('успіх наступна сторінка квері');
      });
    })
    .catch(error => console.log(error));
}
function getRenderByYear(event) {
  const currentPage = event.page;
  console.log(currentPage)
  const onlyYearURL = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&primary_release_year=${selectYear}&page=${currentPage}sort_by=popularity.desc`;
  services
    .getFilmYearData(onlyYearURL, currentPage)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      newCatalogElement.innerHTML = '';
      results.forEach(result => {
        renderPhotoCard(result, newCatalogElement);
        console.log('успіх рік пагінація');
      });
    })
    .catch(error => console.log(error));
}

refs.clearInputBtn.addEventListener('click', onClickClearCrossBtn);

function onClickClearCrossBtn(e) {
  e.preventDefault();
  // console.log('клікнули по хрестику');
  refs.form.reset();
  refs.clearInputBtn.classList.add('catalog-cross-clear-btn-hide');
  refs.messageСhooseMovie.classList.add('choose-movie-hide');
  refs.messageOopsNotFind.classList.add('oops-not-find-hide');

  services
    .getTrendingMovieData(pageForPagination)
    .then(({ results, total_results }) => {
      console.log(results);
      console.log(total_results);
      console.log(newCatalogElement);
      results.forEach(result => {
        renderPhotoCard(result, newCatalogElement);
        console.log('успіх');
      });
    })
    .catch(error => {
      console.log(error);
    });
  refs.pagination.classList.remove('tui-pagination-hide');
  pagination.on('afterMove', getByTrendingMovie);
  }