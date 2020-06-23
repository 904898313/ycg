<template>
  <div class="greatvideoBox">
    <div class="navTitle">
      <b>精彩视频</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <div class="videoList">
      <div class="video_item" v-for="(item,index) in videoList">
        <div class="item_top">
          <van-image class="item_img" :src="imgUrl"></van-image>
          <div class="video_top_btn">
            <img src="../../../../assets/images/home/play.png">
            <span>0:30</span>
          </div>
        </div>
        <p class="multilineText2">西甲深盘怎么买？西甲深 盘收米技巧（一）</p>
        <div class="video_item_bom">
          <div class="videol_info">
            <img src="../../../../assets/images/home/comment.png"><span>0</span>
          </div>
          <div class="videol_info">
            <img src="../../../../assets/images/home/check.png"><span>0</span>
          </div>
          <div class="videol_info">
            <img src="../../../../assets/images/home/praise.png"><span>0</span>
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
        videoList:[0,0,0]
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
  .item_img img{border-radius: 0.04rem 0.04rem 0 0;}
</style>
<style src="../../../../assets/css/ph/home/greatvideo.scss" lang="scss" scoped></style>
