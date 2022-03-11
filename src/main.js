
import "bootstrap/dist/css/bootstrap.min.css"
import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import {routes} from './router'
import VueChartkick from 'vue-chartkick'
import 'chartkick/chart.js'
import {createRouter,createWebHistory} from 'vue-router'

const app = createApp(App)

const router =  createRouter({
    history:createWebHistory(),
    routes,
})
app.use(store)
app.use(router)
app.use(VueChartkick)
app.use(store)
app.mount('#app')


// createApp(App).mount('#app')

import "bootstrap/dist/js/bootstrap.js"


