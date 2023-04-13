const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("expanded");
});
navLinks?.addEventListener("click", () => {
  navLinks?.classList.toggle("expanded");
});

import "https://platform.twitter.com/widgets.js";
