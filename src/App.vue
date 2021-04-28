<template>
  <div id="app">
    <Header v-if="!isPhone"></Header>
    <PhoneHeader v-if="isPhone"></PhoneHeader>
    <router-view/>
    <Footer v-if="isPhone"></Footer>
    <Bottom v-if="!isPhone"></Bottom>
  </div>
</template>

<script>
import Header from './components/pc/header/Header'
import Bottom from './components/pc/bottom/Bottom'
import store from './vuex/store'
import Footer from './components/phone/footer/Footer'
import PhoneHeader from './components/phone/header/Header'

export default {
  components: {
    Footer,
    Header,
    Bottom,
    PhoneHeader
  },
  name: 'App',
  data () {
    return {
      isPhone: true
    }
  },
  mounted: function () {
    this.isPhone = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    if (this.isPhone == null) {
      this.isPhone = false
    }
    store.state.isPhone = this.isPhone
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
