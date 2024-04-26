import './assets/main.css'
import { currentClient } from './client-websocket/client-websocket'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

currentClient.init()
