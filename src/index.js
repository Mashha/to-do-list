import {toDo} from "./to-do.js"
//import {addToDoToPage} from "./taskWindow.js"
import "./styles/style.css"


// default site
function openTaskModule() {
 const openTaskWindow = document.getElementById("openTask")
 openTaskWindow.addEventListener("click", function(){
    document.querySelector(".container").classList.add("open")
 })
}

function closeTaskModule() {
    const closeButton = document.querySelector(".close-btn")
    closeButton.addEventListener("click", function() {
        document.querySelector(".container").classList.remove("open")
    })
}


// function addToDoToPage() {
//     document.getElementById("add-task").addEventListener("click", function(){
//         let title = document.querySelector(".title-input").value 
//         console.log(title)
//     })
//}



openTaskModule()
closeTaskModule()
//addToDoToPage()
