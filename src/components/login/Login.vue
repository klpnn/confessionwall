<template>
<div id="login">
  <div id="main">
    <img src="../../assets/lover.png" alt="">
    <div id="card">
      <h1>Log in</h1>
      <input type="text" placeholder="请输入账号" id="user" v-model="phone"/><br>
      <input type="password" placeholder="请输入密码" id="mima" v-model="password"/><br>
      <p class="tip">{{message}}</p>
      <button id="dlbtn" @click="login">登录</button>
    </div>
  </div>
</div>
</template>

<script>
import ajax from 'axios'
import store from '../../vuex/store'
import md5 from 'js-md5'
export default {
  name: 'Login',
  methods: {
    login () {
      let that = this
      let md5Password = md5('密码：' + this.password)
      ajax.post('/user/login?phone=' + that.phone + '&password=' + md5Password).then(function (res) {
        let resData = res.data
        console.log(res)
        if (resData.sign === '$false') {
          that.message = '用户名或密码错误！'
        } else {
          store.state.userInfo = resData.userInfo
          store.state.isLogin = true
          // window.location.href = '/'
        }
      })
    }
  },
  data () {
    return {
      phone: '',
      password: '',
      message: ''
    }
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
    margin: 1rem auto 50px;
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
  #card h1{
    width: 22rem;
    height: 3rem;
    font-size: 40px;
    font-family: huazi;
    text-align: center;
    color: #666666;
    position: relative;
    top: -20rem;
    font-weight: normal;
  }
  #user{
    width: 13rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -13.5rem;
    left: 4.5rem;
  }
  #mima{
    width: 13rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -12.5rem;
    left: 4.5rem;
  }
  #dlbtn{
    width: 6rem;
    height: 2rem;
    margin: 0 auto;
    position: relative;
    top: -10rem;
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
  .tip{
    width: 13rem;
    height: 15px;
    font-family: "Adobe 黑体 Std R";
    color: darkred;
    font-size: 12px;
    position: absolute;
    top: 14rem;
    left: 4.5rem;
    text-align: center;
  }
</style>
