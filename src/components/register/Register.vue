<template>
<div id="register">
  <Header3></Header3>
  <div id="main1">
    <img src="../../assets/lover.png" alt="">
    <div id="card1">
      <p>Register</p>
      <input type="text" placeholder="请输入账号" id="user1"/><br>
      <input type="password" placeholder="请输入密码" id="mima1"/><br>
      <input type="password" placeholder="确认密码" id="qrmima"/><br>
      <button id="zcbtn">注册</button>
    </div>
  </div>
  <Bottom></Bottom>
</div>
</template>

<script>
import Header3 from '../header/Header3'
import Bottom from '../bottom/Bottom'
export default {
  name: 'Register',
  components: {
    Bottom,
    Header3
  }
}
</script>

<style scoped>
  @font-face {
    font-family: huazi;
    src: url("../../assets/HYZhuZiMaXiTuanW.ttf");
  }
  #main1{
    width: 46rem;
    height: 23rem;
    margin: 1rem auto;
    background: url("../../assets/bg.png");
    background-size: 100% 100%;
    border-radius: 5px;
    box-shadow: 0px 0px 8px rgba(0,0,0,0.3);
    position: relative;
  }
  #main1 img{
    width: 19rem;
    margin-top: 8.5rem;
    margin-left: 3rem;
    float: left;
  }
  #card1{
    width: 22rem;
    height: 22rem;
    position: relative;
    left: 23.5rem;
    top: 0.5rem;
    background-color: rgba(230,230,230,0.58);
  }
  #card1 p{
    width: 22rem;
    font-size: 40px;
    font-family: huazi;
    text-align: center;
    color: #666666;
    position: relative;
    top: -20rem;
  }
  #user1{
    width: 13rem;
    height: 1.5rem;
    margin: 0 auto;
    position: relative;
    top: -21rem;
    left: 4.5rem;
  }
  #mima1{
    width: 13rem;
    height: 1.5rem;
    margin: 0 auto;
    position: relative;
    top: -20rem;
    left: 4.5rem;
  }
  #qrmima{
    width: 13rem;
    height: 1.5rem;
    margin: 0 auto;
    position: relative;
    top: -19rem;
    left: 4.5rem;
  }
  #zcbtn{
    width: 6rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -17rem;
    left: 8rem;
    background-color: #66baff;
    border: 2px solid #858585;
  }
  #zcbtn:hover{
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
