<template>
  <div class="container">
    <nav>
      <div class="navheader">
        <img src="../../../..\assets\images\mine\backtrack-i@2x.png" alt @click="backto" />
        <span>VIP专区</span>
      </div>
      <div class="card">
        <div class="txt">
          <span>您的会员将在{{userInfo.vipEndTime}}过期</span>
        </div>
        <div class="user">
          <img :src="userInfo.avatar" alt />
          <div class="user-mid">
            <div class="name">
              <span>{{userInfo.userName}}</span>
              <img src="../../../..\assets\images\mine\VIP@2x.png" alt />
            </div>
            <div class="progress">
              <p class="leav">Lv 8</p>
              <div class="progresss">
                <van-progress
                  :percentage="50"
                  stroke-width="6"
                  color="#f4c44a"
                  track-color="#82858a"
                  :show-pivot="false"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="chongzhi">
      <div class="title">
        <span>VIP充值</span>
      </div>
      <div class="vipList">
        <div
          @click="mealType(index)"
          :class="mealIdx==index?'active':'list'"
          v-for="(item,index) in list"
          :key="index"
        >
          <span class="tian">{{item.dayCount}}天</span>
          <span class="money">￥{{item.price}}</span>
          <span class="limoney">￥{{item.originalPrice}}</span>
          <span class="btn">立省{{Math.ceil(item.originalPrice-item.price)}}元
          </span>
          <img src="../../../../assets/images/mine/users@2x.png" v-if="index==0" alt />
        </div>
      </div>

      <div class="payType">
        <div class="title">
          <span>支付方式</span>
        </div>
        <div class="checked">
          <van-radio-group v-model="radio">
            <div class="radios">
              <span>
                <img src="../../../../assets\images\mine\zfb@2x.png" alt />
                支付宝
              </span>
              <van-radio name="1" checked-color="#07c160"></van-radio>
            </div>
            <div class="radios">
              <span>
                <img src="../../../../assets\images\mine\wx@2x.png" alt />
                微信
              </span>
              <van-radio name="2" checked-color="#07c160"></van-radio>
            </div>
          </van-radio-group>
        </div>
        <div class="btnsdiv">
          <van-button type="default" class="btns">立即续费</van-button>
        </div>

        <div class="quanyi"></div>
      </div>

      <div class="quanyi">
        <div class="titles">
          <img src="../../../../assets/images/mine/kk@2x.png" alt />
          <span>会员权益</span>
          <img src="../../../../assets/images/mine/kk2@2x.png" alt />
        </div>
        <div class="quanyilist">
          <div class="top">
            <p>观看精彩比赛直播</p>
            <span>热门比赛及时观赏</span>
          </div>
          <div class="bot">
            <p>优先观看AI预测</p>
            <span>热门比赛及时观赏</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  name: "ph-vipzone",
  data() {
    return {
      mealIdx: 0,
      radio: "",
      list: []
    };
  },
  computed: {
    // 获取个人信息
    userInfo() {
      return JSON.parse(this.$store.getters.userInfro);
    }
  },
  created() {
    this.viplistFind();
  },
  mounted() {},
  methods: {
    // 查询VIP配置列表
    viplistFind() {
      const data = {};
      mine.viplistFind(data).then(res => {
        const data = res.data.data;
        this.list = data.records;
        // this.wechatPay();
      });
    },
    mealType(index) {
      this.mealIdx = index;
    },
    backto() {
      this.$router.go(-1);
    },
    getParamsdata() {}
  }
};
</script>

<style src="../../../../assets/css/ph/mine/vipzone.scss" lang="scss" scoped></style>