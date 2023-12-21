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

// const filter1 = document.querySelector("#filter-marketing");

// filter1.addEventListener("click", function onClick() {
//   filter1.style.backgroundColor = "#eb3b3b";
//   filter1.style.color = "#302f38";
// });

// const filter2 = document.querySelector("#filter-programming");

// filter2.addEventListener("click", function onClick() {
//   filter2.style.backgroundColor = "#eb3b3b";
//   filter2.style.color = "#302f38";
// });

// const filter3 = document.querySelector("#filter-design");

// filter3.addEventListener("click", function onClick() {
//   filter3.style.backgroundColor = "#eb3b3b";
//   filter3.style.color = "#302f38";
// });
