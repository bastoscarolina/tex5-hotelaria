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

// SOMA DOS SERVIÇOS ADICIONAIS
let totalServices = document.getElementById('total')
function totalIt() {
  let input = document.getElementsByClassName("checkModal");
  let total = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i].checked) {
      total += parseFloat(input[i].value);
    }
  }
  totalServices.innerHTML = `R$ ${total.toFixed(2).replace('.', ',')}`  
}

// ADICIONA SERVIÇOS ADICIONAIS NO RESUMO
var servicosAdicionais = {
  servicos: []
}

var boxes = document.querySelectorAll(".checkModal");

/* Array de checkboxes */
var boxesArray = Array.prototype.slice.call(boxes, 0);

/*Function*/
function servico(e) {
  /* Filtra os checkboxes que não estão marcados */
  var checkedBoxes = boxesArray.filter((checkbox) => {
    return checkbox.checked;
  });

  /* Cria um novo array com os nomes dos serviços */
  servicosAdicionais.servicos = checkedBoxes.map((checkbox) => {
    return checkbox.name;
  })

  document.getElementById("resume__item").innerHTML = servicosAdicionais.servicos.map(service => `${service} <br>`).join("");
  
}

boxes.forEach((checkbox) => {
  if (checkbox.attachEvent) {
    checkbox.attachEvent("onchange", servico);
  } else {
    checkbox.addEventListener("change", servico, false);
  }
})
