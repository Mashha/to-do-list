import { listManager } from "./listManager";

export function displayPage() {
  //loop over and display projects and tasks when page loads
  window.onload = function () {
    displayAllProjects();
    displayAllTasks();
  };

  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal");
  btnToOpenForm.addEventListener("click", openProjectForm);

  function openProjectForm() {
    const divModal = document.querySelector(".form-modal");
    // clean input before you open
    cleanInput();
    divModal.classList.add("open");
  }

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
    const icon = document.createElement("span");
    icon.innerHTML = '<i class="fa-regular fa-folder"></i>';
    const projectName = document.createElement("span");
    projectName.textContent = project.name;
    listElement.id = project.id;
    const deleteLi = document.createElement("button");
    deleteLi.classList.add("remove-li");
    deleteLi.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
    const editLi = document.createElement("button");
    editLi.classList.add("edit-project");
    editLi.textContent = "edit";
    if (project.name !== "general") {
      listElement.append(icon, projectName, editLi, deleteLi);
    } else {
      listElement.append(icon, projectName);
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
      todaysTasks();
    });
  }

  //add changes to array
  const formEdit = document.querySelector("#form-edit");
  formEdit.addEventListener("submit", function (e) {
    e.preventDefault();
    const newName = document.querySelector(".edited-project-name");
    const editButtonId = document.querySelector("#list-id");
    const changeTitle = document.querySelector(".title-project");
    changeTitle.textContent = newName.value;
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

  document
    .querySelector(".project-container")
    .addEventListener("click", clickOnProjects);
  function clickOnProjects(e) {
    e.target.parentElement.setAttribute(
      "data-selected-project",
      e.target.textContent
    );

    const clickedProjectId = e.target.parentElement.id;
    const findProjectWithId = listManager.getAList(parseInt(clickedProjectId));

    const addTitle = document.querySelector(".title-project");
    addTitle.textContent = findProjectWithId.name;
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });

    findProjectWithId.toDoArray.forEach(function (todo) {
      displaySingleTask(todo);
    });
  }

  // tasks
  //open task form
  document.querySelector(".add-task").addEventListener("click", openTaskModal);

  function openTaskModal() {
    const divTask = document.querySelector(".taskForm");
    divTask.classList.add("open-task-form");
  }

  // close task form
  document
    .querySelector("#close-task")
    .addEventListener("click", closeTaskModal);

  function closeTaskModal() {
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
    const priority = e.target[3].checked;

    const clickedProject = document.querySelector("[data-selected-project]");
    if (clickedProject === null) {
      listManager.storedLists[0].addTodo(title, notes, date, priority);
      listManager.save();
    } else {
      const findProject = listManager.getAList(parseInt(clickedProject.id));
      findProject.addTodo(title, notes, date, priority);
      listManager.save();
    }
    closeTaskModal();
    displayAllTasks();
  }

  // loop over the array
  function displayAllTasks() {
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });

    const projectName = document.querySelector(".title-project");
    listManager.storedLists.forEach(function (project) {
      if (projectName.textContent === project.name) {
        project.toDoArray.forEach(function (task) {
          displaySingleTask(task);
        });
      }
    });
  }

  //display tasks
  function displaySingleTask(singleTask) {
    const tasksUl = document.querySelector(".tasks");
    const taskElement = document.createElement("li");
    taskElement.id = singleTask.id;
    taskElement.classList.add("task-element");
    const taskCheck = document.createElement("input");
    taskCheck.type = "checkbox";
    const taskDetails = document.createElement("div");
    taskDetails.classList.add("task-details");
    const taskName = document.createElement("div");
    taskName.textContent = singleTask.title;
    const taskNotes = document.createElement("div");
    taskNotes.textContent = singleTask.notes;
    const importance = document.createElement("span");
    importance.classList.add("task-important");
    importance.innerHTML = '<i class="fa-regular fa-star"></i>';
    if (singleTask.priority === true) {
      importance.style.color = "orange";
    } else {
      importance.style.color = "black";
    }

    const dueDate = document.createElement("div");
    dueDate.classList.add("due-date");
    if (singleTask.date === "") {
      dueDate.textContent = "No date";
    } else {
      dueDate.textContent = singleTask.date;
    }

    const removeTask = document.createElement("button");
    removeTask.classList.add("remove-task");
    removeTask.id = singleTask.id;
    removeTask.innerHTML = '<i class="fa-regular fa-trash-can"></i>';

    taskDetails.append(taskName, taskNotes);
    taskElement.append(taskCheck, taskDetails, dueDate, importance, removeTask);
    tasksUl.append(taskElement);

    // remove tasks
    removeTask.addEventListener("click", function () {
      const titleProject = document.querySelector(".title-project");
      listManager.storedLists.forEach(function (project) {
        if (project.name === titleProject.textContent) {
          const task = project.findTodo(parseInt(removeTask.id));
          //find the index of that task, to remove the right one
          const findTaskIndex = project.toDoArray.indexOf(task);
          project.removeTodo(findTaskIndex);
          listManager.save();
          displayAllTasks();
        }
      });
    });

    // edit tasks
    taskDetails.addEventListener("click", function () {
      const editTaskForm = document.querySelector(".edit-task-modal");
      editTaskForm.classList.add("open");
      const taskTitle = document.querySelector("#task-new-title");
      taskTitle.value = singleTask.title;
      const taskNotes = document.querySelector("#task-notes");
      taskNotes.value = singleTask.notes;
      const taskDate = document.querySelector("#task-new-date");
      taskDate.value = singleTask.date;
      const taskId = document.querySelector("#task-id");
      taskId.value = singleTask.id;
      const taskPriority = document.querySelector("#new-priority");
      taskPriority.checked = singleTask.priority;
      console.log(taskPriority);
    });

    //priority
    importance.addEventListener("click", function () {
      console.log(singleTask.priority);
      if (singleTask.priority === true) {
        singleTask.priority = false;
      } else {
        singleTask.priority = true;
      }
      displayAllTasks();
    });

    //check if done
    taskCheck.addEventListener("change", function () {
      if (taskCheck.checked === true) {
        taskName.style.textDecoration = "line-through";
      } else {
        taskName.style.textDecoration = "none";
      }
    });
  }

  //add task changes to array
  document.querySelector("#edit-task").addEventListener("submit", function (e) {
    e.preventDefault();
    const taskTitle = document.querySelector("#task-new-title").value;
    const taskNotes = document.querySelector("#task-notes").value;
    const taskDate = document.querySelector("#task-new-date").value;
    const taskPriority = document.querySelector("#new-priority").checked;

    const taskId = document.querySelector("#task-id");
    const titleProject = document.querySelector(".title-project");
    listManager.storedLists.forEach(function (project) {
      if (project.name === titleProject.textContent) {
        project.toDoArray.forEach(function (task) {
          if (task.id === parseInt(taskId.value)) {
            project.editTodo(
              task,
              taskTitle,
              taskNotes,
              taskDate,
              taskPriority
            );
            displayAllTasks();
            listManager.save();
            closeEditForm();
          }
        });
      }
    });
  });

  //close edit form
  document
    .querySelector("#close-edit-task")
    .addEventListener("click", closeEditForm);
  function closeEditForm() {
    const editTaskForm = document.querySelector(".edit-task-modal");
    editTaskForm.classList.remove("open");
  }

  //type part of the day
  const today = new Date();
  const hours = today.getHours();
  const message = document.querySelector(".day-message");

  if (hours < 12) {
    message.textContent = "Good morning";
  } else if (hours < 18) {
    message.textContent = "Good afternoon";
  } else {
    message.textContent = "Good evening";
  }

  // date in word
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const wordDay = days[new Date().getDay()];
  const numberDay = today.getDate();
  //const month = months[new Date().getMonth()];
  const dateToday = document.querySelector("#day-word");
  dateToday.textContent = `${wordDay}`;
  const numberOfToday = document.querySelector("#day-number");
  numberOfToday.textContent = `${numberDay}`;
  //get date
  const currentDate = new Date().toJSON().slice(0, 10);
  //remove list elements
  function removeLi() {
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });
  }

  //display today's tasks
  document
    .querySelector("#tasks-for-today")
    .addEventListener("click", todaysTasks);
  function todaysTasks() {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "Today";
    const taskElements = document.querySelectorAll(".task-element");
    taskElements.forEach((li) => {
      li.remove();
    });
    listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        if (currentDate === task.date) {
          displaySingleTask(task);
        }
      });
    });
  }

  //display all tasks
  const allTasks = document.querySelector("#list-of-all-tasks");
  allTasks.addEventListener("click", function () {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "All tasks";

    listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        displaySingleTask(task);
      });
    });
  });

  // display tasks of this coming week
  const tasksOfTheWeek = document.querySelector("#tasks-of-this-week");
  tasksOfTheWeek.addEventListener("click", function () {
    console.log("click");
  });

  //display tasks that are important
  const importantTasks = document.querySelector("#list-of-important-tasks");
  importantTasks.addEventListener("click", function () {
    removeLi();
    const projectName = document.querySelector(".title-project");
    projectName.textContent = "Important";
    listManager.storedLists.forEach(function (project) {
      project.toDoArray.forEach(function (task) {
        if (task.priority === true) {
          displaySingleTask(task);
        }
      });
    });
  });
}
