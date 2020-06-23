<template>
  <div class="container">
    <nav>
      <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>帮助中心</span>
    </nav>

    <div class="helpList">
      <div class="item">
        <van-collapse v-model="activeNames" value-class="collapse">
          <van-collapse-item title="如何绑定邮箱" name="1">如何绑定邮箱</van-collapse-item>
          <van-collapse-item title="标题1" name="2">内容2</van-collapse-item>
          <van-collapse-item title="如何绑定邮箱" name="3">如何绑定邮箱</van-collapse-item>
          <van-collapse-item title="标题1" name="4">内容2</van-collapse-item>
          <van-collapse-item title="如何绑定邮箱" name="5">如何绑定邮箱</van-collapse-item>
          <van-collapse-item title="标题1" name="6">内容2</van-collapse-item>
          <van-collapse-item title="如何绑定邮箱" name="7">
            如果发现播放出现卡顿或者播放不了，先确定下手机网络环
            境，若没有任何问题，请在“我的-系统设置-意见反馈”中，
            输入您观看时情况，我们收到您的反馈，会尽快为您解决。
          </van-collapse-item>
          <van-collapse-item title="标题1" name="8">内容2</van-collapse-item>
        </van-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["7"]
    };
  },
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/help.scss" lang="scss" scoped></style>