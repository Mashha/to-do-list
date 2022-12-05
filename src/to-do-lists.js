import {Todo} from "./to-do.js"

// list for todo's
export function toDoList(){

    const toDoArray = []
    console.log(toDoArray)

    //add to do to array
    const addTodo = (title, notes, dueDate, priority) => {
        toDoArray.push(Todo(title, notes, dueDate, priority))
    }

    // default to do name
    addTodo("default", "default to do", "today", "high")

    return {
        addTodo
    }
}

// const newTodoList = toDoList()
// newTodoList.addTodo("new project")
// console.log(newTodoList)

