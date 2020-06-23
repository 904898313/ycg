<template>
  <div id="app">
    <div :class="{'filter-blur': isLogin,'filter-transition' : isLogin}">
      <router-view />
    </div>
    <!--登录注册-->
    <login></login>
  </div>

</template>

<script>
  export default {
    components:{
      Login: ()=>import('./components/Login')
    },
    computed:{
      isLogin(){
        return this.$store.getters.loginStatus
      }
    }
  };
</script>

<style lang="scss" scoped>
  /*登录弹框遮罩层*/
  .filter-blur{
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
  }
  .filter-transition{
    transition: .5s;
    -webkit-transition: .5s;
    -moz-transition: .5s;
    -o-transition: .5s;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
  }
</style>
