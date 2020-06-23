<template>
  <div class="container">
    <pcNavBar navDown="视频直播" navActivate="直播回放"></pcNavBar>
    <div class="inner-container">
      <div class="left">
        <live-list></live-list>
      </div>
      <div class="right">
        <live-recommend></live-recommend>
        <high-lights :data="lightsList"></high-lights>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import liveList from "./components/livelist";
import liveRecommend from "./components/recommend";
export default {
  components: {
    liveList,
    liveRecommend,
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
  methods: {}
};
</script>

<style src="@/assets/css/pc/match/matchlive.scss" lang="scss" scoped></style>