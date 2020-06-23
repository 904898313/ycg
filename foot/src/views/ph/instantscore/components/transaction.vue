<template>
  <div>
    <div class="echarts">
      <p>全部交易</p>
      <p class="total">成交量：253169港元</p>
      <div class="mychart" ref="myChart"></div>
    </div>
    <div class="echarts1">
      <div class="title">
        <p>总成交量趋势</p>
        <div class="lengd">
          <span>主胜</span>
          <span>平手</span>
          <span>客胜</span>
        </div>
      </div>
      <div class="mychart1" ref="myChart1"></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.drawLine();
    this.drawLine1();
  },
  methods: {
    // 绘制图表
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      myChart.setOption({
        title: {
          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          bottom: 0,
          left: "center",
          data: ["主胜", "客胜", "平手"]
        },
        series: [
          {
            type: "pie",
            radius: "65%",
            center: ["50%", "50%"],
            selectedMode: "single",
            data: [
              { value: 2076860, name: "主胜2076860" },
              { value: 278469, name: "客胜278469" },
              { value: 197896, name: "平手197896" }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    // 绘制图表2
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart1 = this.$echarts.init(this.$refs.myChart1);
      myChart1.setOption({
        backgroundColor: "#fff",
        title: {
          top: "0",
          textStyle: {
            color: "#999",
            fontSize: 12,
            fontWeight: "400"
          }
        },
        color: ["#73A0FA", "#73DEB3", "#FFB761"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            },
            lineStyle: {
              type: "dashed"
            }
          }
        },
        grid: {
          left: "25",
          right: "25",
          bottom: "24",
          top: "75",
          containLabel: true
        },
        xAxis: {
          type: "category",
          data: ["15:00", "12-30 00:00", "08:00"],
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#999",
            textStyle: {
              fontSize: 12
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#F3F4F4"
            }
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        series: [
          {
            name: "订单总笔数",
            type: "line",
            smooth: true,
            data: [13, 1, 4, 44, 45, 322, 76]
          },
          {
            name: "钱包笔数",
            type: "line",
            smooth: true,
            data: [13, 54, 34, 344, 35, 53]
          },
          {
            name: "借呗笔数",
            type: "line",
            smooth: true,
            data: [13, 2, 2, 32, 123, 23, 136]
          }
        ]
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.echarts {
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  p {
    color: #222222;
    font-size: 0.32rem;
    font-weight: bold;
    margin-left: 0.32rem;
    margin-top: 0.3rem;
  }
  .total {
    color: #999999;
    font-size: 0.24rem;
    margin-top: 0.1rem;
  }
  .mychart {
    width: 100%;
    height: 3.2rem;
  }
}
.echarts1 {
  margin-top: 0.2rem;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 0.4rem;
    margin-left: 0.3rem;
    p {
      color: #222222;
      font-size: 0.32rem;
      font-weight: bold;
    }
    .lengd {
      display: flex;

      span {
        font-size: 0.18rem;
        color: #202021;
        display: flex;
        align-items: center;
        margin-right: 0.3rem;
      }
      :nth-child(1) {
        &:before {
          content: "";
          width: 0.14rem;
          height: 0.14rem;
          background-color: #f55e53;
          margin-right: 0.1rem;
        }
      }
      :nth-child(2) {
        &:before {
          content: "";
          width: 0.14rem;
          height: 0.14rem;
          background-color: #a6b2be;
          margin-right: 0.1rem;
        }
      }
      :nth-child(3) {
        &:before {
          content: "";
          width: 0.14rem;
          height: 0.14rem;
          background-color: #2fcc86;
          margin-right: 0.1rem;
        }
      }
    }
  }
  .mychart1 {
    width: 100%;
    height: 3.68rem;
  }
}
</style>