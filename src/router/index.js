import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lostandfound from '../components/lostandfound/Lostandfound'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import RealName from '../components/index/RealName'
import Anonymous from '../components/index/Anonymous'
import Confession from '../components/index/Confession'
import Perinfo from '../components/perinfo/Perinfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/',
        name: 'realName',
        component: RealName
      }]
    },
    {
      path: '/wall',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'realName',
          name: 'realName',
          component: RealName
        },
        {
          path: 'anonymous',
          name: 'anonymous',
          component: Anonymous
        },
        {
          path: 'confession',
          name: 'confession',
          component: Confession
        }
      ]
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
    },
    {
      path: '/perinfo',
      name: 'perinfo',
      component: Perinfo
    }
  ],
  mode: 'history'
})
