import { renderPhotoCard } from '../../common/card/card.js';
const myLibraryElement = document.querySelector('.my-library-section');

let storedFilms = JSON.parse(localStorage.getItem('my library'));

console.log(typeof storedFilms);

// function createMyLibraryCatalog(savedFilms, parentElement) {
//   savedFilms.map(film => {});
// }
storedFilms.forEach(film => {
  renderPhotoCard(film, myLibraryElement);
});
