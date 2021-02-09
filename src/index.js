import "../node_modules/normalize.css";
import "./styles/styles.css";
import "./styles/custom_styles.css";
import router from "./router";
import header from "./header";

const content = document.getElementById("content");

router.render_page(window.location.hash, content);
window.addEventListener(
  "hashchange",
  (e) => router.render_page(window.location.hash, content),
  {}
);

content.parentNode.insertBefore(header, content);

const target = document.getElementById("menu_section");

if (target !== null) {
  document.addEventListener("scroll", () => {
    if (window.scrollY >= target.getBoundingClientRect().top + window.scrollY) {
      header.classList.remove("opacity-0");
    } else {
      header.classList.add("opacity-0");
    }
  });
}

let nav_buttons = Array.from(document.querySelectorAll("[route]"));
nav_buttons.forEach((route) => {
  route.addEventListener("click", (e) => {
    let path = e.target.attributes[0].value;
    window.location.hash = path;
  });
});
