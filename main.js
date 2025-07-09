/* const year=document.getElementById("year")
const thisYear = new Date().getFullYear()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

const day = document.getElementById("day")
const thisDay = new Date().getDay()
day.setAttribute("currentdate", thisDay)
day.textContent=thisDay */
const today = new Date();
document.getElementById("date").textContent = today.toDateString();
function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  // Add leading zeros (e.g., 08:05:03)
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById("clock").textContent = timeString;
}

// Update clock every second
setInterval(updateClock, 1000);
updateClock();
