const todoForm = document.querySelector(".todo_form"),
    todoInput = todoForm.querySelector(".todo_input"),
    todoItems = document.querySelector(".todo_items");

const TODOS_LS = localStorage.getItem('todos');

function paintTodos(text) {
    const ul = document.createElement('li');
    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-check');
    const span = document.createElement('span');
    span.innerText = text;
    const removeBtn = document.createElement('div');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = "&times;";

    ul.appendChild(i);
    ul.appendChild(span);
    ul.appendChild(removeBtn);

    todoItems.appendChild(ul);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentInput = todoInput.value;
    console.log(todoInput.value);
    todoInput.value = "";
    paintTodos(currentInput);
}

function loadTodos() {
    if (TODOS_LS === null) {}
    else {
        paintTodos();
    }
}

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();