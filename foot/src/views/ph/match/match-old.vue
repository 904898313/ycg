<template>
  <div class="container">
       <!--导航栏-->
    <ph-nav-bar nav-activate="赛事推荐"></ph-nav-bar>
    <div class="mobile-box">
      <div class="content">
        <div class="header">
          <div class="header-th">
            <div class="header-left">
              <span>03-27 17:30</span>
              <span>白俄后备</span>
            </div>
            <div class="header-right">
              <span>距开赛还有：</span>
              <span>2:57:24</span>
            </div>
          </div>
          <div class="title">
            <span>戈洛迪亚后备队</span>
            <i>VS</i>
            <span>索利戈尔斯克矿工</span>
          </div>
          <div class="icons">
            <img src="@/assets/images/match/favorite-grayicon@2x.png" alt />
            <img src="@/assets/images/match/live_i@2x.png" alt />
          </div>
        </div>
        <!-- navList -->
        <div class="navList">
          <ul>
            <li>
              <span :class="tabId==0?'active':''" @click="swichTabs(0)">欧指</span>
            </li>
            <li>
              <span :class="tabId==1?'active':''" @click="swichTabs(1)">让球</span>
            </li>
            <li>
              <span :class="tabId==2?'active':''" @click="swichTabs(2)">进球数</span>
            </li>
            <li>
              <span :class="tabId==3?'active':''" @click="swichTabs(3)">优劣势分析</span>
            </li>
          </ul>
        </div>

        <div class="tr-btn">
          <span :class="btnIdx==0?'active':''" @click="btnSwich(0)">主胜</span>
          <span :class="btnIdx==1?'active':''" @click="btnSwich(1)">平手</span>
          <span :class="btnIdx==2?'active':''" @click="btnSwich(2)">客胜</span>
        </div>

        <!-- echarts -->
        <div class="m-charts">
          <div class="my-charts" ref="mymoChart"></div>
        </div>

        <div class="tables">
          <div class="trs">
            <span class="diff">欧指</span>
            <span>4.5</span>
            <span class="juse">4.5</span>
            <span>1.53</span>
          </div>
          <div class="trs">
            <span class="diff">让球</span>
            <span>0.80</span>
            <span class="juse">-1</span>
            <span>1.00</span>
          </div>
        </div>

        <div class="listmo">
          <div class="titles">
            *过去3年相似指数出现1016次其中主胜
            <i>21%</i>平局
            <i>20%</i>、客胜
            <i>58%</i>
          </div>
          <div class="tbodys">
            <span>公司</span>
            <span>初始指数</span>
            <span>即时指数</span>
          </div>
          <div class="items">
            <div class="item">
              <div class="arz">
                <i></i>
                <span>BET365</span>
              </div>
              <ul>
                <li>
                  <span>4.5</span>
                  <span>4.5</span>
                  <span>1.53</span>
                </li>
                <li>
                  <span class="up">
                    5.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span>4.5</span>
                  <span class="down">
                    1.53
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                </li>
                <li class="baifen">
                  <span>20%</span>
                  <span>20%</span>
                  <span>60%</span>
                </li>
                <li>
                  <span class="up">
                    4.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span class="down">
                    4.5
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                  <span class="up">
                    1.53
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                </li>
              </ul>
            </div>
            <div class="item">
              <div class="arz">
                <i></i>
                <span>10BET</span>
              </div>
              <ul>
                <li>
                  <span>4.5</span>
                  <span>4.5</span>
                  <span>1.53</span>
                </li>
                <li>
                  <span class="up">
                    5.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span>4.5</span>
                  <span class="down">
                    1.53
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                </li>
                <li class="baifen">
                  <span>20%</span>
                  <span>20%</span>
                  <span>60%</span>
                </li>
                <li>
                  <span class="up">
                    4.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span class="down">
                    4.5
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                  <span class="up">
                    1.53
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                </li>
              </ul>
            </div>
            <div class="item">
              <div class="arz">
                <i></i>
                <span>SB</span>
              </div>
              <ul>
                <li>
                  <span>4.5</span>
                  <span>4.5</span>
                  <span>1.53</span>
                </li>
                <li>
                  <span class="up">
                    5.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span>4.5</span>
                  <span class="down">
                    1.53
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                </li>
                <li class="baifen">
                  <span>20%</span>
                  <span>20%</span>
                  <span>60%</span>
                </li>
                <li>
                  <span class="up">
                    4.5
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                  <span class="down">
                    4.5
                    <img src="../../../assets/images/match/growth_i@2x.png" alt />
                  </span>
                  <span class="up">
                    1.53
                    <img src="../../../assets/images/match/falling_i@2x.png" alt />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="more">
            <span>查看预测方案</span>
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>

        <div class="temavs">
          <div class="temavs-top">
            <div class="thums">
              <span>03-27 17:30</span>
              <span>白俄后备</span>
            </div>
            <div>
              <img src="../../../assets/images/match/favorite-grayicon@2x.png" alt />
              <img src="../../../assets/images/match/live_i@2x.png" alt />
            </div>
          </div>
          <div class="temavs-bot">
            <span>戈洛迪亚后备队</span>
            <i>VS</i>
            <span>索利戈尔斯克矿工</span>
          </div>
        </div>
        <div class="temavs">
          <div class="temavs-top">
            <div class="thums">
              <span>03-27 17:30</span>
              <span>白俄后备</span>
            </div>
            <div>
              <img src="../../../assets/images/match/favorite-grayicon@2x.png" alt />
              <img src="../../../assets/images/match/live_i@2x.png" alt />
            </div>
          </div>
          <div class="temavs-bot">
            <span>戈洛迪亚后备队</span>
            <i>VS</i>
            <span>索利戈尔斯克矿工</span>
          </div>
        </div>
        <div class="temavs">
          <div class="temavs-top">
            <div class="thums">
              <span>03-27 17:30</span>
              <span>白俄后备</span>
            </div>
            <div>
              <img src="../../../assets/images/match/favorite-grayicon@2x.png" alt />
              <img src="../../../assets/images/match/live_i@2x.png" alt />
            </div>
          </div>
          <div class="temavs-bot">
            <span>戈洛迪亚后备队</span>
            <i>VS</i>
            <span>索利戈尔斯克矿工</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabId: 0,
      btnIdx: 0,
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
      ]
    };
  },
  created() {},
  mounted() {
    this.drawLine();
  },
  methods: {
    swichTabs(index) {
      this.tabId = index;
    },
    btnSwich(index) {
      this.btnIdx = index;
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.mymoChart);

      myChart.setOption({
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu"]
        },
        yAxis: {
          type: "value",
          min: "15",
          splitNumber: 3
        },
        series: [
          {
            data: [15, 20, 25, 30, 40, 60],
            type: "line"
          }
        ]
      });
      window.onresize = function() {
        myChart.resize();
      };
    }
  }
};
</script>

<style src="../../../assets/css/ph/match-old.scss" lang="scss" scoped></style>
