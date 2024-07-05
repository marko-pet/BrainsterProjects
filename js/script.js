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
// Animation
const heading = document.querySelector("#heading");

function triggerAnimationSequence(element) {
  const lettersArray = element.innerHTML.trim().split("");
  let delay = 0;

  element.innerHTML = "";
  lettersArray.forEach((letter) => {
    let span = document.createElement("SPAN");
    let attr = document.createAttribute("data-animate");

    span.setAttributeNode(attr);
    span.innerHTML = letter;
    span.style.transitionDelay = `${delay}ms`;
    element.appendChild(span);

    void span.offsetWidth;
    span.classList.add("animated");
    delay += 30;
  });

  element.removeAttribute("data-animate");
}

setTimeout(() => {
  triggerAnimationSequence(heading);
}, 250);
// Filters
document
  .querySelector("#filter-marketing")
  .addEventListener("change", filterMarketing);
document
  .querySelector("#filter-programming")
  .addEventListener("change", filterProgramming);
document
  .querySelector("#filter-design")
  .addEventListener("change", filterDesign);

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#filter-marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");

    marketingCards.forEach((marketingCards) => {
      marketingCards.style.display = "block";
    });

    document.querySelector("#filter-programming").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    showAllCards();
  }
}

function filterProgramming() {
  hideAllCards();

  if (document.querySelector("#filter-programming").checked) {
    var programmingCards = document.querySelectorAll(".programming");

    programmingCards.forEach((programmingCards) => {
      programmingCards.style.display = "block";
    });

    document.querySelector("#filter-marketing").checked = false;
    document.querySelector("#filter-design").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#filter-design").checked) {
    var designCards = document.querySelectorAll(".design");

    designCards.forEach((designCards) => {
      designCards.style.display = "block";
    });

    document.querySelector("#filter-programming").checked = false;
    document.querySelector("#filter-marketing").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".card");

  allCards.forEach((card) => {
    card.style.display = "block";
  });
}
