 import { createCardsCatalog } from '../../common/card/card.js';
 import createPagination from '../pagination/pagination.js';

 const catalogElement = document.querySelector('.catalog-section');
 const catalogURL = `https://api.themoviedb.org/3/trending/all/week?page=1`;
 createCardsCatalog(catalogURL, catalogElement);
