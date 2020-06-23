<template>
  <div class="container">
    <nav>
      <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>意见反馈</span>
      <span>提交</span>
    </nav>

    <div class="content">
      <van-field
        v-model="message"
        rows="8"
        autosize
        type="textarea"
        placeholder="请输入您的意见或者建议"
        show-word-limit
        maxlength="100"
      />
    </div>

    <div class="uploadImg">
      <div class="upload">
        <van-uploader v-model="fileList" multiple />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "",
      fileList: []
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

<style src="../../../../assets/css/ph/mine/ideaback.scss" lang="scss" scoped></style>
<style lang="scss">
.upload .van-uploader__upload {
  border: dashed 0.03rem #e5e5e5;
}
.upload .van-uploader__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>