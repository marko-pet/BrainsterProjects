const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".navigation-burger-container");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});
