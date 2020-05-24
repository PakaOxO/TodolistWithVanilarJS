const todoForm = document.querySelector(".todo_form"),
    todoInput = todoForm.querySelector(".todo_input"),
    todoItems = document.querySelector(".todo_items");

const TODOS_LS = localStorage.getItem('todos');

const todos = [];

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function paintTodos(text) {
    const li = document.createElement('li');
    const newId = todos.length + 1;
    li.setAttribute('id', newId);

    const i = document.createElement('i');
    i.classList.add('fas');
    i.classList.add('fa-check');
    const span = document.createElement('span');
    span.innerText = text;
    const removeBtn = document.createElement('div');
    removeBtn.classList.add('removeBtn');
    removeBtn.innerHTML = "&times;";

    li.appendChild(i);
    li.appendChild(span);
    li.appendChild(removeBtn);
    todoItems.appendChild(li);

    const todo_Obj = {
        text: text,
        id: newId
    };

    todos.push(todo_Obj);
    saveTodos(todos);

    removeBtn.addEventListener("click", handleClick);
}

function handleClick(e) {
    const target = e.target;
    const target_li = target.parentNode;
    const newTodos = todos.filter(todo => todo.id !== parseInt(target_li.id));
    console.log(newTodos);

    target_li.remove();
    localStorage.clear();
    saveTodos(newTodos);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentInput = todoInput.value;
    todoInput.value = "";
    paintTodos(currentInput);
}

function loadTodos() {
    const loaded_todos = localStorage.getItem('todos');
    if (TODOS_LS !== null) {
        const parsed = JSON.parse(loaded_todos);
        parsed.map(todo => {
            paintTodos(todo.text);
        });
    }
}

const remove = document.querySelector('.removeBtn');

function init() {
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
}

init();