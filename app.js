const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
/* querySelectorAll is really powefull */
const items = document.querySelectorAll('.deadline-format h4')

let futureData = new Date(2020, 4, 7, 17, 30, 0);/* si lo dejo bacio se aplica la fecha actual */

const year = futureData.getFullYear();
const hours = futureData.getHours();
const minutes = futureData.getMinutes();

let month = futureData.getMonth();
month = months[month];
const weekday = weekdays[futureData.getDay()];
const date = futureData.getDate();


giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}am`;

/* future time in ms */
const futureTime = futureData.getTime();

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr
  
  const oneDay = 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMinute = 60*1000;
  //calculate all values
  let days = t / oneDay;
  days = Math.floor(days);
  let hours = Math.floor((t % oneHour) / oneHour);
  console.log(hours);
}

getRemainingTime();