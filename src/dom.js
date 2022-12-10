import { manageLists } from "./listManager";

export function addProjectToPage() {
  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal");
  btnToOpenForm.addEventListener("click", openForm);

  function openForm() {
    const divModal = document.querySelector(".form-modal");
    divModal.classList.add("open");
  }

  //loop over the array
  function loopAndDisplay() {
    const projectItems = document.querySelectorAll(".list-item");
    projectItems.forEach((item) => {
      item.remove();
    });

    for (let i = 0; i < manageLists.storedLists.length; i++) {
      addProjectToDiv(manageLists.storedLists[i]);
    }
  }

  //add project to array
  document.querySelector("#form").addEventListener("submit", addProjectToArray);
  function addProjectToArray(e) {
    e.preventDefault();

    let formField = e.target[0].value;
    manageLists.addList(`${formField}`);
    loopAndDisplay();
  }

  // add project to div
  function addProjectToDiv(project) {
    const addProjectToDiv = document.querySelector(".project-container");
    const listElement = document.createElement("li");
    listElement.classList.add("list-item");
    listElement.textContent = project.name;
    listElement.id = project.id;
    const deleteLi = document.createElement("button");
    deleteLi.classList.add("remove-li");
    deleteLi.textContent = "X";
    listElement.append(deleteLi);
    addProjectToDiv.append(listElement);
    //}

    //remove project from the page
    deleteLi.addEventListener("click", function () {
      let getAListWithID = manageLists.getAList(project.id);
      let findIndex = manageLists.storedLists.indexOf(getAListWithID);
      manageLists.removeList(findIndex);
      loopAndDisplay();
    });
  }

  //close modal
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", closeModalForm);

  function closeModalForm() {
    const divModalClose = document.querySelector(".form-modal");
    divModalClose.classList.remove("open");
  }
}
