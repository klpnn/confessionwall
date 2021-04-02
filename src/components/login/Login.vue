<template>
<div id="login">
  <div id="main">
    <img src="../../assets/lover.png" alt="">
    <div id="card">
      <p>Log in</p>
      <input type="text" placeholder="请输入账号" id="user"/><br>
      <input type="password" placeholder="请输入密码" id="mima"/><br>
      <button id="dlbtn">登录</button>
    </div>
  </div>
</div>
</template>

<script>
import Header2 from '../header/Header2'
import Bottom from '../bottom/Bottom'
export default {
  name: 'Login',
  components: {
    Bottom,
    Header2
  }
}
</script>

<style scoped>
  @font-face {
    font-family: huazi;
    src: url("../../assets/HYZhuZiMaXiTuanW.ttf");
  }
  #main{
    width: 46rem;
    height: 23rem;
    margin: 1rem auto;
    background: url("../../assets/bg.png");
    background-size: 100% 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
    position: relative;
  }
  #main img{
    width: 19rem;
    margin-top: 8.5rem;
    margin-left: 3rem;
    float: left;
  }
  #card{
    width: 22rem;
    height: 22rem;
    position: relative;
    left: 23.5rem;
    top: 0.5rem;
    background-color: rgba(230,230,230,0.58);
  }
  #card p{
    width: 22rem;
    font-size: 40px;
    font-family: huazi;
    text-align: center;
    color: #666666;
    position: relative;
    top: -20rem;
  }
  #user{
    width: 13rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -20rem;
    left: 4.5rem;
  }
  #mima{
    width: 13rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -19rem;
    left: 4.5rem;
  }
  #dlbtn{
    width: 6rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -17rem;
    left: 8rem;
    background-color: #66baff;
    border: 2px solid #858585;
  }
  #dlbtn:hover{
    border: 2px solid #000000;
  }
  #bottom{
    width: 50rem;
    height: 4rem;
    background-color: #c9c9c9;
    font-size: 12px;
    text-align: center;
    line-height: 4rem;
    color: white;
    position: absolute;
    bottom: 0;
  }
</style>
