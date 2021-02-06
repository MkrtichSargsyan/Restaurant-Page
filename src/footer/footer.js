import ss from "../images/ss.png";

export default (() => {
  const footer = document.createElement("footer");
  footer.classList.add(
    "footer",
    "flex",
    "w-full",
    "justify-around",
    "px-16",
    "sm:px-40",
    "md:px-8",

    "lg:px-32",
    "pt-16",
    "md:pt-32",
    "pb-16",
    "flex-col",
    "md:flex-row"
  );

  footer.innerHTML = `
    <article class='flex-1 mb-10 flex flex-col items-center md:items-start'>
      <h3 class='text-yellow-600 mb-4'>Location</h3>
      <p class='text-gray-200'>Armenia, 0084, Yerevan</p>
      <p class='text-gray-200'>Oganovi St., 15/1 Building</p>
      <p class='text-gray-200'>(Malatia-Sebastia adm. district)</p>
    </article>

    <article class='mb-10  flex flex-col items-center md:items-start'>
      <h3 class='text-yellow-600 mb-4'>Working Hours</h3>
      <p class='text-gray-200 flex justify-between w-60'> 
        <span class='mr-5'>Monday-Thursday
        </span><span>10 am-9 am </span>
      </p>
      <p class='text-gray-200 flex justify-between w-60'> 
        <span class='mr-5'>Friday</span>
        <span>4pm-11pm</span>
      </p> 
      <p class='text-gray-200 flex justify-between w-60'>
       <span class='mr-5'>Saturday-Sunday</span>
       <span>10am- 11pm</span> 
      </p>
    </article>

    <article class='flex-1 lg:pt-5 flex flex-col items-center lg:justify-center  flex flex-col md:items-end'>
     <div><img src=${ss} alt="logo"/></div>  
     <address class='text-gray-200 md:pr-8 mt-5'>www.Khashlama.com</address>
    </article>

   

  `;

  return footer;
})();
