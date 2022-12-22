import { listManager } from "./listManager";
import { toDoList, task } from "./to-do-lists";

export function displayPage() {
  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal");
  btnToOpenForm.addEventListener("click", openForm);

  function openForm() {
    const divModal = document.querySelector(".form-modal");
    // clean input before you open
    cleanInput();
    divModal.classList.add("open");
  }

  //loop over and display projects when page loads
  window.onload = displayAllProjects;

  //loop over the array
  function displayAllProjects() {
    const projectItems = document.querySelectorAll(".list-item");
    projectItems.forEach((item) => {
      item.remove();
    });

    for (let i = 0; i < listManager.storedLists.length; i++) {
      displaySingleProject(listManager.storedLists[i]);
    }
  }

  //add project to array
  document.querySelector("#form").addEventListener("submit", submitProject);

  function submitProject(e) {
    e.preventDefault();

    if (e.target[0].value === "") {
      alert("add project name");
    } else {
      let formField = e.target[0].value;
      closeModalForm();
      listManager.addList(`${formField}`);
      displayAllProjects();
    }
  }

  function displaySingleProject(project) {
    const projectContainer = document.querySelector(".project-container");
    const listElement = document.createElement("div");
    listElement.classList.add("list-item");
    const projectName = document.createElement("span");
    projectName.textContent = project.name;
    listElement.id = project.id;
    const deleteLi = document.createElement("button");
    deleteLi.classList.add("remove-li");
    deleteLi.textContent = "X";
    const editLi = document.createElement("button");
    editLi.classList.add("edit-project");
    editLi.textContent = "edit";
    if (project.name !== "general") {
      listElement.append(projectName, editLi, deleteLi);
    } else {
      listElement.append(projectName);
    }

    projectContainer.append(listElement);

    // edit project
    editLi.addEventListener("click", function () {
      const divEditList = document.querySelector(".form-edit-project");
      const listId = document.getElementById("list-id");
      listId.value = project.id;
      divEditList.classList.add("open-form");
      const projectNameInput = document.querySelector(".edited-project-name");
      projectNameInput.value = project.name;
    });

    //remove project from the page
    deleteLi.addEventListener("click", function () {
      const getAListWithID = listManager.getAList(project.id);
      const findIndex = listManager.storedLists.indexOf(getAListWithID);
      listManager.removeList(findIndex);
      displayAllProjects();
    });
  }

  //add changes to array
  const formEdit = document.querySelector("#form-edit");
  formEdit.addEventListener("submit", function (e) {
    e.preventDefault();
    const newName = document.querySelector(".edited-project-name");
    const editButtonId = document.querySelector("#list-id");

    listManager.storedLists.forEach(function (project) {
      if (project.id === parseInt(editButtonId.value)) {
        listManager.editAList(project, newName.value);
      }
    });

    closeEditedForm();
    displayAllProjects();
  });

  //close edited form
  document
    .querySelector(".close-edit-form")
    .addEventListener("click", closeEditedForm);
  function closeEditedForm() {
    const divEditList = document.querySelector(".form-edit-project");
    divEditList.classList.remove("open-form");
  }

  //clean input field
  function cleanInput() {
    const inputField = document.querySelector(".project-name");
    inputField.value = "";
  }

  //close modal form
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", closeModalForm);

  function closeModalForm() {
    const divModalClose = document.querySelector(".form-modal");
    divModalClose.classList.remove("open");
  }
}

export function addTask() {
  //open task form
  document.querySelector(".add-task").addEventListener("click", openModal);

  function openModal() {
    const divTask = document.querySelector(".taskForm");
    divTask.classList.add("open-task-form");
  }

  // close task form
  document
    .querySelector(".close-task-form")
    .addEventListener("click", closeModal);

  function closeModal() {
    const divTask = document.querySelector(".taskForm");
    divTask.classList.remove("open-task-form");
  }

  document
    .querySelector("#formForTasks")
    .addEventListener("submit", addTaskToArray);

  function addTaskToArray(e) {
    e.preventDefault();
    const title = e.target[0].value;
    const notes = e.target[1].value;
    const date = e.target[2].value;
    task.addTodo(title, notes, date);
    closeModal();
    displayAllTasks();
  }

  // loop over the array
  function displayAllTasks() {
    for (let i = 0; i < task.toDoArray.length; i++) {
      console.log(task.toDoArray);
      displaySingleTask(task.toDoArray[i]);
    }
  }

  //display tasks
  function displaySingleTask(singleTask) {
    const tasksUl = document.querySelector(".tasks");
    const taskElement = document.createElement("li");
    taskElement.classList.add("task-element");
    const taskCheck = document.createElement("input");
    taskCheck.type = "radio";
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    const taskName = document.createElement("div");
    taskName.textContent = singleTask.title;
    const taskNotes = document.createElement("div");
    taskNotes.textContent = singleTask.notes;
    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    dueDate.textContent = singleTask.date;

    taskDetails.append(taskName, taskNotes);
    taskElement.append(taskCheck, taskDetails, dueDate);

    tasksUl.append(taskElement);
  }
}
