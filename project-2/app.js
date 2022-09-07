const accordionContainer = document.querySelector(".container");

const getContentHeight = (accordion) => {
  const accordionDiv = accordion.querySelector(".content vdi");

  if (accordion.classList.contains("is-open")) return 0;

  return accordionDiv.getBoundingClientRect().height;
};

const updateAccordion = (accordion, height) => {
  const accordionContent = accordion.querySelector(".content");

  accordion.classList.toggle("is-open");
  accordionContent.style.height = `${height}px`;
};

accordionContainer.addEventListener("click", (event) => {
  const accordionHeader = event.target.closest(".header");

  if (!accordionHeader) return;

  const accordion = accordionHeader.parentElement;
  const height = getContentHeight(accordion);

  updateAccordion(accordion, height);
});
