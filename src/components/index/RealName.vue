<template>
  <div>
    <div id="line"></div>
    <div id="sxy">
      <a href="javascript:"> <span id="left">上一页</span></a>
      <a href="javascript:"><span id="right">下一页</span></a>
    </div>
    <div class="display">
      <div class="words">
        <div class="onetr"><p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div class="words">
        <div class="onetr"><p>哈哈哈</p></div>
        <div class="twotr"><p><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></p></div>
      </div>
      <div id="page">
        <label>页码：&emsp;<input type="text" value="1"/></label>&emsp;
        <button id="pagebtn">确定</button>
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
  #line{
    height: 0.2rem;
    background-color: #eeeeee;
  }
  #sxy{
    color: #f4abbc;
    font-size: 14px;
    font-weight: bold;
  }
  #sxy a{
    text-decoration: none;
    color: #f4abbc;
  }
  #left{
    float: left;
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
  #left:hover{
    color: #858585;
  }
  #right{
    float: right;
    margin-right: 1rem;
    margin-top: 0.2rem;
  }
  #right:hover{
    color: #858585;
  }
  .display{
    width: 100%;
    height: 450px;
    margin: 5% auto 130px;
  }
  .words{
    width: 25%;
    height: 30%;
    float: left;
    margin: 2% 4%;
  }
  .onetr{
    width: 100%;
    height: 64%;
    background-color: #66baff;
    display: inline-block;
    padding: 2% 5%;
    font-size: 14px;
  }
  .twotr{
    width: 100%;
    height: 28%;
    background-color: white;
    box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
    text-indent: 1rem;
    font-size: 12px;
    padding: 0.5% 10% 0.5% 0;
  }
  .firstspan{
    float: left;
  }
  .secondspan{
    float: right;
  }
  .pink{
    background-color: #f4abbc;
  }
  .blue{
    background-color: #66baff;
  }
  .gray{
    background-color: #5b5f6a;
  }
  #page{
    width: 11rem;
    height: 2rem;
    color: #66baff;
    font-size: 14px;
    font-weight: bold;
    margin: -1rem auto 1rem;
  }
  #page input{
    width: 3rem;
    height: 1.2rem;
    border: 1px solid #66baff;
    position: absolute;
  }
  #page input:hover{
    border: 1px solid #000000;
  }
  #pagebtn{
    width: 4rem;
    height: 1.5rem;
    background-color: #66baff;
    border: 0;
    border-radius: 3px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    margin-left: 3.5rem;
  }
  #pagebtn:hover{
    border: 1px solid #2c3e50;
  }
</style>
