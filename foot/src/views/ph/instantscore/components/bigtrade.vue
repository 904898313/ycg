<template>
  <div>
    <div class="echarts">
      <p>全部交易</p>
      <p class="total">成交量:{{bfMatch.awayAmount+bfMatch.drawAmount+bfMatch.homeAmount}}</p>
      <div class="progress">
        <div class="progressitem">
          <span class="text">主胜</span>
          <van-progress
            :show-pivot="false"
            color="#f55e53"
            :percentage="bfMatch.homeIndex"
            class="pro"
          />
          <span style="color:#f55e53;" class="num">{{bfMatch.homeIndex}}</span>
        </div>
        <div class="progressitem">
          <span class="text">平手</span>
          <van-progress
            :show-pivot="false"
            color="#a6b2be"
            :percentage="bfMatch.drawIndex"
            class="pro"
          />
          <span style="color:#a6b2be;" class="num">{{bfMatch.drawIndex}}</span>
        </div>
        <div class="progressitem">
          <span class="text">客胜</span>
          <van-progress
            :show-pivot="false"
            color="#2fcc86"
            :percentage="bfMatch.awayIndex"
            class="pro"
          />
          <span style="color:#2fcc86;" class="num">{{bfMatch.awayIndex}}</span>
        </div>
      </div>
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
    <div class="big-tables">
      <div class="title">
        <span>成交额</span>
        <span>属性</span>
        <span>价位</span>
        <span class="time">时间</span>
        <span>占比</span>
      </div>
      <div class="list">
        <div class="info" v-for="(item,index) in bigtrade" :key="index">
          <span>{{item.amount}}</span>
          <span>{{item.tradeType==1?'买':'卖'}}</span>
          <span>{{item.odds}}</span>
          <span class="time">{{item.tradeDate | formatDate}}</span>
          <span>{{(item.amount/item.totalAmount).toFixed(2)}}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
import { formatDate } from "@/utils/formatDate";
export default {
  components: {},
  data() {
    return {
      bigtrade: [],
      bfMatch: {
        awayIndex: 0,
        drawIndex: 0,
        homeIndex: 0
      },
      num: null
    };
  },
  created() {
    this.getBiFaData();
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    // 获取大额交易数据
    getBiFaData() {
      const data = {
        gameId: this.$store.state.score.gameId
      };
      scoreInfo.getBiFaData(data).then(res => {
        const data = res.data.data;
        this.bigtrade = data.bfTradeMap.bigtrade;
        this.bfMatch = data.bfMatch;
      });
    },
    // 绘制图表2
    drawLine() {
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
    },
    func() {}
  },
  filters: {
    formatDate(time) {
      time = time * 1;
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm");
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
  .progress {
    display: flex;
    flex-direction: column;
    padding: 0.2rem 0;
    .progressitem {
      margin: 0.18rem;
      display: flex;
      align-items: center;
      justify-content: center;
      .text {
        color: #bbbbbb;
        font-size: 0.24rem;
        margin-right: 0.2rem;
      }
      .pro {
        width: 4.4rem;
        height: 0.35rem;
        border-radius: 0;
      }
      .num {
        font-size: 0.24rem;
        font-weight: bold;
        margin-left: 0.3rem;
        &:after {
          content: "%";
          color: #999999;
          font-size: 0.24rem;
        }
      }
    }
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
.big-tables {
  background-color: #ffffff;
  .title {
    width: 7.3rem;
    height: 0.56rem;
    background-color: #f0f0f4;
    border-radius: 0.04rem;
    margin: 0 auto;
    display: flex;
    span {
      color: #999999;
      font-size: 0.24rem;
      line-height: 0.56rem;
      width: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .time {
      flex: 1;
    }
  }
  .list {
    .info {
      display: flex;
      width: 7.3rem;
      margin: 0 auto;
      height: 0.8rem;
      span {
        line-height: 0.8rem;
        font-size: 0.24rem;
        width: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #202021;
      }
      .time {
        flex: 1;
      }
    }
  }
}
</style>