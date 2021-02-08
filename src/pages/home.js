import showcase from "../showcase/showcase.js";
import menu_section from "../menu&interior/menu_section.js";
import footer from "../footer/footer.js";
import interior_section from "../menu&interior/interior_section.js";
// import video from "../how_to_cook/video.js";


export default (content)=>{
  content.appendChild(showcase);
  content.appendChild(menu_section);
  content.appendChild(interior_section);
  // content.appendChild(video);
  content.appendChild(footer);
}