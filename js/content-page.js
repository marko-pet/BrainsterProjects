import * as variables from "./variables.js";

// TYPE FILTERS
variables.pcTypeFilters.forEach((filter, index) => {
  filter.addEventListener("click", () => {
    variables.pcTypeFilters.forEach((item) => item.classList.remove("active"));

    variables.pcTypeFilters[index].classList.toggle("active");
    filterCardsByType(variables.pcTypeFilters[index].innerHTML);
  });
});

// CAROUSEL
variables.carouselBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    variables.carouselItems.forEach((item) => item.classList.remove("active"));
    variables.carouselBtns.forEach((btn) => {
      btn.classList.remove("active");
      variables.carouselItems[index].classList.remove("active");
    });

    btn.classList.toggle("active");
    variables.carouselItems[index].classList.toggle("active");
    filterCardsByType(variables.carouselItems[index].innerHTML);
  });
});

variables.carouselNext.addEventListener("click", () => {
  carouselCycling(1);
});

variables.carouselPrev.addEventListener("click", () => {
  carouselCycling(-1);
});

function carouselCycling(offsetOf) {
  let offset = offsetOf;
  const activeSlide = document.querySelector(
    ".type-of-content-carousel-item.active"
  );
  const currentIndex = [...variables.carouselItems].indexOf(activeSlide);
  let newIndex = currentIndex + offset;

  if (newIndex < 0) newIndex = variables.carouselItems.length - 1;
  if (newIndex >= variables.carouselItems.length) newIndex = 0;

  activeSlide.classList.remove("active");
  variables.carouselBtns[currentIndex].classList.remove("active");

  variables.carouselItems[newIndex].classList.add("active");
  variables.carouselBtns[newIndex].classList.add("active");
  filterCardsByType(variables.carouselItems[newIndex].innerText);
}

// PILL FILTERS
const pillFilters = new Set();
function getPillFilters() {
  variables.contentCardsArray.forEach((card) => {
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
    variables.pillFiltersContainer.appendChild(pillFilter);
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
        variables.contentCardsContainer.innerHTML = "";
        displayContentCards(variables.contentCardsArray);
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

    variables.contentCardsContainer.appendChild(contentCard);
  });
}

filterCardsByType("Видеа");

// MODAL
function openModal(card) {
  const modalDetails = variables.contentPageModal.querySelector(".details");
  const modalVideoPC = variables.contentPageModal.querySelector(
    ".modal-video.tablet-mobile-hidden"
  );
  const modalVideoMobile = variables.contentPageModal.querySelector(
    ".modal-video.pc-hidden"
  );
  const modalComments =
    variables.contentPageModal.querySelector(".all-comments");

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

  variables.contentPageModal.style.display = "flex";
}

// FILTERS
function filterCardsByType(type) {
  variables.contentCardsContainer.innerHTML = "";
  const filteredCardsByType = variables.contentCardsArray.filter((card) => {
    return card.type.toLowerCase() === type.toLowerCase();
  });
  displayContentCards(filteredCardsByType);
}

function filterCardsByTags(tag) {
  variables.contentCardsContainer.innerHTML = "";
  const filteredCardsByTags = variables.contentCardsArray.filter((card) => {
    return card.tags.includes(tag);
  });
  displayContentCards(filteredCardsByTags);
}
