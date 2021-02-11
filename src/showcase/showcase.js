import hero from './hero.js';
import navigation from './navigation.js';

export default (() => {
  const showcase = document.createElement('section');
  showcase.classList.add('flex', 'mx-auto');

  showcase.appendChild(navigation);
  showcase.appendChild(hero);
  return showcase;
})();
