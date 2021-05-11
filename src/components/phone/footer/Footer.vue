<template>
  <div class="footer">
    <router-link to="/wall"><div @click="clickFooter(1)" class="footclick" ref="wall">
      <i class="iconfont" style="font-size: 2rem;" ref="wallIcon">&#xe619;</i><br/>
      表白墙
    </div></router-link>
    <div @click="clickFooter(2)" class="footclick" ref="lost">
      <i class="iconfont" ref="lostIcon" style="font-size: 2rem;">&#xe60f;</i><br/>
      失物招领
    </div>
    <div class="footclick" ref="c">
      <i class="iconfont" style="font-size: 2rem;">&#xe621;</i><br/>
      许愿墙
    </div>
    <div class="footclick" ref="d">
      <i class="iconfont" style="font-size: 2rem;">&#xe600;</i><br/>
      表白
    </div>
    <router-link to="/mine"><div @click="clickFooter(5)" class="footclick" ref="mine">
      <i class="iconfont" style="font-size: 2rem;" ref="mineIcon">&#xe65c;</i><br/>
      我的
    </div></router-link>

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
      case 'mine':
        this.$refs.mine.classList.add('selected')
        this.$refs.mineIcon.classList.add('selected')
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
        case 5:
          this.$refs.mine.classList.add('selected')
          this.$refs.mineIcon.classList.add('selected')
          break
      }
    },
    clickFooter(index) {
      this.changeClass(index)
    }
  }
}
</script>

<style scoped>
.footer {
  position: absolute;
  top: calc(100% - 4rem);
  width: 100%;
  height: 4rem;
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
