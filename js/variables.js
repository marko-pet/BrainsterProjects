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
    tags: [
      "relevant",
      "most watched",
      "hi",
      "low",
      "asdf",
      "comicallylargefilterfortesting",
    ],
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
    tags: ["most watched"],
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
export const discSection1 = document.getElementById("discSection1");

export const users = [
  {
    username: "User123",
    password: "Pass123",
    email: "user123@mail.com",
    birthDate: 2000,
    pfp: "https://picsum.photos/200",
    gender: "Male",
  },
  {
    username: "User456",
    password: "Pass456",
    email: "user456@mail.com",
    birthDate: 2000,
    pfp: "https://picsum.photos/200",
    gender: "Female",
  },
  {
    username: "User789",
    password: "Pass789",
    email: "user789@mail.com",
    birthDate: 2000,
    pfp: "https://picsum.photos/200",
    gender: "Male",
  },
];
