<template>
  <div>
    <div class="title">
      <div class="top">
        <span>视频直播</span>
        <img src="@/assets/images/matchlive/zhibo@3x.png" alt />
      </div>
      <div class="bot">
        <span></span>
        <i></i>
      </div>
    </div>
    <div class="list">
      <div class="toggle">
        <span>01-04 星期六</span>
        <img
          src="@/assets/images/matchlive/arrow_down.png"
          :class="rotate?'stop':'go'"
          @click="rotateFun"
        />
      </div>
      <div class="versusdata" v-show="versus">
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo" @click="redirectFunc">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="toggle">
        <span>01-04 星期六</span>
        <img
          src="@/assets/images/matchlive/arrow_down.png"
          :class="rotate?'stop1':'go1'"
          @click="rotateFun1"
        />
      </div>
      <div class="versusdata">
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="list">
      <div class="toggle">
        <span>01-04 星期六</span>
        <img
          src="@/assets/images/matchlive/arrow_down.png"
          :class="rotate?'stop2':'go2'"
          @click="rotateFun2"
        />
      </div>
      <div class="versusdata">
        <div class="info">
          <ul>
            <li class="time">15:30</li>
            <li class="versusname">塔吉克斯坦超级联赛</li>
            <li class="clubname">斯托克VS伊斯塔拉夫山足球俱乐部</li>
            <li class="zhibo">超清直播</li>
            <li class="zhibo">其他信号</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      versus: true,
      rotate: false,
      data: []
    };
  },
  created() {},
  methods: {
    redirectFunc() {
      this.$router.push({
        name: "pc-matchlivedetails"
      });
    },
    rotateFun() {
      this.rotate = !this.rotate;
      this.versus = !this.versus;
    },

    rotateFun1() {
      this.rotate = !this.rotate;
    },
    rotateFun2() {
      this.rotate = !this.rotate;
    }
  }
};
</script>

<style src="../../../../assets/css/pc/match/livelist.scss" lang="scss" scoped></style>