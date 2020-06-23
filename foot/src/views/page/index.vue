<template>
    <div></div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    mounted () {
      if (this._isMobile()) {
        console.log("手机端")
        this.$router.replace('/ph-home');
      } else {
        console.log("pc端")
        this.$router.replace('/pc-home');
      }
    },
    methods: {
      _isMobile() {
        let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
        return flag;
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>
