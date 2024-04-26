export const currentDate = new Date();

export const day = String(currentDate.getDate()).padStart(2, "0");
export const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // January is 0!
export const year = String(currentDate.getFullYear()).slice(2);
export const hours = String(currentDate.getHours()).padStart(2, "0");
export const minutes = String(currentDate.getMinutes()).padStart(2, "0");

export const formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}`;

export function getCurrentLoggedInUsername() {
  return localStorage.getItem("currentUsername");
}
