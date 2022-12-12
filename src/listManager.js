import { toDoList } from "./to-do-lists";

// manage lists
export const manageLists = (function () {
  const storedLists = [];

  function getLists() {
    return storedLists;
  }

  const addList = (name, id) => {
    storedLists.push(toDoList(name, id));
  };

  function getAList(id) {
    storedLists.find((list) => list.id === id);
  }

  function editAList(object, newName) {
    object.name = newName;
  }

  function removeList(list) {
    storedLists.splice(list, 1);
  }

  addList("general")

  return {
    storedLists,
    addList,
    getLists,
    getAList,
    editAList,
    removeList,
  };
})();
