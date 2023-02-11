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
img {
  width: 100%;
}
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  color: #999;
  background-color: black;
}
.home h1 {
    font-size: 3.2rem;
    margin-bottom: 15px;
  }
  .home h3 {
    font-size: 2rem;
    margin-bottom: 50px;
  }
  .home .btn {
    background-color: #999;
    border-radius: 4px;
    color: #999;
    padding: 20px 50px;
    text-transform: uppercase;
  }


/* CONHEÇA O HOTEL */

.conheca-o-hotel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
}
.conheca-o-hotel h3 {
    font-size: 2rem;
    margin-bottom: 35px;
    color: #999;
    text-align: center;
  }

  .conheca-o-hotel p {
    max-width: 800px;
    margin-bottom: 35px;
    color: #999;
    text-align: center;
  }
  .conheca-o-hotel hr {
    width: 200px;
    height: 2px;
    background-color: #999;
    margin-bottom: 70px;
    border: none;
  }
  .conheca-o-hotel .grid {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
  .conheca-o-hotel .grid li {
    height: 350px;
    padding: 20px;
    border-radius: 4px;
    background-clip: content-box;
    background-size: cover;
    background-position: center;
  }
  .conheca-o-hotel .grid li.small {
    flex-basis: 40%;
  }
  .conheca-o-hotel .grid li.large {
    flex-basis: 60%;
  }

/* CARACTERISTICAS */
.caracteristicas {
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 50px;
 }
 .caracteristicas h3 {
    font-size: 2rem;
    margin-bottom: 35px;
    color:#999;
    text-align: center;
  }

  .caracteristicas p {
    max-width: 800px;
    margin-bottom: 35px;
    color: #999;
    text-align: center;
  }
  .caracteristicas hr {
    width: 200px;
    height: 2px;
    background-color: #999;
    margin-bottom: 70px;
    border: none;
  }
  .caracteristicas .grid {
    width: 100%;
    display: flex;
  }
  .caracteristicas .grid li {
    padding: 0 30px;
    text-align: center;
  }
  .caracteristicas .grid li i {
    color: black;
    font-size: 50px;
    margin-bottom: 30px;
  }
  .caracteristicas .grid li h4 {
    font-size: 1.5rem;
    color: black;
    margin-bottom: 30px;
  }
  .caracteristicas .grid li p {
    color: #999;
  }


/* CNEWSLETTER */
.newsletter {
  min-height: 65vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 50px;
}
.newsletter h3 {
    font-size: 2rem;
    margin-bottom: 35px;
    color: #999;
    text-align: center;
 }

.newsletter p {
    max-width: 800px;
    margin-bottom: 35px;
    color: #999;
    text-align: center;
  }
.newsletter hr {
    width: 200px;
    height: 2px;
    background-color: black;
    margin-bottom: 70px;
    border: none;
  }
.newsletter form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 80%;
    max-width: 800px;
  }
.newsletter input {
    padding: 15px;
    border: 1px solid black;
    border-radius: 4px;
    margin-right: 15px;
    flex: 1;
  }
.newsletter button {
    padding: 15px;
    background-color: black;
    color: #999;
    text-transform: uppercase;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
</style>
