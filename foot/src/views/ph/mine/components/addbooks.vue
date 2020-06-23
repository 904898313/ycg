<template>
  <div class="container">
    <nav>
      <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
      <span>记账本</span>
    </nav>
    <div class="tabs">
      <span :class="currid==0?'active':''" @click="changeType(0)">月支出</span>
      <span :class="currid==1?'active':''" @click="changeType(1)">月收入</span>
    </div>
    <div class="lists">
      <div class="item">
        <span class="money">金额</span>
        <van-cell-group>
          <van-field
            v-model="dialogData.price"
            placeholder="请输入金额"
            :border="false"
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
        <van-field
          v-model="dialogData.remarks"
          rows="6"
          autosize
          type="textarea"
          placeholder="请输入你要记录的内容..."
        />
      </div>
    </div>

    <div class="btns" @click="addbooks()">保存</div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      currid: 0,
      show: false,
      dialogData: {
        price: "",
        time: "",
        remarks: ""
      },
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      currentDate: new Date().getTime(),
      message: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 添加一条记账本记录
    addbooks() {
      let data = {
        amount: this.dialogData.price,
        type: this.currid,
        addTime: this.dialogData.time,
        content: this.dialogData.remarks
      };
      mine.addbooks(data).then(res => {
        if (res.data.code == 1) {
          this.$notify({
            type: "success",
            duration: "1500",
            message: res.data.msg
          });
          this.$router.go(-1)
        }
      });
    },
    // changeType
    changeType(index) {
      this.currid = index;
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
    cancelFun() {
      this.show = false;
    },
    //返回
    back() {
      this.$router.go(-1);
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

<style src="../../../../assets/css/ph/mine/addbooks.scss" lang="scss" scoped></style>
