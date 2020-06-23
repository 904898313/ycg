<template>
  <div>
    <div class="list-ins">
      <div class="thead">
        <span></span>
        <span>必发价位</span>
        <span>必发指数</span>
        <span>欧赔平均</span>
        <span>庄家盈亏</span>
      </div>
      <div class="tbody">
        <div class="trs" v-for="(item,index) in 3" :key="index">
          <span class="zhus">主胜</span>
          <span>3.65</span>
          <span>31</span>
          <span>3.3</span>
          <span class="number">1166</span>
        </div>
      </div>
    </div>

    <div class="piechart">
      <div class="tabs">
        <span :class="currid==0?'active':''" @click="changecurr(0)">大额交易</span>
        <span :class="currid==1?'active':''" @click="changecurr(1)">全部交易</span>
        <span :class="currid==2?'active':''" @click="changecurr(2)">买卖挂单</span>
      </div>
      <div class="tradeorder">
        <!-- 大额交易 -->
        <bigtrade v-if="currid==0"></bigtrade>
        <!-- 全部交易 -->
        <transaction v-if="currid==1"></transaction>
        <!-- 买卖挂单 -->
        <tradeorder v-if="currid==2"></tradeorder>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    tradeorder: () => import("./tradeorder"),
    transaction: () => import("./transaction"),
    bigtrade: () => import("./bigtrade")
  },
  data() {
    return {
      currid: 1
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurr(index) {
      this.currid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.list-ins {
  display: flex;
  margin-top: 0.2rem;
  background-color: #ffffff;
  flex-direction: column;
  .thead {
    height: 0.56rem;
    display: flex;
    width: 7.3rem;
    border-radius: 0.04rem;
    width: 7.3rem;
    background-color: #f0f0f4;
    margin: 0.24rem auto 0rem;
    span {
      flex: 1;
      color: #999999;
      font-size: 0.24rem;
      line-height: 0.56rem;
      text-align: center;
    }
  }
  .trs {
    display: flex;
    height: 0.65rem;
    border-bottom: 0.01rem solid #efefef;
    span {
      flex: 1;
      line-height: 0.65rem;
      font-size: 0.24rem;
      text-align: center;
      color: #202021;
    }
    .zhus {
      color: #999999;
    }
    .number {
      color: #2fcc86;
      font-weight: bold;
    }
  }
}
.piechart {
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  .tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 0.3rem;
    background-color: #ffffff;
    span {
      width: 1.68rem;
      height: 0.56rem;
      background-color: #f1f1f1;
      border-radius: 0.04rem;
      margin: 0rem 0.1rem;
      color: #999999;
      font-size: 0.28rem;
      line-height: 0.56rem;
      text-align: center;
    }
    .active {
      background-color: #ffffff;
      border: solid 0.01rem #ffc002;
      color: #ffc002;
    }
  }
}
</style>