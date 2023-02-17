<template>
    <div>
        <aside class="resume">

            <div class="resume__reserve">

                <h2 class="resume__title">Resumo da reserva</h2>
                <ul class="resume__l">
                    <li class="resume__listItem" >
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
                    <li class="resume__listItem" :value="valorTotal()">
                        Valor da hospedagem: R$ {{ dadosReserva.valorTotal }}
                    </li>
                </ul>

                <AditionalServicesModal @totalAditionalServices="handleTotalAditionalServices" />

                <DiscountCode />
                <ul class="resume__total">

                    <li class="resume__listItem">
                        Total Adicionais: R$ {{ dadosReserva.totalAdicionais }}
                    </li>
                    <li class="resume__listItem" :value="somaTotal()">Valor total:
                        R$ {{ dadosReserva.totalResAd }}
                    </li>
                </ul>

                <ResumeContinueModal />
            </div>
        </aside>
    </div>
</template>

<script>
import store from '@/store';
import AditionalServicesModal from './AditionalServicesModal.vue';
import ResumeContinueModal from './ResumeContinueModal.vue';
import DiscountCode from './DiscountCode.vue';

export default {
    name: "ResumeReservas",
    components: {
        AditionalServicesModal,
        ResumeContinueModal,
        DiscountCode,
    },
    computed: {
        dadosReserva() {
            return store.state.dadosReserva;
        },

    },

    methods: {
        valorTotal() {
            const preco = this.$store.getters.agendarDiaria.acomodacao.preco ?? 0;
            const total = this.$store.getters.agendarDiaria.diarias * preco;
            this.$store.commit('updatePrecoTotal', total);
        },

        handleTotalAditionalServices(totalAditionalServices) {
            this.totalAditionalServices = totalAditionalServices
        },

        somaTotal() {
            const valorTotal = this.$store.getters.agendarDiaria.valorTotal ?? 0;
            const valorAdicional = this.$store.getters.agendarDiaria.totalAdicionais ?? 0;

            const valorTotalServicos = valorTotal + valorAdicional;
            this.$store.commit('updateTotalResAd', valorTotalServicos);
        }
    }
}
</script>

<style>
.resume {
    align-self: start;
    position: sticky;
    background: #0c1926;
    color: #fff;
    top: 200px;
    width: 35vw;
    margin-bottom: 5.1rem;
    margin-left: 5rem;
    border-radius: 5px;
    box-shadow: 2px 2px 7px rgba(0, 0, 0, 0.07);
}

.resume__reserve {
    padding: 2rem;
}

.resume__title {
    text-align: center;
    margin-bottom: 2rem;
}

.resume__listItem {
    font-size: .9rem;
    font-weight: 600;
    line-height: 1.5rem;
}

.resume__addServices {
    display: block;
    color: #fff;
    padding: 2rem 0;
    text-align: right;
}

.resume__continue {
    width: 100%;
    margin: 2rem 0 0 0;
    padding: 1rem;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 900;
    color: #415a77;
    cursor: pointer;
}

.resume__total {
    margin: 2rem 0;
}
</style>