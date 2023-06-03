import cardTemplate from '../../common/card/card.hbs';
import filmGenres from '../card/all-genres.json';

function renderPhotoCard(filmData, parentElement) {
  let { title, poster_path, genre_ids, release_date, vote_average } = filmData;
  let genresInCard = card.getGenresToFilmCard(genre_ids, filmGenres);
  let filmYear = card.getFilmYear(release_date);
  let filmRaiting = card.getRating(vote_average);

  let tenplateObject = {
    title,
    fullPath: poster_path
      ? 'https://image.tmdb.org/t/p/w500' + poster_path
      : img,
    genresInCard,
    filmYear,
    filmRaiting,
  };

  parentElement.insertAdjacentHTML('beforeend', cardTemplate(tenplateObject));
}

class CardInfo {
  getGenresToFilmCard(genresArray, allgenres) {
    let genres = '-';
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
        secondGenre = allgenres.find(el => el.id === genresArray[i + 1]).name;

        break;
      }
    }
    if (firstGenre.length + secondGenre.length > MAX_GENRES_STRING_LENGTH) {
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

const card = new CardInfo();

export { card, renderPhotoCard };
