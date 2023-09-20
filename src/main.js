import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueLazyLoad from 'vue-lazyload'

// Font Awesome Import
import FontAwesome from './assets/FontAwesome/FontAwesome.js'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(VueLazyLoad, {
  preLoad: 1.3,
  attempt: 1
})
app.mount('#app')
app.component('font-awesome-icon', FontAwesome)
