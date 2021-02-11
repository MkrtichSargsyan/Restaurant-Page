export default (() => {
  const header = document.createElement('header');
  header.classList.add(
    'flex',
    'items-center',
    'justify-end',
    'h-12',
    'w-full',
    'fixed',
    'z-10',
    'opacity-0',
    'transition',
    'duration-1000',
    'ease-in-out',
  );

  const navItems = document.createElement('ul');
  navItems.classList.add(
    'flex',
    'text-white',
    'bg-black',
    'h-full',
    'items-center',
  );
  navItems.innerHTML = `
      <li route='/' class='mx-4 hover:text-gray-500 cursor-pointer'>home<li>
      <li route='#menu' class='mx-4 hover:text-gray-500 cursor-pointer'>menu<li>
      <li route='#contact' class='mx-4 hover:text-gray-500 cursor-pointer'>contacts<li>
      <li class='mx-4 hover:text-gray-500 cursor-pointer'>interior<li>
  `;

  header.appendChild(navItems);
  return header;
})();
