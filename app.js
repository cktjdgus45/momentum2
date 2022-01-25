import Auth from './auth/auth.js';
import Todo from './todo/todo.js';

const todoForm = document.querySelector('.todo');

//user login

const auth = new Auth();
const todoHandler = new Todo();

if (auth.checkUserState()) {
    todoHandler.renderPaintTodo();
}
auth.loginForm.addEventListener('submit', auth.handleLogin);

//submit todo

todoForm.addEventListener('submit', todoHandler.handleTodoSubmit);

