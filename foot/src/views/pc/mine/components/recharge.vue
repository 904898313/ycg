<template>
  <div class="container">
    <div class="recharge">
      <div class="titles">
        <span>球币充值</span>
      </div>
      <div class="rechargeList">
        <div
          :class="tabId==index?'active':'item'"
          v-for="(item,index) in rechargeList"
          :key="index"
          @click="ballcoinNumber(index)"
        >
          <p>{{item.ballCoin}}球币</p>
          <span>售价：{{item.originalPrice}}元</span>
        </div>
      </div>
    </div>
    <div class="paytype">
      <div class="titles">
        <span>支付方式</span>
      </div>
      <div class="content">
        <div class="title">
          支付金额：
          <span>1000</span> 共计1000球币
        </div>
        <div class="qrcode">
          <img :src="qrcode" alt />
          <span>扫上方二维码支付</span>
        </div>
        <div class="text">
          <div class="qrcode1">
            <div class="paytype1">
              <p>请选择支付方式：</p>
              <div class="radio-box" v-for="(item,index) in radios" :key="item.id">
                <span class="radio" :class="{'on':item.isChecked}"></span>
                <input
                  v-model="radio"
                  :value="item.value"
                  class="input-radio"
                  :checked="item.isChecked"
                  @click="check(index)"
                  type="radio"
                />
                <img :src="item.img" alt class="icons" />
              </div>
            </div>
          </div>
        </div>
        <div class="addheight"></div>
      </div>
    </div>

    <div class="quanyi">
      <div class="title">
        <img src="@/assets/images/mine/kk@2x.png" alt />
        <span>球币特权</span>
        <img src="@/assets/images/mine/kk2@2x.png" alt />
      </div>
      <div class="flex-box">
        <img src="@/assets/images/mine/bg_1@2x.png" alt />
        <img src="@/assets/images/mine/bg_2@2x.png" alt />
        <img src="@/assets/images/mine/bg_1@2x.png" alt />
        <img src="@/assets/images/mine/bg_2@2x.png" alt />
      </div>
    </div>
  </div>
</template>


<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      tabId: 0,
      rechargeList: [
        // {
        //   num: "20球币",
        //   price: "20元"
        // },
        // {
        //   num: "50球币",
        //   price: "50元"
        // },
        // {
        //   num: "100球币",
        //   price: "100元"
        // },
        // {
        //   num: "200球币",
        //   price: "200元"
        // },
        // {
        //   num: "500球币",
        //   price: "500元"
        // },
        // {
        //   num: "1000球币",
        //   price: "1000元"
        // }
      ],
      radios: [
        {
          value: 1,
          isChecked: true,
          img: require("@/assets/images/mine/wx@2x.png")
        },
        {
          value: 2,
          img: require("@/assets/images/mine/zfb@2x.png"),
          isChecked: false
        }
      ],
      radio: 1,
      ballcoinId: null,
      qrcode: ""
    };
  },
  created() {
    this.ballcoinconfigList();
  },
  methods: {
    // 获取球币支付配置信息
    ballcoinconfigList() {
      const data = {};
      mine.ballcoinconfigList(data).then(res => {
        const data = res.data.data;
        this.rechargeList = data.records;
        this.ballcoinWxpay();
      });
    },
    // 球币微信支付
    ballcoinWxpay() {
      const data = {
        tradeType: "NATIVE",
        ballCoinRechargeId: this.rechargeList[this.tabId].id
      };
      mine.ballcoinWxpay(data).then(res => {
        const data = res.data.data;
        this.qrcode = data.baseData;
      });
    },
    // 球币支付宝支付
    ballcoinAlispay() {
      const data = {
        tradeType: "NATIVE",
        ballCoinRechargeId: this.rechargeList[this.tabId].id
      };
      mine.ballcoinAlispay(data).then(res => {
        const data = res.data.data.aliResult;
        this.$router.push({
          path: "/pc-minealisPay",
          query: {
            data: data
          }
        });
      });
    },
    // 选择球币数量
    ballcoinNumber(index) {
      this.tabId = index;
      this.ballcoinWxpay();
    },
    // 支付方式切换
    check(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
      if (index === 0) {
        this.ballcoinconfigList();
      } else if (index == 1) {
        this.ballcoinAlispay();
      }
    }
  }
};
</script>

<style src="@/assets/css/pc/mine/recharge.scss" lang="scss" scoped></style>