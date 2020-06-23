<template>
  <div>
    <div class="circle">
      <div class="circleInfo" v-for="(item,index) in 3" :key="index">
        <p>进攻</p>
        <div class="circlenum">
          <span class="leftnum">32</span>
          <van-circle
            v-model="currentRate"
            :rate="rate"
            layer-color="#7ec3f6"
            :stroke-width="80"
            color="#214178"
            text
            size=".8rem"
          />
          <span class="rightnum">12</span>
        </div>
      </div>
    </div>
    <div class="progress">
      <p>控球率</p>
      <div class="mid">
        <div class="icons">
          <img src="@/assets\images\instantscore\jiaoqiu-icon@2x.png" alt />
          <img src="@/assets\images\instantscore\yelp.png" alt />
          <img src="@/assets\images\instantscore\redp.png" alt />
        </div>
        <div class="score">
          <span>0</span>
          <van-progress
            :percentage="50"
            color="#214187"
            track-color="#7ec3f6"
            :show-pivot="false"
            class="vanprogress"
          />
          <span>0</span>
        </div>
        <div class="icons">
          <img src="@/assets\images\instantscore\jiaoqiu-icon@2x.png" alt />
          <img src="@/assets\images\instantscore\yelp.png" alt />
          <img src="@/assets\images\instantscore\redp.png" alt />
        </div>
      </div>
      <p>控球率</p>
      <div class="mid">
        <div class="score">
          <span>9(4)</span>
          <van-progress
            :percentage="50"
            color="#214187"
            track-color="#7ec3f6"
            :show-pivot="false"
            class="vanprogress"
          />
          <span>11(5)</span>
        </div>
      </div>
    </div>
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
    <!-- 用户评论区 -->
    <div class="comment">
      <div class="tabs">
        <span :class="currid==0?'active':''" @click="changecurr(0)">文字直播</span>
        <span :class="currid==1?'active':''" @click="changecurr(1)">阵容数据</span>
        <span :class="currid==2?'active':''" @click="changecurr(2)">用户评论</span>
      </div>
      <div class="comment-region">
        <van-field v-model="value" placeholder="开始你的表演..." class="ipt-van" />
        <p>请自觉遵守互联网相关政策法规，评论内容只代表网友观点，与本网站立场无关！</p>
        <span class="submit">发表评论</span>
      </div>

      <div class="record">
        <div class="title">
          <span class="newcoment">网友最新评论</span>
          <span class="count">
            <i>共</i>
            <font>4</font>条评论
          </span>
        </div>
        <div class="line"></div>
        <div class="list">
          <div class="info" v-for="(item,index) in 2" :key="index">
            <div class="left">
              <img
                src="https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3900866082,146229289&fm=26&gp=0.jpg"
                alt
              />
            </div>
            <div class="right">
              <p class="name">游客41654566</p>
              <p class="content">这个问题由我帮你来回答,当初刚开始的时候我也是走了很多弯路，对于大小球的玩法，虽...</p>
              <div class="browse">
                <span class="time">2019-12-24 12:23</span>
                <div class="zancai">
                  <span class="zan">
                    <img src="@/assets\images\instantscore\assist_i2@3x.png" alt />
                    <font>23</font>
                  </span>
                  <span class="cai">
                    <img src="@/assets\images\instantscore\against_i@3x.png" alt />
                    <font>0</font>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="more">
            <span>查看更多</span>
            <van-icon name="arrow-down" />
          </div>
        </div>
      </div>
    </div>
    <!-- 指数列表 -->
    <div class="indexList">
      <div class="info">
        <div class="top">
          <span>欧赔指数</span>
          <span>
            查看历史相同欧赔
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="table">
          <div class="chu">
            <span class="name">初始</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
          <div class="zhong">
            <span class="name">终盘</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="rangqiu">
          <span>让球指数</span>
          <span>
            查看历史相同让球
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="table">
          <div class="chu">
            <span class="name">初始</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
          <div class="zhong">
            <span class="name">终盘</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
        </div>
      </div>

      <div class="info">
        <div class="daxiao">
          <span>大小指数</span>
          <span>
            查看历史相同让球
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="table">
          <div class="chu">
            <span class="name">初始</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
          <div class="zhong">
            <span class="name">终盘</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="pankou">
          <span>理论盘口</span>
          <span>
            了解理论盘口规则
            <van-icon name="arrow" />
          </span>
        </div>
        <div class="table">
          <div class="chu">
            <span class="name">初始</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
          <div class="zhong">
            <span class="name">终盘</span>
            <span>0.88</span>
            <span>0.92</span>
            <span>0.93</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 盘口复盘解密 -->
    <div class="jiemi">
      <div class="title">盘口复盘解密</div>
      <div class="jiemi-tabs">
        <span :class="jmcurrid==0?'active':''" @click="changejmcurr(0)">概述</span>
        <span :class="jmcurrid==1?'active':''" @click="changejmcurr(1)">欧赔</span>
        <span :class="jmcurrid==2?'active':''" @click="changejmcurr(2)">让球</span>
        <span :class="jmcurrid==3?'active':''" @click="changejmcurr(3)">大小</span>
        <span :class="jmcurrid==4?'active':''" @click="changejmcurr(4)">理论</span>
      </div>
      <div class="content">
        <p>本场比赛，索尔斯克亚派出了3中卫、5后卫的防守阵型，林德洛夫搭档马奎尔、卢克肖，坐镇后防线，小将威廉姆斯和万比萨卡一左一右，封住曼联两条边路，马蒂奇和弗雷徳筑起来强硬中场屏幕，马夏尔、詹姆斯以及布鲁诺组成了反击第一梯队。</p>
      </div>
    </div>

    <!-- 相关新闻 -->
    <div class="relnews">
      <div class="title">曼城 VS 利物浦相关新闻</div>
      <div class="list">
        <div class="info" v-for="(item,index) in 4" :key="index">
          <div class="left">
            <img
              src="http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg"
              alt
            />
          </div>
          <div class="right">
            <p>欧冠杯小组赛有哪些规律？欧冠杯小组赛的球队多少？</p>
            <span>2020-02-07</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 比赛复盘推荐 -->
    <div class="replay">
      <div class="title">其他比赛复盘推荐</div>
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
      currentRate: 20,
      rate: 30,
      currid: 2,
      jmcurrid: 0,
      value: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurr(index) {
      this.currid = index;
    },
    changejmcurr(index) {
      this.jmcurrid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/warreport.scss" scoped>
</style>
<style lang="scss">
.comment-region .van-cell {
  min-height: 2.1rem;
  background-color: #f7f7fb;
}
</style>