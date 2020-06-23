<template>
  <div class="vips">
    <div class="vipInfo">
      <div class="info-left">
        <img :src="userInfo.avatar" alt />
        <div class="leavl">
          <div class="leavl-top">
            <span>{{userInfo.userName}}</span>
            <img src="@/assets/images/mine/VIP5@2x.png" alt />
          </div>
          <div class="leavl-bot">
            <span>Lv {{userInfo.userLevel}}</span>
            <div class="progress">
              <el-progress
                :percentage="percentage"
                :color="customColor"
                :show-text="false"
                :stroke-width="6"
              ></el-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="info-right">
        <span>您的会员将在{{userInfo.vipEndTime}}1天过期</span>
      </div>
    </div>
    <div class="recharge">
      <div class="title">
        <span>VIP充值</span>
      </div>
      <div class="viplist">
        <div
          @click="mealIdx=index"
          :class="mealIdx==index?'active':'list'"
          v-for="(item,index) in list"
          :key="index"
        >
          <span class="tian">{{item.dayCount}}天</span>
          <span class="money">{{item.price}}</span>
          <span class="limoney">￥{{item.originalPrice}}</span>
          <span class="btn">立省{{item.originalPrice}}元</span>
          <img src="@/assets/images/mine/users@2x.png" alt v-if="index==0" />
        </div>
      </div>
    </div>
    <div class="recharge">
      <div class="title">
        <span>支付方式</span>
      </div>
      <div class="vipcode">
        <p>
          支付金额：
          <span class="str">￥</span>
          <span class="price">68.00</span>已节省20元
        </p>
        <div class="qrcode" ref="qrcode">
          <div class="paytype">
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
          <img :src="qrcode" alt />
          <p>扫上方二维码支付</p>
        </div>
      </div>
    </div>
    <div class="quanyi">
      <div class="title">
        <img src="@/assets/images/mine/kk@2x.png" alt />
        <span>会员权益</span>
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
  name: "mineVips",
  props: ["data"],
  data() {
    return {
      mealIdx: 0,
      list: [],
      percentage: 50,
      customColor: "#ffc002",
      qrcode: "",
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
      radio: 1
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
    // vip充值 @微信支付
    wechatPay() {
      let data = {
        tradeType: "NATIVE",
        vipConfigId: this.list[this.mealIdx].id
      };
      mine.wechatPay(data).then(res => {
        const data = res.data.data;
        this.qrcode = data.baseData;
      });
    },
    // vip充值 @支付宝
    alisPay() {
      let data = {
        tradeType: "NATIVE",
        vipConfigId: this.list[this.mealIdx].id
      };
      mine.alisPay(data).then(res => {
        const data = res.data.data.aliResult;
        this.$router.push({
          path: "/pc-minealisPay",
          query: {
            data: data
          }
        });
      });
    },
    // 查询VIP配置列表
    viplistFind() {
      const data = {};
      mine.viplistFind(data).then(res => {
        const data = res.data.data;
        this.list = data.records;
        this.wechatPay();
      });
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
        this.wechatPay();
      } else if (index == 1) {
        this.alisPay();
      }
    }
  }
};
</script>

<style src="@/assets/css/pc/mine/vips.scss" lang="scss" scoped></style>
