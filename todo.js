const todoForm = document.querySelector(".todo_form"),
    todoInput = todoForm.querySelector(".todo_input"),
    todoItems = document.querySelector(".todo_items"),
    checkedItems = document.querySelector(".checked_items");

const TODOS_LS = localStorage.getItem('todos');
const CHECKED_LS = localStorage.getItem('checked');

let todos = [];
let checked = [];

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function saveChecked(checked) {
    localStorage.setItem('checked', JSON.stringify(checked));
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

    removeBtn.addEventListener("click", handleRemove);
    i.addEventListener("click", handleClick);
}

function paintChecked(text) {
    const li = document.createElement('li');
    const newId = checked.length + 1;
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
    checkedItems.appendChild(li);

    const checked_Obj = {
        text: text,
        id: newId
    };

    checked.push(checked_Obj);
    saveChecked(checked);

    removeBtn.addEventListener("click", handleRemove2);
    i.addEventListener("click", handleClick);
}

function handleRemove(e) {
    const target = e.target;
    const target_li = target.parentNode;
    const newTodos = todos.filter(todo => todo.id !== parseInt(target_li.id));
    todos = newTodos;

    target_li.remove();
    localStorage.removeItem("todos");
    saveTodos(newTodos);
}

function handleRemove2(e) {
    const target = e.target;
    const target_li = target.parentNode;
    const newChecked = checked.filter(item => item.id !== parseInt(target_li.id));
    checked = newChecked;
    
    target_li.remove();
    localStorage.removeItem("checked");
    saveChecked(newChecked);
}

function handleSubmit(e) {
    e.preventDefault();
    const currentInput = todoInput.value;
    todoInput.value = "";
    paintTodos(currentInput);
}

function handleClick(e) {
    if (e.target.parentNode.parentNode.classList.value === "todo_items") {
        handleRemove(e);
        paintChecked(e.target.nextSibling.innerText);
    }
    else {
        handleRemove2(e);
        paintTodos(e.target.nextSibling.innerText);
    }
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

function loadChecked() {
    const loaded_checked = localStorage.getItem('checked');
    if (CHECKED_LS !== null) {
        const parsed = JSON.parse(loaded_checked);
        parsed.map(item => {
            paintChecked(item.text);
        });
    }
}

function init() {
    loadTodos();
    loadChecked();
    todoForm.addEventListener("submit", handleSubmit);
}

init();