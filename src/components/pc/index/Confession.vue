<template>
  <div id="confession">
    <div class="layui-row">
      <div class="layui-col-xs6">
        <p class="font">爱情树在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel1">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
      <div class="layui-col-xs6">
        <p class="font">浪漫爱心在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel2">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
    </div>
    <div class="layui-row">
      <div class="layui-col-xs6">
        <p class="font">恋爱时光在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel3">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
      <div class="layui-col-xs6">
        <p class="font">紫色浪漫在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel4">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
    </div>
    <div class="layui-row">
      <div class="layui-col-xs6">
        <p class="font">深爱文字在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel5">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
      <div class="layui-col-xs6">
        <p class="font">多页文字在线表白</p>
        <button class="layui-btn" >在线制作</button>
        <button class="layui-btn" ><router-link to="/displayModel/displayModel6">效果演示</router-link></button>
        <button class="layui-btn" >在线分享</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Confession',
  methods:{

  }
}
</script>
<style scoped>
#display{
  width: 100%;
  height: 100%;
}
  #confession{
    height: 600px;
  }
  .font{
    text-align: center;
    font-size: 1.5rem;
    font-family: "微软雅黑", "宋体", sans-serif;
    font-style: italic;
  }
.layui-col-xs6{
  background-color: #caa464;
  padding: 1rem 1rem;
  width: 48%;
  margin: 0.6rem;
  border-radius: 0.5rem;
}
.layui-col-xs6 button{
  margin-top: 10rem;
  margin-left: 2.5rem;
  margin-bottom: 1rem;
}
</style>
