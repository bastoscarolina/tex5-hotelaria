<template>
  <div>
    <form>
      <label>
        Código de desconto:
        <input type="text" v-model="discountCode" @input="applyDiscount" class="discount"/>
      </label>
    </form>
    <p v-if="discountApplied">Desconto aplicado: R$ {{ discountAmount.toFixed(2).replace('.', ',') }}</p>
  </div>
</template>

<script>
export default {
  name: 'DiscountCode',
  data() {
    return {
      discountCode: ''
    }
  },
  computed: {
    discountAmount() { 
      return this.discountCode === 'DESCONTO10' ? this.$parent.totalAditionalServices * 0.1 : 0
    },
    discountApplied() {
      return this.discountAmount > 0
    }
  },
  methods: {
    applyDiscount() {

    }
  }
}
</script>

<style scoped>

input[type='text'] {
  padding: 10px 20px;
  margin: 20px 5px;
  border: none;
  outline: none;
}
</style>