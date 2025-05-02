const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todoList = document.querySelector('.js--todos-wrapper');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function addTask() {
    const text = input.value.trim();
    if(text) {
        tasks.push({text: text, completed: false });
        input.value = '';
        createTask();
        saveTasks();
    } 
}

function deleteTask(index) {
    tasks.splice(index, 1);
    createTask();
    saveTasks();

}

function getCheckedValue(index) {
    tasks[index].completed = !tasks[index].completed;
    createTask();
    saveTasks();
}

function createTask() {
    todoList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('todo-item');
        (task.completed ) ? li.classList.add('todo-item--checked') : '';

        li.innerHTML = `
            <input type="checkbox" ${task.completed ? 'checked' : ''}>
            <span class="todo-item__description">${task.text}</span>
            <button class="todo-item__delete" onclick="deleteTask(${index})">Видалити</button>
        `
        li.addEventListener('change', ()=> getCheckedValue(index));
        todoList.appendChild(li);
    })
}

createTask();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
})