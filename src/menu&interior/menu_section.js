import menu1 from "../images/m1.jpeg";
import menu3 from "../images/m2.jpg";

export default (() => {
  const menu_section = document.createElement("section");
  menu_section.classList.add(
    "bg-white",
    "w-full",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-between",
    "p-12",
    "pb-24"
  );

  // left side

  const menu_section_left_side = document.createElement("div");
  menu_section_left_side.classList.add("flex-1", "relative", "h-80", "mr-10");

  const bigImage = document.createElement("div");
  bigImage.classList.add(
    "h-3/4",
    "w-5/6",
    "bg-no-repeat",
    "bg-cover",
    "bg-center"
  );
  bigImage.style.backgroundImage = `url(${menu1})`;

  const smallImage = document.createElement("div");
  smallImage.classList.add(
    "menu_small_img",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    "absolute",
    "bottom-0",
    "right-0"
  );
  smallImage.style.backgroundImage = `url(${menu3})`;

  menu_section_left_side.appendChild(bigImage);
  menu_section_left_side.appendChild(smallImage);

  // right side

  const menu_section_right_side = document.createElement("div");
  menu_section_right_side.classList.add(
    "flex-1",
    "flex",
    "flex-col",
    "pt-20",
    "md:pl-28"
  );

  const menu_section_title = document.createElement("h2");
  menu_section_title.classList.add("text-4xl", "text-gray-700", "mb-10");
  menu_section_title.innerText = "OUR MENU";

  const menu_section_description = document.createElement("p");
  menu_section_description.classList.add("text-sm", "text-gray-500", "mb-10");
  menu_section_description.innerText = `Dear friend! Welcome to our restaurant. All dishes are prepared, issued and served in the best traditions of Armenian cuisine. Luxurios selection of drinks. Here you can read more about the menu.`;

  const menu_section_button = document.createElement("button");
  menu_section_button.classList.add(
    "text-left",
    "w-min",
    "border",
    "px-10",
    "py-1",
    "text-gray-700"
  );
  menu_section_button.innerText = "MENU";

  menu_section_right_side.appendChild(menu_section_title);
  menu_section_right_side.appendChild(menu_section_description);
  menu_section_right_side.appendChild(menu_section_button);

  menu_section.appendChild(menu_section_left_side);
  menu_section.appendChild(menu_section_right_side);
  return menu_section;
})();
