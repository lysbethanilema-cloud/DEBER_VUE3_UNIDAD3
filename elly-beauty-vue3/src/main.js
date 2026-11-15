import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { registerSW } from 'virtual:pwa-register'

const app = createApp(App)

app.use(router)

app.mount('#app')
registerSW({
  immediate: true,
  onOfflineReady() {
    console.log('Elly Beauty está lista para funcionar sin conexión')
  },
  onNeedRefresh() {
    console.log('Hay una nueva versión disponible')
  }
})