<template>
  <div class="confessionWall">
    <div class="bar layui-border" v-for="confession in confessions">
      <img src="../../../assets/bg.png" class="touxiang">
      <div class="bar_r">
        <p class="name">{{confession.name}}</p>
        <p class="date">{{confession.time}}前</p>
      </div>
      <div class="content">
        <span>{{confession.content}}</span>
      </div>
      <div class="bar_b layui-row">
        <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe756;<span>{{confession.hot}}</span></i>
        <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe68c;<span>{{confession.support}}</span></i>
        <i class="layui-icon layui-col-xs4" style="font-size: 18px;color: #f98329;">&#xe611;<span>{{confession.comment}}</span></i>
      </div>
    </div>
  </div>
</template>

<script>
import ajax from 'axios'

export default {
  name: 'RealName',
  data() {
    return {
      confessions: []
    }
  },
  created () {
    let that = this
    ajax.get('/getConfessions').then(function (res) {
      that.confessions = res.data
    })
  }
}
</script>

<style scoped>
.confessionWall {
  position: absolute;
  top: 3.5rem;
  background-color: #f9f9f9;
  overflow-y: scroll;
  width: 100%;
  height: calc(100% - 7rem);
}

.bar {
  padding: 0.5rem;
  left: 0;
  background-color: #ffffff;
}

.touxiang {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  margin: 2%;
  float: left;
  position: relative;
}

.bar_r {
  padding: 0.5rem;
}

.name {
  font-size: 12px;
}

.date {
  font-size: 10px;
  color: #666666;
}

.content {
  margin: 0 2%;
  padding: 0 10%;
  font-size: 14px;
}

.content span {
  width: 80%;
}

.bar_b {
  margin: 4% 0;
  text-align: center;
}

.bar_b span {
  font-size: 12px;
}
</style>
