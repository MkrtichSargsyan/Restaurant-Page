import menu1 from '../images/m1.jpeg'

export default (() => {
  const menu_section = document.createElement("section");
  menu_section.classList.add("bg-white", "w-full",'flex','justify-between','p-16');

  const menu_section_left_side = document.createElement('div')
  menu_section_left_side.classList.add('flex-1')
  const bigImage = document.createElement('div');
  bigImage.classList.add('h-64','w-full','bg-no-repeat','bg-cover' )
  bigImage.style.backgroundImage = `url(${menu1})`;

  menu_section_left_side.appendChild(bigImage)

  const menu_section_right_side = document.createElement('div')
  menu_section_right_side.classList.add('flex-1')
   

  menu_section.appendChild(menu_section_left_side);
  menu_section.appendChild(menu_section_right_side);
  return menu_section;
})();
