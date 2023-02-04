<template>
  <HeroComponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </HeroComponent>

  <main class="containerReserv">
    <FormReserva @update:data="updateData" />

    <h2 class="roomOptions__paragraph">Escolha seu quarto</h2>
    <div class="roomOptions"></div>
    <div class="reservContent">
      <div class="roomOptions">
        <CardRoomComponent
          bedroom="Suíte Executiva"
          image="./assets/quartosParaReservar/quarto_1.jpg"
          description="O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar."
          price="200"
          v-model="selectedCard"
          @update:selectedCard="updateSelectedCard"
        />
        <CardRoomComponent
          bedroom="Suíte Master"
          image="./assets/quartosParaReservar/quarto_2.jpg"
          description="SUÍTE MASTER
O apartamento possui uma decoração moderna e luxuosa, sendo composta por sala com TV e som, mesa de refeição com quatro cadeiras, sofá e mesa de trabalho. O quarto há 01 cama King Size. Vista mar."
          price="250"
          v-model="selectedCard"
          @update:selectedCard="updateSelectedCard"
        />
        <CardRoomComponent
          bedroom="Suíte Presidencial"
          image="./assets/quartosParaReservar/quarto_3.jpg"
          description="Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar."
          price="350"
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
          <p>Diárias: {{ totalDays }}</p>
          <p v-if="selectedCard.bedroom">Quarto: {{ selectedCard.bedroom }}</p>
          <p v-if="selectedCard.price">Preço: {{ selectedCard.price }}</p>
          <p>
            Valor total: {{ totalAmount }}
          </p>
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
        checkin: "",
        checkout: "",
        guests: "",
      },
      selectedCard: {},
    };
  },
  methods: {
    updateData(data) {
      this.formData = data;
    },
    updateSelectedCard(card) {
      this.selectedCard = card;
    }
  },
  computed: {
    totalDays() {
      if (this.formData.checkin && this.formData.checkout) {
        const checkin = new Date(this.formData.checkin);
        const checkout = new Date(this.formData.checkout);
        const differenceInTime = checkout.getTime() - checkin.getTime();
        return Math.ceil(differenceInTime / (1000 * 3600 * 24));
      }
      return "";
    },
    totalAmount() {
      let price = parseFloat(this.selectedCard.price || 0);
      let totalDays = parseInt(this.totalDays || 0);
      let guests = parseInt(this.formData.guests || 0);
      return price * totalDays * guests || 0;
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