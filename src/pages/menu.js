import { PageFlip } from "page-flip";
import menu_table from "../images/menu_table.jpg";
import menu_cover from "../images/menu_cover.jpg";
import menu_page_cover1 from "../images/menu_page_cover1.jpg";
import menu_page_cover2 from "../images/menu_page_cover2.jpg";
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
              <img src=${menu_cover} class = 'h-full w-full'></img>
            </div>
            <div class="my-page menu">
              <img src=${menu_page_cover1} class = 'h-full w-full'></img>
                Page one
            </div>
            <div class="my-page opacity-95">
                <img src=${menu_page_cover2} class = 'h-full w-full'></img>
                Page two
            </div>
            <div class="my-page">
              <img src=${menu_page_cover1} class = 'h-full w-full'></img>
                Page three
            </div>
            <div class="my-page opacity-95">
               <img src=${menu_page_cover2} class = 'h-full w-full'></img>
                Page four
            </div>
            <div class="my-page" data-density="hard">
              <img src=${menu_cover} class = 'h-full w-full'></img>
            </div>
         </div>
  `;

  const pageFlip = new PageFlip(document.getElementById("book"), {
    width: 300,
    height: 400,
    showCover: true,
    maxShadowOpacity: 1,
  });

  pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
};
