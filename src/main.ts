import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'modern-normalize/modern-normalize.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
