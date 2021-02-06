import i1 from "../images/i1.jpg";
import i2 from "../images/i2.jpg";

export default (() => {
  const interior_section = document.createElement("section");
  interior_section.classList.add(
    "bg-black",
    "w-full",
    "flex",
    "flex-col",
    "md:flex-row",
    "justify-between",
    "p-12",
    "py-20",
  );

  // left side

  const interior_section_left_side = document.createElement("div");
  interior_section_left_side.classList.add(
    "flex-1",
    "flex",
    "flex-col",
    "md:pr-28",
    'mt-8'
  );

  const interior_section_title = document.createElement("h2");
  interior_section_title.classList.add("text-4xl", "text-gray-300", "mb-10");
  interior_section_title.innerText = "OUR INTERIOR";

  const interior_section_description = document.createElement("p");
  interior_section_description.classList.add("text-sm",'w-5/6', "text-gray-300", "mb-10",'flex','flex-col');

  interior_section_description.innerHTML = `<span class='mb-8'>Our restaurant has 2 rooms - a large bright room with panoramic windows and a room in dark colors. Here you can gather a large company or have a date.</span>
  <span>We sincerely hope that you will enjoy visiting our restaurant.</span>`;

  const interior_section_button = document.createElement("button");
  interior_section_button.classList.add(
    "text-left",
    "w-min",
    "border",
    "px-10",
    "py-1",
    "text-gray-300"
  );
  interior_section_button.innerText = "GALLERY";

  interior_section_left_side.appendChild(interior_section_title);
  interior_section_left_side.appendChild(interior_section_description);
  interior_section_left_side.appendChild(interior_section_button);

  // right side

  const interior_section_right_side = document.createElement("div");
  interior_section_right_side.classList.add("flex-1", "relative", "h-4/6");


  const smallImage = document.createElement("div");
  smallImage.classList.add(
    "h-80",
    "w-80",
    "bg-no-repeat",
    "bg-cover",
    "bg-center",
    'absolute',
    'ml-16'
  );
  smallImage.style.backgroundImage = `url(${i1})`;

  const bigImage = document.createElement("div");
  bigImage.classList.add(
    "interior_big_image",
    "bg-center",
    "bg-no-repeat",
    "bg-cover",
    '-top-36',
    "right-0",
    'absolute'
  );
  bigImage.style.backgroundImage = `url(${i2})`;

  interior_section_right_side.appendChild(bigImage);
  interior_section_right_side.appendChild(smallImage);

  interior_section.appendChild(interior_section_left_side);
  interior_section.appendChild(interior_section_right_side);
  return interior_section;
})();
