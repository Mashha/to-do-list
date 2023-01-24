import "./styles/style.css";
import { displayPage } from "./dom.js";
displayPage();

const mobileNav = document.querySelector(".mobile-nav");
const aside = document.querySelector("aside");
const navIcons = document.querySelectorAll(".icon");

mobileNav.addEventListener("click", function () {
  aside.classList.toggle("slide-in");
  removeIcon();
});

if (screen.width <= 800) {
  document.querySelector(".today").addEventListener("click", () => {
    removeAside();
    removeIcon();
  });
  document.querySelector(".week-tasks").addEventListener("click", () => {
    removeAside();
    removeIcon();
  });
  document.querySelector(".all-tasks").addEventListener("click", () => {
    removeAside();
    removeIcon();
  });
  document.querySelector(".important").addEventListener("click", () => {
    removeAside();
    removeIcon();
  });

  const projects = document.querySelector(".project-container");
  projects.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-name")) {
      removeAside();
      removeIcon();
    }
  });

  function removeAside() {
    aside.classList.remove("slide-in");
  }
}

function removeIcon() {
  navIcons.forEach((icon) => {
    icon.classList.toggle("hide-icon");
  });
}
