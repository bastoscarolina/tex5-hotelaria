import { createRouter, createWebHistory } from 'vue-router'
import InicioView from '../views/InicioView.vue'

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: InicioView
  },
  {
    path: '/acomodacoes',
    name: 'acomodacoes',
    component: () => import('../views/AcomodacoesView.vue')
  },
  {
    path: '/reservas',
    name: 'reservas',
    component: () => import('../views/ReservasView.vue')
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../views/SobreView.vue')
  },
  {
    path: '/contato',
    name: 'contato',
    component: () => import('../views/ContatoView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
