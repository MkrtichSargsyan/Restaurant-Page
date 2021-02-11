import header from '../header.js';
import contactBg from '../images/contactBg.jpg';
import map from '../images/map.png';

export default (content) => {
  content.innerHTML = '';
  header.classList.remove('opacity-0');
  const contact = document.createElement('section');
  contact.classList.add(
    'w-full',
    'h-screen',
    'bg-center',
    'bg-no-repeat',
    'bg-cover',
    'flex',
    'justify-center',
    'items-start',
  );
  contact.style.backgroundImage = `url(${contactBg})`;

  contact.innerHTML = `
    <div id="contact" class='transparent mt-20 flex justify-between mx-14 lg:mx-72'>
      <div class="bg-white cursor-pointer p-8">
          <h1 class='mb-8 text-2xl font-black'>Contacts</h1>

          <div class='mb-4'>
            <h3 class='mb-2 font-bold'>Number</h3>
            <p class='text-gray-800 text-xs'>+374 00 00 00</p>
          </div>

          <div class='mb-4'>
            <h3 class=' font-bold'>Working Hours</h3>
            <p class='text-gray-800 text-xs'>Restaurant is open 9:30 AM - 12:00 PM</p>
            <p class='text-gray-800 text-xs'>online orders are accepted 24 hours a day</p>
          </div>

          <div class='mb-4'>
            <article class='flex-1 flex flex-col'>
              <h3 class='font-bold mb-4'>Location</h3>
              <p class='text-gray-800 text-xs'>Armenia, 0084, Yerevan</p>
              <p class='text-gray-800 text-xs'>Oganovi St., 15/1 Building</p>
              <p class='text-gray-800 text-xs'>(Malatia-Sebastia adm. district)</p>
            </article>
          </div>

          <div class='mb-4'>
            <h3 class='font-bold mb-4'>Questions and Suggestions</h3>
            <address class='text-gray-800 text-xs'>mkrtichsargsyan24@gmail.com</address>
          </div>

      </div>

      <div class='hidden md:block'>
        <img src=${map} class ='h-full w-full'></img>
      </div>
   </div>
`;

  content.appendChild(contact);
};
