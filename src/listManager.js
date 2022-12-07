import { toDoList } from "./to-do-lists";

// manage lists
export function manageLists() {
  const storedLists = [];

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
    addList,
    getLists,
    getAList,
    removeList,
  };
}

const newList = manageLists();
//newList.getLists()
console.log(newList);
newList.addList("default, id");
