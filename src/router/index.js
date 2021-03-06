import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login.vue'
import Home from '@/views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/login', component: Login, name: 'login'},
    {path: '/', component: Home, name: 'home'}
  ]
})
