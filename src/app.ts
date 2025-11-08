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
const tasks:Task[] = readData()
tasks.forEach(createList)

function saveData(e:SubmitEvent){
    e.preventDefault()
    console.log(inputEl.value)
    const newTask:Task = {
        name:inputEl.value,
        completed:false
    }
    createList(newTask)
    tasks.push(newTask)
    localStorage.setItem("myList",JSON.stringify(tasks))
}

function createList(task:Task){
    const liEl = document.createElement("li")
    const checkBoxEl = document.createElement("input")

    checkBoxEl.type = "checkbox"
    
    checkBoxEl.checked = task.completed
    checkBoxEl.addEventListener("change",function(){
        task.completed = checkBoxEl.checked
        updateData()
    })

    liEl.append(task.name)
    liEl.append(checkBoxEl)
    listEl.append(liEl)
    inputEl.value = ""
}

function readData():Task[]{
    const myList = localStorage.getItem("myList")

    if(myList == null) return []

    return JSON.parse(myList)
}

function updateData(){
    localStorage.setItem("myList",JSON.stringify(tasks))
}