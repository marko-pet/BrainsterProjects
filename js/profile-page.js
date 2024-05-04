import * as variables from "./variables.js";
import * as helpers from "./helpers.js";

function disableProfileInputs() {
  const profileInputs = variables.profileForm.querySelectorAll("input");
  profileInputs.forEach((input) => {
    input.disabled = true;
  });
}

disableProfileInputs();

variables.profileForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const editEmail = document.getElementById("editEmail");
const inputEmail = document.getElementById("email-profile");

const editBirthDate = document.getElementById("editBirthDate");
const inputBirthDate = document.getElementById("birth-date");

const confirmEmail = document.getElementById("editEmailConfirm");
const cancelEmail = document.getElementById("editEmailCancel");
const confirmDate = document.getElementById("editBirthDateConfirm");
const cancelDate = document.getElementById("editBirthDateCancel");

// EMAIL
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

editEmail.addEventListener("click", () => {
  beginEditing(editEmail, confirmEmail, cancelEmail, inputEmail);
});

confirmEmail.addEventListener("click", () => {
  if (!isValidEmail(inputEmail.value)) {
    alert("Please enter a valid email");
    return;
  }

  confirmEdit(editEmail, confirmEmail, cancelEmail, inputEmail, "email");
});

cancelEmail.addEventListener("click", () => {
  cancelEdit(editEmail, confirmEmail, cancelEmail, inputEmail);
});

// BIRTHDATE
editBirthDate.addEventListener("click", () => {
  beginEditing(editBirthDate, confirmDate, cancelDate, inputBirthDate);
});

confirmDate.addEventListener("click", () => {
  if (!inputBirthDate.value) {
    alert("Please enter a valid birth date");
    return;
  }

  confirmEdit(
    editBirthDate,
    confirmDate,
    cancelDate,
    inputBirthDate,
    "birthDate"
  );
});

cancelDate.addEventListener("click", () => {
  cancelEdit(editBirthDate, confirmDate, cancelDate, inputBirthDate);
});

let originalValue;

function beginEditing(target, confirm, cancel, input) {
  target.classList.remove("hover");
  confirm.classList.toggle("active");
  cancel.classList.toggle("active");

  input.classList.add("white-background");
  input.classList.remove("hover");
  input.disabled = false;

  originalValue = input.value;
}

function confirmEdit(target, confirm, cancel, input, currentlyEditing) {
  const currentUsername = helpers.getCurrentLoggedInUsername();

  const newValue = input.value;

  const currentUserIndex = variables.users.findIndex(
    (user) => user.username === currentUsername
  );

  if (currentUserIndex !== -1) {
    variables.users[currentUserIndex][currentlyEditing] = newValue;
  }

  let storageArray = [];

  if (localStorage.getItem("users")) {
    storageArray = JSON.parse(localStorage.getItem("users"));

    const userIndexInStorage = storageArray.findIndex(
      (user) => user.username === currentUsername
    );

    if (userIndexInStorage !== -1) {
      storageArray[userIndexInStorage][currentlyEditing] = newValue;
    } else {
      storageArray.push(variables.users[currentUserIndex]);
    }
  } else {
    storageArray.push(variables.users[currentUserIndex]);
  }

  localStorage.setItem("users", JSON.stringify(storageArray));

  target.classList.add("hover");
  confirm.classList.toggle("active");
  cancel.classList.toggle("active");
  input.classList.remove("white-background");
  input.classList.add("hover");
  input.disabled = true;

  console.log("Updated variables.users:", variables.users);
  console.log("Updated storageArray:", storageArray);
}

function cancelEdit(target, confirm, cancel, input) {
  input.value = originalValue;

  target.classList.add("hover");
  confirm.classList.toggle("active");
  cancel.classList.toggle("active");
  input.classList.remove("white-background");
  input.classList.add("hover");
  input.disabled = true;
}
