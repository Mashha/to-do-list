import {toDoList} from "./to-do-lists"

// manage lists
export function manageLists(){
    const storedLists = []
    console.log(storedLists)

    const addList = (name) => {
        storedLists.push(toDoList(name))
    }

    return{
        addList
    }
}

const newList = manageLists()
newList.addList("new list")
console.log(newList)
