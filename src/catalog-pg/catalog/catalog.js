import { renderPhotoCard } from '../../common/card/card.js';
const catalogElement = document.querySelector('.catalog-section');

const catalogURL =
  'https://api.themoviedb.org/3/trending/all/week?page=1&per_page=20';

createCardsCatalog(catalogURL);

export default function createCardsCatalog(URL) {
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
    .then(response => {
      console.log(response.results);
      response.results.forEach(filmInfoObject => {
        renderPhotoCard(filmInfoObject, catalogElement);
      });
    })
    .catch(err => console.error(err));
}
