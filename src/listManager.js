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
    const findAList = storedLists.find((list) => list.id === id);
    return findAList;
  }

  return {
    addList,
    getLists,
    getAList,
  };
}

const newList = manageLists();
//newList.getLists()
console.log(newList);
newList.getAList();
