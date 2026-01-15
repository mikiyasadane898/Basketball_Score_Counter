
let currentHomeScore = document.getElementById("home-score").innerText = 0;
let currentGuestScore = document.getElementById("guest-score").innerText = 0;
const actions = {
    Home1: () => document.getElementById("home-score").textContent = currentHomeScore += 1,
    Home2: () => document.getElementById("home-score").textContent = currentHomeScore += 2,
    Home3: () => document.getElementById("home-score").textContent = currentHomeScore += 3,
    Guest1: () =>document.getElementById("guest-score").textContent = currentGuestScore += 1,
    Guest2: () =>document.getElementById("guest-score").textContent = currentGuestScore += 2,
    Guest3: () =>document.getElementById("guest-score").textContent = currentGuestScore += 3
}

function increment(event){
    action = event.dataset.action;

    if( actions[action]){
        actions[action]();   
        
    }


}
