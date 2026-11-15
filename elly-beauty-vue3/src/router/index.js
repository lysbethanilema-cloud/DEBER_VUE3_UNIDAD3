import { createRouter, createWebHistory } from 'vue-router'

const rutas = [
  {
    path: '/',
    name: 'inicio',
    component: () => import('../views/InicioView.vue')
  },
  {
    path: '/productos',
    name: 'productos',
    component: () => import('../views/ProductosView.vue')
  },
  {
    path: '/acerca-de',
    name: 'acerca-de',
    component: () => import('../views/AcercaView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: rutas
})

export default router