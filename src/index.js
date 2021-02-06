import "../node_modules/normalize.css";
import "./styles/styles.css";
import "./styles/custom_styles.css";

import showcase from "./showcase/showcase.js";
import footer from "./footer/footer";

const content = document.getElementById("content");

content.appendChild(showcase);
content.appendChild(footer);
