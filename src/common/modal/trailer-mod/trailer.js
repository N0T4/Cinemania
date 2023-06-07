import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import axios from 'axios';

const KEY = '6e7395deda2e604f560655560f8c78bd';

export async function getTrailer(id) {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${KEY}&language=en-US`
    );
  } catch (error) {
    console.error(error);
  }
}
export function watchTrailer({ data }) {
  const watchButton = document.querySelector('.hero-button-js');
  console.log('function watch trailer:', data);
  const trailers = data.results;
  if (trailers.length !== 0) {
    console.log('если не равно нулю', trailers);
    const randomIndex = Math.floor(Math.random() * (trailers.length - 1));
    const randomTrailer = trailers[randomIndex];
    console.log(randomTrailer);
    console.log(randomTrailer.key);
    watchButton.addEventListener('click', function () {
      const videoUrl = `https://www.youtube.com/embed/${randomTrailer.key}`;
      openVideoModal(videoUrl);
    });
  }
}
function openVideoModal(videoUrl) {
  const instance = basicLightbox.create(
    `
    <div class="modal-video">
      <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
      `,
    {
      onShow: instance => {
        instance
          .element()
          .querySelector('iframe')
          .setAttribute('allow', 'autoplay; encrypted-media');
      },
    }
  );
  instance.show();
}
