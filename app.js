import Auth from './auth/auth.js';
import Random from './random/random.js';
import Time from './time/time.js';
import Todo from './todo/todo.js';

const todoForm = document.querySelector('.todo');
const app = document.querySelector('.app');
const queote = document.querySelector('.queote');

//user login

const auth = new Auth();
const todoHandler = new Todo();
const time = new Time();
const random = new Random(app, queote);

if (auth.checkUserState()) {
    todoHandler.renderPaintTodo();
}
auth.loginForm.addEventListener('submit', auth.handleLogin);

//submit todo

todoForm.addEventListener('submit', todoHandler.handleTodoSubmit);

//clock 
setInterval(time.handleIntervalTime, 1000);

//random background
random.getRandomImage();
//random queote
random.getRandomQueote();