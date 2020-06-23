<template>
  <div class="container">
    <nav>
      <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>详情</span>
    </nav>
    <div class="tabs">
      <span :class="tabId==0?'active':''" @click="swichTab(0)">月支出</span>
      <span :class="tabId==1?'active':''" @click="swichTab(1)">月收入</span>
    </div>
    <div class="lists">
      <div class="item">
        <span class="money">金额</span>
        <van-cell-group>
          <van-field
            v-model="money"
            placeholder="请输入金额"
            :border="false"
            @change="getmoney()"
            class="ipts"
            input-align="right"
          />
        </van-cell-group>
      </div>
      <div class="item">
        <span class="money">时间</span>
        <van-cell
          is-link
          @click="showPopup"
          class="groups"
        >{{ currentDate | formatTime( this.currentDate )}}</van-cell>
        <van-popup v-model="show" position="bottom" :style="{height:'30%'}">
          <van-datetime-picker
            v-model="currentDate"
            @confirm="getTimes()"
            @cancel="cancelFun()"
            type="datetime"
            :min-date="minDate"
            :max-date="maxDate"
          />
        </van-popup>
      </div>

      <div class="item">
        <span>备注</span>
      </div>
      <div class="area">
        <van-field v-model="message" rows="6" autosize type="textarea" placeholder="请输入你要记录的内容..." />
      </div>
    </div>

    <div class="btns">保存</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabId: 0,
      money: "",
      show: false,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date().getTime(),
      message: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    // tabs
    swichTab(index) {
      this.tabId = index;
    },
    // 获取金额数据
    getmoney() {
    },
    // 展出弹出层
    showPopup() {
      this.show = true;
    },
    // 获取时间戳
    getTimes() {
      this.show = false;
    },
    // 取消
    cancelFun(){
       this.show = false;
    },
    //back
    back(){
      this.$router.go(-1)
    } 
  },
  filters: {
    formatTime(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let M = date.getMonth() + 1;
      M = M < 10 ? "0" + M : M;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + M + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/bookdetails.scss" lang="scss" scoped></style>
