let isDark = true;

const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.addEventListener('change', changeTheme);

function changeTheme() {
  document.body.classList.toggle('light-theme');
  isDark = !isDark;
}
