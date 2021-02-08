import { PageFlip } from "page-flip";
import menu_table from "../images/menu_table.jpg";
import menu_cover from "../images/menu_cover.jpg";
import ss from "../images/ss.png";
import menu_page from "../menu&interior/menu_page.js";

// --------------foods

import hot1 from "../images/hot1.jpeg";
import hot2 from "../images/hot2.jpg";
import hot3 from "../images/hot3.jpeg";
import hot4 from "../images/hot4.jpg";
import hot5 from "../images/hot5.jpeg";
import hot6 from "../images/hot6.jpg";
import hot7 from "../images/hot3.jpeg";
import hot8 from "../images/hot8.jpg";

// --------------foods

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
              <div id='menu_logo' class = 'w-1/2 h-16 bg-no-repeat absolute inset-1/2 bg-contain'></div>
              <img src=${menu_cover} class = 'h-full w-full'></img>
            </div>

            <div id ='menu_pages_container'></div>
    
            <div class="my-page" data-density="hard">
              <img src=${menu_cover} class = 'h-full w-full'></img>
            </div>
         </div>
  `;

  const menu_pages_container = document.getElementById("menu_pages_container");
  menu_pages_container.appendChild(
    menu_page(
      "Hot appetizers",
      [hot1, hot2, hot3, hot5],
      ["Khashlama", "Tolma", "Tonri xorovac", "Ghapama"]
    )
  );
  menu_pages_container.appendChild(
    menu_page(
      '',
      [hot4, hot6, hot7, hot8],
      ["sorrel soup", "Harees", "Khash", "Lavash Baked Trout Fish"]
    )
  );
  // menu_pages_container.appendChild(menu_page("Salads"));
  // menu_pages_container.appendChild(menu_page("Beverages"));

  document.getElementById("menu_logo").style.backgroundImage = `url(${ss})`;

  const pageFlip = new PageFlip(document.getElementById("book"), {
    width: 300,
    height: 400,
    showCover: true,
    maxShadowOpacity: 1,
  });
  pageFlip.loadFromHTML(document.querySelectorAll(".my-page"));
};
