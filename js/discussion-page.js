import * as variables from "./variables.js";
import * as helpers from "./helpers.js";

variables.newDiscForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const discDetails = document.getElementById("discDetails");

  variables.discSection1.innerHTML += `<div class="discussion blue">
              <div class="discussion-details">
                <p>
                  ${discDetails.value}
                </p>
                <div class="space-between">
                  <span>John Doe</span><span>${helpers.formattedDateTime}</span>
                </div>
                <form>
                  <input type="text" placeholder="Сподели искуство..." />
                  <span>John Doe</span>
                </form>
                <div>
                  <i class="fa-solid fa-plus"></i><span>5 Коментари</span
                  ><span>84 Реакции</span>
                </div>
              </div>
            </div>`;

  discDetails.value = "bruh";
});
