<template>
  <div>
    <!-- 图例进球数 -->
    <div class="legend">
      <div class="top">
        <div class="left">
          <span>0'</span>
          <span>15'</span>
          <span>30'</span>
        </div>
        <div class="right">
          <span>60'</span>
          <span>75'</span>
          <span>90'</span>
        </div>
      </div>
      <div class="mid">
        <div class="left">
          <img src="@/assets/images/instantscore/lwp@2x.png" alt />
          <img src="@/assets/images/instantscore/mancheng@2x.png" alt />
        </div>
        <div class="vanprogress1">
          <van-progress
            :percentage="70"
            color="#12cd7c"
            track-color="#f6f8f7"
            :show-pivot="false"
            class="vanprogress1"
          />
          <img src="@/assets\images\instantscore\jinqiu-icon@2x.png" alt class="ball" />
        </div>
      </div>
      <div class="line"></div>
      <div class="rule">
        <ul>
          <li>
            <img src="@/assets\images\instantscore\jinqiu-icon@2x.png" alt />
            <span>进球</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\dianqiu-icon@2x.png" alt />
            <span>点球</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\wulongqiu-icon@2x.png" alt />
            <span>乌龙球</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\shiqiu.png" alt />
            <span>点球未进</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\yelp.png" alt />
            <span>黄牌</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\huanren-icon@2x.png" alt />
            <span>换人</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\jiaoqiu-icon@2x.png" alt />
            <span>角球</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\zhugong.png" alt />
            <span>助攻</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\lianghuangyihong-icon@2x.png" alt />
            <span>两黄一红</span>
          </li>
          <li>
            <img src="@/assets\images\instantscore\redp.png" alt />
            <span>红牌</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 文字直播  && 阵容数据 -->
    <div class="livetext">
      <div class="title">
        <span :class="currid==0?'active':''" @click="changecurr(0)">文字直播</span>
        <span :class="currid==1?'active':''" @click="changecurr(1)">阵容数据</span>
      </div>
      <div class="step">
        <div class="one">
          <p>欢迎来到帮众体育直播间,比赛即将开始！</p>
          <p>
            <i>49'</i>第一张红牌，裁判出示了第一张红牌给了利物浦队
          </p>
          <p>
            <i>49'</i>第一张红牌，裁判出示了第一张红牌给了利物浦队
          </p>
          <p>
            <i>49'</i>第一张红牌，裁判出示了第一张红牌给了利物浦队
          </p>
          <p>
            <i>49'</i>第一张红牌，裁判出示了第一张红牌给了利物浦队
          </p>
        </div>
        <div class="more">
          查看更多
          <van-icon name="arrow-down" />
        </div>
      </div>
    </div>

    <!-- 比赛复盘推荐 -->
    <div class="replay">
      <div class="title">
        <p class="tuijian">其他比赛复盘推荐</p>
        <p class="more">查看更多></p>
      </div>
      <div class="list">
        <div class="info" v-for="(item,index) in 3" :key="index">
          <div class="top">
            <p>04-18 21:30</p>
          </div>
          <div class="mid">
            <p>
              巴拉多利德
              <img src="@/assets/images/instantscore/lwp@2x.png" alt />
            </p>
            <span>3-1</span>
            <p>
              <img src="@/assets/images/instantscore/lwp@2x.png" alt />莱莱加内斯
            </p>
          </div>
          <div class="bot">
            <span>比赛前瞻</span>
            <span>暂无回放</span>
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
      currid: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurr(index) {
      this.currid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/matchlive.scss" scoped>
</style>