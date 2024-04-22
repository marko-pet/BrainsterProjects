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
const contentPageModal = document.querySelector(".content-page-modal");

const contentCardsArray = [
  {
    id: 1,
    title: "Наслов на видео",
    titleModal: "Лоши навики при “Live streaming”",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    descriptionModal:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.",
    date: "28 / 05 / 23",
    image: "./img/content-card1.jpg",
    tags: ["relevant", "most-watched"],
    type: "Видеа",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?mute=1",
    comments: [
      {
        id: 1,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 2,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел.",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 3,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
    ],
  },
  {
    id: 2,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card2.jpg",
    tags: ["most-watched"],
    type: "Видеа",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?mute=1",
    comments: [
      {
        id: 1,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 2,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел.",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 3,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
    ],
  },
  {
    id: 3,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card3.jpg",
    tags: ["wacky"],
    type: "Видеа",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?mute=1",
    comments: [
      {
        id: 1,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 2,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел.",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 3,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
    ],
  },
  {
    id: 4,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card4.jpg",
    tags: ["relevant", "newest"],
    type: "Видеа",
    video: "https://www.youtube.com/embed/tgbNymZ7vqY?mute=1",
    comments: [
      {
        id: 1,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 2,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел.",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
      {
        id: 3,
        author: "Име Презиме",
        text: "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. ",
        date: "00/00/00, 00:00",
        pfp: "https://picsum.photos/200",
      },
    ],
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

    contentCard.addEventListener("click", () => {
      openModal(card);
    });

    contentCardsContainer.appendChild(contentCard);
  });
}

filterCardsByType("Видеа");

// MODAL
function openModal(card) {
  const modalDetails = contentPageModal.querySelector(".details");
  const modalVideoPC = contentPageModal.querySelector(
    ".modal-video.tablet-mobile-hidden"
  );
  const modalVideoMobile = contentPageModal.querySelector(
    ".modal-video.pc-hidden"
  );
  const modalComments = contentPageModal.querySelector(".all-comments");

  modalDetails.innerHTML = `<h3>${card.titleModal}</h3><p>${card.descriptionModal}</p>
            <div class="details-date">Објавено на ${card.date}</div>`;

  modalVideoPC.innerHTML = `<iframe
              width="100%"
              height="720"
              src="${card.video}"
            >
            </iframe>`;

  modalVideoMobile.innerHTML = `<iframe
              width="100%"
              height="480"
              src="${card.video}"
            >
            </iframe>`;

  card.comments.forEach((comment) => {
    modalComments.innerHTML += `<div class="comment">
                <p>
                  ${comment.text}
                </p>

                <div class="space-between">
                  <span class="d-flex aic">
                    <div class="profile-modal">
                      <div class="profile-img">
                        <a href="#"
                          ><img src="${comment.pfp}"
                        /></a>
                      </div>
                    </div>
                    ${comment.author}</span
                  ><span class="d-flex aic">Date</span>
                </div>
              </div>`;
  });

  contentPageModal.style.display = "flex";
}

// Close modal function (you can implement this if needed)
function closeModal() {
  contentPageModal.style.display = "none";
}

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
