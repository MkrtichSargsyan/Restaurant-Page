import showcaseImage from '../images/k5.jpg';
import greeting from './greeting.js';

export default (() => {
  const hero = document.createElement('div');
  hero.classList.add('flex-1', 'relative');

  const heroImage = document.createElement('img');
  heroImage.classList.add('h-screen', 'object-cover');
  heroImage.src = showcaseImage;

  const layer = document.createElement('div');
  layer.classList.add(
    'top-0',
    'bottom-0',
    'left-0',
    'right-0',
    'bg-black',
    'absolute',
    'opacity-80',
  );

  hero.appendChild(layer);
  hero.appendChild(greeting);
  hero.appendChild(heroImage);
  return hero;
})();
