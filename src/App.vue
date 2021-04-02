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
export default {
  components: {
    Header,
    Bottom
  },
  name: 'App'
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
