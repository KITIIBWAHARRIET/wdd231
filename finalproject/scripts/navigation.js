export function initNav() {

 const btn = document.querySelector("#menuBtn");
 const links = document.querySelector("#navLinks");

 if(btn) {
   btn.addEventListener("click", () => {
     links.classList.toggle("open");
   });
 }

}
