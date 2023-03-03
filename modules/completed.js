const isCompleted = (i) => {
  const todos = JSON.parse(window.localStorage.getItem('todoArray')) || [];
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  if (checkboxes[i].checked) {
    todos[i].completed = true;
  } else todos[i].completed = false;

  return localStorage.setItem('todoArray', JSON.stringify(todos));
};

export default isCompleted;