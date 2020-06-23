<template>
  <div class="container">
    <nav>
      <img src="@/assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>系统消息</span>
      <span></span>
    </nav>
    <div class="list">
      <div class="info">
        <div class="left">
          <div class="icon">
            <img src="@/assets/images/mine/icon_message@2x.png" alt />
            <div class="number">
              <i>1</i>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="title">
            系统通知
            <i>19:20</i>
          </p>
          <p class="text">暂无任何消息</p>
        </div>
      </div>

      <div class="info">
        <div class="left">
          <div class="icon">
            <img src="@/assets/images/mine/icon_message-VIP@2x.png" alt />
            <div class="number">
              <i>3</i>
            </div>
          </div>
        </div>
        <div class="right">
          <p class="title">
            系统通知
            <i>昨天</i>
          </p>
          <p class="text">VIP包月大降价，办理30天VIP会员，将赠送15...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="../../../../assets/css/ph/mine/messgaes.scss" scoped></style>
