import menu_page_cover1 from "../images/menu_page_cover1.jpg";
import z1 from "../images/z1.jpeg";
import z2 from "../images/z2.jpeg";

export default (title=null) => {
  const page = document.createElement("div");
  page.classList.add("my-page", "relative");

  const bg_image = document.createElement("img");
  bg_image.src = menu_page_cover1;

  const menu_page_content = document.createElement("div");
  menu_page_content.classList.add("absolute", "h-full", "w-full");

  menu_page_content.innerHTML = `
    <article class = 'absolute h-full w-full'>
      <h2 class= 'text-center italic font-black text-gray-200 text-2xl'>${title ? title : ''}</h2>
      <div class = 'flex justify-between w-full h-20 px-4 my-2'>
        <img src=${z1} alt="k_img" class='h-full mr-10'/>
        <div class = 'w-full overflow-hidden text-white'>
          <p class = 'text-center border-b-2 border-dotted'>Khashlama</p>
          <p class = 'text-right'>$-40</p>
        </div>
      </div>
      <div class = 'flex justify-between w-full h-20 px-4 my-2'>
          <img src=${z1} alt="k_img" class='h-full mr-10'/>
          <div class = 'w-full overflow-hidden text-white'>
            <p class = 'text-center border-b-2 border-dotted'>Khashlama</p>
            <p class = 'text-right'>$-40</p>
          </div>
      </div>
      <div class = 'flex justify-between w-full h-20 px-4 my-2'>
        <img src=${z1} alt="k_img" class='h-full mr-10'/>
        <div class = 'w-full overflow-hidden text-white'>
            <p class = 'text-center border-b-2 border-dotted'>Khashlama</p>
            <p class = 'text-right'>$-40</p>
        </div>
      </div>
      <div class = 'flex justify-between w-full h-20 px-4 my-1'>
        <img src=${z1} alt="k_img" class='h-full mr-10'/>
        <div class = 'w-full overflow-hidden text-white'>
            <p class = 'text-center border-b-2 border-dotted'>Khashlama</p>
            <p class = 'text-right'>$-40</p>
        </div>
      </div>
    </article>
  `;

  page.appendChild(menu_page_content);

  page.appendChild(bg_image);
  return page;
};

// <div class="my-page flex justify-center">
// <img src=${menu_page_cover1} class ='h-full w-full absolute'></img>
// </div>`;
