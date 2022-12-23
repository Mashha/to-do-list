import { listManager } from "./listManager.js";
import { storedItems } from "./storage.js";
import { Todo } from "./to-do.js";

// list for todo's
export function toDoList(name, id = Date.now()) {
  const toDoArray = storedItems.getItem("toDoArray") || [];

  //add to do to array
  const addTodo = (title, notes, date, priority, id) => {
    toDoArray.push(Todo(title, notes, date, priority, id));
    saveTask()
  };

  function removeTodo(todo) {
    toDoArray.splice(todo, 1);
    saveTask()
  }

  const saveTask = () => {
   storedItems.setItem("toDoArray", toDoArray)
  }

  return {
    name,
    id,
    toDoArray,
    addTodo,
    removeTodo,
  };
}

export const task = toDoList();
