// Hamburger Menu

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#navMenu");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});


// Visit message (rubric requirement)

const visitMessage = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {

    visitMessage.textContent = "Welcome! Let us know if you have any questions.";

} else {

    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        visitMessage.textContent = "Back so soon! Awesome!";
    } else {
        visitMessage.textContent = `You last visited ${days} day(s) ago.`;
    }
}

localStorage.setItem("lastVisit", now);
