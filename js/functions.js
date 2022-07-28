// seleccionar al boton
const botonNavbar = document.getElementById("sidebarCollapse");
const buttonToggle_mini = document.getElementById("buttonToggle_mini");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("content");
const main_content = document.querySelector(".main-content");
botonNavbar.addEventListener("click", () => {
  sidebar.classList.toggle("active");
  content.classList.toggle("active");
});
buttonToggle_mini.addEventListener("click", () => {
  sidebar.classList.toggle("show-nav");
  main_content.classList.toggle("effectBlur");
});
window.addEventListener("click", (e) => {
  if (sidebar.classList.contains("show-nav")) {
    if (main_content.contains(e.target)) {
      sidebar.classList.toggle("show-nav");
      main_content.classList.toggle("effectBlur");
    }
  }
});
