import {toDoList} from "./to-do-lists"

// manage lists
export function manageLists(){
    const storedLists = []

    const addList = (name, id) => {
        storedLists.push(toDoList(name, id))
    }

   
    return{
        addList
    }
}

 const newList = manageLists()
 newList.addList("new list")
console.log(newList)
