<template>
  <div class="login">
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <label>账&nbsp;号：&nbsp;<input type="text" placeholder="请输入手机号码"></label><br>
    <label>密&nbsp;码：&nbsp;<input type="password" placeholder="请输入密码"></label><br>
    <button class="layui-btn layui-btn-radius layui-btn-normal">登&nbsp;录</button>&emsp;
    <button class="layui-btn layui-btn-radius">注&nbsp;册</button>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
  .login{
    width: 88%;
    height: 25rem;
    background-color: #FFFFFF;
    border-radius: 2%;
    box-shadow: 0px 0px 5px #e8e8e8;
    margin: 1rem 6%;
    overflow-y: scroll;
    font-size: 18px;
    text-align: center;
  }
  .login input{
    width: 10rem;
    height: 2rem;
    margin: 1rem 0;
  }
  .login button{
    margin: 1rem 0;
  }
</style>
