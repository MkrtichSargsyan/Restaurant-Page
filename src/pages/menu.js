import menu_table from '../images/menu_table.jpg'

export default (content)=>{
  const menu = document.createElement('section');
  menu.classList.add('w-full')
  const table_image = document.createElement('img');
  table_image.classList.add("h-screen",'w-full', "object-cover");
  table_image.src = menu_table;
  menu.appendChild(table_image)
  content.appendChild(menu)
}