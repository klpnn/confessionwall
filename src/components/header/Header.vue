<template>
  <div id="header">
    <img src="../../assets/logo.png" id="logo" alt=""/>
    <div class="link_bar">
      <router-link to="/"> <span @click="navClicka" ref="a" class="nav" id="link1">墙墙</span></router-link>
      <router-link to="/lostandfound"><span @click="navClickb" ref="b" id="link2">失物招领</span></router-link>
      <div v-if="isLogin === false">
        <router-link to="/login"><span @click="navClickc" ref="c" id="link3">登录</span></router-link>
        <router-link to="/register"><span @click="navClickd" ref="d" id="link4">注册</span></router-link>
      </div>
      <div v-if="isLogin" class="userInfo">
        <img v-bind:src="userInfo.header">
        <span>{{userInfo.nickName}}</span>
      </div>
    </div>
    <img src="../../assets/xin.png" id="heart" alt="">
  </div>
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'Header',
  methods: {
    navClicka () {
      this.$refs.a.className = 'nav'
      this.$refs.b.className = 'notnav'
      this.$refs.c.className = 'notnav'
      this.$refs.d.className = 'notnav'
    },
    navClickb () {
      this.$refs.b.className = 'nav'
      this.$refs.a.className = 'notnav'
      this.$refs.c.className = 'notnav'
      this.$refs.d.className = 'notnav'
    },
    navClickc () {
      this.$refs.c.className = 'nav'
      this.$refs.a.className = 'notnav'
      this.$refs.b.className = 'notnav'
      this.$refs.d.className = 'notnav'
    },
    navClickd () {
      this.$refs.d.className = 'nav'
      this.$refs.a.className = 'notnav'
      this.$refs.b.className = 'notnav'
      this.$refs.c.className = 'notnav'
    }
  },
  computed: {
    userInfo () {
      return store.state.userInfo
    },
    isLogin () {
      return store.state.isLogin
    }
  }
}
</script>

<style scoped>
  @font-face {
    font-family: kuaileti;
    src: url("../../assets/zkklt.ttf");
  }
  #header{
    position: relative;
    width: 1000px;
    /*left: calc(50% - 500px);*/
    height: 200px;
    background-color: #f4abbc;
    margin: 0 auto;
  }
  #logo{
    width: 10rem;
    position: relative;
    top: 0.5rem;
    left: 0.8rem;
    float: left;
  }
  .link_bar{
    position: absolute;
    width: 30%;
    height: 20%;
    top: 10%;
    left: 66%;
  }
  .link_bar span{
    position: absolute;
    font-size: 22px;
    font-family: kuaileti;
    color: #858585;
    width: 25%;
  }
  #link1 {
    left: 0;
  }
  #link2 {
    width: 60%;
    left: 22%;
  }
  #link3 {
    left: 60%;
  }
  #link4 {
    left: 80%;
  }
  .link_bar span:hover{
    font-size: 26px;
  }
  #heart{
    position: absolute;
    left: 44%;
    width: 12%;
    top: 30%;
    transform:rotate(20deg);
  }
  .nav{
    text-shadow: 1px 1px 2px #ffffff,-1px -1px 2px #ffffff,1px -1px 2px #ffffff,-1px 1px 2px #ffffff;
  }
  .notnav{
    text-shadow: 0px 0px 0px #ffffff;
  }
  .router-link-active{
    text-shadow: 1px 1px 2px #ffffff,-1px -1px 2px #ffffff,1px -1px 2px #ffffff,-1px 1px 2px #ffffff;
  }
</style>
