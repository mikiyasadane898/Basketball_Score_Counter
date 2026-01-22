let currentHomeScore = 0;
let currentGuestScore = 0;
document.getElementById("home-score").innerText = currentHomeScore;
document.getElementById("guest-score").innerText = currentGuestScore;

let timer = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let round = document.getElementById("round");
let btn = document.getElementsByClassName("incrementBtn");

let roundNumber = 1;
let minute = 0;
let second = 10;

disableButton();

const actions = {
  Home1: () => (document.getElementById("home-score").textContent = ++currentHomeScore),
  Home2: () => (document.getElementById("home-score").textContent = currentHomeScore += 2),
  Home3: () => (document.getElementById("home-score").textContent = currentHomeScore += 3),
  Guest1: () => (document.getElementById("guest-score").textContent = ++currentGuestScore),
  Guest2: () => (document.getElementById("guest-score").textContent = currentGuestScore += 2),
  Guest3: () => (document.getElementById("guest-score").textContent = currentGuestScore += 3),
};

function increment(event) {
  let action = event.dataset.action; // use event.target
  if (actions[action]) actions[action]();
}

startBtn.addEventListener("click", function () {
  // Reset timer values at the start of each round
  minute = 0;
  second = 10;

  round.innerHTML = `Round: ${roundNumber}`;
  for (let i = 0; i < btn.length; i++) btn[i].disabled = false;

  timer.innerHTML = `${minute}:${second}`;
  startBtn.disabled = true;
  timer.style.backgroundColor = "black";
  timer.style.color = "rgb(221, 50, 50)";

  const counter = setInterval(function () {
    if (minute >= 0) {
      timer.innerHTML = `${minute}:${second}`;
      second--;

      if (second < 0) {
        minute--;
        second = 9;
      }
    } else {
      clearInterval(counter);
      timer.innerHTML = `0:00`;
      timer.style.backgroundColor = "rgb(221, 50, 50)";
      timer.style.color = "white";
      startBtn.disabled = false;
      disableButton();

      // Allow up to 4 rounds
      if (roundNumber < 4) {
        roundNumber++;
      } else {
        startBtn.disabled = true; // stop after 4 rounds
      }
    }
  }, 1000);
});

function disableButton() {
  for (let i = 0; i < btn.length; i++) btn[i].disabled = true;
}
