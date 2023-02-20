<template>
  <article class="roomOptions__room">
    <div>
      <img :src="img" title="Quartos Hotel" class="roomOptions__roomImagem" />
      <div>
        <h2 class="roomOptions__roomTitle">{{ title }}</h2>
        <p class="roomOptions__roomDescription">
          {{ description }}
        </p>
        <label class="roomOptions__roomPrice">R$ {{ preco }}</label>
      </div>
      <div class="roomOptions__selectRoom">
        <template v-if="showRadio">
          <input
            class="roomOptions__roomRadioBtn"
            type="radio"
            name="selectedCard"
            :value="title"
            v-bind:checked="selectedCard === title"
            @change="selectCard"
          />
          <label>Selecionar {{ title }}</label>
        </template>
      </div>
    </div>
    <template v-if="showButton">
      <button class="btnReserva" @click="clickEvent">Reservar</button>
    </template>
  </article>
</template>

<script>
export default {
  name: "CardRoomComponent",
  props: {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    preco: {
      type: Number,
      required: true,
    },
    showButton: {
      type: Boolean,
      default: false,
    },
    showRadio: {
      type: Boolean,
      default: false,
    },
    clickEvent: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    quartosHotel() {
      return this.$store.getters.quartosHotel;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
    selectCard() {
      this.$emit("update:selectedCard", this.title, this.preco);
    },
  },
};
</script>

<style scoped>
.roomOptions__room {
  background-color: #fff;
  border: 1px solid #415a77;
  margin-bottom: 2rem;
  box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.roomOptions__roomImagem {
  padding: 0 0 2rem 0;
  width: 100%;
}

.roomOptions__roomTitle {
  font-size: 1.5rem;
  padding: 0 0 1rem 1rem;
  color: #0c1926;
  font-weight: 600;
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

.btnReserva {
  width: 100%;
  font-weight: 900;
  font-size: 1rem;
  border: none;
  padding: 1.5rem;
  background-color: #0c1926;
  color: #fff;
}

.btnReserva:hover {
  opacity: 0.9;
  cursor: pointer;
}
</style>