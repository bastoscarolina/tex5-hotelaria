const checkin = document.getElementById("checkin")
const checkout = document.getElementById("checkout")
const quantidadeDePessoas = document.getElementById("qtd_pessoas")
const btnSaveDate = document.getElementById("btnSaveDate")

// Adiciona datas e quantidades de pessoas em localStorage
function saveDates() {
  localStorage.setItem('checkin', checkin.value)
  localStorage.setItem('checkout', checkout.value)
  localStorage.setItem('qtdPessoas', quantidadeDePessoas.value)
}

const apartamentoSuiteclub = document.getElementById('suite-club')
const apartamentoQuartoLuxo = document.getElementById('quarto-luxo')
const apartamentoSuiteFamilia = document.getElementById('suite-familia')
const resumeApartamento = document.getElementById("resumeApartamento")

// Adiciona os dados do quarto em localstorage
function saveApartment() {
  if (apartamentoSuiteclub.checked){
    let suiteClub = {
      name: apartamentoSuiteclub.name,
      price: apartamentoSuiteclub.value
    }
    localStorage.setItem('apartamento', JSON.stringify(suiteClub))
  }
  
  if (apartamentoQuartoLuxo.checked) {
    let quartoLuxo = {
      name: apartamentoQuartoLuxo.name,
      price: apartamentoQuartoLuxo.value
    }
     localStorage.setItem('apartamento', JSON.stringify(quartoLuxo))
  } 
  
  if (apartamentoSuiteFamilia.checked) {
    let suiteFamilia = {
      name: apartamentoSuiteFamilia.name,
      price: apartamentoSuiteFamilia.value
    }
    localStorage.setItem('apartamento', JSON.stringify(suiteFamilia))
   }
}

const resumeCheckin = document.getElementById("resumeCheckin")
const resumeCheckout = document.getElementById("resumeCheckout")
const resumeQtdPessoas = document.getElementById("resumeQtdPessoas")

let dataEntrada = new Date(localStorage.getItem('checkin'))
let dataSaida = new Date(localStorage.getItem('checkout'))
resumeCheckin.innerHTML =  new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric'} ).format(dataEntrada)
resumeCheckout.innerHTML = new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'short', year: 'numeric'} ).format(dataSaida)
resumeQtdPessoas.innerHTML = `${localStorage.getItem('qtdPessoas')} pessoas`

// Inseri no Resumo o nome do apartamento
let getApName = localStorage.getItem('apartamento')
let apParse = JSON.parse(getApName)
resumeApartamento.innerHTML = apParse.name

// Inseri o valor unitario da diária
const valorDiaria = document.getElementById('valorDiaria')
valorDiaria.innerHTML = `R$ ${parseInt(apParse.price).toFixed(2).replace('.', ',')}`

// Calcular quantidade de dias
const diarias = document.getElementById('diarias')
let date1 = new Date(localStorage.getItem('checkin'))
let date2 = new Date(localStorage.getItem('checkout'))
let diference = date2.getTime() - date1.getTime()
let totalDays = diference / (1000 * 3600 * 24)
diarias.innerHTML = `${totalDays} dias`


// Inseri o valor total da diaria
const valorTotalDiarias = document.getElementById('valorTotalDiarias')
valorTotalDiarias.innerHTML = `R$ ${(apParse.price * totalDays).toFixed(2).replace('.', ',')}`