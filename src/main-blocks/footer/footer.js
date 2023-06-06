import { createCardsCatalog } from '../../common/card/card.js';

const catalogURL = 'https://api.themoviedb.org/3/trending/all/week?page=1';

const studentsEl = document.querySelector('.goit-students');
const studentsCatalogEl = document.querySelector('.footer-students');

studentsEl.addEventListener('click', showStudents);

function showStudents() {
  createCardsCatalog(catalogURL, studentsCatalogEl, 10);
}
