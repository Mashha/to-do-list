import { toDoList } from "./to-do-lists";
import { storedItems } from "./storage";

// manage lists
export const listManager = (function () {
  const storedLists = recreateStoredList() || [];
  console.log(storedLists);
  function recreateStoredList() {
    const parsedJson = storedItems.getItem("storedLists") || [];
    if (parsedJson.length === 0) {
      return;
    } else {
      const recreatedTodoArray = [];
      for (let i = 0; i < parsedJson.length; i++) {
        const recreatedTodo = toDoList(parsedJson[i].name, parsedJson[i].id);
        recreatedTodoArray.push(recreatedTodo);
        const tasksArray = parsedJson[i].toDoArray;

        for (let j = 0; j < tasksArray.length; j++) {
          recreatedTodo.addTodo(
            tasksArray[j].title,
            tasksArray[j].notes,
            tasksArray[j].date,
            tasksArray[j].priority,
            tasksArray[j].done,
            tasksArray[j].id
          );
        }
      }
      return recreatedTodoArray;
    }
  }

  function getLists() {
    return storedLists;
  }

  const addList = (name, id) => {
    storedLists.push(toDoList(name, id));
    save();
  };

  function getAList(id) {
    return storedLists.find((list) => list.id === id);
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

  if (storedLists.length === 0) {
    addList("general");
  }

  return {
    storedLists,
    addList,
    getLists,
    getAList,
    editAList,
    removeList,
    save,
  };
})();
