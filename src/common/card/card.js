import cardTemplate from '../../common/card/card.hbs';

export default function renderPhotoCard(filmData, parentElement) {
  parentElement.insertAdjacentHTML('beforeend', cardTemplate(filmData));
}
