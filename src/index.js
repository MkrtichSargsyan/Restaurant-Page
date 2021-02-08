import "../node_modules/normalize.css";
import "./styles/styles.css";
import "./styles/custom_styles.css";
import router from "./router";


const content = document.getElementById("content");

const current_path = window.location.hash


router.render_page(current_path,content)
