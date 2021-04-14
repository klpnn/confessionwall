<template>
  <div id="header">
    <img src="../../assets/logo.png" id="logo" alt=""/>
    <div class="link_bar">
      <router-link to="/"> <span @click="navClicka" ref="a" id="link1">墙墙</span></router-link>
      <router-link to="/lostandfound"><span @click="navClickb" ref="b" id="link2">失物招领</span></router-link>
      <div v-if="isLogin === false">
        <router-link to="/login"><span @click="navClickc" ref="c" id="link3">登录</span></router-link>
        <router-link to="/register"><span @click="navClickd" ref="d" id="link4">注册</span></router-link>
      </div>
      <div v-if="isLogin" class="userInfo">
        <img v-bind:src="userInfo.header">
        <a href="javascript:"> <span id="link5">{{userInfo.nickName}}</span></a>
        <a href="javascript:"> <div id="zhuxiao">
          <span @click="clickZhuxiao">注销</span>
        </div></a>
      </div>
    </div>
    <img src="../../assets/xin.png" id="heart" alt="">
  </div>
</template>

<script>
import store from '../../vuex/store'

export default {
  name: 'Header',
  data () {
    return {
      zhuxiao: false
    }
  },
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
    },
    onmouseovername () {
      this.zhuxiao = true
    },
    onmouseoutname () {
      this.zhuxiao = false
    },
    clickZhuxiao () {
      this.nextTick(function () {
        this.isLogin = false
        window.location.href = '/login'
        console.log('ok')
      })
    }
  },
  computed: {
    userInfo () {
      return store.state.userInfo
    },
    isLogin () {
      return store.state.isLogin
    }
  },
  mounted () {
    let path = this.$route.path
    path = path.split('/')[1]
    switch (path) {
      case '':
      case 'wall':
        this.$refs.a.className = 'nav'
        break
      case 'lostandfound':
        this.$refs.b.className = 'nav'
        break
      case 'login':
        this.$refs.c.className = 'nav'
        break
      default:
        this.$refs.d.className = 'nav'
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
  .userInfo img{
    width: 15%;
    border-radius: 50%;
    position: absolute;
    left: 60%;
    top: -22%;
  }
  #link5{
    left: 80%;
    font-size: 22px;
    padding-bottom: 20%;
    height: 10%;
    background-color: white;
  }
  #link5:hover #zhuxiao{
    display: block;
  }
  #zhuxiao{
    position: relative;
    font-family: kuaileti;
    color: #858585;
    width: 15%;
    height: 70%;
    padding-top: 5px;
    top: 100%;
    left: 80%;
    border-top: 2px solid #858585;
  }
  #zhuxiao:hover{
    display: block;
  }
  #zhuxiao span{
    width: 100%;
    height: 100%;
    font-size: 18px;
    font-weight: normal;
    text-align: center;
  }
</style>
