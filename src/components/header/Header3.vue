<template>
  <div id="header3">
    <img src="../../assets/logo.png" id="logo" alt=""/>
    <ul>
      <a href="/wall"> <li @click="navClicka" ref="a">墙墙</li></a>
      <a href="/lostandfound"><li @click="navClickb" ref="b" class="nav">失物招领</li></a>
      <a href="/login"><li @click="navClickc" ref="c">登录</li></a>
      <a href="javascript:"><li @click="navClickd" ref="d">注册</li></a>
    </ul>
    <img src="../../assets/xin.png" id="heart" alt="">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Header3',
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
  }
}
</script>

<style scoped>
  @font-face {
    font-family: kuaileti;
    src: url("../../assets/zkklt.ttf");
  }
  #header3{
    width: 50rem;
    height: 10rem;
    background-color: #f4abbc;
    margin: 0 auto;
    position: relative;
  }
  #logo{
    width: 8rem;
    position: relative;
    top: 0.5rem;
    left: 0.8rem;
    float: left;
  }
  #header3 ul{
    list-style: none;
    position: relative;
    top: 0.8rem;
    left: 25rem;
  }
  #header3 ul li{
    float: left;
    margin: 0 0.5rem;
    font-size: 18px;
    font-family: kuaileti;
    color: #858585;
  }
  #header3 ul li:hover{
    font-size: 22px;
  }
  #heart{
    width: 6rem;
    transform:rotate(20deg);
    margin: 1.5rem 22rem;
  }
  .nav{
    text-shadow: 1px 1px 2px #ffffff,-1px -1px 2px #ffffff,1px -1px 2px #ffffff,-1px 1px 2px #ffffff;
  }
  .notnav{
    text-shadow: 0px 0px 0px #ffffff;
  }
</style>
