<template>
  <div class="container">
    <pcNavBar navActivate="赛事推荐"></pcNavBar>
    <div class="inner-container">
      <!-- 赛事推荐中心 -->
      <header>
        <div class="left">
          <span class="title">赛事推荐中心</span>
          <span class="title-en">Events Recommended</span>
        </div>
        <div class="right">
          <span class="label">赛事推荐：</span>
          <div class="match-select">
            <el-select
              v-model="value"
              :value="options[0].label"
              class="ipts"
              :popper-append-to-body="false"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                size="mini"
              ></el-option>
            </el-select>
          </div>
        </div>
      </header>
      <!-- 球队对比区 -->
      <section>
        <div class="title">
          <ul>
            <li>
              <i></i> 白俄后备
            </li>
            <li>03-27 19:00</li>
            <li>
              <span>明斯克后备队</span>
              <img src alt />VS
              <img src alt />
              <span>明斯克后备队</span>
            </li>
            <li>
              <span>
                <i>9</i>条情报
              </span>
            </li>
            <li>
              <span>
                <i>2</i>个初盘AI预测方案
              </span>
            </li>
            <li>
              <img src="@/assets\images\match\collect-63@2x.png" alt />
              <img src="@/assets\images\match\borderbottom-fill63@2x.png" alt />
              <img src="@/assets\images\match\location-fill63@2x.png" alt />
            </li>
          </ul>
        </div>
        <div class="content">
          <div class="left">
            <div class="title">球队对比</div>
            <!-- 球队比分  -->
            <div class="record">
              <div class="battle">
                <div class="team">
                  <img
                    src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2188058051,896096260&fm=26&gp=0.jpg"
                    alt
                  />
                  <span>戈洛迪亚后备队</span>
                </div>
                <div class="vs">VS</div>
                <div class="team">
                  <img
                    src="https://dss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2188058051,896096260&fm=26&gp=0.jpg"
                    alt
                  />
                  <span>戈洛迪亚后备队</span>
                </div>
              </div>
              <div class="score">
                <div class="shenglv">
                  <p>历史交锋胜率</p>
                  <div class="progress">
                    <span class="red">0%</span>
                    <div class="progress-bar"></div>
                    <span class="bule">0%</span>
                  </div>
                </div>
                <div class="shenglv">
                  <p>最近6场比赛进球数</p>
                  <div class="progress">
                    <span class="red">10</span>
                    <div class="progress-bar"></div>
                    <span class="bule">9</span>
                  </div>
                </div>
                <div class="shenglv">
                  <p>最近6场比赛失球数</p>
                  <div class="progress">
                    <span class="red">12</span>
                    <div class="progress-bar"></div>
                    <span class="bule">8</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="result">
              <p class="zuijin">最近6场比赛战绩</p>
              <p class="siaguo">(右边为最近一场比赛赛果，W-赢、D-平、L-输)</p>
              <div class="winshow">
                <span
                  v-for="(item,index) in barList"
                  :key="index"
                  :class="{'win':item.flag==0,'flat':item.flag==1,'fail':item.flag==2}"
                >{{item.text}}</span>
              </div>
            </div>
          </div>
          <div class="right">
            <div class="tabsName">
              <div :class="currIndex==0?'active':''" @click="changecurr(0)">欧指</div>
              <div :class="currIndex==1?'active':''" @click="changecurr(1)">让球</div>
              <div :class="currIndex==2?'active':''" @click="changecurr(2)">进球数</div>
              <div :class="currIndex==3?'active':''" @click="changecurr(3)">优劣势分析</div>
            </div>
            <div class="chart">
              <!-- tabItem组件 -->
              <tab-item v-if="currIndex!==3"></tab-item>
              <tab-item4 v-if="currIndex==3"></tab-item4>
            </div>
          </div>
        </div>
      </section>
      <!-- 列表 -->
      <div class="list">
        <div class="info" v-for="(item,index) in 9" :key="index" :class="index%2==1?'diff':''">
          <div class="txt">
            <span>白俄后备</span>
          </div>
          <div class="time">03-27 19:00</div>
          <div class="battle">
            <span>明斯克后备队</span>
            <i>VS</i>
            <span>明斯克后备队</span>
          </div>
          <div class="count">
            <span>9</span>条情报
          </div>
          <div class="yuce">
            <span>2</span>个初盘AI预测方案
          </div>
          <div class="icons">
            <img src="@/assets\images\match\collect-63@2x.png" alt />
            <img src="@/assets\images\match\borderbottom-fill63@2x.png" alt />
            <img src="@/assets\images\match\location-fill63@2x.png" alt />
          </div>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
export default {
  components: {
    tabItem: () => import("./components/tabItem"),
    tabItem4: () => import("./components/tab4")
  },
  data() {
    return {
      options: [
        {
          value: "0",
          label: "全部"
        },
        {
          value: "1",
          label: "英超"
        }
      ],
      barList: [
        {
          text: "L",
          flag: 0
        },
        {
          text: "D",
          flag: 1
        },
        {
          text: "W",
          flag: 2
        },
        {
          text: "L",
          flag: 0
        },
        {
          text: "L",
          flag: 0
        },

        {
          text: "L",
          flag: 0
        },
        {
          text: "D",
          flag: 1
        },
        {
          text: "W",
          flag: 2
        },
        {
          text: "D",
          flag: 1
        },
        {
          text: "L",
          flag: 0
        },
        {
          text: "D",
          flag: 1
        },
        {
          text: "D",
          flag: 1
        }
      ],
      value: "0",
      currIndex: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurr(index) {
      this.currIndex = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/pc/match.scss" scoped>
</style>

<style lang="scss">
.match-select .el-input--suffix .el-input__inner {
  border: none;
  height: 30px;
  border-bottom: solid 1px #e1e1e1;
}
.match-select .el-select .el-input.is-focus .el-input__inner {
  border-color: #e1e1e1;
}
.match-select .el-select .el-input__inner:focus {
  border-color: #e1e1e1;
}
.match-select .el-input__icon {
  line-height: 30px;
}
</style>