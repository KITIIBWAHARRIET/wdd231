const menuBtn = document.querySelector("#menuBtn");
const navLinks = document.querySelector("#navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

localStorage.setItem("lastVisit", new Date().toLocaleString());