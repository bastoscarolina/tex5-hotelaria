const modal = document.getElementById("myModal");

// VARIÁREIS PARA IMPRIMIR INFORMAÇÕES NA PÁGINA DE RESERVAS
const reservaQuantidadePessoas = document.querySelector('[data-name="quantidadePessoas"]')
const reservaCheckin  = document.querySelector('[data-name="checkin"]')
const reservaCheckout  = document.querySelector('[data-name="checkout"]')
const reservaApartamento  = document.querySelector('[data-name="apartamento"]')

const apartamentos = document.getElementsByName("tipo-acomodacao")
const quantidadePessoas = document.querySelector("#qtd_pessoas")
const checkout = document.querySelector("#checkout")
const checkin = document.querySelector("#checkin")

// FUNÇÃO PARA ESCOLHA DE APARTAMENTO NA PÁGINA DE RESERVAS
apartamentos.forEach(apartamento => {
  apartamento.addEventListener("input",() => {
    reservaApartamento.innerHTML = `Apartamento: ${apartamento.value}`
  })
})
quantidadePessoas.addEventListener("input", () => {
  reservaQuantidadePessoas.innerHTML = `Quantidade de Pessoas: ${quantidadePessoas.value}` 
} )

//FUNÇÃO PARA CHECK-IN
checkin.addEventListener("input", () => {
  const data = new Date(checkin.value);

  //Colocando mês com 0 na frente
  let month = new Date(checkin.value).getMonth() + 1;
  let todayMonth = month.toString();
  if (todayMonth < 10) todayMonth = '0' + month.toString();

  //Colocando dia com o 0 na frente
  let todayDay = data.getUTCDate();
  if (todayDay < 10) todayDay = '0' + data.getUTCDate();

  const dataFormatada = todayDay + "/" + todayMonth + "/" + data.getFullYear();
  reservaCheckin.innerHTML = `Checkin: ${dataFormatada}`;
})

//FUNÇÃO PARA CHECK-OUT
checkout.addEventListener("input", () => {
  const data = new Date(checkout.value);

    //Colocando mês com 0 na frente
    let month = new Date(checkout.value).getMonth() + 1;
    let todayMonth = month.toString();
    if (todayMonth < 10) todayMonth = '0' + month.toString();
  
    //Colocando dia com o 0 na frente
    let todayDay = data.getUTCDate();
    if (todayDay < 10) todayDay = '0' + data.getUTCDate();

    const dataFormatada = todayDay + "/" + todayMonth + "/" + data.getFullYear();
    reservaCheckout.innerHTML = `Checkout: ${dataFormatada}`;
})

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

  var adicionarAoResumo = servicosAdicionais.servicos.join(", "); // converte para string

  document.getElementById("resume__item").innerHTML = adicionarAoResumo; // imprime em resumo
}

boxes.forEach((checkbox) => {
  if (checkbox.attachEvent) {
    checkbox.attachEvent("onchange", servico);
  } else {
    checkbox.addEventListener("change", servico, false);
  }
})