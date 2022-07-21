import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App)


import piniaPlugin from './store/pinia-plugin'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(piniaPlugin({
    baseKey: 'pinia'
}))
app.use(pinia)


app.mount('#app')
