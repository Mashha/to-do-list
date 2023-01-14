import { Todo } from "./to-do.js";

// list for todo's
export function toDoList(name, id = Date.now()) {
  const toDoArray = [];

  //add to do to array
  const addTodo = (title, notes, date, priority, done, project, id) => {
    toDoArray.push(Todo(title, notes, date, priority, done, project, id));
  };

  function findTodo(id) {
    return toDoArray.find((task) => task.id === id);
  }

  function editTodo(object, newTitle, newNotes, newDate, newPriority) {
    (object.title = newTitle),
      (object.notes = newNotes),
      (object.date = newDate),
      (object.priority = newPriority);
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
    editTodo,
    removeTodo,
  };
}
