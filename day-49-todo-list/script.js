const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

const todos = JSON.parse(localStorage.getItem('todos'));

if(todos) {
  todos.forEach(todo => addToDo(todo))
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  addToDo();
})

// take in a todo
function addToDo(todo) {
  let todoText = input.value;

  if(todo) {
    todoText = todo.text;
  }

  // construct a list item
  if(todoText) {
    const todoEl = document.createElement('li');
    if(todo && todo.completed) {
      todoEl.classList.add('completed');
    }

    todoEl.innerText = todoText;

    todoEl.addEventListener('click', () => {
      todoEl.classList.toggle('completed')
      updateLS();
    });

    // remove todo on right click
    // contextmenu is a right click
    todoEl.addEventListener('contextmenu', (e) => {
      e.preventDefault(); // prevents the right click menu from popping up

      todoEl.remove();
      updateLS();
    });

    todosUL.appendChild(todoEl);

    input.value = ''; // clear form

    updateLS();
  }

}

// function updates local storage
function updateLS() {
  todosEl = document.querySelectorAll('li');

  const todos = []

  todosEl.forEach(todoEl => {
    todos.push({
      text: todoEl.innerText,
      completed: todoEl.classList.contains('completed')
    })
  })

  localStorage.setItem('todos', JSON.stringify(todos))
}