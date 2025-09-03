
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskButton');
const list = document.getElementById('taskList');

function addTask() {
  const text = input.value.trim();
  if (!text) {
    input.focus(); // Validacion
    return;
  }

  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  const del = document.createElement('button');
  del.className = 'delete-btn';
  del.setAttribute('aria-label', 'Eliminar tarea');
  del.title = 'Eliminar';
  del.innerHTML = '&times;';

  del.addEventListener('click', () => {
    li.remove();
  });

  li.append(span, del);
  list.appendChild(li);

  input.value = '';
  input.focus();
}

addBtn.addEventListener('click', addTask);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

  li.append(span, del);
  list.appendChild(li);

 
  input.value = '';

  input.focus();


addBtn.addEventListener('click', addTask);

    input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
      addTaskButton.click();
  } 
});


