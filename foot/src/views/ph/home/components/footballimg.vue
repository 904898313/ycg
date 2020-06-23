<template>
  <div class="footballimgBox">
    <div class="navTitle">
      <b>足球图集</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <div class="ballList">
      <div class="ball_item" v-for="(item,index) in ballList">
        <div class="ball_top">
          <van-image class="ball_img" :src="imgUrl"></van-image>
          <div class="ball_num">
            <img src="../../../../assets/images/home/photo.png">
            <span>0张</span>
          </div>
        </div>
        <p class="multilineText2">德甲联赛即将启动  那些巨星们都准备好了吗</p>
        <div class="item_info">
          <span>2020-03-18</span>
          <div class="item_check">
            <img src="../../../../assets/images/home/check.png">
            <span>0</span>
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
        imgUrl:'',
        ballList:[0,0,0]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
    },
    methods: {}

  };
</script>
<style lang="scss">
  .ball_img img{ border-radius: 0.04rem 0.04rem 0 0;}
</style>
<style src="../../../../assets/css/ph/home/footballimg.scss" lang="scss" scoped></style>
