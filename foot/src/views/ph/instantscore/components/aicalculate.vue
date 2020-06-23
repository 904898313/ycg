<template>
  <div>
    <!-- ai预测 -->
    <div class="aicalculate">
      <section>
        <div class="divine">
          <p>欧赔预测</p>
          <div>
            <span>赛前大数据</span>
            <i>|</i>
            <span>AI指数</span>
            <span>8.3</span>
            <van-icon name="question-o" class="question" />
          </div>
        </div>
        <div class="oupeidata">
          <div class="title">
            <span>赔率公司</span>
            <span></span>
            <span>主胜</span>
            <span>平局</span>
            <span>客胜</span>
            <span class="kaili">凯利指数</span>
          </div>
          <div class="tables">
            <div class="left">
              <div class="name">
                BET365
                <i>主</i>
              </div>
              <div class="cut">
                <span>初始</span>
                <span>即时</span>
              </div>
            </div>
            <div class="right">
              <span v-for="(item,index) in oupeidata" :key="index">{{item.text}}</span>
            </div>
          </div>
          <div class="check">
            <div :class="currid==0?'active':''" @click="check(0)">
              <i></i> 主胜3.08
            </div>
            <div :class="currid==1?'active':''" @click="check(1)">
              <i></i> 平局0.92
            </div>
            <div :class="currid==2?'active':''" @click="check(2)">
              <i></i> 客胜2.93
            </div>
          </div>
          <div class="jiedu">
            <p>AI推荐解读：</p>
            <span>本场比赛符合AI大数据预测200条法则里的72条规则。</span>
          </div>
        </div>
      </section>
      <section>
        <div class="divine">
          <p>让球盘预测</p>
          <div>
            <span>赛前大数据</span>
            <i>|</i>
            <span>AI指数</span>
            <span>8.3</span>
            <van-icon name="question-o" class="question" />
          </div>
        </div>
        <div class="oupeidatas">
          <div class="title-diff">
            <van-dropdown-menu active-color="#ee0a24">
              <van-dropdown-item v-model="company" :options="option" />
            </van-dropdown-menu>
            <span>主队</span>
            <span>初始</span>
            <span>客队</span>
            <span>即时</span>
            <span>变化时间</span>
          </div>
          <div class="tables-diff">
            <div class="left">
              <div class="name">
                BET365
                <i>主</i>
              </div>
            </div>
            <div class="right">
              <div>
                <span>0.950</span>
              </div>
              <div>
                <span>-0.75</span>
              </div>
              <div>
                <span>0.850</span>
              </div>
              <div>
                <span>-0.5</span>
              </div>
              <div>
                <span>-</span>
              </div>
            </div>
          </div>
          <div class="check">
            <div :class="currid==0?'active':''" @click="check(0)">
              <i></i> 大3.08
            </div>
            <div :class="currid==1?'active':''" @click="check(1)">
              <i></i> 三球
            </div>
            <div :class="currid==2?'active':''" @click="check(2)">
              <i></i> 小2.93
            </div>
          </div>
          <div class="jiedu">
            <p>AI推荐解读：</p>
            <span>本场比赛符合AI大数据预测200条法则里的72条规则。</span>
          </div>
        </div>
      </section>
      <section>
        <div class="divine">
          <p>角球预测</p>
          <div>
            <span>赛前大数据</span>
            <i>|</i>
            <span>AI指数</span>
            <span>8.3</span>
            <van-icon name="question-o" class="question" />
          </div>
        </div>
        <div class="oupeidatas">
          <div class="title-diff">
            <van-dropdown-menu active-color="#ee0a24">
              <van-dropdown-item v-model="company" :options="option" />
            </van-dropdown-menu>
            <span>主队</span>
            <span>初始</span>
            <span>客队</span>
            <span>即时</span>
            <span>变化时间</span>
          </div>
          <div class="tables-diff">
            <div class="left">
              <div class="name">
                BET365
                <i>主</i>
              </div>
            </div>
            <div class="right">
              <div>
                <span>0.950</span>
              </div>
              <div>
                <span>-0.75</span>
              </div>
              <div>
                <span>0.850</span>
              </div>
              <div>
                <span>-0.5</span>
              </div>
              <div>
                <span>-</span>
              </div>
            </div>
          </div>
          <div class="check">
            <div :class="currid==0?'active':''" @click="check(0)">
              <i></i> 大3.08
            </div>
            <div :class="currid==1?'active':''" @click="check(1)">
              <i></i> 三球
            </div>
            <div :class="currid==2?'active':''" @click="check(2)">
              <i></i> 小2.93
            </div>
          </div>
          <div class="jiedu">
            <p>AI推荐解读：</p>
            <span>本场比赛符合AI大数据预测200条法则里的72条规则。</span>
          </div>
        </div>
      </section>

      <!-- 角球预测 -->
      <div class="corner">
        <div class="divine">
          <p>角球预测</p>
          <div>
            <span>赛前大数据</span>
            <i>|</i>
            <span>AI指数</span>
            <span>8.3</span>
            <van-icon name="question-o" class="question" />
            <div class="ops">
              <van-dropdown-menu active-color="#ee0a24">
                <van-dropdown-item v-model="company" :options="option" />
              </van-dropdown-menu>
            </div>
          </div>
        </div>
        <div class="team">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <span>利物浦</span>
        </div>
        <div class="tables">
          <div class="thead">
            <span>全部</span>
            <span>赛</span>
            <span>平均</span>
            <span>获得</span>
            <span>丢失</span>
            <span>胜</span>
            <span>平</span>
            <span>负</span>
            <span>胜率</span>
          </div>
          <div class="tbody">
            <span>总计</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>主场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>客场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>近六场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
        </div>
        <div class="team">
          <img src="@/assets/images/instantscore/mancheng@2x.png" alt />
          <span>曼彻斯特城</span>
        </div>
        <div class="tables">
          <div class="thead">
            <span>全部</span>
            <span>赛</span>
            <span>平均</span>
            <span>获得</span>
            <span>丢失</span>
            <span>胜</span>
            <span>平</span>
            <span>负</span>
            <span>胜率</span>
          </div>
          <div class="tbody">
            <span>总计</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>主场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>客场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>
          <div class="tbody">
            <span>近六场</span>
            <span>14</span>
            <span>8.4</span>
            <span>4.5</span>
            <span>3.9</span>
            <span>6</span>
            <span>2</span>
            <span>6</span>
            <span>42.9%</span>
          </div>

          <div class="check">
            <div :class="currid==0?'active':''" @click="check(0)">
              <i></i> 高于7.5
            </div>
            <div :class="currid==1?'active':''" @click="check(1)">
              <i></i> 低于7.5
            </div>
          </div>
          <div class="jiedu">
            <p>AI推荐解读：</p>
            <span>本场比赛符合AI大数据预测200条法则里的72条规则。</span>
          </div>
        </div>
      </div>
      <!-- 波胆预测 -->
      <div class="wavegall">
        <div class="divine">
          <p>波胆预测</p>
          <div>
            <span>赛前大数据</span>
            <i>|</i>
            <span>AI指数</span>
            <span>8.3</span>
            <van-icon name="question-o" class="question" />
          </div>
        </div>
        <div class="tables">
          <div class="thead">
            <span>
              <img src="@/assets/images/instantscore/lwp@2x.png" alt />利物浦
            </span>
            <i>比分</i>
            <span>
              曼彻斯特城
              <img src="@/assets/images/instantscore/mancheng@2x.png" alt />
            </span>
          </div>
          <div class="tbody">
            <div class="trs">
              <span>3</span>
              <i>1:0</i>
              <span>3</span>
            </div>
            <div class="trs">
              <span>3</span>
              <i>1:0</i>
              <span>3</span>
            </div>
            <div class="trs">
              <span>3</span>
              <i>1:0</i>
              <span>3</span>
            </div>
            <div class="trs">
              <span>3</span>
              <i>1:0</i>
              <span>3</span>
            </div>
            <div class="trs">
              <p>查看更多></p>
            </div>
          </div>
        </div>
        <div class="check">
          <div :class="currid==0?'active':''" @click="check(0)">
            <i></i> 高于7.5
          </div>
          <div :class="currid==1?'active':''" @click="check(1)">
            <i></i> 低于7.5
          </div>
        </div>
        <div class="jiedu">
          <p>AI推荐解读：</p>
          <span>本场比赛符合AI大数据预测200条法则里的72条规则。</span>
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
      oupeidata: [
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        },
        {
          text: 0.88
        }
      ],
      option: [
        {
          value: 0,
          text: "一公司"
        },
        {
          value: 1,
          text: "二公司"
        }
      ],
      company: 0,
      currid: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    check(index) {
      this.currid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/aicalculate.scss" scoped>
</style>

<style lang="scss">
.oupeidatas .title-diff .van-dropdown-menu__bar {
  height: 0.58rem;
  background-color: #f6f7fb;
  width: 1.34rem;
  display: flex;
  justify-content: center;
  margin-left: 0.24rem;
}
.oupeidatas .title-diff .van-dropdown-menu__title {
  color: #999999;
  font-size: 0.24rem;
}
.corner .van-dropdown-menu__bar {
  height: 0.58rem;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  margin-left: 0.24rem;
}

.corner .van-dropdown-menu__title {
  color: #999999;
  font-size: 0.24rem;
}
</style>