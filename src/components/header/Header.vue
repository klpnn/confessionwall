<template>
    <div id="header">
        <span id="spanone">海院表白墙</span>
        <ul>
            <a href="/index"> <li @click="navClicka" ref="a" class="nav">墙墙</li></a>
            <a href="/lostandfound"><li @click="navClickb" ref="b">失物招领</li></a>
            <a href="javascript:"><li @click="navClickc" ref="c">登录</li></a>
            <a href="javascript:"><li @click="navClickd" ref="d">注册</li></a>
        </ul>
        <img src="../../assets/xin.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "Header",
        methods:{
            navClicka(){
                this.$refs.a.className = "nav";
                this.$refs.b.className = "notnav";
                this.$refs.c.className = "notnav";
                this.$refs.d.className = "notnav";
            },
            navClickb(){
              this.$refs.b.className = "nav";
              this.$refs.a.className = "notnav";
              this.$refs.c.className = "notnav";
              this.$refs.d.className = "notnav";
            },
            navClickc(){
              this.$refs.c.className = "nav";
              this.$refs.a.className = "notnav";
              this.$refs.b.className = "notnav";
              this.$refs.d.className = "notnav";
            },
            navClickd(){
              this.$refs.d.className = "nav";
              this.$refs.a.className = "notnav";
              this.$refs.b.className = "notnav";
              this.$refs.c.className = "notnav";
            },
        }
    }
</script>

<style scoped>
    @font-face {
        font-family: kuaileti;
        src: url("../../assets/zkklt.ttf");
    }
    #header{
        width: 50rem;
        height: 10rem;
        background-color: #f4abbc;
        margin: 0 auto;
        position: relative;
    }
    #spanone{
        width: 10rem;
        height: 1rem;
        font-size: 24px;
        font-family: kuaileti;
        color: #f4abbc;
        display: inline-block;
        position: relative;
        top: 0.5rem;
        left: 0.8rem;
        text-shadow: 1px 1px 1px #ffffff,1px -1px 1px #ffffff,-1px 1px 1px #ffffff,-1px -1px 1px #ffffff, 2px 2px 1px #ffffff,2px -2px 1px #ffffff,-2px 2px 1px #ffffff, -2px -2px 1px #ffffff,3px 3px 1px #ffffff,3px -3px 1px #ffffff,-3px 3px 1px #ffffff,-3px -3px 1px #ffffff;
        float: left;
    }
    #header ul{
        list-style: none;
        position: relative;
        top: 0.8rem;
        left: 24rem;
    }
    #header ul li{
        float: left;
        margin: 0 0.5rem;
        font-size: 18px;
        font-family: kuaileti;
        color: #858585;
    }
    #header img{
        width: 6rem;
        transform:rotate(20deg);
        margin: 2rem 22rem;
    }
    .nav{
        text-shadow: 1px 1px 2px #ffffff,-1px -1px 2px #ffffff,1px -1px 2px #ffffff,-1px 1px 2px #ffffff;
    }
    .notnav{
      text-shadow: 0px 0px 0px #ffffff;
    }
</style>
