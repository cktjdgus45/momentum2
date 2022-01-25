const loginForm = document.querySelector('.login');
const todoForm = document.querySelector('.todo');
const loginInput = document.querySelector('.login-input');
const todoInput = document.querySelector('.todo-input');

//user login

if (checkUserState()) {//for when browser loaded render
    renderPaintTodo();  //render todos in localStrage
}

function handleLogin(event) {
    event.preventDefault();
    const name = loginInput.value;
    localStorage.setItem('name', name);
    loginInput.value = "";
    checkUserState(); //for realtime call function
}

loginForm.addEventListener('submit', handleLogin);


function checkUserState() {
    const isLogin = localStorage.getItem('name');
    if (isLogin) {
        loginState();
    } else {
        logoutState();
    }
    return !!isLogin;
}

function loginState() {
    loginForm.classList.add('hide');
    todoForm.classList.replace('hide', 'show');
}
function logoutState() {
    loginForm.classList.add('show');
    todoForm.classList.replace('show', 'hide');
}

//submit todo
function handleDelete(event) {
    const ul = document.querySelector('.todos');
    const todos = JSON.parse(localStorage.getItem('todo')) || [];
    const li = event.target.parentNode;
    const clickedId = parseInt(li.dataset.id);
    const updated = todos.filter(item => {
        return item.id !== clickedId;
    })
    localStorage.setItem('todo', JSON.stringify(updated));
    ul.removeChild(li);
}

function renderRealTime(todo, id) {
    const ul = document.querySelector('.todos');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button');
    button.addEventListener('click', handleDelete);
    li.dataset.id = id;
    span.innerText = todo;
    button.innerText = '❌';
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
}

function renderPaintTodo() { //for when browser loaded render
    const todos = JSON.parse(localStorage.getItem('todo')) || [];
    const ul = document.querySelector('.todos');
    todos.map(item => {
        const { todo } = item;
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        button.addEventListener('click', handleDelete);
        span.innerText = todo;
        button.innerText = '❌';
        li.dataset.id = item.id;
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
    })
}

function handleTodoSubmit(event) {
    const todos = JSON.parse(localStorage.getItem('todo')) || [];
    event.preventDefault();
    const todo = {
        id: todos.length + 1,
        todo: todoInput.value
    };
    const updated = [...todos, todo];
    localStorage.setItem('todo', JSON.stringify(updated));
    renderRealTime(todoInput.value, todo.id); //for realtime call function
    todoInput.value = "";
}

todoForm.addEventListener('submit', handleTodoSubmit);


