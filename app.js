const loginForm = document.querySelector('.login');
const todoForm = document.querySelector('.todo');
const loginInput = document.querySelector('.login-input');
const todoInput = document.querySelector('.todo-input');

//user login

checkUserState(); //for when browser loaded render

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
}
function logoutState() {
    todoForm.classList.add('show');
}




