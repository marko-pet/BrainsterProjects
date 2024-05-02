import * as variables from "./variables.js";
import * as helpers from "./helpers.js";

function hideAllSections() {
  document.querySelectorAll("section").forEach((section) => {
    section.style.display = "none";
  });
}

function getHashRoute() {
  return location.hash.slice(1);
}

const handleLoggedInUserElements = () => {
  const currentUser = variables.users.find(
    (user) => user.username === helpers.getCurrentLoggedInUsername()
  );

  document.querySelector(".log-in-btn-a").classList.remove("visible");
  document.querySelector(".log-out-btn-a").classList.add("visible");
  document.getElementById("profileImageLink").classList.add("visible");
  document.getElementById("navUserImage").src = `${currentUser.pfp}`;
  document.getElementById("profileLink").classList.add("visible");
  document.getElementById("profileLinkBurger").style.display = "flex";
};

const handleLoggedOutUserElements = () => {
  document.querySelector(".log-in-btn-a").classList.add("visible");
  document.querySelector(".log-out-btn-a").classList.remove("visible");
  document.getElementById("profileImageLink").classList.remove("visible");
  document.getElementById("profileLink").classList.remove("visible");
  document.getElementById("profileLinkBurger").style.display = "none";
};

const handleUserLogout = () => {
  localStorage.removeItem("currentUsername");
  localStorage.removeItem("currentPassword");
  handleLoggedOutUserElements();
  location.hash = variables.HASH_ROUTES.logInPage;
};

const currentHashRoute = getHashRoute();
const currentUsername = helpers.getCurrentLoggedInUsername();

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
  populateProfile();
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

    if (
      hashRoute === variables.HASH_ROUTES.profilePage &&
      !helpers.getCurrentLoggedInUsername()
    ) {
      location.hash = variables.HASH_ROUTES.logInPage;
      return;
    }

    if (hashRoute === variables.HASH_ROUTES.profilePage) {
      location.reload();
    }
  } else {
    document.querySelector(`#${variables.HASH_ROUTES.infoPage}`).style.display =
      "block";
    location.hash = variables.HASH_ROUTES.infoPage;
  }

  const currentUsername = helpers.getCurrentLoggedInUsername();
  if (currentUsername) {
    handleLoggedInUserElements();
  } else {
    handleLoggedOutUserElements();
  }
});

document.querySelector(".log-out-btn-a").addEventListener("click", () => {
  handleUserLogout();
});

async function loginUser(username, password) {
  const requestData = { username, password };

  try {
    const response = await fetch("http://localhost:5000/api/authentication", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      throw new Error("Failed to authenticate");
    }

    console.log(requestData);
    localStorage.setItem("currentUsername", username);
    localStorage.setItem("currentPassword", password);
    location.hash = variables.HASH_ROUTES.contentPage;
  } catch (error) {
    console.error("Fetch Error:", error);
    alert(`Something went wrong`);
  }
}

document.getElementById("logInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("usernameLogIn").value;
  const password = document.getElementById("passwordLogIn").value;

  loginUser(username, password);
});

function populateProfile() {
  const currentUser = variables.users.find(
    (user) => user.username === currentUsername
  );

  if (currentUser) {
    document.getElementById("username-profile").value = currentUser.username;
    document.getElementById("email-profile").value = currentUser.email;
    document.getElementById("password-profile").value = currentUser.password;
    document.getElementById("birth-date").value = currentUser.birthDate;
    document.getElementById("gender").value = currentUser.gender;
    document.getElementById("profilePicture").src = currentUser.pfp;
  }
}
