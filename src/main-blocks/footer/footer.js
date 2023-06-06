import noStudentPhoto from '../../images/no-poster-img.png';
import sharaevskiyPhoto from '../../images/students/sharaevskiy.jpg';
import puhachPhoto from '../../images/students/puhach.jpg';
import kalchenkoPhoto from '../../images/students/kalchenko.jpg';

const students = [
  {
    studentName: 'Mikhail Sharaevsky',
    position: 'Team-Lead, Scrum Master',
    photo: sharaevskiyPhoto,
  },
  {
    studentName: 'Yaroslav Puhach',
    position: 'Front-end developer',
    photo: puhachPhoto,
  },
  {
    studentName: 'Natalia Kalchenko',
    position: 'Front-end developer',
    photo: kalchenkoPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
  {
    studentName: 'NONAME',
    position: 'Front-end developer',
    photo: noStudentPhoto,
  },
];

const studentsEl = document.querySelector('.goit-students');
const studentsCatalogEl = document.querySelector('.footer-students');

studentsEl.addEventListener('click', event => {
  event.preventDefault();
  showStudents(students, studentsCatalogEl);
  showStudentsModal();
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

function showStudentsModal() {
  const studentsOverlayElement = document.querySelector('.students-overlay');
  studentsOverlayElement.classList.toggle('visually-hidden');

  closeStudentsModal(studentsOverlayElement);
}

function closeStudentsModal(element) {
  const closeBtnElement = document.querySelector('.students-modal-close-btn');
  closeBtnElement.addEventListener('click', () => {
    element.classList.add('visually-hidden');
  });
}
