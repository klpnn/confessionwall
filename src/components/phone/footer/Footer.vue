<template>
  <div class="footer">
    <router-link to="/wall"><div class="footclick" ref="a">
      <i class="iconfont" style="font-size: 1.5rem;">&#xe619;</i><br/>
      表白墙
    </div></router-link>
    <div class="footclick" ref="b">
      <i class="iconfont" style="font-size: 1.5rem;">&#xe60f;</i><br/>
      失物招领
    </div>
    <div class="footclick" ref="c">
      <i class="iconfont" style="font-size: 1.5rem;">&#xe621;</i><br/>
      许愿墙
    </div>
    <div class="footclick" ref="d">
      <i class="iconfont" style="font-size: 1.5rem;">&#xe600;</i><br/>
      表白
    </div>
    <div class="footclick" ref="e">
      <i class="iconfont" style="font-size: 1.5rem;">&#xe65c;</i><br/>
      我的
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer',
  mounted () {
    let path = this.$route.path
    path = path.split('/')[1]
    switch (path) {
      case (''):
      case ('wall'):
        this.$refs.a.style.color = '#9dc8bd'
        this.$refs.b.style.color = '#5b5959'
        this.$refs.c.style.color = '#5b5959'
        this.$refs.d.style.color = '#5b5959'
        this.$refs.e.style.color = '#5b5959'
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  top: calc(100% - 3.5rem);
  width: 100%;
  height: 3.5rem;
  background-color: #ffffff;
  border-top: 1px solid #cccccc;
  box-shadow: 0 0 5px #cccccc;
}
.footer div {
  position: relative;
  width: 20%;
  text-align: center;
  float: left;
}
.iconfont{
  color: #5b5959;
}
</style>
