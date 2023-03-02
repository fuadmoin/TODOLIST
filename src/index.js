import './style.css';
import ToDoItems from '../modules/todoitems.js';
import refresh from '../img/refresh.png';

const container = document.getElementById('container');
const form = document.querySelector('form');

form.innerHTML = `
<label class="title"
>Today's To Do <img class="refresh" src=${refresh} alt="refresh"
/></label>
<input
class="inputText"
placeholder="Add to your list..."
type="text"
/>
`;
const input = document.querySelector('.inputText');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const inputed = input.value;
  if (input !== '') {
    const todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];
    const length = todos.length + 1;
    const todo = new ToDoItems(inputed, false, length);
    ToDoItems.add(todo);
    ToDoItems.displayAll();
    input.value = '';
    input.focus();
  }
});
const btnDeleteAll = document.createElement('button');
btnDeleteAll.setAttribute('class', 'delete-all');
btnDeleteAll.textContent = 'Clear all completed';
container.append(btnDeleteAll);

btnDeleteAll.addEventListener('click', () => {
  ToDoItems.removeAll();
});

window.onload = ToDoItems.displayAll();