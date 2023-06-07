import { createCardsCatalog } from '../../common/card/card.js';
const catalogElement = document.querySelector('.weekly-trends_gallery');


const catalogURL =
  'https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20';

createCardsCatalog(catalogURL, catalogElement, 3);
