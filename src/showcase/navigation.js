import logo_image from "../images/logo.png";
import s from "../images/s.png";
import { facebook, instagram, twitter } from "./social_items";

export default (() => {
  const navigation = document.createElement("aside");
  navigation.classList.add(
    "hidden",
    "md:flex",
    "items-center",
    "flex-col",
    "w-64",
    "h-screen",
    "relative",
    "navigation"
  );

  const logo = document.createElement("div");
  logo.classList.add(
    "w-full",
    "md:w-full",
    "bg-no-repeat",
    "logo_height",
    "bg-contain"
  );
  logo.style.backgroundImage = `url(${s})`;

  const nav_items = document.createElement("ul");
  nav_items.classList.add('nav_items','mt-28')
  nav_items.innerHTML = `
      <li>menu<li>
      <li>interior<li>
      <li>about us<li>
      <li>contacts<li>
  `;



  const social_items = document.createElement("ul");
  social_items.innerHTML = `
      <li>${facebook}<li>
      <li>${twitter}<li>
      <li>${instagram}<li>
  `;

  social_items.classList.add(
    "flex",
    "absolute",
    "bottom-0",
    "left-0",
    "right-0",
    "p-10",
    "justify-between"
  );

  navigation.appendChild(logo);
  navigation.appendChild(nav_items);
  navigation.appendChild(social_items);
  return navigation;
})();
