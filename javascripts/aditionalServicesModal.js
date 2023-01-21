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