const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".navigation-burger-container");
const carouselItems = document.querySelectorAll(
  ".type-of-content-carousel-item"
);
const carouselBtns = document.querySelectorAll(".carousel-btn");
const carouselNext = document.querySelector(".carousel-cycle.next");
const carouselPrev = document.querySelector(".carousel-cycle.prev");
const contentCardsContainer = document.querySelector(".content-cards");
const pcTypeFilters = document.querySelectorAll(".type-of-content");
const pillFiltersContainer = document.querySelector(".content-filters");

const contentCardsArray = [
  {
    id: 1,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card1.jpg",
    tags: ["relevant", "newest"],
    type: "Видеа",
  },
  {
    id: 2,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card2.jpg",
    tags: ["most-watched", "relevant", "newest"],
    type: "Видеа",
  },
  {
    id: 3,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card3.jpg",
    tags: ["most-watched"],
    type: "Видеа",
  },
  {
    id: 4,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card4.jpg",
    tags: ["most-watched", "newest"],
    type: "Видеа",
  },
];

// BURGER
burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("active");
});

// TYPE FILTERS
pcTypeFilters.forEach((filter, index) => {
  filter.addEventListener("click", () => {
    pcTypeFilters.forEach((item) => item.classList.remove("active"));

    pcTypeFilters[index].classList.toggle("active");
    filterCardsByType(pcTypeFilters[index].innerHTML);
  });
});

// CAROUSEL
carouselBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    carouselItems.forEach((item) => item.classList.remove("active"));
    carouselBtns.forEach((btn) => {
      btn.classList.remove("active");
      carouselItems[index].classList.remove("active");
    });

    btn.classList.toggle("active");
    carouselItems[index].classList.toggle("active");
    filterCardsByType(carouselItems[index].innerHTML);
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
  filterCardsByType(carouselItems[newIndex].innerText);
}

// PILL FILTERS
const pillFilters = new Set();
function getPillFilters() {
  contentCardsArray.forEach((card) => {
    card.tags.forEach((tag) => {
      pillFilters.add(tag);
    });
  });
}

getPillFilters();

function displayPills() {
  const pills = Array.from(pillFilters);
  pills.forEach((pill) => {
    const pillFilter = document.createElement("div");
    pillFilter.classList.add("content-filter");
    pillFilter.innerHTML = pill;
    pillFiltersContainer.appendChild(pillFilter);
  });
}

displayPills();

function pillsFilter() {
  const pills = document.querySelectorAll(".content-filter");
  pills.forEach((pill) => {
    pill.addEventListener("click", () => {
      pill.classList.toggle("active");
      const activePills = document.querySelectorAll(".content-filter.active");

      if (activePills.length === 0) {
        contentCardsContainer.innerHTML = "";
        displayContentCards(contentCardsArray);
      } else {
        filterCardsByTags(pill.innerText.toLowerCase());
      }
    });
  });
}

pillsFilter();

// CONTENT CARDS
function displayContentCards(array) {
  array.forEach((card) => {
    const contentCard = document.createElement("div");
    contentCard.classList.add("content-card");
    contentCard.innerHTML = ` <div class="play-button">
            <i class="fa-regular fa-circle-play"></i>
          </div>
          <div class="card-content">
            <div class="card-title">${card.title}</div>
            <div class="card-description">${card.description}</div>
            <div class="card-date">Објавено на ${card.date}</div>
          </div>
        `;
    contentCard.style.backgroundImage = `url('${card.image}')`;

    contentCardsContainer.appendChild(contentCard);
  });
}

filterCardsByType("Видеа");

// FILTERS
function filterCardsByType(type) {
  contentCardsContainer.innerHTML = "";
  const filteredCardsByType = contentCardsArray.filter((card) => {
    return card.type.toLowerCase() === type.toLowerCase();
  });
  displayContentCards(filteredCardsByType);
}

function filterCardsByTags(tag) {
  contentCardsContainer.innerHTML = "";
  const filteredCardsByTags = contentCardsArray.filter((card) => {
    return card.tags.includes(tag);
  });
  displayContentCards(filteredCardsByTags);
}
