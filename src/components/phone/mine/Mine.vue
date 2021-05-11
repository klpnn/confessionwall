<template>
  <div class="mine">
    <div id="denglu" v-if="isLogin">
      <button class="layui-btn layui-btn-radius layui-btn-warm">登&nbsp;录</button>
    </div>
    <div id="user" v-if="!isLogin">
      <img src="../../../assets/bg.png" id="userPic"><br>
      <span id="userName">虾米</span>
    </div>
    <div id="pieces">
      <ul>
        <li class="conLine">
          &emsp;<i class="layui-icon" style="font-size: 18px;color: #66baff;">&#xe60e;</i>
          &nbsp; 浏览历史
          <i class="layui-icon" style="font-size: 18px;color: #888888;float: right;margin-right: 3%;">&#xe602;</i>
        </li>
        <li class="conLine">
          &emsp;<i class="layui-icon" style="font-size: 18px;color: #FFB800;">&#xe611;</i>
          &nbsp; 所有留言
          <i class="layui-icon" style="font-size: 18px;color: #888888;float: right;margin-right: 3%;">&#xe602;</i>
        </li>
        <li>
          &emsp;<i class="layui-icon" style="font-size: 18px;color: #00FF00;">&#xe606;</i>
          &nbsp; 联系客服
          <i class="layui-icon" style="font-size: 18px;color: #888888;float: right;margin-right: 3%;">&#xe602;</i>
        </li>
      </ul>
    </div>
    <p id="hi">Hi!</p>
  </div>
</template>

<script>
export default {
  name: "Mine",
  data () {
    return {
      isLogin: false
    }
  }
}
</script>

<style scoped>
  .mine{
    position: absolute;
    top: 4rem;
    background-color: #f9f9f9;
    overflow-y: auto;
    width: 100%;
    height: calc(100% - 8rem);
  }
  #denglu{
    width: 84%;
    height: 6rem;
    box-shadow: 0px 0px 4px #cccccc;
    border-radius: 2%;
    margin: 8%;
    background-color: #FFFFFF;
    text-align: center;
    line-height: 6rem;
  }
  #user{
    width: 84%;
    height: 10rem;
    box-shadow: 0px 0px 4px #cccccc;
    border-radius: 2%;
    margin: 8%;
    background-color: #FFFFFF;
    text-align: center;
  }
  #userPic{
    width: 4rem;
    height: 4rem;
    border-radius: 2rem;
    margin-top: 1.5rem;
  }
  #userName{
    font-size: 15px;
    position: relative;
    top: 1rem;
    color: #5b5959;
  }
  #pieces{
    width: 86%;
    border-radius: 3%;
    margin: 0 7%;
    background-color: #FFFFFF;
    color: #888888;
    box-shadow: 0px 0px 10px #e8e8e8;
  }
  #pieces ul li{
    height: 3rem;
    line-height: 3rem;
    font-size: 18px;
  }
  .conLine{
    border-bottom: 1px solid #e8e8e8;
  }
  #hi{
    width: 100%;
    text-align: center;
    position: relative;
    top: 1rem;
    color: #888888;
    font-size: 18px;
  }
</style>
