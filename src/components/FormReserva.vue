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
        <input type="date" v-model="checkin" class="form-control" @input="updateData">
      </div>
      <div>
        <label class="field-form-reserva">Escolha a data de saída</label>
        <input type="date" v-model="checkout" class="form-control" @input="updateData">
      </div>
      <div>
        <label class="field-form-reserva">Quantidade de pessoas</label>
        <input type="number" v-model="guests" min="1" class="form-control" @input="updateData">
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: 'FormReserva',
  deta() {
    return {
      checkin: '',
      checkout: '',
      guests: ''
    }
  },
  methods: {
    updateData() {
      this.$emit('update:data', {
        checkin: this.checkin,
        checkout: this.checkout,
        guests: this.guests
      })
    }
  }
}
</script>

<style scoped>
.form__title {
  color: #0c1926;
  font-size: 2rem;
  margin: 45px 0 35px 0;
  text-align: center;
}

.form__infoReserva {
  color: #0c1926;
  margin-bottom: 35px;
  text-align: center;
  font-size: 1.2rem;
}

.divider {
  width: 200px;
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