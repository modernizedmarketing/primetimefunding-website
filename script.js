const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const releaseDate = '2024-01-27T10:00:00';

function countDown() {
  const releaseDateDate = new Date(releaseDate);
  const currentDate = new Date();
  const totalSeconds = (releaseDateDate - currentDate) /1000;
  const days = Math.floor(totalSeconds /3600/ 24);
  const hours = Math.floor(totalSeconds /3600) % 24; 
  const minutes = Math.floor(totalSeconds/60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  if (days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0) 
  {
    daysEl.innerText = days;
    hoursEl.innerText  = hours;
    minsEl.innerText = minutes;
    secondsEl.innerText = seconds;
  }

} setInterval(countDown, 1000);

