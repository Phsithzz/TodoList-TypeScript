"use strict";
console.log("Hello TodoList TypeScript");
const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const formEl = document.querySelector("form");
const listEl = document.getElementById("list"); //!คือห้ามเป็นค่าnull
formEl.addEventListener("submit", saveData);
const tasks = [];
function saveData(e) {
    e.preventDefault();
    console.log(inputEl.value);
    const newTask = {
        name: inputEl.value,
        completed: false
    };
    createList(newTask);
    tasks.push(newTask);
}
function createList(task) {
    const liEl = document.createElement("li");
    const checkBoxEl = document.createElement("input");
    checkBoxEl.type = "checkbox";
    liEl.append(task.name);
    liEl.append(checkBoxEl);
    listEl.append(liEl);
    inputEl.value = "";
}
//# sourceMappingURL=app.js.map