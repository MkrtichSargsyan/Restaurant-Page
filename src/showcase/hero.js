import showcase_image from "../images/k1.jpg";

export default (() => {
  const hero = document.createElement("div");
  hero.classList.add('flex-1')
  const hero_image = document.createElement("img");
  hero_image.src = showcase_image;
  hero.appendChild(hero_image);
  return hero
})();
