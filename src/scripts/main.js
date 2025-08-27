'use strict';

// Забирає або додає тег br при ресайзі
(function () {
  const br = document.querySelector(".footer__title");
  if (!br) return;

  if (!br.dataset.base) {
    br.dataset.base = br.textContent.trim().replace(/\s+/g, " ");
  }

  const mql = window.matchMedia("(min-width: 1200px)");

  function render() {
    const base = br.dataset.base;
    const [first, ...rest] = base.split(" ");

    if (mql.matches) {
      br.innerHTML = base;
    } else {
      const after = rest.join(" ");
      br.innerHTML = after ? `${first}<br>${after}` : first;
    }
  }

  render();
  mql.addEventListener("change", render);
  window.addEventListener("resize", render);
})();

// Міняє тему з світлої на темну і навпаки, зберігаючи зміни в локал сторейдж
const themeIcon = document.querySelector('.top-bar__theme-icon');
const root = document.documentElement;
const THEME_KEY = 'theme';

function setTheme(lightPink, accentOrange) {
  root.style.setProperty('--light-pink', lightPink);
  root.style.setProperty('--accent-orange', accentOrange);
  localStorage.setItem(THEME_KEY, JSON.stringify({ lightPink, accentOrange }));
}

themeIcon.addEventListener('click', () => {
  const currentLightPink = getComputedStyle(root).getPropertyValue('--light-pink');

  if (currentLightPink === '#ffeefc') {
    setTheme('#7f8096', '#000');
  } else {
    setTheme('#ffeefc', '#f9512e');
  }
});

const storedTheme = localStorage.getItem(THEME_KEY);

if (storedTheme) {
  const { lightPink, accentOrange } = JSON.parse(storedTheme);
  setTheme(lightPink, accentOrange);
}
