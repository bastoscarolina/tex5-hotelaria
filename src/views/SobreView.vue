<template>
  <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>
  <section id="reload" class="sobre__nos">
      <h1>Um pouco sobre nosso querido hotel</h1>
      <h3>"Aconchego, conforto, simpatia e alto astral"</h3>
    </section>

    <section class="lugares__hotel">
      <h3 class="lugares__titulo">T.Experience Hotel</h3>

      <p class="lugares__paragrafo">
        Implantado em uma área completamente arborizada, o The Experience Hotel
        é o único hotel pé na areia do Brasil. Aqui o Mar será o seu companheiro
        e você terá as belezas da natureza como guia. The Experience Hotel
        possuí 29 unidades, divididas entre 11 chalés, 16 amplas suítes e 2
        todas com TV a cabo, frigobar, além de varanda com rede e muitos outros
        lazeres. Em nosso hotel você achara ótimos pontos turísticos com uma
        facilidade para sua mobilidade, além de belas praias além de todos as
        ferramentas para seus hobbies favoritos dentro de nosso magnífico hotel
        de várias experiênias fantásticas.
      </p>
      <hr class="lugares__divisor" />

      <h3 class="lugares__titulo">"Cantinhos" do nosso hotel!!</h3>

      <div class="lugares__gridImagens">
        <div id="card1" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/pexels-asman-chema-594077.jpg" alt="" />
        </div>
        <div id="card2" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/pexels-naim-benjelloun-2290753.jpg" alt="" />
        </div>
        <div id="card3" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/pexels-pixabay-161758.jpg" alt="" />
        </div>
        <div id="card4" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/pexels-pixabay-262047.jpg" alt="" />
        </div>
        <div id="card5" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/swimming-pool.jpg" alt="" />
        </div>
        <div id="card6" class="card">
          <h2 class="card__titulo"></h2>
          <img src="../assets/images/sun-loungers-near-palms-and-swimming-pool-in-sunny-day.jpg" alt=""/>
        </div>
      </div>
    </section>

</template>

<script>
import Titlecomponent from "@/components/Titlecomponent.vue";


export default {
  name: "InicioView",
  components: {
    Titlecomponent
  }
}
</script>
<style>
</style>
