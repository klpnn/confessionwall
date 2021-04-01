<template>
    <div id="landf">
      <Header1></Header1>
      <Bottom></Bottom>
    </div>
</template>

<script>
import Header1 from '../header/Header1'
import Bottom from '../bottom/Bottom'
export default {
  name: 'Lostandfound',
  components: {
    Header1,
    Bottom
  }
}
</script>

<style scoped>
  #header ul:first-child{
    text-shadow: 0px 0px 0px #ffffff;
  }
  #header ul:nth-child(2){
    text-shadow: 1px 1px 2px #ffffff,-1px -1px 2px #ffffff,1px -1px 2px #ffffff,-1px 1px 2px #ffffff;
  }
</style>
