import { manageLists } from "./listManager";

export function addProjectToPage() {
  //open modal
  const btnToOpenForm = document.querySelector(".btn-open-modal");
  btnToOpenForm.addEventListener("click", openForm);

  function openForm() {
    const divModal = document.querySelector(".form-modal");
    divModal.classList.add("open");
  }

  //add name of the project
  const addProject = document.querySelector("#form");
  addProject.addEventListener("click", addProjectToUl);

  function addProjectToUl(e) {
    e.preventDefault();

    const projectName = document.querySelector(".project-name");
    console.log(manageLists.addList(projectName.value));
  }

  //close modal
  const closeModal = document.querySelector(".close-modal");
  closeModal.addEventListener("click", closeModalForm);

  function closeModalForm() {
    const divModalClose = document.querySelector(".form-modal");
    divModalClose.classList.remove("open");
  }
}
