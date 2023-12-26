const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const newYears = '31 December 2023';

function countDown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const totalSeconds = (newYearsDate - currentDate) /1000;
  const days = Math.floor(totalSeconds /3600/ 24);
  const hours = Math.floor(totalSeconds /3600) % 24; 
  const minutes = Math.floor(totalSeconds/60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEl.innerText = days;
  hoursEl.innerText  = hours;
  minsEl.innerText = minutes;
  secondsEl.innerText = seconds;

} setInterval(countDown, 1000);

