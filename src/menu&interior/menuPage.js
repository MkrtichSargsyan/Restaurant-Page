/* eslint-disable no-const-assign */
import menuPageCover1 from '../images/menuPageCover1.jpg';

export default (title = null, foods, names) => {
  const page = document.createElement('div');
  page.classList.add('my-page', 'relative');

  const bgImage = document.createElement('img');
  bgImage.src = menuPageCover1;

  const menuPageContent = document.createElement('div');
  menuPageContent.classList.add('absolute', 'h-full', 'w-full');

  menuPageContent.innerHTML = `
    <article class = 'absolute h-full w-full'>
      <h2 class= 'text-center italic font-black text-gray-200 text-2xl'>${title || ''}</h2>
      <div class = 'flex justify-between w-full h-24 px-4 my-2'>
        <div  class='h-full flex-1'>
          <img src=${foods[0]} alt="k_img" class='h-full w-full object-contain'/>
        </div>
        <div class = 'text-white ml-10 flex-1'>
          <p class = 'text-center border-b-2 border-dotted'>${names[0]}</p>
          <p class = 'text-right'>$-40</p>
        </div>
      </div>
      <div class = 'flex justify-between w-full h-24 px-4 my-2'>
        <div  class='h-full flex-1'>
          <img src=${foods[1]} alt="k_img" class='h-full w-full object-contain'/>
        </div>
          <div class = 'text-white ml-10 flex-1'>                                                                               
            <p class = 'text-center border-b-2 border-dotted'>${names[1]}</p>
            <p class = 'text-right'>$-40</p>
          </div>
      </div>
      <div class = 'flex justify-between w-full h-24 px-4 my-2'>
        <div  class='h-full flex-1'>
          <img src=${foods[2]} alt="k_img" class='h-full w-full object-contain'/>
        </div>                                                  
        <div class = 'text-white ml-10 flex-1'>
            <p class = 'text-center border-b-2 border-dotted'>${names[2]}</p>
            <p class = 'text-right'>$-40</p>
        </div>
      </div>
      <div class = 'flex justify-between w-full h-24 px-4 my-1'>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
        <div  class='h-full flex-1'>
          <img src=${foods[3]} alt="k_img" class='h-full w-full object-contain'/>
        </div>
        <div class = 'text-white ml-10 flex-1'>
            <p class = 'text-center border-b-2 border-dotted'>${names[3]}</p>
            <p class = 'text-right'>$-40</p>
        </div>
      </div>
    </article>
  `;

  page.appendChild(menuPageContent);

  page.appendChild(bgImage);
  return page;
};
