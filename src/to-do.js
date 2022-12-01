export function toDo(title, description, date, addToList) {
  return {
    title,
    description,
    date,
    addToList,
  };
}

export const firstToDo = toDo("test", "just for a test", "30.11.2022", "make default list")




