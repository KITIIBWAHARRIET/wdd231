document.addEventListener("DOMContentLoaded", () => {
  const timestampField = document.getElementById("timestamp");
  timestampField.value = new Date().toISOString();
});

function openModal(id) {
  document.getElementById(id).showModal();
}

function closeModal(id) {
  document.getElementById(id).close();
}
