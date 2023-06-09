import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const paginationElem = document.querySelector('.tui-pagination');

const options = {
  totalItems: 1000,

  itemsPerPage: 18,
  visiblePages:3,

  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  //   template: {
  //     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
  //     currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
  //     moveButton:
  //       '<a href="#" class="tui-page-btn tui-{{type}}">' +
  //         '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //       '</a>',
  //     disabledMoveButton:
  //       '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
  //         '<span class="tui-ico-{{type}}">{{type}}</span>' +
  //       '</span>',
  //     moreButton:
  //       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
  //         '<span class="tui-ico-ellip">...</span>' +
  //       '</a>'
  //   }
};

// const pagination = new Pagination(paginationElem, options);
// let pageE = 0;

// function createWWW() {
//     pagination.on('afterMove', (event) => {
//         const currentPage = event.page;
//         pageE = currentPage;
//         console.log(currentPage);
//         console.log('pagination.on ~ pageE:', pageE)
//         return pageE;
//     });
// }

// console.log(createWWW());

function createPagination() {
  const instance = new Pagination(paginationElem, options);

  return instance;
}

export default createPagination;
// console.log('instance:', instance)
// console.log("instance page", instance._currentPage);
