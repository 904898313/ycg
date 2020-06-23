<template>
  <div>
    <div class="count">
      <div class="tips">
        <img src="@/assets\images\instantscore\laba.png" alt />
        <p>欢迎来到聊天室，本聊天室提倡文明用语，营造健康的聊天室氛围，严禁发布不良信息。</p>
      </div>
      <div class="list">
        <div class="item" v-for="(item,index) in 12" :key="index">
          <img src="@/assets\images\instantscore\u=4156830825,3265157570&fm=111&gp=0.jpg" alt />
          <div class="text">
            <p>
              <span>千与千寻：</span>利物浦很nice利物浦很nice利物浦很
            </p>
          </div>
        </div>
      </div>

      <div class="shuru">
        <van-field v-model="value" placeholder="吐槽点什么" left-icon="smile-o">
          <template #button>
            <van-button size="small" type="primary">发送</van-button>
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/chatroom.scss" scoped>
</style>
<style lang="scss">
.shuru.van-button--small {
  width: 1.15rem;
  height: 0.64rem;
  background-color: #fcc002;
  border-radius: 0.1rem;
}
.shuru .van-button--primary {
  width: 1.15rem;
  height: 0.64rem;
  background-color: #fcc002;
  border-radius: 0.1rem;
  border: 0;
}

.shuru .van-cell {
  display: flex;
  align-items: center;
}
</style>