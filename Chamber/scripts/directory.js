const container = document.querySelector("#members");
const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");
const menuBtn = document.getElementById("menu");
const navList = document.querySelector(".navigation");

// Load members from JSON
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
    const card = document.createElement("div");
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

// Menu toggle
menuBtn.addEventListener("click", () => {
  navList.classList.toggle("show");
});

// Load members on page start
loadMembers();
