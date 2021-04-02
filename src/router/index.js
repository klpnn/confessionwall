import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lostandfound from '../components/lostandfound/Lostandfound'
import Login from '../components/login/Login'
import Register from '../components/register/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: Index
    },
    {
      path: '/wall',
      name: 'index',
      component: Index
    },
    {
      path: '/lostandfound',
      name: 'lostandfound',
      component: Lostandfound
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ],
  mode: 'history'
})
