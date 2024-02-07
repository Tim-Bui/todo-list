// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event listener
todoButton.addEventListener("click", addTodo)

// functions

function addTodo(event){
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    
    //Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Checkmark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class = "fas fa-check"></i>'
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild("completed-btn");
     //trash button
     const trashButton = document.createElement("button");
     trashButton.innerHTML = '<i class = "fas fa-check"></i>'
     trashButton.classList.add("complete-btn");
     todoDiv.appendChild("completed-btn");
}