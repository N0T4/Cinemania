// const catalogEl = document.querySelector('.catalog-section');
const buttonCloseEl = document.querySelector('.modal-close-btn');
const backdropEl = document.querySelector('.js-backdrop');
const modalBodyEl = document.querySelector('.js-modal-body');
const bodyEl = document.body;
console.log(bodyEl);

// catalogEl.addEventListener('click', onOpenModal);
buttonCloseEl.addEventListener('click', onCloseModal);

function onOpenModal(e) {
  const targetEl = e.target;
  const idEl = targetEl.parentElement;
  const id = idEl.dataset.id;
  console.log(id);
  onGetInfoFilm(id);

  if (!backdropEl.classList.contains('is-hidden')) {
    return;
  }

  backdropEl.classList.remove('is-hidden');
  bodyEl.classList.add('no-scroll');

  function onCloseEsc(e) {
    if (e.code === 'Escape') {
      backdropEl.classList.add('is-hidden');
      window.removeEventListener('keydown', onCloseEsc);
    }
  }

  function onCloseBackdrop(e) {
    if (e.target.classList.contains('js-backdrop')) {
      backdropEl.classList.add('is-hidden');
      backdropEl.removeEventListener('click', onCloseBackdrop);
    }
  }
  backdropEl.addEventListener('click', onCloseBackdrop);
  window.addEventListener('keydown', onCloseEsc);
}

function onCloseModal(e) {
  if (backdropEl.classList.contains('is-hidden')) {
    return;
  }
  backdropEl.classList.add('is-hidden');
  bodyEl.classList.remove('no-scroll');
}

function onGetInfoFilm(id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Y2VmZjE2NGZkZTljYjA3ZjFkZmVlMzg5NTI2ZTNlNyIsInN1YiI6IjY0N2NmMWU1MGZiMzk4MDExODBlMDI1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JmAvfE0gWZjEB37-xgrPZ-zzGTupZmQSUJnDzhkVL-U',
    },
  };
  fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(response => {
      const markup = createMarkupCardModal(response);
      return updateCardModal(markup);
    })
    .catch(err => console.error(err));
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
                  <span class="film-rating">${vote_average}</span>
                  <span class="film-divider"> / </span>
                  <span class="film-vote-count">${vote_count}</span>
                </p>
              </li>
              <li class="film-item">
                <p class="film-details">Popularity</p>
                <p class="film-info--upper">${popularity}</p>
              </li>
              <li class="film-item">
                <p class="film-details">Genre</p>
                <p class="film-info--upper">${genres}</p>
              </li>
            </ul>
            <h3 class="film-about-title">ABOUT</h3>
            <p class="film-about-text">${overview}</p>
            <button type="button" class="film-button js-watch">
              Add to my library
            </button>
            <button type="button" class="film-button js-watch">
              Remove from my library
            </button>
          </div>
        </div>`;
  return markup;
}

function updateCardModal(markup) {
  modalBodyEl.innerHTML = markup;
}

export { onOpenModal };
