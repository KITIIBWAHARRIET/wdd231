const container = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

async function loadMembers() {
  try {
    const response = await fetch("data/members.json");
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
    container.innerHTML = "<p>Failed to load member businesses.</p>";
  }
}

function displayMembers(members) {
  container.innerHTML = "";
  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member-card");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
    `;
    container.appendChild(card);
  });
}

// Grid/List toggle
gridBtn.addEventListener("click", () => {
  container.classList.add("grid");
  container.classList.remove("list");
});

listBtn.addEventListener("click", () => {
  container.classList.add("list");
  container.classList.remove("grid");
});

// Load on page start
loadMembers();
const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});
async function loadMembers() {
  const container = document.querySelector("#members");
  try {
    const response = await fetch("data/members.json"); // path relative to directory.html
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error("Error loading members:", error);
    container.innerHTML = "<p>Failed to load member businesses.</p>";
  }
}
