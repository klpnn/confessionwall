<template>
  <div id="app">
    <Header></Header>
    <router-view/>
    <Bottom></Bottom>
  </div>
</template>

<script>
import Header from './components/header/Header'
import Bottom from './components/bottom/Bottom'
import ajax from 'axios'
import store from './vuex/store'

export default {
  components: {
    Header,
    Bottom
  },
  name: 'App',
  created () {
    ajax.get('/user/checkLogin').then(function (res) {
      let resData = res.data
      if (resData === '$success') {
        store.state.userInfo = res.data.userInfo
        store.state.isLogin = true
      } else {
        store.state.isLogin = false
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
