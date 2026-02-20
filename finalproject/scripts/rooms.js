import { openModal } from "./modal.js";

const container = document.querySelector("#roomsContainer");

async function fetchRooms() {
  try {
    const response = await fetch("scripts/rooms.json");
    const rooms = await response.json();

    displayRooms(rooms);

  } catch (error) {
    container.innerHTML = "<p>Unable to load rooms.</p>";
    console.error(error);
  }
}

function displayRooms(rooms) {

  rooms.forEach(room => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${room.image}" alt="${room.name}" loading="lazy">
      <h3>${room.name}</h3>
      <p>${room.description}</p>
      <p><strong>$${room.price}</strong> | ${room.capacity}</p>
      <button data-id="${room.id}">View Details</button>
    `;

    container.appendChild(card);
  });

  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const selectedRoom = rooms.find(room => room.id == id);
      openModal(selectedRoom);
    });
  });
}

fetchRooms();