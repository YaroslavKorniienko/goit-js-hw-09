const startBtn = document.querySelector('[data-start]');
const stoptBtn = document.querySelector('[data-stop]');
const bgColor = document.querySelector('body');

let timerId = null;

startBtn.addEventListener('click', () => {
  timerId = setInterval(setBodyBgColor, 1000);
  startBtn.disabled = true;
  stoptBtn.disabled = false;
});

stoptBtn.addEventListener('click', () => {
  stoptBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setBodyBgColor() {
  return (bgColor.style.backgroundColor = getRandomHexColor());
}
