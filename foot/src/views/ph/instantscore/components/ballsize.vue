<template>
  <div>
    <div class="exp-tables">
      <div class="title">
        <div class="menu1">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="menu2">初盘</div>
        <div class="rate">即盘</div>
      </div>
      <div class="list">
        <div class="info" v-for="(item,index) in 7" :key="index">
          <div class="cname">BET365</div>
          <div class="chu">
            <span>1.01</span>
            <span>2.5</span>
            <span>0.79</span>
          </div>
          <div class="ji">
            <span>
              1.00
              <img src="@/assets\images\instantscore\drop_i@2x.png" alt />
            </span>
            <span>2.5/3</span>
            <span>
              0.82
              <img src="@/assets\images\instantscore\litre_i@2x.png" alt />
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="addheight"></div>
    <div class="footer">
      <span>同赔</span>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
export default {
  components: {},
  data() {
    return {
      value1: 0,
      option1: [
        { text: "全部公司", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.exp-tables {
  .title {
    height: 0.56rem;
    background-color: #edeef3;
    display: flex;
    align-items: center;

    .menu1 {
      flex: 1;
    }

    .menu2 {
      display: flex;
      justify-content: center;
      text-align: center;
      height: 0.56rem;
      line-height: 0.56rem;
      flex: 2;
      font-size: 0.24rem;
      color: #999999;
    }

    .rate {
      @extend .menu2;
    }
  }

  .list {
    .info {
      height: 0.8rem;
      display: flex;
      align-items: center;
      background-color: #ffffff;

      div {
        display: flex;
        height: 0.8rem;
        align-items: center;
        justify-content: center;
      }

      .cname {
        color: #202021;
        font-size: 0.24rem;
        font-weight: bold;
        flex: 1;
        border-right: 0.01rem#efefef solid;
      }

      .chu {
        flex: 2;
        display: flex;
        border-right: 0.01rem#efefef solid;

        span {
          flex: 1;
          color: #202021;
          font-size: 0.24rem;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 0.8rem;

          img {
            width: 0.14rem;
            height: 0.18rem;
            margin-left: 0.03rem;
          }
        }
      }

      .ji {
        @extend .chu;
        flex: 2;
      }
    }
  }
}
.addheight {
  width: 100%;
  height: 1rem;
}

.footer {
  width: 100%;
  height: 0.97rem;
  border-top: 0.01rem #eeeeee solid;
  background-color: #ffffff;
  opacity: 0.98;
  position: fixed;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>