<template>
  <div>
    <button class="resume__addService" @click="showModal = true">Adicionar mais serviços</button>
    <div v-if="showModal" @click="showModal = false">
      <div class="modal-content" @click.stop>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <input type="checkbox" v-model="item.selected"/>
            {{ item.name }} - R$ {{ (item.price).toFixed(2).replace('.', ',') }}
          </li>
        </ul>
        <button @click="showModal = false">Fechar</button>
      </div>
    </div>
    <div v-if="selectedItems.length > 0">
      <h2 class="resume__titleAddServices">
        Serviços adicionais:
      </h2>
      <ul>
        <li v-for="(item, index) in selectedItems" :key="index" class="resume__listItem">
          {{ item.name }}: R$ {{ (item.price).toFixed(2).replace('.', ',') }}
        </li>
        <li class="resume__listItem">
          Total serviços adicionais: R$ {{ totalAditionalServices.toFixed(2).replace('.', ',') }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AditionalServicesModal',
  data() {
    return {
      showModal: false,
      items: [
        { name: 'Café da manhã', price: 35, selected: false },
        { name: 'Cofre', price: 30, selected: false },
        { name: 'Massagem', price: 120, selected: false },
        { name: 'SPA', price: 280, selected: false },
        { name: 'Translado', price: 110, selected: false }
      ]
    }
  },
  computed: {
    selectedItems() {
      return this.items.filter(item => item.selected)
    },
    totalAditionalServices() {
      return this.selectedItems.reduce((acc, item) => acc + item.price, 0)
    
    }
  }
}
</script>

<style>
.modal-content {
  background-color: white;
  color: blue;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.resume__addService {
  /* width: 100%; */
  margin: 2rem 0 0 0;
  padding: 1rem;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #415a77;
  cursor: pointer;
}

.resume__titleAddServices {
  text-align: center;
  margin: 2rem 0;
}

.resume__listItem {
  font-size: .9rem;
  font-weight: 600;
  line-height: 1.5rem;
}
</style>
