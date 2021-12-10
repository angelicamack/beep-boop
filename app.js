// Selectors
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')


//Event Listeners
todoButton.addEventListener('click', addTodo)


//Functions
function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li');
    newTodo.innerText = 'hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // checked button
    const checkedButton = document.createElement('button')
    checkedButton.innerHTML = '<i class ="fas fa-check"></i>';
    checkedButton.classList.add("complete-btn");
    todoDiv.appendChild(checkedButton);
    // trash button
    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class ="fas fa-trash"></i>';
    trashButton.classList.add("complete-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
}