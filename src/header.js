export default (() => {
  const header = document.createElement("header");
  header.classList.add(
    "flex",
    "items-center",
    "justify-end",
    "h-12",
    "w-full",
    "fixed",
    "z-10",
    "opacity-0",
    "transition",
    "duration-1000",
    "ease-in-out"
  );

  const nav_items = document.createElement("ul");
  nav_items.classList.add(
    "flex",
    "text-black",
    "bg-gray-200",
    "h-full",
    "items-center"
  );
  nav_items.innerHTML = `
      <li route='/' class='mx-4 hover:text-gray-500 cursor-pointer'>home<li>
      <li route='#menu' class='mx-4 hover:text-gray-500 cursor-pointer'>menu<li>
      <li class='mx-4 hover:text-gray-500 cursor-pointer'>contacts<li>
      <li class='mx-4 hover:text-gray-500 cursor-pointer'>interior<li>
  `;

  header.appendChild(nav_items);
  return header;
})();
