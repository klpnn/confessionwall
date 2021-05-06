<template>
  <div id="index">
    <div v-if="!isPhone">
      <div id="pcindex">
        <div class="title">
          <router-link to="/wall/realName" @click="clickTitleOne"><span class="title1" @click="clickTitleOne" ref="one">实名</span></router-link>
          <router-link to="/wall/anonymous" @click="clickTitleTwo"><span @click="clickTitleTwo" ref="two">匿名</span></router-link>
          <router-link to="/wall/confession" @click="clickTitleThree"><span @click="clickTitleThree" ref="three">表白</span></router-link>
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
    clickTitleOne () {
      this.$refs.one.className = 'title1'
      this.$refs.two.className = 'title2'
      this.$refs.three.className = 'title2'
    },
    clickTitleTwo () {
      this.$refs.two.className = 'title1'
      this.$refs.one.className = 'title2'
      this.$refs.three.className = 'title2'
    },
    clickTitleThree () {
      this.$refs.three.className = 'title1'
      this.$refs.two.className = 'title2'
      this.$refs.one.className = 'title2'
    }
  },
  computed: {
    isPhone: function () {
      return store.state.isPhone
    }
  }
}
</script>

<style scoped>
  #index{
    font-family: 微软雅黑;
    height: auto;
    width: auto;
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
  .title1{
    color: #f4abbc;
  }
  .title2{
    color: black;
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
</style>
