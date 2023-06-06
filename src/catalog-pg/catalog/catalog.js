import { createCardsCatalog } from '../../common/card/card.js';
import createPagination from '../pagination/pagination.js';

const catalogElement = document.querySelector('.catalog-section');
const catalogURL = `https://api.themoviedb.org/3/trending/all/week?page=1`;
createCardsCatalog(catalogURL, catalogElement);

const paginator = createPagination();
    
paginator.on('afterMove', (e) => {
    console.log(e.page);
    const catalogElement = document.querySelector('.catalog-section');
    const catalogURL = `https://api.themoviedb.org/3/trending/all/week?page=${e.page}`;
    createCardsCatalog(catalogURL, catalogElement);
})

// const catalogElement = document.querySelector('.catalog-section');

// const catalogURL = 'https://api.themoviedb.org/3/trending/all/week?page=1';

// createCardsCatalog(catalogURL, catalogElement);
