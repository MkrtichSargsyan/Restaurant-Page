import menu1 from '../images/m1.jpeg';
import menu3 from '../images/m2.jpg';

export default (() => {
  const menuSection = document.createElement('section');
  menuSection.id = 'menuSection';
  menuSection.classList.add(
    'bg-white',
    'w-full',
    'flex',
    'flex-col',
    'md:flex-row',
    'justify-between',
    'p-12',
    'pb-24',
  );

  // left side

  const menuSectionLeftSide = document.createElement('div');
  menuSectionLeftSide.classList.add('flex-1', 'relative', 'h-80', 'mr-10');

  const bigImage = document.createElement('div');
  bigImage.classList.add(
    'h-3/4',
    'w-5/6',
    'bg-no-repeat',
    'bg-cover',
    'bg-center',
  );
  bigImage.style.backgroundImage = `url(${menu1})`;

  const smallImage = document.createElement('div');
  smallImage.classList.add(
    'menu_small_img',
    'bg-center',
    'bg-no-repeat',
    'bg-cover',
    'absolute',
    'bottom-0',
    'right-0',
  );
  smallImage.style.backgroundImage = `url(${menu3})`;

  menuSectionLeftSide.appendChild(bigImage);
  menuSectionLeftSide.appendChild(smallImage);

  // right side

  const menuSectionRightSide = document.createElement('div');
  menuSectionRightSide.classList.add(
    'flex-1',
    'flex',
    'flex-col',
    'pt-20',
    'md:pl-28',
  );

  const menuSectionTitle = document.createElement('h2');
  menuSectionTitle.classList.add('text-4xl', 'text-gray-700', 'mb-10');
  menuSectionTitle.innerText = 'OUR MENU';

  const menuSectionDescription = document.createElement('p');
  menuSectionDescription.classList.add('text-sm', 'text-gray-500', 'mb-10');
  menuSectionDescription.innerText = 'Dear friend! Welcome to our restaurant. All dishes are prepared, issued and served in the best traditions of Armenian cuisine. Luxurios selection of drinks. Here you can read more about the menu.';

  const menuSectionButton = document.createElement('button');
  menuSectionButton.setAttribute('route', '#menu');

  menuSectionButton.classList.add(
    'text-left',
    'w-min',
    'border',
    'px-10',
    'py-1',
    'text-gray-700',
  );
  menuSectionButton.innerText = 'MENU';

  menuSectionRightSide.appendChild(menuSectionTitle);
  menuSectionRightSide.appendChild(menuSectionDescription);
  menuSectionRightSide.appendChild(menuSectionButton);

  menuSection.appendChild(menuSectionLeftSide);
  menuSection.appendChild(menuSectionRightSide);
  return menuSection;
})();
