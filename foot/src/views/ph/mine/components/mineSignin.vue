<template>
  <div class="container">
    <div class="bgimg">
      <nav>
        <img src="../../../..\assets\images\mine\backtrack-i@2x.png" @click="back()" alt />
        <span>每日签到</span>
      </nav>
      <div class="sign">
        <img src="@/assets/images/mine/rili_i@2x.png" alt />
        <span>签到</span>
      </div>
      <div class="signday">已连续签到10天，继续加油!</div>
    </div>

    <div class="content">
      <p>每日签到可领取经验值和球币</p>
      <div class="shownum">
        <div>
          <span>+10</span>
          <i>经验值</i>
        </div>
        <div>
          <span>3</span>
          <i class="qiubi">球币</i>
        </div>
      </div>
    </div>

    <div class="calendar">
      <van-calendar
        :poppable="false"
        :show-confirm="false"
        :show-mark="false"
        :style="{ height: '7rem' }"
        row-height="0.6rem"
        @confirm="onConfirm"
        type="multiple"
        :show-title="false"
        :allow-same-day="true"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: ""
    };
  },
  created() {},
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.text = `选择了 ${date.length} 个日期`;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/signin.scss" lang="scss" scoped></style>

<style lang="scss">
.calendar .van-calendar__day {
  width: 0.6rem;
  height: 0.64rem;
  margin: 0.2rem;
  border-radius: 0.1rem;
}

.calendar .van-calendar__header {
  padding: 0 0.25rem;
}
.calendar .van-calendar__body {
  background-color: #fff;
  padding: 0 0.25rem;
}
</style>