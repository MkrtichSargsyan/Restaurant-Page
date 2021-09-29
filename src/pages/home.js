import showcase from '../showcase/showcase.js';
import menuSection from '../menu&interior/menuSection.js';
import footer from '../footer/footer.js';
import interiorSection from '../menu&interior/interiorSection.js';
import header from '../header.js';
import video from '../how_to_cook/video.js';

export default (content) => {
  content.innerHTML = '';
  header.classList.add('opacity-0');
  content.appendChild(showcase);
  content.appendChild(menuSection);
  content.appendChild(interiorSection);
  content.appendChild(video);
  document.getElementsByTagName('video')[0].play();
  content.appendChild(footer);
};