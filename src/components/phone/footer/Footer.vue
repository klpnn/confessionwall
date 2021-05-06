<template>
  <div class="footer">
    <router-link to="/wall"><div @click="clickFooter(1)" class="footclick" ref="wall">
      <i class="iconfont" style="font-size: 1.5rem;" ref="wallIcon">&#xe619;</i><br/>
      表白墙
    </div></router-link>
    <div @click="clickFooter(2)" class="footclick" ref="lost">
      <i class="iconfont" ref="lostIcon" style="font-size: 1.5rem;">&#xe60f;</i><br/>
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
      case '':
      case 'wall':
        this.$refs.wall.classList.add('selected')
        this.$refs.wallIcon.classList.add('selected')
        break
      case 'lost':
        this.$refs.lost.classList.add('selected')
        this.$refs.lostIcon.classList.add('selected')
        break
    }
  },
  methods: {
    changeClass(index) {
      this.$refs.wall.classList.remove('selected')
      this.$refs.wallIcon.classList.remove('selected')
      this.$refs.lost.classList.remove('selected')
      this.$refs.lostIcon.classList.remove('selected')
      switch (index) {
        case 1:
          this.$refs.wall.classList.add('selected')
          this.$refs.wallIcon.classList.add('selected')
          break
        case 2:
          this.$refs.lost.classList.add('selected')
          this.$refs.lostIcon.classList.add('selected')
          break
      }
    },
    clickFooter(index) {
      console.log("ok")
      this.changeClass(index)
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
.selected {
  color: #9dc8bd;
}
</style>
