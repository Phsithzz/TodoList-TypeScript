console.log("Hello TodoList TypeScript")

const btnEl = document.getElementById("btn")! as HTMLButtonElement 
const inputEl = document.getElementById("input")! as HTMLInputElement

const formEl = document.querySelector("form")!
const listEl = document.getElementById("list")! //!คือห้ามเป็นค่าnull
formEl.addEventListener("submit",saveData)

interface Task{
    name:string,
    completed:boolean
}
const tasks:Task[] = []


function saveData(e:SubmitEvent){
    e.preventDefault()
    console.log(inputEl.value)
    const newTask:Task = {
        name:inputEl.value,
        completed:false
    }
    createList(newTask)
    tasks.push(newTask)
}

function createList(task:Task){
    const liEl = document.createElement("li")
    const checkBoxEl = document.createElement("input")
    checkBoxEl.type = "checkbox"
    liEl.append(task.name)
    liEl.append(checkBoxEl)
    listEl.append(liEl)
    inputEl.value = ""
}