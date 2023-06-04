let isDark = true;

const themeSwitcher = document.querySelector('.theme-switcher');
const headerLinks = document.querySelectorAll('.header__link');
const headerEl = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.logo__link');
console.log(headerLogo.lastChild);
themeSwitcher.addEventListener('change', changeTheme);

function changeTheme() {
  document.body.classList.toggle('light-theme');
  headerLinks[0].classList.toggle('light-theme');
  headerLinks[1].classList.toggle('light-theme');
  headerLinks[2].classList.toggle('light-theme');
  headerEl.classList.toggle('light-theme');
  headerMenu.classList.toggle('light-theme');
  headerLogo.lastElementChild.classList.toggle('light-theme');
  isDark = !isDark;
}
