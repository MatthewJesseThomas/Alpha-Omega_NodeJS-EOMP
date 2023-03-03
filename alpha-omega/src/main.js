/* eslint-disable no-unused-vars */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line no-unused-vars
import style from './assets/styles/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap' 


createApp(App).use(store).use(router).mount('#app')



