<template>
   <Titlecomponent>
    <h3>{{ titleReservas }}</h3>
    <h1>{{ subtitleReservas }}</h1>
  </Titlecomponent>

  <main>
      <!--Artigo01-->

      <section class="art_01">
        <h2 class="title_art01">Sobre o nosso Hotel</h2>
        <div class="sub01">
          <img src="../assets/images/banner1.jpeg" alt="Banner" />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            dolore odit, alias ipsum debitis, iste reprehenderit vero, et maxime
            voluptate hic deleniti quos neque dolorum qui dolores. Saepe
            consequuntur corporis et natus, sed explicabo accusamus sunt
            molestiae possimus veniam repellat, rerum illum nemo maxime
            laudantium magni voluptatum tempore ducimus accusantium? Soluta,
            magni perspiciatis qui aliquam quod a sequi nam. Fuga porro quae
            dolorum dignissimos, voluptates cum. Necessitatibus ab pariatur,
            obcaecati officiis vero quo iste harum possimus porro, vel ad eius.
          </p>
        </div>
      </section>

      <!--Artigo2-->

      <h2 class="title_acomodacao">Nossas Acomodações</h2>
      <section class="container">
        <article>
          <figure>
            <img src="../assets/images/quartos.jpg" alt="Quartos" />
          </figure>
        </article>
        <article>
          <figure>
            <img src="../assets/images/quartos.jpg" alt="Quartos" />
          </figure>
        </article>

        <article>
          <figure>
            <img src="../assets/images/quarto_2.jpg" alt="Quartos" />
          </figure>
        </article>
      </section>
      <div class="button">
        <button class="submit">
          <a href="/public/acomodacoes.html"
            >Conheça mais sobre nossos serviços</a
          >
        </button>
      </div>

      <!--Artigo03-->

      <section class="art_02">
        <h2 class="title_art02">Gastronomia</h2>
        <div class="sub02">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            dolore odit, alias ipsum debitis, iste reprehenderit vero, et maxime
            voluptate hic deleniti quos neque dolorum qui dolores. Saepe
            consequuntur corporis et natus, sed explicabo accusamus sunt
            molestiae possimus veniam repellat, rerum illum nemo maxime
            laudantium magni voluptatum tempore ducimus accusantium?
            Necessitatibus ab pariatur, obcaecati officiis vero quo iste harum
            possimus porro, vel ad eius.
          </p>
          <img src="../assets/images/salmon-1312372.jpg" alt="prato_salmão" />
        </div>
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
