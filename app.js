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
function renderRealTime(todo) {
    const ul = document.querySelector('.todos');
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerText = todo;
    li.appendChild(span);
    ul.appendChild(li);
}

function renderPaintTodo() { //for when browser loaded render
    const todos = JSON.parse(localStorage.getItem('todo')) || [];
    const ul = document.querySelector('.todos');
    todos.map(item => {
        const { todo } = item;
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = todo;
        li.appendChild(span);
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
    console.log(updated);
    localStorage.setItem('todo', JSON.stringify(updated));
    renderRealTime(todoInput.value); //for realtime call function
    todoInput.value = "";
}

todoForm.addEventListener('submit', handleTodoSubmit);


