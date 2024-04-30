export function getCurrentTime() {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = String(currentDate.getFullYear()).slice(2);
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");

  let formattedDateTime = `${day}/${month}/${year}, ${hours}:${minutes}`;
  return formattedDateTime;
}

export function getCurrentLoggedInUsername() {
  return localStorage.getItem("currentUsername");
}

export function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
