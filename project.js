
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 45);

const intervalId = setInterval(() => {
  const currentDate = new Date().getTime();
  const timeRemaining = targetDate - currentDate;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days;
document.getElementById('hours').textContent = hours;
document.getElementById('minutes').textContent = minutes;
document.getElementById('seconds').textContent = seconds;
document.getElementById('remaining').textContent = targetDate;
  

  if (timeRemaining < 0) {
    clearInterval(intervalId);
    targetDate.setDate(targetDate.getDate() + 10);
  }
}, 1000);