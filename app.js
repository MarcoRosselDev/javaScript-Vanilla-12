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

let futureData = new Date(2020, 4, 7, 17, 30, 0);

console.log(futureData);

const year = futureData.getFullYear();
const hours = futureData.getHours();
const minutes = futureData.getMinutes();

let month = futureData.getMonth();
console.log(months[month]);

giveaway.textContent = `giveaway ends on ${year} ${hours}:${minutes}am`;
