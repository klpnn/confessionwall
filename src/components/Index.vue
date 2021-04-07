<template>
  <div id="index">
    <div class="title">
      <router-link to="/wall/realname"><span class="title1" @click="clickTitleOne" ref="one">实名</span></router-link>
      <router-link to="/wall/anonymous"><span @click="clickTitleTwo" ref="two">匿名</span></router-link>
      <router-link to="/wall/confession"><span @click="clickTitleThree" ref="three">表白</span></router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './header/Header'
import Bottom from './bottom/Bottom'
export default {
  name: 'index.vue',
  components: {
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
  }
}
</script>

<style scoped>
  #index{
    font-family: 微软雅黑;
    width: 1000px;
    margin: auto;
  }
  .title{
    width: 16rem;
    height: 1.3rem;
    margin: 0.5rem auto;
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
    margin: 0 1.5rem;
  }
  .title span:hover{
    color: #cccccc;
  }
  .router-link-active{
    color: #f4abbc;
  }
</style>
