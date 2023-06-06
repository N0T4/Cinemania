const imageUrl = new URL('./images/no-poster-img.png');
const students = [
  {
    studentName: 'Yarosla Puhach',
    position: 'Front-end developer',
    photo: 'imageUrl',
  },
];

const studentsEl = document.querySelector('.goit-students');
const studentsCatalogEl = document.querySelector('.footer-students');

studentsEl.addEventListener('click', event => {
  event.preventDefault();
  showStudents(students, studentsCatalogEl);
});

function showStudents(studentsArray, parentElement) {
  let studentsMarkup = studentsArray
    .map(({ studentName, position, photo }) => {
      return `<div class="film-card">
    <img class="film-card__poster" src=${photo} alt=${studentName} />
    <div class="film-card__wrapper">
        <h3 class="film-card__film-name">${studentName}</h3>
        <div class="film-card__film-info">
            <div class="film-card__genre-year-wrapper">
                <span class="film-card__genre">${position}</span>
                <span></span>
                <span class="film-card__year"></span>
            </div>
            
        </div>
    </div>
</div>`;
    })
    .join('');

  parentElement.innerHTML = studentsMarkup;
}
