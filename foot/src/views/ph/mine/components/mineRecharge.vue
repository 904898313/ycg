<template>
  <div class="container">
    <nav>
      <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>球币充值</span>
    </nav>

    <div class="recharge">
      <div class="title">
        <span>充值</span>
      </div>
      <div class="rechargeList">
        <div
          :class="currentIndex==index?'active':'item'"
          v-for="(item,index) in rechargeList"
          :key="index"
          @click="changeCurrent(index)"
        >
          <span>{{item.ballCoin}}球币</span>
          <p>售价：{{item.price}}元</p>
        </div>
      </div>
    </div>
    <div class="pay">
      <div class="title">支付方式</div>
      <div class="paytype">
        <div>
          <img src="@/assets/images/mine/zfb@2x.png" alt />
          <span>支付宝</span>
        </div>
        <div class="radios">
          <van-radio-group v-model="radio">
            <van-radio name="1" checked-color="$ffc002" @click="radio='1'"></van-radio>
          </van-radio-group>
        </div>
      </div>
      <div class="paytype">
        <div>
          <img src="@/assets/images/mine/wx@2x.png" alt />
          <span>微信</span>
        </div>
        <div class="radios">
          <van-radio-group v-model="radio">
            <van-radio name="2" checked-color="$ffc002" @click="radio='2'"></van-radio>
          </van-radio-group>
        </div>
      </div>
    </div>

    <div class="quanyi">
      <div class="titles">
        <img src="@/assets/images/mine/kk@2x.png" alt />
        <span>球币特权</span>
        <img src="@/assets/images/mine/kk2@2x.png" alt />
      </div>
      <div class="quanyilist">
        <div class="item">
          <p>每日签到</p>
          <span>得球币+3</span>
        </div>
        <div class="item">
          <p>精彩比赛</p>
          <span>随时随地掌握状态</span>
        </div>
        <div class="item">
          <p>每日签到</p>
          <span>得球币+2</span>
        </div>
        <div class="item">
          <p>每日签到</p>
          <span>随时随地掌握状态</span>
        </div>
      </div>
    </div>

    <div class="addheight"></div>

    <div class="payment">
      <span>立即支付￥1000</span>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      currentIndex: 0,
      radio: "1",
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
      ]
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
        // this.ballcoinWxpay();
      });
    },
    changeCurrent(index) {
      this.currentIndex = index;
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/recharge.scss" lang="scss" scoped></style>
<style lang="scss">
.radios .van-radio__icon--checked .van-icon {
  background-color: #ffc002;
  border-color: #ffc002;
}
</style>
