const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded =
      accordionHeader.getAttribute("aria-expanded") === "true" || false;
    console.log(`from: ${expanded}`);
    accordionHeader.setAttribute("aria-expanded", !expanded);
    target.hidden = expanded;
    console.log(`to: ${!expanded}`);
  };
});

// const accordionHeaders = document.querySelectorAll(".accordion-header");
// accordionHeaders.forEach((accordionHeader) => {
//   let target = accordionHeader.parentElement.nextElementSibling;
//   accordionHeader.onclick = () => {

//   };
// });
