<template>
  <div id="anonymous">
    <div id="line1"></div>
    <div id="sxy1">
      <a href="javascript:"> <span id="left1">上一页</span></a>
      <a href="javascript:"><span id="right1">下一页</span></a>
    </div>
    <div id="page1">
      <label>页码：&emsp;<input type="text" value="1"/></label>&emsp;
      <button id="pagebtn1">确定</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Anonymous'
}
</script>

<style scoped>
  #line1{
    height: 0.2rem;
    background-color: #eeeeee;
  }
  #sxy1{
    color: #f4abbc;
    font-size: 14px;
    font-weight: bold;
  }
  #sxy1 a{
    text-decoration: none;
    color: #f4abbc;
  }
  #left1{
    float: left;
    margin-left: 1rem;
    margin-top: 0.2rem;
  }
  #left1:hover{
    color: #858585;
  }
  #right1{
    float: right;
    margin-right: 1rem;
    margin-top: 0.2rem;
  }
  #right1:hover{
    color: #858585;
  }
  .container{
    width: 90%;
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
  #page1{
    width: 11rem;
    height: 2rem;
    color: #66baff;
    font-size: 14px;
    font-weight: bold;
    margin: 0 auto 1rem;
  }
  #page1 input{
    width: 3rem;
    height: 1rem;
    border: 1px solid #66baff;
    position: absolute;
  }
  #page1 input:hover{
    border: 1px solid #000000;
  }
  #pagebtn1{
    width: 2.8rem;
    height: 1.5rem;
    background-color: #66baff;
    border: 0;
    border-radius: 3px;
    font-size: 12px;
    color: #ffffff;
    position: absolute;
    margin-left: 3.5rem;
    margin-top: -0.15rem;
  }
  #pagebtn1:hover{
    border: 1px solid #2c3e50;
  }
</style>
