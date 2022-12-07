import { Todo } from "./to-do.js";

// list for todo's
export function toDoList(name, id = Date.now()) {
  const toDoArray = [];

  //add to do to array
  const addTodo = (title, notes, dueDate, priority, id) => {
    toDoArray.push(Todo(title, notes, dueDate, priority, id));
  };

  // default to do name
  addTodo("default", "default to do", "today", "high");

  return {
    addTodo,
    name,
    id,
  };
}

const newTodoList = toDoList("general");
newTodoList.addTodo("new project", "new", "today", "also high");
console.log(newTodoList);
