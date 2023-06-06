const THEME_MODE = 'theme-mode';
const themeSwitcher = document.querySelector('.theme-switcher');

themeSwitcher.addEventListener('change', changeTheme);
isLight();

function changeTheme() {
  if (localStorage.getItem(THEME_MODE) === 'light') {
    localStorage.removeItem(THEME_MODE);
  } else {
    localStorage.setItem(THEME_MODE, 'light');
  }
  document.body.classList.toggle('light-theme');
  isLight();
}

function isLight() {
  if (localStorage.getItem(THEME_MODE) === 'light') {
    themeSwitcher.setAttribute('checked', true);
    document.body.classList.add('light-theme');
  }
}
