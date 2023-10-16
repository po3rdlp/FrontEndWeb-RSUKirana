import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'
import Vue3Autocounter from 'vue3-autocounter'
import VueLazyload from 'vue-lazyload'

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(VueCookies)
app.use(VueLazyload)
app.mount('#app')
app.component('vue3-autocounter', Vue3Autocounter)
