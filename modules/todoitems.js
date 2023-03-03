import select2 from '../img/select.png';
import delete2 from '../img/delete.png';
import edit from '../img/edit.png';
import save from '../img/save.png';
import Taskcompleted from './completed.js';

export default class toDoItems {
  constructor(text, completed, index) {
    this.text = text;
    this.completed = completed;
    this.index = index;
  }

  static add(text) {
    const todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];

    todos.push(text);
    localStorage.setItem('todoArray', JSON.stringify(todos));
  }

  static displayAll() {
    const ul = document.querySelector('.todoList');
    ul.innerHTML = '';
    const todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];
    for (let i = 0; i < todos.length; i += 1) {
      const isCompleted = todos[i].completed ? 'complete' : '';
      const node = document.createElement('li');

      node.setAttribute('class', `todo-item ${isCompleted}`);
      node.setAttribute('data-key', todos[i].index);
      node.innerHTML = '';
      node.innerHTML = ` 
            <input class="checkbox" id="${todos[i].index}" type="checkbox"/>
          <img class="select"  src=${select2} alt=""/> <img class="save"  src=${save} alt=""/>
            <img class="delete"  src=${delete2} alt=""/> <img class="edit"  src=${edit} alt=""/>
           <span class="items">${todos[i].text}</span>
        
            `;

      ul.append(node);
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      const option2 = document.querySelectorAll('.select');
      const option3 = document.querySelectorAll('.delete');
      const option1 = document.querySelectorAll('.edit');
      const option = document.querySelectorAll('.save');

      option3[i].addEventListener('click', () => {
        toDoItems.remove(i);
      });

      option2[i].addEventListener('click', () => {
        option2[i].style.display = 'none';
        option[i].style.display = 'block';
        option1[i].style.display = 'block';
        this.edit();
      });

      checkboxes[i].addEventListener('click', (event) => {
        const parent = event.target.parentNode;
        Taskcompleted(i);
        if (checkboxes[i].checked) {
          parent.classList.add('complete');
          option2[i].style.display = 'none';
          option[i].style.display = 'none';
          option1[i].style.display = 'none';
        } else {
          option2[i].style.display = 'block';
          parent.classList.remove('complete');
        }
      });

      if (todos[i].completed === true) {
        checkboxes[i].checked = true;
      } else {
        checkboxes[i].checked = false;
      }
    }
  }

  static edit() {
    const todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];
    const tasks = document.querySelectorAll('.todoList li');
    for (let i = 0; i < tasks.length; i += 1) {
      const option1 = document.querySelectorAll('.edit');
      const option2 = document.querySelectorAll('.select');
      const option = document.querySelectorAll('.save');
      const input4 = document.createElement('input');

      option1[i].addEventListener('click', () => {
        const key = todos[i].index;
        const item = todos.findIndex((item) => item.index === key);
        const { text } = todos[item];

        input4.setAttribute('class', 'editable');
        input4.type = 'text';

        input4.value = text;
        tasks[i].lastChild.replaceWith(input4);
      });

      option[i].addEventListener('click', () => {
        const span = document.createElement('span');
        span.textContent = input4.value;

        const key = todos[i].index;
        const task = todos.find((t) => t.index === key);
        if (input4.value !== '') {
          task.text = span.textContent;

          localStorage.setItem('todoArray', JSON.stringify(todos));

          toDoItems.displayAll();
        }

        input4.setAttribute('class', 'disabled');
        option2[i].style.display = 'block';
        option[i].style.display = 'none';
        option1[i].style.display = 'none';
      });
    }
  }

  static remove(i) {
    let todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];

    const key = todos[i].index;
    const task = todos.find((t) => t.index === key);

    todos = todos.filter((item) => item !== task);
    localStorage.setItem('todoArray', JSON.stringify(todos));
    const todos2 = JSON.parse(window.localStorage.getItem('todoArray')) || [];

    for (let i = 1; i <= todos2.length; i += 1) {
      todos2[i - 1].index = i;
    }
    localStorage.setItem('todoArray', JSON.stringify(todos2));

    this.displayAll();
  }

  static removeAll() {
    let todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];
    const tasks = document.querySelectorAll('.todoList li');
    const tobeDeleted = [];
    for (let i = 0; i < tasks.length; i += 1) {
      const checkboxes = document.querySelectorAll("input[type='checkbox']");
      if (checkboxes[i].checked) {
        const key = todos[i].index;
        const task = todos.find((t) => t.index === key);
        tobeDeleted.push(task);
      }
    }

    todos = todos.filter((item) => !tobeDeleted.includes(item));
    localStorage.setItem('todoArray', JSON.stringify(todos));
    const todos2 = JSON.parse(window.localStorage.getItem('todoArray')) || [];

    for (let i = 1; i <= todos2.length; i += 1) {
      todos2[i - 1].index = i;
    }
    localStorage.setItem('todoArray', JSON.stringify(todos2));
    this.displayAll();
  }
}