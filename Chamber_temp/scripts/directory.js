// Display current year and last modified
const yearEl = document.getElementById("year");
const lastModifiedEl = document.getElementById("lastModified");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (lastModifiedEl) {
  lastModifiedEl.textContent = document.lastModified;
}

// Mobile nav toggle
const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navigation");

if (menuBtn && navList) {
  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("show");
  });
}
