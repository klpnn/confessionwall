<template>
  <div id="anonymous">
    <div id="line1"></div>
    <div id="sxy1">
      <a href="javascript:"> <span id="left1">上一页</span></a>
      <a href="javascript:"><span id="right1">下一页</span></a>
    </div>
    <div class="display">
    <div class="row">
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
    </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
    </div>
    <div class="row">
      <div class="layui-col-xs4">
        <p>XXX我爱你</p>
      </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
    </div>
    <div class="row">
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
      <div class="layui-col-xs4">
        <p>xxx我爱你</p>
      </div>
    </div>
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
  #page1{
    width: 11rem;
    height: 2rem;
    color: #66baff;
    font-size: 14px;
    font-weight: bold;
    margin: 1rem auto 3rem;
  }
  #page1 input{
    width: 3rem;
    height: 1.2rem;
    border: 1px solid #66baff;
    position: absolute;
  }
  #page1 input:hover{
    border: 1px solid #000000;
  }
  #pagebtn1{
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
  #pagebtn1:hover {
    border: 1px solid #2c3e50;
  }
  .layui-col-xs4{
    border: rgba(67, 59, 65, 0.4) 0.1rem solid;
    margin: 1em 1em;
    border-radius: 0.5rem;
    height: 8rem;
    background-color: #c2e9ff;
    width: 30%;
  }
  .display{
    margin: 1.5rem 0 ;
    height: auto;
    text-align: center;
    position: relative;
  }
  #anonymous{
    height: 33rem;
    width: auto;
  }
</style>
