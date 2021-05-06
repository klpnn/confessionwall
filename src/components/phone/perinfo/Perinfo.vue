<template>
  <div class="perinfo">
    <div v-if="isLogin">
      <img src="../../../assets/bg.png" class="touxiang"/>
      <span class="perNane">安妮</span>
      <hr>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Perinfo',
  data () {
    return {
      isLogin: true
    }
  }
}
</script>

<style scoped>
  .perinfo{
    width: 90%;
    height: calc(100% - 7rem);
    top: 3.5rem;
    position: absolute;
    margin: 5% 5%;
  }
  .touxiang{
    width: 3rem;
    height: 3rem;
    border-radius: 1.5rem;
    float: left;
  }
  .perNane{
    font-size: 16px;
    display: inline-block;
    margin: 0.8rem;
  }
  hr{
    margin-top: 1rem;
  }
</style>
