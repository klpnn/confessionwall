<template>
  <div class="footer">
    <div>
      <i class="iconfont" style="font-size: 1.5rem;color: #5b5959">&#xe619;</i><br/>
      表白墙
    </div>
    <div>
      <i class="iconfont" style="font-size: 1.5rem;color: #5b5959">&#xe60f;</i><br/>
      失物招领
    </div>
    <div>
      <i class="iconfont" style="font-size: 1.5rem;color: #5b5959">&#xe621;</i><br/>
      许愿墙
    </div>
    <div>
      <i class="iconfont" style="font-size: 1.5rem;color: #5b5959">&#xe600;</i><br/>
      表白
    </div>
    <div>
      <i class="iconfont" style="font-size: 1.5rem;color: #5b5959">&#xe65c;</i><br/>
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
  top: calc(100% - 3.5rem);
  width: 100%;
  height: 3.5rem;
  /*background-color: #c1cbcc;*/
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
</style>
