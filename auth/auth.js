export default class Auth {
    loginForm = document.querySelector('.login');
    todoForm = document.querySelector('.todo');

    checkUserState() {
        const isLogin = localStorage.getItem('name');
        if (isLogin) {
            this.loginState();
        } else {
            this.logoutState();
        }
        return !!isLogin;
    }
    loginState() {
        this.loginForm.classList.add('hide');
        this.todoForm.classList.replace('hide', 'show');
    }
    logoutState() {
        this.loginForm.classList.add('show');
        this.todoForm.classList.replace('show', 'hide');
    }
    handleLogin(event) {
        const loginInput = document.querySelector('.login-input');
        event.preventDefault();
        const name = loginInput.value;
        localStorage.setItem('name', name);
        loginInput.value = "";
        new Auth().checkUserState();//for realtime call function
    }

}