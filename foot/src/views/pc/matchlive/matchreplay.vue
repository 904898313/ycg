<template>
  <div class="container">
    <pcNavBar navDown="录像回放" navActivate="直播回放"></pcNavBar>
    <div class="inner-container">
      <div class="left">
        <div class="title">
          <div class="top">
            <span>
              录像回放
              <img src="@/assets/images/matchlive/huifang_i@2x.png" />
            </span>
            <p>
              目前共有
              <i>13场</i>比赛即将直播,去看看视频直播>>>
            </p>
          </div>
          <div class="bot">
            <span></span>
            <i></i>
          </div>
        </div>
        <replay-list></replay-list>
      </div>
      <div class="right">
        <replay-recommend></replay-recommend>
        <high-lights :data="lightsList"></high-lights>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import replayList from "./components/replaylist";
import replayRecommend from "./components/recommend";
export default {
  components: {
    replayList,
    replayRecommend,
    highLights: () => import("./components/righthot")
  },
  data() {
    return {
      lightsList: [
        {
          text: "阿圭罗转身劲射破门 博阿松门前补射扳平"
        },
        {
          text: "此球只应天上有！古蒂“上帝脚后跟”让对方门将投降"
        },
        {
          text: "C罗任意球破门最窒息 皇马本赛季夺冠精彩时刻"
        },
        {
          text: "无可奈何 当世界最强防守球员遭遇梅西"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style src="@/assets/css/pc/match/matchreplay.scss" lang='scss' scoped>
</style>