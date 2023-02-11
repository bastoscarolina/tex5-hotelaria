<template>
  <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>

  <main class="principal">
      <h2 class="text_acomodacao">Nossas Acomodações</h2>

      <section class="container">
        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_1.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>
        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_9.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_2.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_3.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_4.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_5.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_6.jpg"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_7.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>

        <article>
          <figure>
            <img
              src="../assets/images/quartos/quarto_8.png"
              width="350"
              alt="Lorem ipsum"
            />
          </figure>
        </article>
      </section>

      <section>
        <article class="produto_destaque">
          <div class="texto">
            <h2>Produto em Destaque</h2>
            <p>
              Aconchegante apartamento Superior Suíte Double de aproximadamente 35m²
              com vista para o mar. Quarto com varanda,
              cama de casal, Queen ou King Size, ar-condicionado, WI-FI, TV LED 50”, piscina privada, 
              telefones, minibar, amenities, secador de cabelo, mesa de trabalho, cofre,
              roupão, chinelo e muito mais.
            </p>
          </div>

          <div class="imagem">
            <figure>
              <img
                src="../assets/images/casal.jpg"
                alt="Lorem ipsum"
                class="quarto_destaque"
              />
              <figcaption>Superior Suíte Double</figcaption>
            </figure>
          </div>
        </article>
      </section>
    </main>
    
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