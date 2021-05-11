<template>
  <div class="layui-header layui-row">
    <span id="title" class="layui-col-xs4 layui-col-sm4 layui-col-xs-offset1 layui-col-sm-offset1">海院表白墙</span>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  @font-face {
    font-family: kuaileti;
    src: url("../../../assets/zkklt.ttf");
  }
 .layui-header{
   background-color: #c2ebe0 ;
   font-size: 20px;
   width: 100%;
   height: 4rem;
   position: fixed;
   font-family: kuaileti;
   line-height: 4rem;
   color: #5b5959;
 }
</style>
