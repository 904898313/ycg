<template>
  <div>
    <div class="sec">
      <div class="sec-btn">
        <span :class="currid==0?'active':''" @click="changecurrId(0)">让球</span>
        <span :class="currid==1?'active':''" @click="changecurrId(1)">大小</span>
        <span :class="currid==2?'active':''" @click="changecurrId(2)">必发</span>
      </div>
      <div class="exp" v-if="currid==0 || currid==1">
        <div class="left">
          <p>
            升盘
            <i>4</i>
          </p>
          <p>
            降盘
            <i>0</i>
          </p>
        </div>
        <div class="left">
          <p>
            高水
            <i>2</i>
          </p>
          <p>
            低水
            <i>6</i>
          </p>
        </div>
      </div>
    </div>
    <ballsize v-if="currid==0 || currid==1"></ballsize>
    <inevitable v-if="currid==2"></inevitable>
  </div>
</template>

<script>
export default {
  components: {
    ballsize: () => import("./ballsize"),
    inevitable: () => import("./inevitable")
  },
  data() {
    return {
      currid: 0,
      value1: 0,
      option1: [
        { text: "全部公司", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurrId(index) {
      this.currid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/exponent.scss" scoped>
</style>
<style lang="scss">
.exp-tables .title .van-dropdown-menu__bar {
  background: #edeef3;
  height: 0.56rem;
}
.exp-tables .title .van-dropdown-menu__title {
  color: #999999;
  font-size: 0.24rem;
}
.exp-tables .van-dropdown-menu__title::after {
  border-color: transparent transparent currentColor currentColor;
}
</style>