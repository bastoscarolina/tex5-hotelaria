const myModalContinue = document.getElementById("myModalContinue");
const btnContinue = document.getElementById("btnContinue");
const spanContinue = document.getElementsByClassName("closeContinue")[0];


const continueCheckin = document.querySelector(".informacoesContinueIn");
const continueCheckout = document.querySelector(".informacoesContinueOut");
const continuePessoas = document.querySelector(".informacoesContinueDiaria");
const continueApt = document.querySelector(".informacoesContinueApt");

const valorTotalDiariasModal = document.querySelector('.informacoesContinueDiariaTotal');

btnContinue.onclick = function() {
  myModalContinue.style.display = "block";
}

spanContinue.onclick = function() {
  myModalContinue.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == myModalContinue) {
    myModalContinue.style.display = "none";
  }
}

//Mostrar Chech-in, Checkout e Diária
continueCheckin.innerHTML = `<br> Check-In: ${localStorage.getItem('checkin')}`;
continueCheckout.innerHTML = `<br> Check-Out: ${localStorage.getItem('checkout')}`;
continuePessoas.innerHTML = `<br> Número de Hospedes: ${localStorage.getItem('qtdPessoas')} pessoas`;

// continueApt.innerHTML = ``

/* INICIO LEVA IMAGEM E DESCRIÇÃO PARA O MODAL*/
let infoContinueApt = localStorage.getItem('apartamento');
let apParseContinue = JSON.parse(infoContinueApt);

/* VARIAVEIS REPLICADAS PARA EXIBIÇÃO DO VALOR TOTAL*/
let getApNameContinue = localStorage.getItem('apartamento');
let date1Continue = new Date(localStorage.getItem('checkin'));
let date2Continue = new Date(localStorage.getItem('checkout'));
let diferenceContinue = date2Continue.getTime() - date1Continue.getTime();
let totalDaysContinue = diferenceContinue / (1000 * 3600 * 24);

valorTotalDiariasModal.innerHTML = `<br> Valor Total: R$ ${(apParseContinue.price * totalDaysContinue).toFixed(2).replace('.', ',')}`;

/* IMAGEM E DESCRIÇÃO PARA O MODAL*/
if (apParseContinue.name == 'Suíte Club') {
  continueApt.innerHTML = `
  <br>
  <article class="roomOptions__room">
  <img
    src="../images/quartos/quarto_1.jpg"
    alt="quarto Suíte club"
    class="roomOptions__roomImagem"
  />
  <div>
    <h3 class="roomOptions__roomTitle">Suíte Club</h3>
    <p class="roomOptions__roomDescription">
      Quarto com varanda, cama de casal, Queen ou King Size,
      ar-condicionado, WI-FI, TV LED 40”, telefones, minibar,
      amenities, secador de cabelo, mesa de trabalho, cofre, roupão,
      chinelo e muito mais. Os apartamentos superiores Suíte Club
      estão localizados do 15º ao 18º andar.
    </p>
  </div>
  </article>
    `
}

if (apParseContinue.name == 'Quarto Luxo') {
  continueApt.innerHTML = `
  <br>
  <article class="roomOptions__room">
            <img
              src="../images/quartos/quarto_2.jpg"
              alt="quarto Quarto Luxo"
              class="roomOptions__roomImagem"
            />
            <h3 class="roomOptions__roomTitle">Quarto Luxo</h3>
            <p class="roomOptions__roomDescription">
              Quarto com camas de solteiro, dispõe de ar-condicionado, WI-FI, TV
              LED 40”, telefones, minibar, amenities, secador de cabelo, mesa de
              trabalho, cofre, e muito mais. Os apartamentos de luxo estão
              localizados do 1º até o 6º andar. De 20 a 29m².
            </p>
    </article>
    `
}

if (apParseContinue.name == 'Suíte Família') {
  continueApt.innerHTML = `
  <br>
  <article class="roomOptions__room">
  <img
    src="../images/quartos/quarto_3.jpg"
    alt="quarto Suíte Família"
    class="roomOptions__roomImagem"
  />
  <h3 class="roomOptions__roomTitle">Quarto Suíte Família</h3>
  <p class="roomOptions__roomDescription">
    Com vista parcial para o oceano. onde você pode passar o tempo
    descansando à sombra de um guarda-sol com quem você mais ama.
    piscinas externas oferecem horas de diversão, e os hóspedes que
    quiserem relaxar poderão visitar o spa para aproveitar massagens
    musculares profundas, tratamentos faciais e tratamentos
    ayurvédicos.
  </p>
</article>
  `
}
/* FIM LEVA IMAGEM E DESCRIÇÃO PARA O MODAL*/