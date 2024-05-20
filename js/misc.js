import * as variables from "./variables.js";
// BURGER
variables.burger.addEventListener("click", () => {
  variables.burger.classList.toggle("active");
  variables.burgerMenu.classList.toggle("active");
});

// SHOW PASSWORD
variables.showPass.addEventListener("click", () => {
  const passwordInput = document.getElementById("passwordLogIn");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    variables.showPass.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    passwordInput.type = "password";
    variables.showPass.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
});
