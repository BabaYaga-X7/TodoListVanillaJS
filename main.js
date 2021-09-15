const todosList = document.querySelector('.todo-items');
const addTodo = document.querySelector('.add-todo');

todosList.addEventListener('click', e => {
    if(e.target.className.includes('todo-item')){
        e.target.classList.toggle('todo-item-completed');
    }
});

addTodo.addEventListener('submit', e => {
    e.preventDefault();

    const newTodo = document.querySelector('#addTodo').value.trim();

    if(newTodo.length > 0){
        const newTodoElement = `<li class="todo-item">${newTodo}</li>`;
        todosList.insertAdjacentHTML("afterbegin", newTodoElement);
        addTodo.reset();
    }
});
