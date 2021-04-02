<template>
  <div id="index">
    <div class="title">
      <a href="/wall/realname"><span class="title1" @click="clickTitleone" ref="one">实名</span></a>
      <a href="/wall/anonymous"><span @click="clickTitletwo" ref="two">匿名</span></a>
      <a href="/wall/confession"><span @click="clickTitlethree" ref="three">表白</span></a>
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
</style>
