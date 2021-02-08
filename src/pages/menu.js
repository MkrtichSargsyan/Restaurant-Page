import { PageFlip } from "page-flip";
import menu_table from "../images/menu_table.jpg";
import menu_cover from "../images/menu_cover.jpg";
import ss from "../images/ss.png";

export default (content) => {
  const menu = document.createElement("section");
  menu.classList.add(
    "w-full",
    "h-screen",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "flex",
    "justify-end",
    "items-start"
  );
  menu.style.backgroundImage = `url(${menu_table})`;
  content.appendChild(menu);

  menu.innerHTML = `
        <div id="book" class='overflow-hidden mr-16 mt-16'>

            <div id='menu_cover' class="my-page" data-density="hard">
              <img src=${menu_cover} class = 'h-full'></img>
            </div>
            <div class="my-page bg-red-300">
                Page one
            </div>
            <div class="my-page bg-red-500">
                Page two
            </div>
            <div class="my-page bg-red-600">
                Page three
            </div>
            <div class="my-page bg-red-700">
                Page four
            </div>
            <div class="my-page bg-red-800" data-density="hard">
              <img src=${menu_cover} class = 'h-full'></img>
            </div>
         </div>
  `;

  const pageFlip = new PageFlip(document.getElementById("book"), {
    width: 250,
    height: 400,
    showCover: true,
    maxShadowOpacity: 1,
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
};