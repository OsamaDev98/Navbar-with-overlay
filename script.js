const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});
overlay.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
});
