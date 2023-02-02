<template>
  <HeroComponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </HeroComponent>

  <main class="containerReserv">
    <FormReserva @update:data="updateData"/>

    <h2 class="roomOptions__paragraph">Escolha seu quarto</h2>

    <div class="reservContent">
      <div class="roomOptions">
        <CardRoomComponent
          bedroom="Quarto Suíte Club"
          image="./assets/quartosParaReservar/quarto_1.jpg"
          description="Quarto com varanda, cama de casal, Queen ou King Size,
                        ar-condicionado, WI-FI, TV LED 40”, telefones, minibar, amenities,
                        secador de cabelo, mesa de trabalho, cofre, roupão, chinelo e
                        muito mais. Os apartamentos superiores Suíte Club estão
                        localizados do 15º ao 18º andar."
          price="150"
          v-model="selectedCard"
          @update:selectedCard="updateSelectedCard"
        />

        <CardRoomComponent
          bedroom="Quarto Luxo"
          image="./assets/quartosParaReservar/quarto_2.jpg"
          description="Quarto com camas de solteiro, dispõe de ar-condicionado, 
                       WI-FI, TV LED 40”, telefones, minibar, amenities, secador 
                       de cabelo, mesa de trabalho, cofre, e muito mais. Os 
                       apartamentos de luxo estão localizados do 1º até o 6º andar. 
                       De 20 a 29m²."
          price="200"
          v-model="selectedCard"
          @update:selectedCard="updateSelectedCard"
        />

        <CardRoomComponent
          bedroom="Quarto Suíte Família"
          image="./assets/quartosParaReservar/quarto_3.jpg"
          description="Com vista parcial para o oceano. onde você pode passar o 
                       tempo descansando à sombra de um guarda-sol com quem você 
                       mais ama. piscinas externas oferecem horas de diversão, e 
                       os hóspedes que quiserem relaxar poderão visitar o spa para 
                       aproveitar massagens musculares profundas, tratamentos faciais 
                       e tratamentos ayurvédicos."
          price="300"
          v-model="selectedCard"
          @update:selectedCard="updateSelectedCard"
        />
      </div>

      <aside class="resume">
        <div class="resume__reserve">
          <h2 class="resume__title">Resumo da reserva</h2>
          <p>Data de Entrada: {{ formData.checkin }}</p>
          <p>Data de Saída: {{ formData.checkout }}</p>
          <p>Número de Hóspedes: {{ formData.guests }}</p>
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
import CardRoomComponent from "@/components/CardRoomComponent.vue";

export default {
  name: "ReservasView",
  components: {
    HeroComponent,
    FormReserva,
    CardRoomComponent,
  },
  data() {
    return {
      formData: {
        checkin: '',
        checkout: '',
        guests: ''
      }    
    }
  },
  methods: {
    updateData(data) {
      this.formData = data;
    }
  }
}
  
</script>

<style scoped>
.containerReserv {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.reservContent {
  display: flex;
  justify-content: space-between;
}

.roomOptions {
  margin-bottom: 3rem;
  width: 45%;
}

.roomOptions__paragraph {
  position: relative;
  color: #0c1926;
  font-size: 2rem;
  margin: 45px 0 35px 0;
  text-align: left;
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