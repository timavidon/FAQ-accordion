const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((accordionHeader) => {
  let target = accordionHeader.parentElement.nextElementSibling;
  accordionHeader.onclick = () => {
    let expanded =
      accordionHeader.getAttribute("aria-expanded") === "true" || false;
    accordionHeader.setAttribute("aria-expanded", !expanded);
    target.hidden = expanded;
  };
});
