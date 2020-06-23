<template>
  <div>
    <!--导航栏-->
    <ph-nav-bar nav-activate="首页"></ph-nav-bar>
    <!--Swipe 轮播-->
    <van-swipe class="swipeBox" :autoplay="5000" indicator-color="#feb920">
      <template v-for="(item,index) in swipeList">
        <van-swipe-item class="swipe_item">
          <van-image class="swipe_img" :src="imgUrl"></van-image>
          <div class="swipe_text singleLineText">西甲联赛投注策略：皇马盘路走势分析</div>
        </van-swipe-item>
      </template>
    </van-swipe>
    <!--主体-->
    <div class="homeMain">
      <!--足球比赛-->
      <soccer-game></soccer-game>
      <!--热门球队-->
      <hot-ball></hot-ball>
      <!--赛事推荐-->
      <recommend></recommend>
      <!--积分榜-->
      <integral></integral>
      <!--AI预测-->
      <div style="height: 0.96rem;background-color: #ffffff;margin-top: 0.2rem"></div>
      <!--彩经学院-->
      <college></college>
      <!--精彩视频-->
      <great-video></great-video>
      <!--足球问答-->
      <answer></answer>
      <!--足球图集-->
      <foot-ball-img></foot-ball-img>
    </div>
  </div>
</template>

<script>
  export default {
    components:{
      SoccerGame: ()=>import('./components/soccergame'),
      HotBall: ()=>import('./components/hot'),
      Recommend: ()=>import('./components/recommend'),
      Integral: ()=>import('./components/integral'),
      College: ()=>import('./components/college'),
      GreatVideo: ()=>import('./components/greatvideo'),
      Answer: ()=>import('./components/answer'),
      FootBallImg: ()=>import('./components/footballimg')
    },
    data() {
      return {
        imgUrl:'',
        swipeList:[0,0,0]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
    },
    methods: {

    }
  };
</script>
<style lang="scss">
  .swipeBox .van-swipe__indicators{
    right: 0;
    left: auto;
  }
</style>

<style src="../../../assets/css/ph/home.scss" lang="scss" scoped></style>
