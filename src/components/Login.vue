<template>
  <div class="alllogin">
    <div v-if="!isPhone">
      <pcLogin></pcLogin>
    </div>
    <div v-if="isPhone" class="phlogin">
      <mLogin></mLogin>
    </div>
  </div>
</template>

<script>
import pcLogin from '../components/pc/login/Login'
import mLogin from '../components/phone/login/Login'
import store from '../vuex/store'
export default {
  name: 'Login',
  components: {
    pcLogin,
    mLogin
  },
  computed: {
    isPhone: function () {
      return store.state.isPhone
    }
  }
}
</script>

<style scoped>
  .phlogin{
    background-color: #f9f9f9;
    width: 100%;
    height: calc(100% - 8rem);
    position: absolute;
    top: 4rem;
  }
</style>
