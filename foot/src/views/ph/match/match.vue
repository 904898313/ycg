<template>
  <div class="container">
    <!--导航栏-->
    <ph-nav-bar nav-activate="赛事推荐"></ph-nav-bar>
    <header>
      <p class="time">03-27 17:30 | 白俄后备</p>
      <p class="title">
        戈洛迪亚后备队
        <i>VS</i>索利戈尔斯克矿工
      </p>
      <div class="count">
        <p>
          <span>
            <i>9</i>条情报
          </span>
          <span>
            <i>2</i>个初盘AI预测方案
          </span>
        </p>
        <img src="@/assets\images\match\favorite-grayicon2@2x.png" alt />
      </div>
    </header>
    <div class="tabs">
      <div class="menus">
        <span :class="menusIndex==0?'active':''" @click="changemenusFunc(0)">欧指</span>
        <span :class="menusIndex==1?'active':''" @click="changemenusFunc(1)">让球</span>
        <span :class="menusIndex==2?'active':''" @click="changemenusFunc(2)">进球数</span>
        <span :class="menusIndex==3?'active':''" @click="changemenusFunc(3)">优劣势分析</span>
      </div>
      <div class="tr-btn">
        <span :class="currIndex==0?'active':''" @click="changeCurr(0)">主胜</span>
        <span :class="currIndex==1?'active':''" @click="changeCurr(1)">平手</span>
        <span :class="currIndex==2?'active':''" @click="changeCurr(2)">客胜</span>
      </div>

      <!-- echarts -->
      <div class="m-charts">
        <div class="my-charts" ref="mymoChart"></div>
      </div>

      <div class="tree">
        <span>1.264</span>
        <span>1.264</span>
        <span>1.264</span>
      </div>
      <div class="txt">
        *过去3年相似指数出现1016次其中主胜
        <font style="color: #f55e53;">21%</font> 、平局
        <font style="color: #a6b2be;">20%</font>、客胜
        <font style="color: #1bbd6b;">58%</font>
      </div>
      <div class="tables">
        <div class="thead">
          <span>公司</span>
          <span>初始指数</span>
          <span>即时指数</span>
        </div>
        <div class="tbody">
          <div class="trs">
            <div class="checks">
              <div class="radio-box1">
                <span class="radio1" :class="{'on1':radios1[0].isCheck}"></span>
                <input
                  v-model="radio1"
                  :value="radios1[0].value"
                  class="input-radio1"
                  :checked="radios1[0].isCheck"
                  @click="chenk1(0)"
                  type="radio"
                />
                <span class="label">BET365</span>
              </div>
            </div>
            <div class="chushi">
              <span>4.5</span>
              <span>4.5</span>
              <span>1.53</span>
            </div>
            <div class="jishi">
              <span>5.5</span>
              <span>4.5</span>
              <span>1.44</span>
            </div>
          </div>

          <div class="trs">
            <div class="checks">
              <div class="radio-box1">
                <span class="radio1" :class="{'on1':radios1[1].isCheck}"></span>
                <input
                  v-model="radio1"
                  :value="radios1[1].value"
                  class="input-radio1"
                  :checked="radios1[1].isCheck"
                  @click="chenk1(1)"
                  type="radio"
                />
                <span class="label">BET365</span>
              </div>
            </div>
            <div class="chushi">
              <span>4.5</span>
              <span>4.5</span>
              <span>1.53</span>
            </div>
            <div class="jishi">
              <span>5.5</span>
              <span>4.5</span>
              <span>1.44</span>
            </div>
          </div>
          <div class="trs">
            <div class="checks">
              <div class="radio-box1">
                <span class="radio1" :class="{'on1':radios1[2].isCheck}"></span>
                <input
                  v-model="radio1"
                  :value="radios1[2].value"
                  class="input-radio1"
                  :checked="radios1[2].isCheck"
                  @click="chenk1(2)"
                  type="radio"
                />
                <span class="label">BET365</span>
              </div>
            </div>
            <div class="chushi">
              <span>4.5</span>
              <span>4.5</span>
              <span>1.53</span>
            </div>
            <div class="jishi">
              <span>5.5</span>
              <span>4.5</span>
              <span>1.44</span>
            </div>
          </div>
        </div>
      </div>
      <div class="more">
        <span>查看预测方案</span>
        <van-icon name="arrow" size=".2rem" color="#3e4152" />
      </div>

      <div class="list">
        <div class="info">
          <div class="top">
            <p class="time">03-27 17:30 | 白俄后备</p>
          </div>
          <div class="mid">
            <p class="title">
              戈洛迪亚后备队
              <i>VS</i>索利戈尔斯克矿工
            </p>
          </div>
          <div class="bot">
            <p>
              <span>
                <i>9</i>条情报
              </span>
              <span style="marginLeft:.1rem;">
                <i>2</i>个初盘AI预测方案
              </span>
            </p>
            <img src="@/assets\images\match\favorite-grayicon2@2x.png" alt />
          </div>
        </div>
        <div class="info">
          <div class="top">
            <p class="time">03-27 17:30 | 白俄后备</p>
          </div>
          <div class="mid">
            <p class="title">
              戈洛迪亚后备队
              <i>VS</i>索利戈尔斯克矿工
            </p>
          </div>
          <div class="bot">
            <p>
              <span>
                <i>9</i>条情报
              </span>
              <span style="marginLeft:.1rem;">
                <i>2</i>个初盘AI预测方案
              </span>
            </p>
            <img src="@/assets\images\match\favorite-grayicon2@2x.png" alt />
          </div>
        </div>
        <div class="info">
          <div class="top">
            <p class="time">03-27 17:30 | 白俄后备</p>
          </div>
          <div class="mid">
            <p class="title">
              戈洛迪亚后备队
              <i>VS</i>索利戈尔斯克矿工
            </p>
          </div>
          <div class="bot">
            <p>
              <span>
                <i>9</i>条情报
              </span>
              <span style="marginLeft:.1rem;">
                <i>2</i>个初盘AI预测方案
              </span>
            </p>
            <img src="@/assets\images\match\favorite-grayicon2@2x.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      menusIndex: 0,
      currIndex: 0,
      data: [
        24,
        23,
        21,
        20,
        19,
        18,
        17,
        18,
        19,
        20,
        21,
        21,
        21,
        21,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        18,
        17,
        19
      ],
      radio1: 1,
      radios1: [
        {
          value: 1,
          isCheck: true
        },
        {
          value: 2,
          isCheck: false
        },
        {
          value: 3,
          isCheck: false
        }
      ]
    };
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    changemenusFunc(index) {
      this.menusIndex = index;
    },
    changeCurr(index) {
      this.currIndex = index;
    },
    // 绘制图表
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.mymoChart);
      let colors = ["#f3746e", "#30ca8e"];
      myChart.setOption({
        color: colors,
        tooltip: {
          trigger: "none",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          top: 70,
          bottom: 50
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              boundaryGap: false,
              lineStyle: {
                onZero: false,
                color: colors[1]
              }
            },
            data: ["15:03", "11:16"]
          },
          {
            type: "category",

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
            max: "30",
            min: "15",
            interval: 5
          }
        ],
        series: [
          {
            name: "月支出",
            type: "line",
            xAxisIndex: 1,
            smooth: false,
            data: this.data
          }
        ]
      });
    },
    chenk1(index) {
      // 先取消所有选中项
      this.radios1.forEach(item => {
        item.isCheck = false;
      });
      //再设置当前点击项选中
      this.radio1 = this.radios1[index].value;
      // 设置值，以供传递
      this.radios1[index].isCheck = true;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="../../../assets/css/ph/match.scss" scoped>
</style>