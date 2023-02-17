import { createStore, mapState } from 'vuex';

export default createStore({
  state: {
    quartosHotel: [
      {
        id: 1,
        img: require('@/assets/quartosParaReservar/quarto_1.jpg'),
        title: 'Suíte Executiva',
        description: 'O apartamento possui uma sala com TV, mesa de refeição com 04 lugares sofá e mesa de trabalho. O quarto há uma cama de King Size. Vista mar.',
        preco: 200,
      },
      {
        id: 2,
        img: require('@/assets/quartosParaReservar/quarto_2.jpg'),
        title: 'Suíte Master',
        description: 'O apartamento possui uma decoração moderna e luxuosa, sendo composta por sala com TV e som, mesa de refeição com quatro cadeiras, sofá e mesa de trabalho. O quarto há 01 cama King Size. Vista mar.',
        preco: 250,
      },
      {
        id: 3,
        img: require('@/assets/quartosParaReservar/quarto_3.jpg'),
        title: 'Suíte Presidencial',
        description: 'Possui uma sala com TV e DVD, mesa com 04 lugares e refeições com 10 lugares, conjunto de sofá, bar com bancada, frigobar e lavabo. O quarto há 01 cama super King Size, TV e um sofá para leitura e o banheiro amplo com hidromassagem. Vista mar.',
        preco: 350,
      },
    ],

    servicosAdicionais: [
      {
        id: 1,
        name: 'Café da manhã',
        price: 35
      },
      {
        id: 2,
        name: 'Cofre',
        price: 30
      },
      {
        id: 3,
        name: 'Massagem',
        price: 120
      },
      {
        id: 4,
        name: 'SPA',
        price: 280
      },
      {
        id: 5,
        name: 'Translado',
        price: 110
      },
    ],

    dadosReserva: {
      checkin: '',
      checkout: '',
      pessoas: '',
      diarias: '',
      acomodacao: '',
      valorTotal: '',
      totalAdicionais: '',
      totalResAd: '',
      valorDesconto: '',
    },

  },
  getters: {
    quartosHotel:state => {
      let quartosHotel = state.quartosHotel.map(
        (item) => {
          return {
            id: item.id,
            img: item.img,
            title: item.title,
            description: item.description,
            preco: item.preco,
          }
        }
      )
      return quartosHotel;
    },

    agendarDiaria(state) {
      return state.dadosReserva;
    },

    hoteisQuarto(state){
      return state.quartosHotel;
    },

    servicosAdicionais:state => {
      let servicosAdicionais = state.servicosAdicionais.map(
        (item) => {
          return {
            id: item.id,
            name: item.name,
            price: item.price,
          }
        }
      )
      return servicosAdicionais;
    },

    totalAdicionais(state){
      return state.servicosAdicionais;
    },

  },
  mutations: {
    updateDataCheckin (state, checkin) {
      state.dadosReserva.checkin = checkin;
    },

    updateDataCheckout (state, checkout) {
      state.dadosReserva.checkout = checkout;
    },

    updatePessoas (state, pessoas) {
      state.dadosReserva.pessoas = pessoas;
    },

    updateDiarias (state, diarias) {
      state.dadosReserva.diarias = diarias;
    },

    updateAcomodacao (state, acomodacao) {
      state.dadosReserva.acomodacao = acomodacao;
    },

    updatePreco (state, preco) {
      state.dadosReserva.quartoPreco = preco;
    },

    updatePrecoTotal (state, total) {
      state.dadosReserva.valorTotal = total;
    },

    updateTotalAdicionais (state, totalAdicional) {
      state.dadosReserva.totalAdicionais = totalAdicional;
    },

    updateTotalResAd (state, totalResAd) {
      state.dadosReserva.totalResAd = totalResAd;
    },

    updateValorDesconto (state, addDesconto) {
      state.dadosReserva.valorDesconto = addDesconto;
    },

  },
  actions: {

  },

  modules: {

  },
  methods: {

  }
})
