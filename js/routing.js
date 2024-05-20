import * as variables from "./variables.js";
import * as helpers from "./helpers.js";

function usersToLocalStorage() {
  if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(variables.users));
  }
}

usersToLocalStorage();

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
  document.getElementById("discUsername").textContent = currentUser.username;
};

const handleLoggedOutUserElements = () => {
  document.querySelector(".log-in-btn-a").classList.add("visible");
  document.querySelector(".log-out-btn-a").classList.remove("visible");
  document.getElementById("profileImageLink").classList.remove("visible");
  document.getElementById("profileLink").classList.remove("visible");
  document.getElementById("profileLinkBurger").style.display = "none";
  document.getElementById("discUsername").textContent =
    "Log in to add a discussion";
};

const handleUserLogout = () => {
  localStorage.removeItem("currentUsername");
  localStorage.removeItem("currentPassword");
  handleLoggedOutUserElements();
  location.hash = variables.HASH_ROUTES.logInPage;
  location.reload();
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

  if (variables.burger.classList.contains("active")) {
    variables.burger.classList.remove("active");
    variables.burgerMenu.classList.remove("active");
  }

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
  } else {
    document.querySelector(`#${variables.HASH_ROUTES.infoPage}`).style.display =
      "block";
    location.hash = variables.HASH_ROUTES.infoPage;
  }

  const currentUsername = helpers.getCurrentLoggedInUsername();
  if (currentUsername) {
    handleLoggedInUserElements();
    populateProfile();
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

    const secInfoModal = document.getElementById("secInfoModal");
    secInfoModal.classList.remove("d-none");
    secInfoModal.classList.add("d-grid");

    secInfoModal.addEventListener("click", () => {
      location.hash = variables.HASH_ROUTES.contentPage;

      secInfoModal.classList.remove("d-grid");
      secInfoModal.classList.add("d-none");

      location.reload();
    });

    console.log(requestData);
    localStorage.setItem("currentUsername", username);
    localStorage.setItem("currentPassword", password);
  } catch (error) {
    console.error("Fetch Error:", error);
    alert(`Could not log in: ${error.message}`);
  }
}

document.getElementById("logInForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("usernameLogIn").value;
  const password = document.getElementById("passwordLogIn").value;

  loginUser(username, password);
});

function populateProfile() {
  let currentUserProfile;

  if (localStorage.getItem("users")) {
    const currentUserStorage = JSON.parse(localStorage.getItem("users")).find(
      (user) => user.username === currentUsername
    );

    if (currentUserStorage) {
      currentUserProfile = currentUserStorage;
    }
  }

  if (!currentUserProfile) {
    currentUserProfile = variables.users.find(
      (user) => user.username === currentUsername
    );
  }

  if (currentUserProfile) {
    document.getElementById("username-profile").value =
      currentUserProfile.username;
    document.getElementById("email-profile").value = currentUserProfile.email;
    document.getElementById("password-profile").value =
      currentUserProfile.password;
    document.getElementById("birth-date").value = currentUserProfile.birthDate;
    document.getElementById("gender").value = currentUserProfile.gender;
    document.getElementById("profilePicture").src = currentUserProfile.pfp;

    if (currentUserProfile.discussions_posted >= 1) {
      const discussionAchievement = document.getElementById(
        "discussionAchievement"
      );
      discussionAchievement.classList.remove("d-none");
      discussionAchievement.classList.add("d-grid");
    }

    if (currentUserProfile.videos_watched >= 5) {
      const videosAchievement = document.getElementById("videosAchievement");
      videosAchievement.classList.remove("d-none");
      videosAchievement.classList.add("d-grid");
    }
  }
}
