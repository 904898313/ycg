<template>
  <div class="container">
    <nav>
      <van-row>
        <van-col span="2" offset="1">
          <img src="../../../..\assets\images\mine\backtrack-iblack@2x.png" @click="back()" alt />
        </van-col>
        <van-col span="5" offset="7" class="title">记账本</van-col>
      </van-row>
    </nav>
    <div class="navList">
      <ul>
        <li>
          <span class="yue">
            12月
            <img src="../../../..\assets\images\mine\put_i@2x.png" alt />
          </span>
          <span class="nian">2019年</span>
        </li>
        <i></i>
        <li>
          <span class="sr-money">￥{{Monthexpend.pay}}</span>
          <span class="nian">收入</span>
        </li>
        <i></i>
        <li>
          <span class="zc-money">￥{{Monthexpend.pay}}</span>
          <span class="nian">支出</span>
        </li>
      </ul>
    </div>

    <div class="echarts">
      <div class="mychart" ref="mychart"></div>
    </div>

    <div class="tabs">
      <span :class="typeId==0?'active':''" @click="changeType(0)">月支出</span>
      <span :class="typeId==1?'active':''" @click="changeType(1)">月收入</span>
    </div>

    <div class="tableList" v-for="(item,index) in list" :key="index">
      <van-swipe-cell default>
        <div class="item" @click="todetails">
          <div class="left">
            <span class="title">{{item.content}}</span>
            <span class="times">{{item.createTime}}</span>
          </div>
          <div class="right">
            <span>{{item.amount}}</span>
          </div>
        </div>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
      </van-swipe-cell>
    </div>

    <div class="addbooks" @click="addbooks()">
      <img src="../../../../assets/images/mine/add_i@2x.png" alt />
      <span>记笔帐</span>
    </div>
  </div>
</template>

<script>
import * as mine from "@/api/mine";
export default {
  data() {
    return {
      typeId: 0,
      list: [],
      Monthexpend: {
        income: "",
        pay: ""
      },
      dateTime: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1
      }
    };
  },
  created() {
    this.initbooksList();
    this.getMonthexpend();
  },
  mounted() {
    this.drawLine();
  },
  methods: {
 
    // 改变type
    changeType(index) {
      this.typeId = index;
      this.initbooksList(this.typeId);
    },
    // 初始化记账本数据
    initbooksList(_TYPE) {
      let type = 0;
      if (_TYPE) {
        type = _TYPE;
      }
      let params = {
        type: type,
        current: "",
        size: ""
      };
      mine.initbooksList(params).then(res => {
        const data = res.data.data;
        this.total = data.total;
        this.list = data.records;
      });
    },
    // position 为关闭时点击的位置
    // instance 为对应的 SwipeCell 实例
    beforeClose({ position, instance }) {
      switch (position) {
        case "cell":
        case "outside":
          instance.close();
          break;
        case "right":
          Dialog.confirm({
            message: "确定删除吗？"
          }).then(() => {
            instance.close();
          });
          break;
      }
    },
    // 获取月支出（收入）数据
    getMonthexpend() {
      let params = {
        year: this.dateTime.year,
        month: this.dateTime.month
      };
      mine.getMonthexpend(params).then(res => {
        if (res.data.code === 1) {
          const data = res.data.data;
          this.Monthexpend = data;
        }
      });
    },

    // 初始化图表
    drawLine() {
      let mychart = this.$echarts.init(this.$refs.mychart);
      let colors = ["#f3746e", "#30ca8e"];
      mychart.setOption({
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        title: {
          text: "本月近七天趋势对比图",
          fontSize: "16"
        },
        legend: {
          data: ["月支出", "月收入"],
          x: "right"
        },
        grid: {
          top: 70,
          bottom: 50,
          borderColor: "#2ac987",
          borderWidth: 1
        },
        xAxis: [
          {
            boundaryGap: false,
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[1]
              }
            },
            data: [
              "01-24",
              "01-25",
              "01-26",
              "01-27",
              "01-28",
              "01-29",
              "01-30"
            ]
          },
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: colors[0]
              }
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            max: "1000",
            min: "0"
          }
        ],
        series: [
          {
            name: "月支出",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [50, 580, 450, 460, 600, 620, 580]
          },
          {
            name: "月收入",
            type: "line",
            xAxisIndex: 1,
            smooth: true,
            data: [0, 0, 400, 0, 0, 0, 0]
          }
        ]
      });

      window.addEventListener("resize", function() {
        mychart.resize();
      });
    },
    // 新建记事本
    addbooks() {
      this.$router.push({ path: "/ph-booking/addbooks" });
    },
    todetails() {
      this.$router.push({ path: "ph-booking/bookdetails" });
    },
    // 返回我的
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style src="../../../../assets/css/ph/mine/booking.scss" lang="scss" scoped></style>
