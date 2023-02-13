<template>
  <div id="modal">

    <button class="button" @click="showModal = true">
      Continue
    </button>

    <div class="modal-overlay" v-if="showModal" @click="showModal = false"></div>

    <div class="modal" v-if="showModal">
      <h1>Serviços Adquiridos:</h1>
      <div>
        <ul class="resume__l">
          <li class="resume__listItem">
            Data de Entrada: {{ dadosReserva.checkin }}
          </li>
          <li class="resume__listItem">
            Data de Saída: {{ dadosReserva.checkout }}
          </li>
          <li class="resume__listItem">
            Número de Hóspedes: {{ dadosReserva.pessoas }}
          </li>
          <li class="resume__listItem">
            Diárias: {{ dadosReserva.diarias }} dia(s)
            <!-- tirar o s com um dia recado pro grupo 5 do futuro -->
          </li>
          <li class="resume__listItem">
            Quarto: {{ dadosReserva.acomodacao.title }}
          </li>
          <li class="resume__listItem">
            Valor do quarto: R$ {{ dadosReserva.acomodacao.preco }}
          </li>
          <li class="resume__listItem">
            Valor da hospedagem: R$ {{ dadosReserva.valorTotal }}
          </li>
          <li class="resume__listItem">
            <br /> Quarto escolhido: <br />
            <p>
              {{ dadosReserva.acomodacao.title }}
            </p>
            <img :src="dadosReserva.acomodacao.img" title="Quartos Hotel" />

            <p>
              {{ dadosReserva.acomodacao.description }}
            </p>
          </li>
          <li class="resume__listItem">
            <br />
            Valores Adicionais: R$ {{ dadosReserva.totalAdicionais }}
          </li>
          <li class="resume__listItem">
            Valor total: R$ {{ dadosReserva.totalResAd }}
          </li>
        </ul>
      </div>

      <button class="button" @click="showModal = false">
        Continue
      </button>
      <button class="buttonClose" @click="showModal = false">
        Editar
      </button>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import FormReserva from './FormReserva.vue';
import CardRoomComponent from "@/components/CardRoomComponent.vue";

export default {

  name: "ResumeContinueModal",
  el: "quartos.id",
  components: {
    FormReserva,
    CardRoomComponent,
  },
  data() {
    return {
      showModal: false,
    }
  },
  computed: {
    dadosReserva() {
      return store.state.dadosReserva;
    },
  },
  methods: {

  },
};

</script>

<style>
.button {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  width: 100%;
  padding: 15px 25px;
  background: #415a77;
  ;
  border-radius: 8px;

  color: #FFF;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.buttonClose {
  appearance: none;
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  display: inline-block;
  width: 100%;
  padding: 15px 25px;
  background: #ac3636;
  ;
  border-radius: 8px;

  color: #FFF;
  font-size: 18px;
  font-weight: 700;

  box-shadow: 3px 3px rgba(0, 0, 0, 0.4);
  transition: 0.4s ease-out;
}

.button:hover {
  box-shadow: 6px 6px rgba(0, 0, 0, 0.6);
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 400px;
  background-color: #FFF;
  border-radius: 16px;

  padding: 25px;
}

.modal h1 {
  color: #222;
  font-size: 32px;
  font-weight: 900;
  margin-bottom: 15px;
}

.modal div {
  color: #666;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 15px;
}

/**/
.resume__listItem {
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1.5rem;
}
</style>