<template>
  <div class="footer">
    <div>
      <i class="iconfont" style="font-size: 2rem;color: #5b5959">&#xe619;</i><br/>
      表白墙
    </div>
    <div>
      <i class="iconfont" style="font-size: 2rem;color: #5b5959">&#xe60f;</i><br/>
      失物招领
    </div>
    <div>
      <i class="iconfont" style="font-size: 2rem;color: #5b5959">&#xe621;</i><br/>
      许愿墙
    </div>
    <div>
      <i class="iconfont" style="font-size: 2rem;color: #5b5959">&#xe600;</i><br/>
      表白
    </div>
    <div>
      <i class="iconfont" style="font-size: 2rem;color: #5b5959">&#xe65c;</i><br/>
      我的
    </div>

  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  position: absolute;
  top: calc(100% - 4rem);
  width: 100%;
  height: 4rem;
  background-color: #c1cbcc;
}
.footer div {
  position: relative;
  width: 20%;
  text-align: center;
  float: left;
}
</style>
