import { toDoList } from "./to-do-lists";
import { storedItems } from "./storage";

// manage lists
export const listManager = (function () {
  const storedLists = storedItems.getItem("storedLists") || [];

  function getLists() {
    return storedLists;
  }

  const addList = (name, id) => {
    storedLists.push(toDoList(name, id));
    save();
  };

  function getAList(id) {
    storedLists.find((list) => list.id === id);
  }

  function editAList(object, newName) {
    object.name = newName;
    save();
  }

  function removeList(list) {
    storedLists.splice(list, 1);
    save();
  }

  const save = () => {
    storedItems.setItem("storedLists", storedLists);
  };

  if (localStorage.length === 0) {
    addList("general");
  }

  return {
    storedLists,
    addList,
    getLists,
    getAList,
    editAList,
    removeList,
  };
})();

