import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Loading from './components/BaseLoading/index'

const app = createApp(App)

app.use(ElementPlus)
app.use(Loading)
const store = createPinia()
app.use(store)

app.config.globalProperties.$bus = '$bus'

app.mount('#app')




