import Auth from './auth/auth.js';
import Time from './time/time.js';
import Todo from './todo/todo.js';

const todoForm = document.querySelector('.todo');

//user login

const auth = new Auth();
const todoHandler = new Todo();
const time = new Time();

if (auth.checkUserState()) {
    todoHandler.renderPaintTodo();
}
auth.loginForm.addEventListener('submit', auth.handleLogin);

//submit todo

todoForm.addEventListener('submit', todoHandler.handleTodoSubmit);

//clock 
setInterval(time.handleIntervalTime, 1000);

