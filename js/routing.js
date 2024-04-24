import * as variables from "./variables.js";

function hideAllSections() {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
}

function getHashRoute() {
  return location.hash.slice(1);
}

function getCurrentLoggedInUsername() {
  return localStorage.getItem("currentUsername");
}

const handleLoggedInUserElements = () => {
  document.querySelector(".log-in-btn-a").classList.remove("visible");
  document.querySelector(".log-out-btn-a").classList.add("visible");
  document.getElementById("profileImageLink").classList.add("visible");
  document.getElementById("profileLink").classList.add("visible");
  document.getElementById("profileLinkBurger").style.display = "flex";
  //   getElementById("logout").style.display = "inline";
};

const handleLoggedOutUserElements = () => {
  document.querySelector(".log-in-btn-a").classList.add("visible");
  document.querySelector(".log-out-btn-a").classList.remove("visible");
  document.getElementById("profileImageLink").classList.remove("visible");
  document.getElementById("profileLink").classList.remove("visible");
  document.getElementById("profileLinkBurger").style.display = "none";
  //   getElementById("logout").style.display = "none";
};

const handleUserLogout = () => {
  localStorage.removeItem("currentUsername");
  localStorage.removeItem("currentPassword");
  handleLoggedOutUserElements();
  location.hash = variables.HASH_ROUTES.logInPage;
};

const currentHashRoute = getHashRoute();
const currentUsername = getCurrentLoggedInUsername();

hideAllSections();

if (currentUsername) {
  handleLoggedInUserElements();
} else {
  handleLoggedOutUserElements();
}

if (!currentHashRoute) {
  location.hash = variables.HASH_ROUTES.infoPage;
} else if (variables.ALLOWED_ROUTES.includes(currentHashRoute)) {
  document.querySelector(`#${currentHashRoute}`).style.display = "block";
} else {
  document.querySelector(`#infoPage`).style.display = "block";
  location.hash = variables.HASH_ROUTES.infoPage;
}

window.addEventListener("hashchange", () => {
  const hashRoute = getHashRoute();
  const currentSection = document.querySelector(`#${hashRoute}`);

  hideAllSections();

  if (variables.ALLOWED_ROUTES.includes(hashRoute)) {
    currentSection.style.display = "block";
  } else {
    document.querySelector(`#${variables.HASH_ROUTES.infoPage}`).style.display =
      "block";
  }

  const currentUsername = getCurrentLoggedInUsername();
  if (currentUsername) {
    handleLoggedInUserElements();
  } else {
    handleLoggedOutUserElements();
  }
});

document.querySelector(".log-out-btn-a").addEventListener("click", () => {
  handleUserLogout();
});

document.getElementById("logInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("usernameLogIn").value;
  const password = document.getElementById("passwordLogIn").value;

  const requestData = { username, password };

  fetch("http://localhost:5000/api/authentication", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestData),
  })
    .then((_) => {
      console.log(requestData);

      localStorage.setItem("currentUsername", username);
      localStorage.setItem("currentPassword", password);
      location.hash = variables.HASH_ROUTES.infoPage;
    })
    .catch((error) => {
      console.error("Fetch Error:", error);
      alert(`Something went wrong`);
    });
});
