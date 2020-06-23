<template>
  <div class="container">
    <div class="headers">
      <div class="header">
        <div class="days">
          <span>您的会员还有{{this.userInfo.vipInfo.lastDay}}天到期</span>
          <img src="../../../assets/images/mine/xinxi-icon@2x.png" alt @click="tomessages" />
        </div>
        <div class="user">
          <img :src="userInfo.avatar" alt class="avatar" @click="touserInfo" />
          <div class="user-mid">
            <div class="name">
              <span>{{userInfo.userName}}</span>
              <img src="../../..\assets\images\mine\VIP@2x.png" alt />
            </div>
            <div class="progress">
              <p class="leav">Lv {{userInfo.userLevel}}</p>
              <div class="progresss">
                <van-progress
                  :percentage="50"
                  stroke-width="6"
                  color="#f4c44a"
                  track-color="#303034"
                  :show-pivot="false"
                />
              </div>
            </div>
          </div>
          <div class="user-right">
            <img src alt />
            <span @click="signIn">签到领币</span>
          </div>
        </div>
        <div class="qiubi">
          <div class="number">
            <img src="@/assets\images\mine\qb_i@2x.png" alt />
            <span>
              球币：
              <i>{{userInfo.ballCoin}}</i>
            </span>
          </div>
          <div class="chongzhi" @click="recharge">充值</div>
        </div>
      </div>
    </div>

    <div class="serveList">
      <div class="title">
        <span>个人服务</span>
      </div>
      <div class="list">
        <ul>
          <li @click="toVipzone">
            <img src="@/assets\images\mine\VIP-icon@2x.png" alt />
            <span>VIP专区</span>
          </li>
          <li @click="tobooking">
            <img src="@/assets\images\mine\VIP-icon@2x.png" alt />
            <span>记账本</span>
          </li>
          <li @click="toRecords">
            <img src="@/assets\images\mine\xiaofeijilu-icon@2x.png" alt />
            <span>消费记录</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="serveList">
      <div class="title">
        <span>管理反馈</span>
      </div>
      <div class="list">
        <ul>
          <li @click="tohelp">
            <img src="../../..\assets\images\mine\VIP-icon@2x.png" alt />
            <span>帮助中心</span>
          </li>
          <li @click="toideaback">
            <img src="../../..\assets\images\mine\yijianfankui-icon@2x.png" alt />
            <span>意见反馈</span>
          </li>
          <li>
            <img src="../../..\assets\images\mine\VIP-icon@2x.png" alt />
            <span>系统设置</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="bgimg">
      <img src="../../..\assets\images\mine\hy@2x.png" alt />
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  name: "ph-mine",
  data() {
    return {};
  },
  computed: {
    // 获取个人信息
    userInfo() {
      return JSON.parse(this.$store.getters.userInfro);
    }
  },
  created() {},
  mounted() {},
  methods: {
    // 个人信息
    touserInfo() {
      this.$router.push({ path: "ph-userInfo" });
    },
    // vip中心
    toVipzone() {
      this.$router.push({ path: "ph-vipzone" });
    },
    // 记事本
    tobooking() {
      this.$router.push({ path: "/ph-booking" });
    },
    // 消费记录
    toRecords() {
      this.$router.push({ path: "/ph-records" });
    },
    // 帮助中心
    tohelp() {
      this.$router.push({ path: "/ph-help" });
    },
    // 意见反馈
    toideaback() {
      this.$router.push({ path: "/ph-ideaback" });
    },
    // 签到领币
    signIn() {
      this.$router.push({ path: "/ph-sign" });
    },
    // 充值
    recharge() {
      this.$router.push({ path: "/ph-recharge" });
    },
    // 消息页面
    tomessages() {
      this.$router.push({ path: "/ph-messages" });
    }
  }
};
</script>

<style src="@/assets/css/ph/mine.scss" lang="scss" scoped></style>

