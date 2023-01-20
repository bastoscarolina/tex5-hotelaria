var modal = document.getElementById("myModal");
const reservaQuantidadePessoas = document.querySelector('[data-name="quantidadePessoas"]')
const reservaCheckin  = document.querySelector('[data-name="checkin"]')
const reservaCheckout  = document.querySelector('[data-name="checkout"]')
const reservaApartamento  = document.querySelector('[data-name="apartamento"]')

const apartamentos = document.getElementsByName("tipo-acomodacao")
const quantidadePessoas = document.querySelector("#qtd_pessoas")
const checkout = document.querySelector("#checkout")
const checkin = document.querySelector("#checkin")

apartamentos.forEach(apartamento => {
  apartamento.addEventListener("input",() => {
    reservaApartamento.innerHTML = `Apartamento: ${apartamento.value}`
  })
})
quantidadePessoas.addEventListener("input", () => {
  reservaQuantidadePessoas.innerHTML = `Quantidade de Pessoas: ${quantidadePessoas.value}` 
} )

checkin.addEventListener("input", () => {
  const data = new Date(checkin.value)
  const dataFormatada = data.getUTCDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()
  reservaCheckin.innerHTML = `Checkin: ${dataFormatada}`
})
checkout.addEventListener("input", () => {
  const data = new Date(checkout.value)
  const dataFormatada = data.getUTCDate()+"/"+(data.getMonth()+1)+"/"+data.getFullYear()
  reservaCheckout.innerHTML = `Checkout: ${dataFormatada}`
})

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

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