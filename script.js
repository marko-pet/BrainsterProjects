// Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
// Filters
document
  .querySelector("#filter-marketing")
  .addEventListener("click", filterMarketing);
document
  .querySelector("#filter-programming")
  .addEventListener("click", filterProgramming);
document
  .querySelector("#filter-design")
  .addEventListener("click", filterDesign);

function filterMarketing() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });

  var marketingCards = document.querySelectorAll(".marketing");

  marketingCards.forEach((marketingCards) => {
    marketingCards.style.display = "block";
  });
}

function filterProgramming() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });

  var programmingCards = document.querySelectorAll(".programming");

  programmingCards.forEach((programmingCards) => {
    programmingCards.style.display = "block";
  });
}

function filterDesign() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });

  var designCards = document.querySelectorAll(".design");

  designCards.forEach((designCards) => {
    designCards.style.display = "block";
  });
}
