import { toDo } from "./to-do.js";
import { toDoLists } from "./to-do-lists.js";
import "./styles/style.css";

// default site
function openTaskModule() {
  const openTaskWindow = document.getElementById("openTask");
  openTaskWindow.addEventListener("click", function () {
    document.querySelector(".container").classList.add("open");
  });
}

function closeTaskModule() {
  const closeButton = document.querySelector(".close-btn");
  closeButton.addEventListener("click", function () {
    document.querySelector(".container").classList.remove("open");
  });
}

document.getElementById("add-task").addEventListener("click", function (e) {
e.preventDefault()

  const title = document.querySelector(".title-input").value;
  const description = document.querySelector(".details-input").value;
  const dateNow = document.querySelector("#date-now").value;

  let newToDo = toDo(title, description, dateNow);
  console.log(newToDo);
});


openTaskModule();
closeTaskModule();

