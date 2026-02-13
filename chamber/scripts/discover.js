import { places } from "..sripts/data.mjs";

// Populate cards
const container = document.querySelector(".discover-grid");

places.forEach((place, index) => {
  const card = document.createElement("section");
  card.innerHTML = `
    <h2>${place.name}</h2>
    <figure><img src="${place.image}" alt="${place.name}" loading="lazy"></figure>
    <address>${place.address}</address>
    <p>${place.description}</p>
    <button>Learn More</button>
  `;
  container.appendChild(card);
});

// localStorage visitor message
const message = document.querySelector("#visit-message");
const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const days = Math.floor((now - lastVisit)/86400000);
  if (days < 1) message.textContent = "Back so soon! Awesome!";
  else if (days === 1) message.textContent = "You last visited 1 day ago.";
  else message.textContent = `You last visited ${days} days ago.`;
}
localStorage.setItem("lastVisit", now);

// Hamburger menu toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});
console.log("DISCOVER PAGE WORKING");

document.querySelector("main").innerHTML += "<h2>Discover content loaded!</h2>";

