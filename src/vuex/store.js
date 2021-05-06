import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    userInfo: {
      phone: '',
      nickName: '',
      header: ''
    },
    isLogin: false,
    isPhone: true,
    isMode1:false,
    isMode2:false,
    isMode3:false,
    isMode4:false,
    isMode5:false,
    isMode6:false,
  }
})

export default store
