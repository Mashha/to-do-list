import { toDo } from "./to-do.js";
import { toDoLists } from "./to-do-lists.js";
import { firstToDo } from "./to-do.js";
import "./styles/style.css";
import { isDate } from "lodash";

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

// document.getElementById("add-task").addEventListener("click", function (e) {
// e.preventDefault()

//   const title = document.querySelector(".title-input").value;
//   const description = document.querySelector(".details-input").value;
//   const dateNow = document.querySelector("#date-now").value;

//   let newToDo = toDo(title, description, dateNow);
//   console.log(newToDo);
// });

let ul = document.createElement("ul")
let listElement = document.createElement("li")
listElement.classList.add("list-element")
listElement.id = new Date()
let checkbox = document.createElement("input")
checkbox.type = "checkbox"
let title = document.createElement("div")
let date = document.createElement("div")
let deleteTask = document.createElement("div")
deleteTask.classList.add("delete-task")
deleteTask.textContent = "delete"

title.textContent = firstToDo.title
date.textContent = firstToDo.date
document.body.appendChild(ul)
ul.append(listElement)
listElement.append(checkbox, title, date, deleteTask)


deleteTask.addEventListener("click", function(e){
  console.log(e.target.parentElement.remove())
})


openTaskModule();
closeTaskModule();

