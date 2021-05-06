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
import displayModel1 from '../components/pc/displayModel/displayModel1'
import displayModel2 from '../components/pc/displayModel/displayModel2'
import displayModel3 from '../components/pc/displayModel/displayModel3'
import displayModel4 from '../components/pc/displayModel/displayModel4'
import displayModel5 from '../components/pc/displayModel/displayModel5'
import displayModel6 from '../components/pc/displayModel/displayModel6'
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
    },

    {
      path:'/displayModel',
      name:'displayModel',
      component:Index,
      children:[
        {
          path:'displayModel1',
          name:'displayModel1',
          component:displayModel1,
        },
        {
          path:'displayModel2',
          name:'displayModel2',
          component:displayModel2,
        },
        {
          path:'displayModel3',
          name:'displayModel3',
          component:displayModel3,
        },{
          path:'displayModel4',
          name:'displayModel4',
          component:displayModel4,
        },{
          path:'displayModel5',
          name:'displayModel5',
          component:displayModel5,
        },
        {
          path:'displayModel6',
          name:'displayModel6',
          component:displayModel6,
        },
      ]
    }
  ],
  mode: 'history'
})
