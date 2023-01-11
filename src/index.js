import "./styles/style.css";
import { displayPage } from "./dom.js";
displayPage();

//slide in nav bar
const mobileNav = document.querySelector(".mobile-nav");
const aside = document.querySelector("aside");

mobileNav.addEventListener("click", function () {
  aside.classList.toggle("slide-in");
});

if (screen.width <= 800) {
  document.querySelector(".today").addEventListener("click", removeAside);
  document.querySelector(".week-tasks").addEventListener("click", removeAside);
  document.querySelector(".all-tasks").addEventListener("click", removeAside);
  document.querySelector(".important").addEventListener("click", removeAside);

  const projects = document.querySelector(".project-container");
  projects.addEventListener("click", function (e) {
    if (e.target.classList.contains("project-name")) {
      removeAside();
    }
  });

  function removeAside() {
    aside.classList.remove("slide-in");
  }
}
