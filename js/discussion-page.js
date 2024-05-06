import * as variables from "./variables.js";
import * as helpers from "./helpers.js";

let colors = ["blue", "purple", "green"];

document.addEventListener("DOMContentLoaded", function () {
  const savedDiscussions = localStorage.getItem("allDiscussions");

  if (savedDiscussions) {
    document.querySelector(".all-discussions").innerHTML = savedDiscussions;
  }
});

variables.newDiscForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!helpers.getCurrentLoggedInUsername()) {
    alert(`You must be logged in order to add discussions`);
    return;
  }

  const currentUser = variables.users.find(
    (user) => user.username === helpers.getCurrentLoggedInUsername()
  );

  const discDetails = document.getElementById("discDetails");

  const newDisc = document.createElement("div");
  newDisc.classList.add("discussion", colors[helpers.getRandomInt(3)]);
  newDisc.innerHTML = `<div class="discussion-details">
              <p>${discDetails.value}</p>
              <div class="space-between">
                <span class="d-flex aic"
                  ><div class="profile-img">
                    <a href="#"
                      ><img src="${currentUser.pfp}"
                    /></a>
                  </div>
                  ${helpers.getCurrentLoggedInUsername()}</span
                ><span class="d-flex aic">${helpers.getCurrentTime()}</span>
              </div>
              <form>
                <input type="text" placeholder="Напиши коментар..." />
              </form>
              <div class="disc-extra">
                <i class="fa-solid fa-plus"></i><span>5 Коментари</span
                ><span>84 Реакции</span>
              </div>
            </div>`;

  const allDisc = document.querySelector(".all-discussions");
  allDisc.prepend(newDisc);

  localStorage.setItem("allDiscussions", allDisc.innerHTML);

  discDetails.value = "";

  if (localStorage.getItem("users")) {
    const currentUserStorage = JSON.parse(localStorage.getItem("users")).find(
      (user) => user.username === currentUsername
    );

    if (currentUserStorage) {
      currentUserProfile = currentUserStorage;
    }
  }

  currentUser.discussions_posted++;
  console.log(variables.users);
});
