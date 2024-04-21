const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".navigation-burger-container");
const carouselItems = document.querySelectorAll(
  ".type-of-content-carousel-item"
);
const carouselBtns = document.querySelectorAll(".carousel-btn");
const carouselNext = document.querySelector(".carousel-cycle.next");
const carouselPrev = document.querySelector(".carousel-cycle.prev");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

carouselBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    carouselItems.forEach((item) => item.classList.remove("active"));
    carouselBtns.forEach((btn) => {
      btn.classList.remove("active");
      carouselItems[index].classList.remove("active");
    });

    btn.classList.toggle("active");
    carouselItems[index].classList.toggle("active");
  });
});

carouselNext.addEventListener("click", () => {
  carouselCycling(1);
});

carouselPrev.addEventListener("click", () => {
  carouselCycling(-1);
});

function carouselCycling(offsetOf) {
  let offset = offsetOf;
  const activeSlide = document.querySelector(
    ".type-of-content-carousel-item.active"
  );
  const currentIndex = [...carouselItems].indexOf(activeSlide);
  let newIndex = currentIndex + offset;

  if (newIndex < 0) newIndex = carouselItems.length - 1;
  if (newIndex >= carouselItems.length) newIndex = 0;

  activeSlide.classList.remove("active");
  carouselBtns[currentIndex].classList.remove("active");

  carouselItems[newIndex].classList.add("active");
  carouselBtns[newIndex].classList.add("active");
}
