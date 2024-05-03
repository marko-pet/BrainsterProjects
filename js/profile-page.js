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

const editBtns = document.querySelectorAll(".special");
editBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.remove("hover");
    variables.editConfirm.classList.toggle("active");
    variables.editCancel.classList.toggle("active");
    console.log(`click`);

    const input = document.getElementById("email-profile");

    input.classList.add("white-background");
    input.classList.remove("hover");
    input.textContent = currentUser.email;
    input.disabled = false;
  });
});
