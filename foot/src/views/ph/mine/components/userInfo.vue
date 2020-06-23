<template>
  <div class="container">
    <div class="init" v-if="show">
      <nav>
        <van-row>
          <van-col span="2" offset="1">
            <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
          </van-col>
          <van-col span="5" offset="7" class="title">个人信息</van-col>
        </van-row>
      </nav>
      <div class="userInfo">
        <div class="headImg">
          <span>头像</span>
          <div class="changehead">
            <img
              src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4156830825,3265157570&fm=111&gp=0.jpg"
              alt
            />
            <van-icon name="arrow" class="arrow" />
          </div>
        </div>
        <div class="info">
          <div class="username">
            <span>昵称</span>
            <p>
              桃花村克布拉特
              <van-icon name="arrow" class="arrow" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="eidt" v-else>
      <nav>
        <van-row>
          <van-col span="2" offset="1">
            <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
          </van-col>
          <van-col span="5" offset="7" class="title">昵称</van-col>
        </van-row>
      </nav>
      <div class="ipt">
        <van-field v-model="username" clearable placeholder />
      </div>
      <div class="btns">
        <span>保存</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      show: true,
      username: ""
    };
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
<style lang='scss' src="@/assets/css/ph/mine/userInfo.scss" scoped>
</style>