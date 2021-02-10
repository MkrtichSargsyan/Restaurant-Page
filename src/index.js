import '../node_modules/normalize.css';
import './styles/styles.css';
import './styles/custom_styles.css';
import router from './router.js';
import header from './header.js';

const content = document.getElementById('content');

router.renderPage(window.location.hash, content);
window.addEventListener(
  'hashchange',
  () => router.renderPage(window.location.hash, content),
  {},
);

content.parentNode.insertBefore(header, content);

const target = document.getElementById('menuSection');

if (target !== null) {
  document.addEventListener('scroll', () => {
    if (window.scrollY >= target.getBoundingClientRect().top + window.scrollY) {
      header.classList.remove('opacity-0');
    } else {
      header.classList.add('opacity-0');
    }
  });
}

const navButtons = Array.from(document.querySelectorAll('[route]'));
console.log(navButtons);
navButtons.forEach((route) => {
  route.addEventListener('click', (e) => {
    const path = e.target.attributes[0].value;
    window.location.hash = path;
  });
});
