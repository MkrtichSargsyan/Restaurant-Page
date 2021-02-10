import showcase from "../showcase/showcase.js";
import menu_section from "../menu&interior/menu_section.js";
import footer from "../footer/footer.js";
import interior_section from "../menu&interior/interior_section.js";
import header from "../header.js";
import video from "../how_to_cook/video.js";


export default (content)=>{
  content.innerHTML = ''
  header.classList.add('opacity-0')
  content.appendChild(showcase);
  content.appendChild(menu_section);
  content.appendChild(interior_section);
  content.appendChild(video);
  document.getElementsByTagName('video')[0].play()
  content.appendChild(footer);
}