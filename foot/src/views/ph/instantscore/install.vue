<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      <span>设置</span>
    </header>
    <div class="content">
      <div class="mode">
        <span>是否显示排名</span>
        <van-switch
          v-model="checked"
          active-color="#07c160"
          inactive-color="#e4e4e4"
          size="0.38rem"
        />
      </div>
      <div class="mode">
        <span>是否显示赔率</span>
        <van-switch
          v-model="checked1"
          active-color="#07c160"
          size="0.38rem"
          inactive-color="#e4e4e4"
        />
      </div>
      <div class="mode">
        <span>是否显示角球</span>
        <van-switch
          v-model="checked2"
          active-color="#07c160"
          size="0.38rem"
          inactive-color="#e4e4e4"
        />
      </div>
      <div class="mode">
        <span>是否显示红黄牌</span>
        <van-switch
          v-model="checked3"
          active-color="#07c160"
          size="0.38rem"
          inactive-color="#e4e4e4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: true,
      checked3: true
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/install.scss" scoped>
</style>