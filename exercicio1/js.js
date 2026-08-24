// Seleciona os elementos principais da página
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const contador = document.getElementById('contador');

// Adiciona uma tarefa ao clicar no botão
addBtn.addEventListener('click', adicionarTarefa);

// Adiciona uma tarefa ao pressionar Enter
taskInput.addEventListener('keypress', function (evento) {
  if (evento.key === 'Enter') {
    adicionarTarefa();
  }
});

function adicionarTarefa() {
  const texto = taskInput.value.trim();

  // Não adiciona tarefa vazia
  if (texto === '') {
    return;
  }

  // Cria o item da lista
  const item = document.createElement('li');

  // Checkbox para marcar a tarefa como concluída
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.classList.add('checkbox-tarefa');
  checkbox.addEventListener('change', function () {
    item.classList.toggle('concluida', checkbox.checked);
  });

  const span = document.createElement('span');
  span.textContent = texto;
  // Clicar no texto também marca a tarefa como concluída
  span.addEventListener('click', function () {
    checkbox.checked = !checkbox.checked;
    item.classList.toggle('concluida', checkbox.checked);
  });

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.classList.add('remover');
  botaoRemover.addEventListener('click', function () {
    item.remove();
    atualizarContador();
  });

  item.appendChild(checkbox);
  item.appendChild(span);
  item.appendChild(botaoRemover);
  taskList.appendChild(item);

  taskInput.value = '';
  taskInput.focus();

  atualizarContador();
}

function atualizarContador() {
  contador.textContent = taskList.children.length;
}