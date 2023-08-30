import './assets/style.css'
import 'leaflet/dist/leaflet.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './config/router'

// Font Awesome Import
import FontAwesome from './assets/FontAwesome/FontAwesome.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('font-awesome-icon', FontAwesome)
