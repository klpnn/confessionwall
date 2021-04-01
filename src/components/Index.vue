<template>
    <div id="index">
        <Header></Header>
        <div class="title">
            <a href="javascript:"><span class="title1" @click="clickTitleone" ref="one">实名</span></a>
            <a href="javascript:"><span @click="clickTitletwo" ref="two">匿名</span></a>
            <a href="javascript:"><span @click="clickTitlethree" ref="three">表白</span></a>
        </div>

        <div id="realname" v-if="shiming">
            <div id="line"></div>
            <div id="sxy">
              <a href="javascript:"> <span id="left">上一页</span></a>
              <a href="javascript:"><span id="right">下一页</span></a>
            </div>
            <div class="container">
              <table>
                <tr class="onetr"><td>哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或哈哈哈哈哈哈哈哈哈或或或或或或或或或哈哈哈哈哈哈或哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
              <table>
                <tr class="onetr"><td>哈哈哈</td></tr>
                <tr class="twotr"><td><span class="firstspan">小红</span> <span class="secondspan">1月1日</span></td></tr>
              </table>
            </div>
            <div id="page">
              <label>页码：&emsp;<input type="text" value="1"/></label>&emsp;
              <button id="pagebtn">确定</button>
            </div>
        </div>

        <div id="anonymous" v-if="niming">
          <div id="line1"></div>
          <div id="sxy1">
            <a href="javascript:"> <span id="left1">上一页</span></a>
            <a href="javascript:"><span id="right1">下一页</span></a>
          </div>
        </div>

        <div id="confession" v-if="biaobai">

        </div>

        <bottom></bottom>
    </div>
</template>

<script>
import Header from './header/Header'
import Bottom from './bottom/Bottom'
export default {
  name: 'index.vue',
  components: {
    Header,
    Bottom
  },
  data () {
    return {
      shiming: true,
      niming: false,
      biaobai: false
    }
  },
  methods: {
    clickTitleone () {
      this.shiming = true
      this.niming = false
      this.biaobai = false
      this.$refs.one.className = 'title1'
      this.$refs.two.className = 'title2'
      this.$refs.three.className = 'title2'
    },
    clickTitletwo () {
      this.niming = true
      this.shiming = false
      this.biaobai = false
      this.$refs.two.className = 'title1'
      this.$refs.one.className = 'title2'
      this.$refs.three.className = 'title2'
    },
    clickTitlethree () {
      this.biaobai = true
      this.niming = false
      this.shiming = false
      this.$refs.three.className = 'title1'
      this.$refs.two.className = 'title2'
      this.$refs.one.className = 'title2'
    }
  }
}
</script>

<style scoped>

    #index{
        font-family: 微软雅黑;
    }
    .title{
        width: 16rem;
        height: 1.3rem;
        margin: 0.5rem auto;
        font-size: 16px;
        font-weight: bold;
        color: black;
    }
    .title1{
      color: #f4abbc;
    }
    .title2{
      color: black;
    }
    .title a{
        text-decoration: none;
        color: black;
    }
    .title span{
        margin: 0 1.5rem;
    }
    .title span:hover{
      color: #cccccc;
    }
    #line,#line1{
      height: 0.2rem;
      background-color: #eeeeee;
    }
    #sxy,#sxy1{
      color: #f4abbc;
      font-size: 14px;
      font-weight: bold;
    }
    #sxy a ,#sxy1 a{
      text-decoration: none;
      color: #f4abbc;
    }
    #left,#left1{
      float: left;
      margin-left: 1rem;
      margin-top: 0.2rem;
    }
    #left:hover,#left1:hover{
      color: #858585;
    }
    #right,#right1{
      float: right;
      margin-right: 1rem;
      margin-top: 0.2rem;
    }
    #right:hover,#right1:hover{
      color: #858585;
    }
    .container{
        width: 50rem;
        height: 28rem;
        margin: 1.5rem auto;
    }
    .container table{
        width: 14.6rem;
        height: 7rem;
        float: left;
        margin: 1rem 1rem;
    }
    .onetr{
        width: 13.4rem;
        height: 5rem;
        background-color: #66baff;
        display: inline-block;
        padding: 0 0.5rem;
        font-size: 14px;
        overflow: auto;
    }
    .twotr{
        height: 2rem;
        background-color: white;
        box-shadow: 1px 1px 3px rgba(0,0,0,0.5);
        text-indent: 1rem;
        font-size: 12px;
    }
    .firstspan{
        float: left;
    }
    .secondspan{
        float: right;
        margin-right: 1rem;
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
        margin: 0 auto 1rem;
    }
    #page input{
        width: 3rem;
        height: 1rem;
        border: 1px solid #66baff;
        position: absolute;
    }
    #page input:hover{
      border: 1px solid #000000;
    }
    #pagebtn{
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
    #page button:hover{
      border: 1px solid #2c3e50;
    }
</style>
