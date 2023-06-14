import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Sidenav from './components/includes/Sidenav.vue'

createApp(App).use(store).use(router).component('Sidenav', Sidenav).mount('#app')
