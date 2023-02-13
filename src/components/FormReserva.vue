<template>
  <section class="containerReserv__form">
    <h2 class="form__title">Minha Reserva</h2>
    <p class="form__infoReserva">
      Forneça a data de entrada, saída e quantidade de pessoas
    </p>

    <hr class="divider" />

    <form class="form__date">
      <div>
        <label class="field-form-reserva">Escolha a data de entrada</label>
        <input type="date" :value="dadosReserva.checkin" class="form-control" @input="updateDataCheckin"
          @change="diarias()">
      </div>
      <div>
        <label class="field-form-reserva">Escolha a data de saída</label>
        <input type="date" :value="dadosReserva.checkout" class="form-control" @input="updateDataCheckout"
          @change="diarias()">
      </div>
      <div>
        <label class="field-form-reserva">Quantidade de pessoas</label>
        <input type="number" :value="dadosReserva.pessoas" min="1" max="10" class="form-control"
          @input="updatePessoas">
      </div>
    </form>
  </section>
</template>

<script>
import store from '@/store';

export default {
  name: 'FormReserva',
  data() {
    return {

    }
  },
  computed: {
    dadosReserva() {
      return store.state.dadosReserva;
    }
  },
  methods: {
    updateDataCheckin(e) {
      this.$store.commit('updateDataCheckin', e.target.value);
    },

    updateDataCheckout(e) {
      this.$store.commit('updateDataCheckout', e.target.value);
    },

    updatePessoas(e) {
      this.$store.commit('updatePessoas', e.target.value);
    },

    diarias: function () {
      if (
        this.$store.getters.agendarDiaria.checkout &&
        this.$store.getters.agendarDiaria.checkin
        ) {
        const diarias = this.$store.getters.agendarDiaria.checkout
          ? Number(
            this.$store.getters.agendarDiaria.checkout.slice(8)
          ) -
          Number(
            this.$store.getters.agendarDiaria.checkin.slice(8)
          )
          : ''
        this.$store.commit('updateDiarias', diarias)
      }
    },

  }
}
</script>

<style scoped>
.form__title {
  color: #0c1926;
  font-size: 2rem;
  margin: 45px 0 0px 0;
  text-align: center;
}

.form__infoReserva {
  color: #0c1926;
  margin-bottom: 35px;
  text-align: center;
  font-size: 1.2rem;
}

.divider {
  width: 100px;
  height: 2px;
  background-color: #0c1926;
  margin: 0 auto;
  border: none;
  text-align: center;
}

.form__date {
  display: flex;
  padding: 5rem 0 4rem 0;
  justify-content: space-evenly;
  align-items: flex-end;
  column-gap: 1rem;
}

.form__date label {
  padding: 0 0 1rem 0;
}

.form__date input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 0 0;
  outline: none;
  border: 1px solid #ccc;
}
</style>