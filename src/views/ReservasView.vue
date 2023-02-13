<template>
  <HeroComponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </HeroComponent>
  <FormReserva />

    <div class="box">
      <CardRoomComponent />
      <ResumeReservas />
    </div>
</template>

<script>
import HeroComponent from '@/components/HeroComponent.vue';
import CardRoomComponent from '@/components/CardRoomComponent.vue';
import FormReserva from '@/components/FormReserva.vue';
import ResumeReservas from '@/components/ResumeReservas.vue'; 

export default {
  name: "ReservasView.vue",
  components: {
    HeroComponent,
    CardRoomComponent,
    FormReserva,
    ResumeReservas
  },
  
}
</script>

<style>
  .box {
    display: flex;
  }
</style>