import showcase_image from "../images/k5.jpg";
import greeting from "./greeting";

export default (() => {
  const hero = document.createElement("div");
  hero.classList.add("flex-1", "relative");

  const hero_image = document.createElement("img");
  hero_image.classList.add("h-screen", "object-cover");
  hero_image.src = showcase_image;

  const layer = document.createElement("div");
  layer.classList.add(
    "top-0",
    "bottom-0",
    "left-0",
    "right-0",
    "bg-black",
    "absolute",
    "opacity-80"
  );

  hero.appendChild(layer);
  hero.appendChild(greeting);
  hero.appendChild(hero_image);
  return hero;
})();
