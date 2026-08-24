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

  const span = document.createElement('span');
  span.textContent = texto;
  // Clicar no texto marca a tarefa como concluída
  span.addEventListener('click', function () {
    item.classList.toggle('concluida');
  });

  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.classList.add('remover');
  botaoRemover.addEventListener('click', function () {
    item.remove();
    atualizarContador();
  });

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