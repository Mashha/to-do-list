// to do's
export function Todo(
  title,
  notes,
  date,
  priority,
  done,
  project,
  id = Date.now()
) {
  return {
    title,
    notes,
    date,
    priority,
    done,
    project,
    id,
  };
}
