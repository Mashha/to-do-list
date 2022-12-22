// to do's
export function Todo(title, notes, date, priority, id = Date.now()) {
  return {
    title,
    notes,
    date,
    priority,
    id,
  };
}
