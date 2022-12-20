import { Todo } from "./to-do.js";

// list for todo's
export const toDoList = (function(name, id = Date.now()) {
  const toDoArray = [];

  //add to do to array
  const addTodo = (title, notes, dueDate, priority, id) => {
    toDoArray.push(Todo(title, notes, dueDate, priority, id));
  };

  function removeTodo(todo) {
    toDoArray.splice(todo, 1);
  }

  // default to do name
  addTodo("default", "default to do", "today", "high");

  return {
    name, 
    id,
    toDoArray,
    addTodo,
    removeTodo,
  };
})()

