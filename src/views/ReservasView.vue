<template>
  <HeroComponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </HeroComponent>

  <main class="containerReserv">

    <FormReserva />
    
    <h2 class="roomOptions__paragraph">Escolha seu quarto</h2>
    <div class="reservContent">
      <div class="roomOptions">
        <article class="roomOptions__room">
          <img src="#" alt="quarto Suíte club" class="roomOptions__roomImagem" />
          <div>
            <h3 class="roomOptions__roomTitle">Suíte Club</h3>
            <p class="roomOptions__roomDescription">
              Quarto com varanda, cama de casal, Queen ou King Size,
              ar-condicionado, WI-FI, TV LED 40”, telefones, minibar, amenities,
              secador de cabelo, mesa de trabalho, cofre, roupão, chinelo e
              muito mais. Os apartamentos superiores Suíte Club estão
              localizados do 15º ao 18º andar.
            </p>

            <label class="roomOptions__roomPrice">R$150,00</label>

            <div class="roomOptions__selectRoom">
              <form action="">
                <div>
                  <input class="roomOptions__roomRadioBtn" type="checkbox" name="Suíte Club" id="suite-club"
                    value="150" />
                  <label for="quartoX">Selecionar Suíte Club</label>
                  <button class="btnReservar" onclick="saveApartment()">
                    Adicionar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </article>

        <article class="roomOptions__room">
          <img src="#" alt="quarto Quarto Luxo" class="roomOptions__roomImagem" />
          <h3 class="roomOptions__roomTitle">Quarto Luxo</h3>
          <p class="roomOptions__roomDescription">
            Quarto com camas de solteiro, dispõe de ar-condicionado, WI-FI, TV
            LED 40”, telefones, minibar, amenities, secador de cabelo, mesa de
            trabalho, cofre, e muito mais. Os apartamentos de luxo estão
            localizados do 1º até o 6º andar. De 20 a 29m².
          </p>
          <label class="roomOptions__roomPrice">R$200,00</label>

          <div class="roomOptions__selectRoom">
            <form action="">
              <div>
                <input class="roomOptions__roomRadioBtn" type="checkbox" name="Quarto Luxo" id="quarto-luxo"
                  value="200" />
                <label for="quartoY">Selecionar Quarto Luxo</label>
              </div>
            </form>
          </div>
        </article>

        <article class="roomOptions__room">
          <img src="" alt="quarto Suíte Família" class="roomOptions__roomImagem" />
          <h3 class="roomOptions__roomTitle">Quarto Suíte Família</h3>
          <p class="roomOptions__roomDescription">
            Com vista parcial para o oceano. onde você pode passar o tempo
            descansando à sombra de um guarda-sol com quem você mais ama.
            piscinas externas oferecem horas de diversão, e os hóspedes que
            quiserem relaxar poderão visitar o spa para aproveitar massagens
            musculares profundas, tratamentos faciais e tratamentos ayurvédicos.
          </p>
          <span class="roomOptions__roomPrice">R$300,00</span>

          <div class="roomOptions__selectRoom">
            <form action="">
              <div>
                <input class="roomOptions__roomRadioBtn" type="checkbox" name="Suíte Família" id="suite-familia"
                  value="300" />
                <label for="quartoZ">Selecionar Suíte Família</label>
              </div>
            </form>
          </div>
        </article>
      </div>

      <aside class="resume">
        <div class="resume__reserve">
          <h2 class="resume__title">Resumo da reserva</h2>

          <a class="resume__addServices" id="myBtn">Adicionar mais serviços</a>

          <button class="resume__continue" id="btnContinue">Continuar</button>
        </div>
      </aside>
    </div>
  </main>
</template>

<script>
import HeroComponent from "@/components/HeroComponent.vue";
import FormReserva from "@/components/FormReserva.vue";

export default {
  name: "ReservasView",
  components: {
    HeroComponent,
    FormReserva,
  },
  data() {
    return {
      title: "As férias dos seus sonhos está aqui...",
      subtitle: '"Facilidade e segurança que você precisa"',
    };
  },
};
</script>

<style scoped>
.containerReserv {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}


.btnReservar {
  background-color: #0c1926;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 0.9rem;
  cursor: pointer;
}

.reservContent {
  display: flex;
  justify-content: space-between;
}

.roomOptions__paragraph {
  position: relative;
  color: #0c1926;
  font-size: 2rem;
  margin: 45px 0 35px 0;
  text-align: left;
}

.roomOptions {
  margin-bottom: 3rem;
  width: 45%;
}

.roomOptions__room {
  background-color: #fff;
  border: 1px solid #415a77;
  margin-bottom: 2rem;
  border-radius: 5px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
}

.roomOptions__roomImagem {
  padding: 0 0 2rem 0;
  width: 100%;
}

.roomOptions__roomTitle {
  padding: 0 0 1rem 1rem;
  color: #0c1926;
}

.roomOptions__roomDescription {
  text-align: justify;
  padding: 0 1rem 1.7rem 1rem;
}

.roomOptions__roomPrice {
  display: block;
  width: 10vw;
  background-color: #00ff00;
  text-align: center;
  padding: 1rem;
  margin: 0 0 0 1rem;
  color: #fff;
  font-weight: bold;
}

.roomOptions__selectRoom {
  padding: 1rem;
}

.roomOptions__selectRoom form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.roomOptions__selectRoom label {
  padding-left: 0.5rem;
}

.resume {
  align-self: start;
  position: sticky;
  background: #0c1926;
  color: #fff;
  top: 200px;
  width: 50%;
  margin-bottom: 5.1rem;
  border-radius: 5px;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
}

.resume__reserve {
  padding: 2rem;
}

.resume__title {
  text-align: center;
  margin-bottom: 2rem;
}

.resume__item {
  font-size: 1rem;
  font-weight: bold;
  line-height: 2.5rem;
}

.resume__addServices {
  display: block;
  color: #fff;
  padding: 2rem 0;
  text-align: right;
}

.resume__continue {
  width: 100%;
  margin: 2rem 0 0 0;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
  color: #415a77;
  cursor: pointer;
}
</style>