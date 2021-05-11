<template>
  <div id="index">
    <div v-if="!isPhone">
      <div id="pcindex">
        <div class="title">
          <router-link to="/wall/realName"><span @click="clickBar(1)" :class="trueName" ref="trueName" id="trueName">实名</span></router-link>
          <router-link to="/wall/anonymous"><span @click="clickBar(2)" :class="anonymous" ref="anonymous" id="anonymous">匿名</span></router-link>
          <router-link to="/wall/confession"><span @click="clickBar(3)" :class="confession" ref="confession" id="confession">表白</span></router-link>
        </div>
        <router-view></router-view>
      </div>
    </div>
    <div v-if="isPhone">
      <ConfessionWall></ConfessionWall>
    </div>
  </div>
</template>

<script>
import Header from './pc/header/Header'
import Bottom from './pc/bottom/Bottom'
import store from '../vuex/store'
import RealName from './pc/index/RealName'
import ConfessionWall from './phone/index/ConfessionWall'
export default {
  name: 'index',
  components: {
    ConfessionWall,
    RealName,
    Header,
    Bottom
  },
  methods: {
    clickBar(index) {
      let trueName = this.$refs.trueName
      let anonymous = this.$refs.anonymous
      let confession = this.$refs.confession
      trueName.className = ''
      anonymous.className = ''
      confession.className = ''
      switch (index) {
        case 1:
          trueName.className = 'selected'
          break
        case 2:
          anonymous.className = 'selected'
          break
        default:
          confession.className = 'selected'
      }
    }
  },
  computed: {
    isPhone: function () {
      return store.state.isPhone
    },
    trueName: function () {
      let paths = this.$route.path.split("/")
      let secondRoute = paths[paths.length - 1]
      if(secondRoute === 'realName' || secondRoute === '') {
        return 'selected'
      }else {
        return 'normal'
      }
    },
    anonymous: function () {
      let paths = this.$route.path.split("/")
      let secondRoute = paths[paths.length - 1]
      if(secondRoute === 'anonymous') {
        return 'selected'
      }else {
        return 'normal'
      }
    },
    confession: function () {
      let paths = this.$route.path.split("/")
      let secondRoute = paths[paths.length - 1]
      if(secondRoute === 'confession') {
        return 'selected'
      }else {
        return 'normal'
      }
    }
  }
}
</script>

<style scoped>
  #index{
    font-family: 微软雅黑;
  }
  #pcindex{
    width: 1000px;
    margin: auto;
  }
  .title{
    width: 35%;
    height: 10%;
    margin: 0.5rem 38%;
    font-size: 16px;
    font-weight: bold;
    color: black;
  }
  .selected{
    color: #f4abbc;
  }
  .title a{
    text-decoration: none;
    color: black;
  }
  .title span{
    width: 100%;
    padding: 0 1.5rem;
  }
  .title span:hover{
    color: #cccccc;
  }
  #title .router-link-active{
    color: #f4abbc;
  }
  .normal {

  }
</style>
