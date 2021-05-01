<template>
  <div class="confessionWall">
    <div class="bar">
      <img src="../../../assets/bg.png" class="touxiang">
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
    <div class="bar">
      <img src="../../../assets/bg.png" class="touxiang">
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
    <div class="bar">
      <img src="../../../assets/bg.png" class="touxiang">
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
    <div class="bar">
      <img src="../../../assets/bg.png" class="touxiang">
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
    <div class="bar">
      <img src="../../../assets/bg.png" class="touxiang">
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
    <div class="layui-row page">
      <i class="layui-icon layui-col-xs3" style="font-size: 12px;color: #666666;">&#xe65a;</i>
      <p class="layui-icon layui-col-xs6" style="font-size: 12px;color: #666666;text-align: center">翻到 <input type="text"/> 页</p>
      <i class="layui-icon layui-col-xs3" style="font-size: 12px;color: #666666;text-align: right">&#xe65b;</i><br>
      <button>确定</button>
    </div>
  </div>
</template>

<script>
import Index from '../../Index'
export default {
  name: 'ConfessionWall',
  components: {Index}
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
  margin-top: 1%;
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
  padding: 0 2%;
  font-size: 14px;
}

.bar_b {
  margin: 4% 0;
  text-align: center;
}

.bar_b span {
  font-size: 12px;
}
.page{
  margin: 3%;
}
.page input{
  width: 3rem;
  height: 1rem;
}
.page button{
  width: 3rem;
  height: 1.5rem;
  border-radius: 0.3rem;
  border: 0px;
  background-color: #66baff;
  margin: 3% calc(50% - 1.5rem);
  font-size: 12px;
}
</style>
