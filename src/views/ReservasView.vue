<template>
  <HeroComponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </HeroComponent>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';

export default {
  name: 'ReservasView',
  components: {
    HeroComponent
  },
  data() {
    return {
      title: 'As férias dos seus sonhos está aqui...',
      subtitle: '\"Facilidade e segurança que você precisa\"'
    }
  }
}
</script>

<style>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>