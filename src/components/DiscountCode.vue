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
      return this.discountCode === 'DESCON10' ? this.$parent.totalAditionalServices * 0.1 : 0
    },
    discountApplied() {
      return this.discountAmount > 0
    }
  },
  methods: {
    applyDiscount() {
      let usedDiscountCodes = JSON.parse(localStorage.getItem('usedDiscountCodes')) || []
      if (usedDiscountCodes.includes(this.discountCode)) {
        alert('Este código já foi usado.')
        return this.discountCode = ''
      }
      if (this.discountAmount > 0) {
        usedDiscountCodes.push(this.discountCode)
        localStorage.setItem('usedDiscountCodes', JSON.stringify(usedDiscountCodes))
      }
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