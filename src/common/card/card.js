import cardTemplate from '../../common/card/card.hbs';
import filmGenres from '../card/all-genres.json';
import img from '../../images/no-poster-img.png';
import { onOpenModal } from '../modal/film-overview/overview.js';

function renderPhotoCard(filmData, parentElement) {
  let {
    title,
    poster_path,
    genre_ids,
    release_date,
    first_air_date,
    vote_average,
    id,
  } = filmData;
  let genresInCard = card.getGenresToFilmCard(genre_ids, filmGenres);
  let filmYear = card.getFilmYear(release_date || first_air_date);
  let filmRaiting = card.getRating(vote_average);

  let templateObject = {
    title,
    fullPath: poster_path
      ? 'https://image.tmdb.org/t/p/w500' + poster_path
      : img,
    genresInCard,
    filmYear,
    filmRaiting,
    id,
  };

  parentElement.insertAdjacentHTML('beforeend', cardTemplate(templateObject));
}

class CardInfo {
  getGenresToFilmCard(genresArray, allgenres) {
    let genres = '-';

    if (genresArray.length === 0) {
      return genres;
    }

    let firstGenre = '';
    let secondGenre = '';
    const MAX_GENRES_STRING_LENGTH = 14;
    for (let i = 0; i < genresArray.length; i += 1) {
      if (allgenres.find(el => el.id === genresArray[i])) {
        firstGenre = allgenres.find(el => el.id === genresArray[i]).name;
      } else {
        continue;
      }
      if (firstGenre && i != genresArray.length - 1) {
        secondGenre = allgenres.find(el => el.id === genresArray[i + 1].name);

        break;
      }
    }
    if (
      secondGenre === undefined ||
      firstGenre.length + secondGenre.length > MAX_GENRES_STRING_LENGTH
    ) {
      genres = firstGenre;
      return genres;
    }
    genres = firstGenre + ', ' + secondGenre;
    return genres;
  }
  getFilmYear(date) {
    if (!date) {
      return '-';
    }
    date = date.split('-');
    return date[0];
  }
  getRating(ratingData) {
    ratingData = ratingData.toFixed(1);
    return `${ratingData * 10}%`;
  }
}

function createCardsCatalog(URL, parentElement, catalogLength = 18) {
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
    .then(({ results }) => {
      console.log(results);
      results = results.slice(0, 18);
       if (catalogLength) {
         response.results.length = catalogLength;
       }
      results.forEach(filmInfoObject => {
        renderPhotoCard(filmInfoObject, parentElement);
      });
      parentElement.addEventListener('click', onOpenModal);
    })
    .catch(err => console.error(err));

   fetch(URL, options)
   .then(response => response.json())
   .then(response => {
     if (catalogLength) {
       response.results.length = catalogLength;
     }

     response.results.forEach(filmInfoObject => {
       renderPhotoCard(filmInfoObject, parentElement);
     });
     parentElement.addEventListener('click', onOpenModal);
   })
   .catch(err => console.error(err));
}

const card = new CardInfo();

export { card, renderPhotoCard, createCardsCatalog, img };
