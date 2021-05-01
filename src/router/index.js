import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Lostandfound from '../components/pc/lostandfound/Lostandfound'
import mLostandfound from '../components/phone/lostandfound/Lostandfound'
import Login from '../components/pc/login/Login'
import Register from '../components/pc/register/Register'
import RealName from '../components/pc/index/RealName'
import Anonymous from '../components/pc/index/Anonymous'
import Confession from '../components/pc/index/Confession'
import Perinfo from '../components/pc/perinfo/Perinfo'
import mPerinfo from '../components/phone/perinfo/Perinfo'

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
        }
      ]
    },
    {
      path: '/lostandfound',
      name: 'lostandfound',
      component: Lostandfound
    },
    {
      path: '/mlostandfound',
      name: 'mlostandfound',
      component: mLostandfound
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
    },
    {
      path: '/mperinfo',
      name: 'mperinfo',
      component: mPerinfo
    }
  ],
  mode: 'history'
})
