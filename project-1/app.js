const burger = document.querySelector(".hamburger");
const nav = document.querySelector(".navigation");
const burgerFirstLine = document.querySelector(".line-1");
const burgerSecondLine = document.querySelector(".line-2");
const burgerThirdLine = document.querySelector(".line-3");

burger.addEventListener("click", () => {
  nav.classList.toggle("display-nav");

  burgerFirstLine.classList.toggle("line-1-toggled");
  burgerSecondLine.classList.toggle("line-2-toggled");
  burgerThirdLine.classList.toggle("line-3-toggled");
});
