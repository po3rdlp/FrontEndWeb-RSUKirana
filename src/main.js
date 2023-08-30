import './assets/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Font Awesome Import
import FontAwesome from './assets/FontAwesome/FontAwesome.js'

const app = createApp(App)
app.use(router)
app.mount('#app')
app.component('font-awesome-icon', FontAwesome)
