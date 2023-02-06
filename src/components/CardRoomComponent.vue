<template>
  <article class="roomOptions__room">
    <img :src="image" class="roomOptions__roomImagem"/>
      <h3 class="roomOptions__roomTitle">{{ bedroom }}</h3>
      <p class="roomOptions__roomDescription">{{ description }}</p>
      <label :for="bedroom" class="roomOptions__roomPrice">{{ `R$ ${price}` }}</label>
      <div class="roomOptions__selectRoom">
        <input class="form-check-input" type="radio" :name="card" :id="bedroom" :value="card" v-model="selectedCard" @change="updateSelectedCard"/>
        <label class="form-check-label">{{ bedroom }}</label>
      </div>
  </article>
</template>

<script>
export default {
  props: ['bedroom', 'image', 'description', 'price'],
  data() {
    return {
      card: {
        bedroom: this.bedroom,
        price: parseFloat(this.price)
      }
    }
  },
  methods: {
    updateSelectedCard() {
      this.$emit('update:selectedCard', this.card)
    }
  }
}
</script>

<style>
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

.roomOptions__selectRoom label {
  padding-left: 0.5rem;
}
</style>