const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger?.addEventListener("click", () => {
  navLinks?.classList.toggle("expanded");
});
navLinks?.addEventListener("click", () => {
  navLinks?.classList.toggle("expanded");
});

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("emerging");
    }
    console.log(entry);
  });
};

const options = {
  threshold: 1,
};

const targetList = [".gallery", ".about", ".twitter"];

const observer = new IntersectionObserver(callback, options);
targetList.forEach((value) => {
  observer.observe(document.querySelector(value));
});
import "https://platform.twitter.com/widgets.js";
