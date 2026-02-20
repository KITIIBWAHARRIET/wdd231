export function openModal(room) {

  const modal = document.querySelector("#modal");
  const details = document.querySelector("#modalDetails");

  details.innerHTML = `
    <h3>${room.name}</h3>
    <p>${room.description}</p>
    <p>Price: $${room.price}</p>
    <p>Capacity: ${room.capacity}</p>
  `;

  modal.classList.remove("hidden");

  document.querySelector("#closeModal").addEventListener("click", () => {
    modal.classList.add("hidden");
  });
}