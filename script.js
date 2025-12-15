document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector("nav .part_2");

  console.log("JS fut", hamburger, menu);

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    console.log("active most:", menu.classList.contains("active"));
  });
});
