import { toDoList } from "./to-do-lists";

// manage lists
export const manageLists = (function() {
  const storedLists = [];
console.log(storedLists)
  function getLists() {
    return storedLists;
  }

  const addList = (name, id) => {
    storedLists.push(toDoList(name, id));
  };

  function getAList(id) {
    return storedLists.find((list) => list.id === id);
  }

  function removeList(list) {
    return storedLists.splice(list, 1)
  }

  return {
    storedLists,
    addList,
    getLists,
    getAList,
    removeList,
  };
})()




