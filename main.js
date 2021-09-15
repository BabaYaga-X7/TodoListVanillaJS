const todosList = document.querySelector('.todo-items');

todosList.addEventListener('click', e => {
    if(e.target.className.includes('todo-item')){
        e.target.classList.toggle('todo-item-completed');
    }
});