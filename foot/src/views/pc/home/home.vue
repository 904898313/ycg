<template>
  <div>
    <!--导航组件-->
    <pc-nav-bar nav-activate="首页"></pc-nav-bar>
    <!--主体内容-->
    <div class="homeMain">
      <!--1200wh-->
      <div class="homeWh">
        <!--热门足球-->
        <hot></hot>
        <!--赛事推荐-->
        <recommend></recommend>
        <!--AI预测数据-->
        <div
          style="width: 100%;height: 162px;background-color: #ffffff;margin-top: 20px"
          @click="aifun"
        ></div>
        <!--彩经学院-->
        <college></college>
        <!--精彩视频-->
        <great-video></great-video>
        <!--足球图集-->
        <foot-tall-img></foot-tall-img>
      </div>
    </div>
    <!--底部组件-->
    <pc-footer></pc-footer>
  </div>
</template>

<script>
import Hot from "./components/hot";
import Recommend from "./components/recommend";
import College from "./components/college";
import GreatVideo from "./components/greatvideo";
import footTallImg from "./components/footballimg";
export default {
  components: { Hot, Recommend, College, GreatVideo, footTallImg },
  data() {
    return {};
  },
  created() {},
  methods: {
    aifun() {
      this.isLogin();
    }
  }
};
</script>
<style src="../../../assets/css/pc/home.scss" lang="scss" scoped></style>
