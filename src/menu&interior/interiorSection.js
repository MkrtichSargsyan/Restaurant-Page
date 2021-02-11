import i1 from '../images/i1.jpg';
import i2 from '../images/i2.jpg';

export default (() => {
  const interiorSection = document.createElement('section');
  interiorSection.classList.add(
    'bg-black',
    'w-full',
    'flex',
    'flex-col',
    'md:flex-row',
    'justify-between',
    'p-12',
    'pb-80',
    'md:py-20',
  );

  // left side

  const interiorSectionLeftSide = document.createElement('div');
  interiorSectionLeftSide.classList.add(
    'flex-1',
    'min-w-1/2',
    'flex',
    'flex-col',
    'md:pr-28',
    'mb-40',
    'md:mb-0',
  );

  const interiorSectionTitle = document.createElement('h2');
  interiorSectionTitle.classList.add('text-4xl', 'text-gray-300', 'mb-10');
  interiorSectionTitle.innerText = 'OUR INTERIOR';

  const interiorSectionDescription = document.createElement('p');
  interiorSectionDescription.classList.add(
    'text-sm',
    'md:w-5/6',
    'text-gray-300',
    'mb-10',
    'flex',
    'flex-col',
  );

  interiorSectionDescription.innerHTML = `<span class='mb-8'>Our restaurant has 2 rooms - a large bright room with panoramic windows and a room in dark colors. Here you can gather a large company or have a date.</span>
  <span>We sincerely hope that you will enjoy visiting our restaurant.</span>`;

  const interiorSectionButton = document.createElement('button');
  interiorSectionButton.classList.add(
    'text-left',
    'w-min',
    'border',
    'px-10',
    'py-1',
    'text-gray-300',
  );
  interiorSectionButton.innerText = 'GALLERY';

  interiorSectionLeftSide.appendChild(interiorSectionTitle);
  interiorSectionLeftSide.appendChild(interiorSectionDescription);
  interiorSectionLeftSide.appendChild(interiorSectionButton);

  // right side

  const interiorSectionRightSide = document.createElement('div');
  interiorSectionRightSide.classList.add(
    'flex-1',
    'flex',
    'flex-row',
    'relative',
  );

  const smallImage = document.createElement('div');
  smallImage.classList.add(
    'menu_small_img',
    'absolute',
    'h-full',
    'w-3/5',
    'bg-no-repeat',
    'bg-cover',
    'bg-center',
  );
  smallImage.style.backgroundImage = `url(${i1})`;

  const bigImage = document.createElement('div');
  bigImage.classList.add(
    'absolute',
    'right-0',
    'md:right-0',
    '-bottom-44',
    'md:bottom-16',
    'h-64',
    'md:h-96',
    'w-2/3',
    'bg-center',
    'bg-no-repeat',
    'bg-cover',
  );
  bigImage.style.backgroundImage = `url(${i2})`;

  interiorSectionRightSide.appendChild(bigImage);
  interiorSectionRightSide.appendChild(smallImage);

  interiorSection.appendChild(interiorSectionLeftSide);
  interiorSection.appendChild(interiorSectionRightSide);
  return interiorSection;
})();
