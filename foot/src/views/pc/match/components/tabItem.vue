<template>
  <div class="chartsbox">
    <div class="top">
      <div class="radios">
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
          {{item.label}}
        </div>
      </div>
      <div class="charts">
        <div class="my-charts" ref="myChart"></div>
        <div class="tongji">
          <div class="number">
            <span>1.264</span>
            <span>2.264</span>
            <span>0.925</span>
          </div>
          <div class="count">
            <p>过去3年相似指数共出现1016次其中</p>
          </div>
          <div class="number diff">
            <span>胜</span>
            <span>平</span>
            <span>负</span>
          </div>
          <div class="number">
            <span>21%</span>
            <span>20%</span>
            <span>58%</span>
          </div>
        </div>
      </div>
    </div>
    <div class="tables">
      <div class="thead">
        <span>公司</span>
        <span>初始指数</span>
        <span>即时指数</span>
        <span>返还率</span>
        <span>凯利指数</span>
        <span>功能</span>
      </div>
      <div class="tbody">
        <div class="trs">
          <div class="theme">
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
              <span>BET365</span>
            </div>
          </div>
          <span class="chushi">0.875</span>
          <span class="chushi">3.756</span>
          <span class="chushi">0.925</span>
          <span class="jishi">1.264</span>
          <span class="jishi">2.264</span>
          <span class="jishi" style="backgroundColor:#2fcc87;color:#ffffff;">0.925</span>
          <span class="fanhuan">80%</span>
          <span class="kaili">1.264</span>
          <span class="kaili">2.264</span>
          <span class="kaili">2.925</span>
          <span class="tongpei">历史同赔</span>
        </div>
        <div class="trs">
          <div class="theme">
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
              <span>BET365</span>
            </div>
          </div>
          <span class="chushi">0.875</span>
          <span class="chushi">3.756</span>
          <span class="chushi">0.925</span>
          <span class="jishi">1.264</span>
          <span class="jishi">2.264</span>
          <span class="jishi" style="backgroundColor:#2fcc87;color:#ffffff;">0.925</span>
          <span class="fanhuan">80%</span>
          <span class="kaili">1.264</span>
          <span class="kaili">2.264</span>
          <span class="kaili">2.925</span>
          <span class="tongpei">历史同赔</span>
        </div>
        <div class="trs">
          <div class="theme">
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
              <span>BET365</span>
            </div>
          </div>
          <span class="chushi">0.875</span>
          <span class="chushi">3.756</span>
          <span class="chushi">0.925</span>
          <span class="jishi" style="backgroundColor:#f55e53;color:#ffffff;">1.264</span>
          <span class="jishi" style="backgroundColor:#f55e53;color:#ffffff;">2.264</span>
          <span class="jishi">0.925</span>
          <span class="fanhuan">80%</span>
          <span class="kaili">1.264</span>
          <span class="kaili">2.264</span>
          <span class="kaili">2.925</span>
          <span class="tongpei">历史同赔</span>
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
      radio: 1,
      radio1: 1,
      radios: [
        {
          label: "主胜",
          value: 1,
          isChecked: true
        },
        {
          label: "平",
          value: "2",
          isChecked: false
        },
        {
          label: "客胜",
          value: "3",
          isChecked: false
        }
      ],
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
      ],
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
      ]
    };
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
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
    check(index) {
      // 先取消所有选中项
      this.radios.forEach(item => {
        item.isChecked = false;
      });
      //再设置当前点击项选中
      this.radio = this.radios[index].value;
      // 设置值，以供传递
      this.radios[index].isChecked = true;
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
<style lang='scss' src="@/assets/css/pc/match/tabItem.scss" scoped>
</style>