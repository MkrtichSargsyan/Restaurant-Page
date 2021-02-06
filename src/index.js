import "../node_modules/normalize.css";
import "./styles/styles.css";
import "./styles/custom_styles.css";

import showcase from "./showcase/showcase.js";
import menu_section from "./menu&interior/menu_section";
import footer from "./footer/footer";

const content = document.getElementById("content");

content.appendChild(showcase);
content.appendChild(menu_section);
content.appendChild(footer);
