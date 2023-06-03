let isDark = true;

const themeSwitcher = document.querySelector(
  '.theme-switcher [type="checkbox"]'
);

themeSwitcher.addEventListener('change', changeTheme);
function changeTheme() {
  console.log(1);
  document.body.classList.toggle('light-theme');
  isDark = !isDark;
}
