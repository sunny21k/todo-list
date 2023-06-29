const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const newTodoText = todoInput.value.trim();
  if (newTodoText) {
    addTodoItem(newTodoText);
    todoInput.value = '';
  }
});

function addTodoItem(text) {
  const li = document.createElement('li');
  const spanBullet = document.createElement('span');
  spanBullet.textContent = "\u2022 ";
  const spanText = document.createElement('span');
  spanText.textContent = text;
  const spanType = document.createElement('span');
  spanType.classList.add('todo-type');
  spanType.textContent = document.querySelector('#todo-type').value;
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
  li.appendChild(spanBullet);
  li.appendChild(spanText);
  li.appendChild(spanType);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}



