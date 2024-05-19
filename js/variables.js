export const burger = document.querySelector(".burger");
export const burgerMenu = document.querySelector(
  ".navigation-burger-container"
);
export const carouselItems = document.querySelectorAll(
  ".type-of-content-carousel-item"
);
export const carouselBtns = document.querySelectorAll(".carousel-btn");
export const carouselNext = document.querySelector(".carousel-cycle.next");
export const carouselPrev = document.querySelector(".carousel-cycle.prev");
export const contentCardsContainer = document.querySelector(".content-cards");
export const pcTypeFilters = document.querySelectorAll(".type-of-content");
export const pillFiltersContainer = document.querySelector(".content-filters");
export const contentPageModal = document.querySelector(".content-page-modal");
export const contentPageModalBackground =
  document.querySelector(".modal-background");

export const contentCardsArray = [
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
    tags: ["relevant", "popular"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    tags: ["most watched", "popular"],
    type: "Видеа",
    video: "./videos/video2.mp4",
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
    tags: ["most liked"],
    type: "Видеа",
    video: "./videos/video3.mp4",
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
    video: "./videos/video4.mp4",
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
    id: 5,
    title: "Наслов на видео",
    titleModal: "Лоши навики при “Live streaming”",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    descriptionModal:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.",
    date: "28 / 05 / 23",
    image: "./img/content-card4.jpg",
    tags: ["relevant"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 6,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card3.jpg",
    tags: ["most watched"],
    type: "Видеа",
    video: "./videos/video2.mp4",
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
    id: 7,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card2.jpg",
    tags: ["most liked", "oldest", "engaging"],
    type: "Видеа",
    video: "./videos/video3.mp4",
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
    id: 8,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card1.jpg",
    tags: ["relevant", "newest"],
    type: "Видеа",
    video: "./videos/video4.mp4",
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
    id: 9,
    title: "Наслов на видео",
    titleModal: "Лоши навики при “Live streaming”",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    descriptionModal:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.",
    date: "28 / 05 / 23",
    image: "./img/content-card2.jpg",
    tags: ["popular", "engaging"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 10,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card4.jpg",
    tags: ["popular"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 11,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card3.jpg",
    tags: ["most liked"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 12,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card1.jpg",
    tags: ["rising", "engaging"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 13,
    title: "Наслов на видео",
    titleModal: "Лоши навики при “Live streaming”",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    descriptionModal:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард кој се користел како модел уште пред 1500 години, кога непознат печатар зел кутија со букви и ги сложил на таков начин за да направи примерок на книга. И не само што овој модел опстанал пет векови туку почнал да се користи и во електронските медиуми, кој се уште не е променет.",
    date: "28 / 05 / 23",
    image: "./img/content-card3.jpg",
    tags: ["relevant"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 14,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card4.jpg",
    tags: ["most watched"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 15,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card1.jpg",
    tags: ["most liked", "oldest"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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
    id: 16,
    title: "Наслов на видео",
    description:
      "Лорем ипсум е едноставен модел на текст кој се користел во печатарската индустрија. Лорем ипсум бил индустриски стандард...",
    date: "28 / 05 / 23",
    image: "./img/content-card2.jpg",
    tags: ["rising", "newest"],
    type: "Видеа",
    video: "./videos/video1.mp4",
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

export const HASH_ROUTES = {
  infoPage: "infoPage",
  logInPage: "logInPage",
  contentPage: "contentPage",
  discussionsPage: "discussionsPage",
  contactPage: "contactPage",
  profilePage: "profilePage",
};

export const ALLOWED_ROUTES = Object.values(HASH_ROUTES);
export const USERNAME_SESSION_KEY = "currentUsername";

export const newDiscForm = document.getElementById("newDiscForm");

export const users = [
  {
    username: "User123",
    password: "Pass123",
    email: "user123@mail.com",
    birthDate: 2000,
    pfp: "./img/pfp1.jpg",
    gender: "Male",
    discussions_posted: 0,
    videos_watched: 0,
  },
  {
    username: "User456",
    password: "Pass456",
    email: "user456@mail.com",
    birthDate: 2000,
    pfp: "./img/pfp2.jpg",
    gender: "Female",
    discussions_posted: 0,
    videos_watched: 0,
  },
  {
    username: "User789",
    password: "Pass789",
    email: "user789@mail.com",
    birthDate: 2000,
    pfp: "./img/pfp3.jpg",
    gender: "Male",
    discussions_posted: 0,
    videos_watched: 0,
  },
];

export const profileEditButton = document.getElementById("profileEdit");
export const editConfirm = document.getElementById("editConfirm");
export const editCancel = document.getElementById("editCancel");
export const profileForm = document.getElementById("profileSettings");
