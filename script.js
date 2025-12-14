const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector("nav .part_2");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});
