export default class Todo {
    handleDelete(event) {
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
    renderRealTime(todo, id) {
        const ul = document.querySelector('.todos');
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');
        button.addEventListener('click', new Todo().handleDelete);
        li.dataset.id = id;
        span.innerText = todo;
        button.innerText = '❌';
        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);
    }
    renderPaintTodo() {
        //for when browser loaded render
        const ul = document.querySelector('.todos');
        const todos = JSON.parse(localStorage.getItem('todo')) || [];
        todos.map(item => {
            const { todo } = item;
            const li = document.createElement('li');
            const span = document.createElement('span');
            const button = document.createElement('button');
            button.addEventListener('click', new Todo().handleDelete);
            button.innerText = '❌';
            span.innerText = todo;
            span.style.color = '#FF6363';
            span.style.fontWeight = 'bold';
            li.dataset.id = item.id;
            li.style.display = 'flex';
            li.style.justifyContent = 'space-between';
            li.style.backgroundColor = 'white';
            li.style.opacity = '0.7';
            li.style.marginBottom = '5px';
            li.style.borderRadius = '5px';
            li.style.padding = "5px"
            li.appendChild(span);
            li.appendChild(button);
            ul.appendChild(li);
        })
    }

    handleTodoSubmit(event) {
        const todoInput = document.querySelector('.todo-input');
        const todos = JSON.parse(localStorage.getItem('todo')) || [];
        event.preventDefault();
        const todo = {
            id: todos.length + 1,
            todo: todoInput.value
        };
        const updated = [...todos, todo];
        localStorage.setItem('todo', JSON.stringify(updated));
        new Todo().renderRealTime(todoInput.value, todo.id); //for realtime call function
        todoInput.value = "";
    }
}