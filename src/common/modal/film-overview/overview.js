import { Notify } from 'notiflix/build/notiflix-notify-aio';
import img from '../../../images/no-poster-img.png';

Notify.init({
  info: {
    background: 'var(--orange)',
    backOverlayColor: 'var(--black)',
    textColor: 'var(--black)',
  },
});

const refs = {
  buttonCloseEl: document.querySelector('.modal-close-btn'),
  backdropEl: document.querySelector('.js-backdrop'),
  modalBodyEl: document.querySelector('.js-modal-body'),
};

async function onOpenModal(event) {
  console.log(event.target);
  try {
    // if (!event.target.closest('.film-card')) {
    //   return;
    // }

    event.preventDefault();

    toggleModal();
    document.addEventListener('keydown', keyBoardPress);
    onScrollHidden();

    const targetEl = event.target;
    const idEl = targetEl.parentElement;

    const movieId = idEl.dataset.id;

    const results = await fetchMovieById(movieId);

    const newResults = createMarkupCardModal(results);
    updateCardModal(newResults);
    prepareMovieToSaving(results);
  } catch (error) {
    console.log(error);
  }
}

function closeBtnClick() {
  toggleModal();
  document.removeEventListener('keydown', keyBoardPress);
  onScroll();
  onClearModalWindow();
}

function keyBoardPress(event) {
  if (event.key === 'Escape') {
    closeBtnClick();
    onScroll();
    onClearModalWindow();
  }
}

function onBackdropClick(event) {
  if (event.target === event.currentTarget) {
    closeBtnClick();
    onScroll();
    onClearModalWindow();
  }
}

refs.buttonCloseEl.addEventListener('click', closeBtnClick);
refs.backdropEl.addEventListener('click', onBackdropClick);

function toggleModal() {
  refs.backdropEl.classList.toggle('is-hidden');
}

function onScroll() {
  document.body.style.overflow = 'scroll';
}

function onScrollHidden() {
  document.body.style.overflow = 'hidden';
}

function onClearModalWindow() {
  refs.modalBodyEl.innerHTML = '';
}

async function fetchMovieById(movieId) {
  try {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2VmZjE2NGZkZTljYjA3ZjFkZmVlMzg5NTI2ZTNlNyIsInN1YiI6IjY0N2NmMWU1MGZiMzk4MDExODBlMDI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmAvfE0gWZjEB37-xgrPZ-zzGTupZmQSUJnDzhkVL-U',
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}`,
      options
    );
    if (!response.ok) {
      throw new Error(
        (refs.modalBodyEl.innerHTML = `<div class="sorry-message">OOPS...We are very sorry! We don't have more information about this movie.</div>`)
      );
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

function createMarkupCardModal({
  genres,
  overview,
  poster_path,
  popularity,
  vote_average,
  vote_count,
  title,
}) {
  let genresEl = genres
    .map(({ name }) => {
      return `${name}`;
    })
    .join(' ');

  if (poster_path === null) {
    const markup = `<div class="film-wrapper">
          <img
            class="film-non-image"
            src="${img}"
            alt="${title}"
            loading="lazy"
          />
          <div class="film-information">
            <h2 class="film-title">${title}</h2>
            <ul>
              <li class="film-item">
                <p class="film-details">Vote / Votes</p>
                <p class="film-info--upper">
                  <span class="film-rating">${vote_average.toFixed(1)}</span>
                  <span class="film-divider"> / </span>
                  <span class="film-vote-count">${vote_count}</span>
                </p>
              </li>
              <li class="film-item">
                <p class="film-details">Popularity</p>
                <p class="film-info--upper">${popularity.toFixed(1)}</p>
              </li>
              <li class="film-item">
                <p class="film-details">Genre</p>
                <p class="film-info--upper">${genresEl}</p>
              </li>
            </ul>
            <h3 class="film-about-title">ABOUT</h3>
            <p class="film-about-text">${overview}</p>
            <button type="button" class="film-button js-watch">
              my library
            </button>
            
          </div>
        </div>`;
    return markup;
  }
  const markup = `<div class="film-wrapper">
          <img
            class="film-image"
            src="https://image.tmdb.org/t/p/w500${poster_path}"
            alt="${title}"
            loading="lazy"
          />
          <div class="film-information">
            <h2 class="film-title">${title}</h2>
            <ul>
              <li class="film-item">
                <p class="film-details">Vote / Votes</p>
                <p class="film-info--upper">
                  <span class="film-rating">${vote_average.toFixed(1)}</span>
                  <span class="film-divider"> / </span>
                  <span class="film-vote-count">${vote_count}</span>
                </p>
              </li>
              <li class="film-item">
                <p class="film-details">Popularity</p>
                <p class="film-info--upper">${popularity.toFixed(1)}</p>
              </li>
              <li class="film-item">
                <p class="film-details">Genre</p>
                <p class="film-info--upper">${genresEl}</p>
              </li>
            </ul>
            <h3 class="film-about-title">ABOUT</h3>
            <p class="film-about-text">${overview}</p>
            <button type="button" class="film-button js-watch">
              my library
            </button>
            
          </div>
        </div>`;

  return markup;
}

function updateCardModal(markup) {
  refs.modalBodyEl.innerHTML = markup;
}

//-----------------localStor---------------//

let currentMovieData = {};
function prepareMovieToSaving(data) {
  const {
    adult,
    backdrop_path,
    genres,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
  } = data;

  const genre_ids = genres.map(genre => genre.id);

  currentMovieData = {
    adult: adult,
    backdrop_path: backdrop_path,
    genre_ids: genre_ids,
    id: id,
    original_language: original_language,
    original_title: original_title,
    overview: overview,
    popularity: popularity,
    poster_path: poster_path,
    release_date: release_date,
    title: title,
    video: video,
    vote_average: vote_average,
    vote_count: vote_count,
  };

  definiteRefs();
  addEvtListeners();
  changeBtnName('my library');
}

function isMovieInStorage(libName) {
  const savedMovies = getSavedMovies(libName);
  if (!savedMovies) {
    localStorage.setItem(libName, '[]');
    return false;
  }
  return savedMovies.some(e => e.id === currentMovieData.id);
}

function getSavedMovies(libName) {
  return JSON.parse(localStorage.getItem(libName));
}

function changeBtnName(libName) {
  const partOfName = isMovieInStorage(libName) ? 'Remove from ' : 'Add to ';
  switch (libName) {
    case 'my library':
      refs.btnAddToLib.textContent = partOfName + libName;
      return;
  }
}

function saveMovie(libName) {
  const savedMovies = getSavedMovies(libName);
  savedMovies.unshift(currentMovieData);
  rewriteLocStorage(libName, savedMovies);
  Notify.info(`"${currentMovieData.original_title}" has added to ${libName}`);
}

function toggleMovie(libName) {
  if (isMovieInStorage(libName)) {
    deleteMovie(libName);
    changeBtnName(libName);
  } else {
    saveMovie(libName);
    changeBtnName(libName);
  }
}

function deleteMovie(libName) {
  const savedMovies = getSavedMovies(libName);
  const indexOfMovieToDelete = savedMovies.findIndex(
    e => e.id === currentMovieData.id
  );
  savedMovies.splice(indexOfMovieToDelete, 1);
  rewriteLocStorage(libName, savedMovies);
  Notify.info(
    `"${currentMovieData.original_title}" has removed from ${libName}`
  );
}

function rewriteLocStorage(libName, data) {
  localStorage.setItem(libName, JSON.stringify(data));
}

function addEvtListeners() {
  refs.btnAddToLib.addEventListener('click', () => toggleMovie('my library'));
}

function definiteRefs() {
  refs.btnAddToLib = document.querySelector('.js-watch');
}

export { onOpenModal };