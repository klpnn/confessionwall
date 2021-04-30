<template>
  <div class="realName">
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
  </div>
</template>

<script>
export default {
  name: 'RealName'
}
</script>

<style scoped>
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
