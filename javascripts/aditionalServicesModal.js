var modal = document.getElementById("myModal");
const reservaQuatidadePessoas = document.querySelector('[data-name="quantidadePessoas"]')
const reservaCheckin  = document.querySelector('[data-name="checkin"]')
const reservaCheckout  = document.querySelector('[data-name="checkout"]')
const reservaApartamento  = document.querySelector('[data-name="apartamento"]')

const apartamento = document.getElementsByName("tipo-acomodacao")
const quantidadePessoas = document.querySelector("#qtd_pessoas")
const checkout = document.querySelector("#checkout")
const checkin = document.querySelector("#checkin")
console.log(apartamento)

apartamento.forEach()
quantidadePessoas.addEventListener("input", () => {
  reservaQuatidadePessoas.innerHTML = `Quantidade de Pessoas: ${quantidadePessoas.value}` 
} )
apartamento.addEventListener("input",() => {
  reservaApartamento.innerHTML = `Apartamento: ${reservaApartamento.value}`
})
// checkin.addEventListener("input", () => {
//   reservaCheckin.innerHTML = `Checkin: ${reservaCheckin.value}`
// })
// checkout.addEventListener("input", () => {
//   reservaCheckout.innerHTML = `Checkout: ${reservaCheckout.value}`
// })


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