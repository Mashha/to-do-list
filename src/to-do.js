const addToDoToArray = (function () {
  const toDoArray = [];

  return {
    toDoArray,
  };
})();

addToDoToArray.toDoArray;

export function toDo(title, description, date, priority, addToList) {
  return {
    title,
    description,
    date,
    priority,
    addToList,
  };
}
