import { Todo } from "./to-do.js";

// list for todo's
export function toDoList(name, id = Date.now()) {
  const toDoArray = [];

  //add to do to array
  const addTodo = (title, notes, date, priority, id) => {
    toDoArray.push(Todo(title, notes, date, priority, id));
  };

  function findTodo(id) {
  return toDoArray.find((task)=> task.id === id)
  }

  function removeTodo(todo) {
    toDoArray.splice(todo, 1);
  }

  return {
    name,
    id,
    toDoArray,
    addTodo,
    findTodo,
    removeTodo,
  };
}
