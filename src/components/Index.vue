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
      <div id="phindex">
        <div class="realName">
          <div class="bar">
            <img src="../assets/bg.png" class="touxiang">
            <div class="bar_r">
              <p class="name">Toni</p>
              <p class="date">1天前</p>
            </div>
            <div class="content">
              <p>今天看到一个女孩子，好可爱 ，好喜欢嘻嘻嘻</p>
            </div>
            <div class="bar_b layui-row">
              <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe756;<span>12</span></i>
              <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe68c;<span>3</span></i>
              <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe611;<span>5</span></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './pc/header/Header'
import Bottom from './pc/bottom/Bottom'
import store from '../vuex/store'
export default {
  name: 'index',
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
  #phindex{
    width: 100%;
    height: calc(100% - 7rem);
    position: absolute;
    top: 3.5rem;
    background-color: #f9f9f9;
  }
  #title1{
    font-size: 14px;
    text-align: center;
    height: 2rem;
    line-height: 2rem;
  }
  .realName{
    background-color: #f9f9f9;
  }
  .bar{
    height: 10rem;
    padding: 0.5rem;
    background-color: #ffffff;
  }
  .touxiang{
    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    margin: 2%;
    float: left;
    position: relative;
  }
  .bar_r{
    padding: 0.5rem;
  }
  .name{
    font-size: 12px;
  }
  .date{
    font-size: 10px;
    color: #666666;
  }
  .content{
    margin: 0 2%;
    padding: 0 2%;
    font-size: 14px;
  }
  .bar_b{
    margin: 4% 0;
    text-align: center;
  }
  .bar_b span{
    font-size: 12px;
  }
</style>
