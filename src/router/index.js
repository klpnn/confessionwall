import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Lostandfound from '../components/pc/lostandfound/Lostandfound'
import Login from '../components/pc/login/Login'
import Register from '../components/pc/register/Register'
import RealName from '../components/pc/index/RealName'
import Anonymous from '../components/pc/index/Anonymous'
import Confession from '../components/pc/index/Confession'
import Perinfo from '../components/pc/perinfo/Perinfo'
import PhoneRealName from '../components/phone/index/RealName'
import PhoneAnonymous from '../components/phone/index/Anonymous'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'realName',
          component: RealName
        },
        {
          path: '/',
          name: 'realName',
          component: PhoneRealName
        }
      ]
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
        },
        {
          path: 'phrealName',
          name: 'phrealName',
          component: PhoneRealName
        },
        {
          path: 'phanonymous',
          name: 'phanonymous',
          component: PhoneAnonymous
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
