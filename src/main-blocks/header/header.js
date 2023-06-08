const menuBtn = document.querySelector('.menu-btn');
const headerMenu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', addClass);

function addClass() {
  headerMenu.classList.add('active');
  document.body.classList.add('lock');
  document.body.addEventListener('click', removeClass);
}

function removeClass(e) {
  if (e.target.nodeName === 'BUTTON') {
    return;
  }
  if (e.target.nodeName !== 'NAV' && e.target.nodeName !== 'LI') {
    headerMenu.classList.remove('active');
    document.body.classList.remove('lock');
    document.body.removeEventListener('click', removeClass);
  }
}


const header = document.querySelector('header');


window.addEventListener('scroll', function() {

  if (window.scrollY > 1) { 
    header.style.position = 'fixed';
  } else { 
    header.style.position = 'static';
  }
});
