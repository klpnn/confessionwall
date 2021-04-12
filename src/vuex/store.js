import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userInfo: {
      phone: '',
      nickName: '',
      avatar: ''
    },
    isLogin: false
  }
})

export default store
