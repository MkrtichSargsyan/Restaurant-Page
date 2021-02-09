export default (() => {
  const greeting = document.createElement("div");
  greeting.classList.add(
    "w-3/4",
    "absolute",
    "top-40",
    "left-16",
    "md:left-32"
  );
  greeting.innerHTML = `
    <h1 class='text-2xl md:text-4xl text-white leading-relaxed mb-3'>
      Skinny people are <br>
      easier to kidnap.<br>
      Stay safe.<br>
      Eat healthy.
    </h1>
    <h2 class='text-gray-300 mb-10'>
      It's easier to be faithful to a restaurant than <br>
      it is to a woman
    </h2>
    <div>
      <button class="uppercase px-6 py-3 mr-3 outline-none rounded-full bg-yellow-600 text-blue-50 max-w-max shadow-sm hover:bg-yellow-500 transition-all duration-500">
        CONTACT US
      </button>
      <button class="uppercase px-6 py-3 outline-none rounded-full border border-yellow-600 text-yellow-600 max-w-max shadow-sm hover:border-yellow-500 hover:text-yellow-500 transition-all duration-500">
        OUR MENU
      </button>
    </div>
  `;
  return greeting;
})();
