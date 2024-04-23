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
  localStorage.getItem("currentUsername");
}

const handleLoggedInUserElements = () => {
  document.getElementById("loginLink").style.display = "none";
  document.getElementById("profileLink").style.display = "flex";
  //   getElementById("logout").style.display = "inline";
};

const handleLoggedOutUserElements = () => {
  document.getElementById("loginLink").style.display = "flex";
  document.getElementById("profileLink").style.display = "none";
  //   getElementById("logout").style.display = "none";
};

const handleUserLogout = () => {
  localStorage.removeItem("currentUsername");
  document.getElementById("loginLink").style.display = "flex";
  document.getElementById("profileLink").style.display = "none";
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
      localStorage.setItem("currentUsername", username);
      location.hash = variables.HASH_ROUTES.infoPage;
    })
    .catch((error) => {
      console.log(error);
      alert(`Something went wrong`);
    });
});
