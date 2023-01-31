const modal = document.getElementById("myModal");

//MODAL PARA SERVIÇOS DICIONAIS

const btn = document.getElementById("myBtn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

const serviceCheckboxes = document.querySelectorAll('.checkModal')
const listService = document.querySelector('#listService')
const totalListService = document.querySelector('#totalListService')
const totalModalListService = document.querySelector('#totalModalListService')
const totalGeral = document.getElementById('totalGeral')

for (const checkbox of serviceCheckboxes) {
  checkbox.addEventListener('click', (e) => {
    localStorage.setItem(e.target.id, e.target.checked)
    updateList()
    updateTotal()
  })
}

// Carregar o estado dos checkboxes ao carregar a página
for (const checkbox of serviceCheckboxes) {
  if (localStorage.getItem(checkbox.id) === 'true') {
    checkbox.setAttribute('checked', 'checked')
  }
}

function updateList() {
  listService.innerHTML = ''
  for (const checkbox of serviceCheckboxes) {
    if (checkbox.checked) {
      const item = document.createElement('li')
      item.textContent = `${checkbox.dataset.service}: R$ ${checkbox.dataset.price}`
      listService.appendChild(item)
    }
  }
}

function updateTotal() {
  let sum = 0;
  for (const checkbox of serviceCheckboxes) {
    if (checkbox.checked) {
      sum += parseFloat(checkbox.dataset.price)
    }
  }
  totalListService.textContent = `Total dos serviços adicionais: R$ ${sum.toFixed(2).replace('.', ',')}`
  totalModalListService.textContent = `Total dos serviços adicionais: R$ ${sum.toFixed(2).replace('.', ',')}`
}

// Atualizar a lista e o total quando a página é carregada
updateList();
updateTotal();
