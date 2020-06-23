<template>
  <div class="recommendBox">
    <div class="navTitle">
      <b>赛事推荐</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <div class="eventBox">
      <div class="event_item" v-for="(item,index) in eventList">
        <div class="item_top"><em>03-07 14:40</em><span>英超第十三轮</span></div>
        <div class="item_vs">
          <div class="vs_lf">
            <b>巴拉多利德</b>
            <van-image class="event_icon" :src="imgUrl"></van-image>
          </div>
          <span>VS</span>
          <div class="vs_rt">
            <van-image class="event_icon" :src="imgUrl"></van-image>
            <b>巴拉多利德</b>
          </div>
        </div>
        <div class="item_bom">
          <p><span>0</span>个情报<span>0</span>个初盘AI预测</p>
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
        eventList:[0,0,0]
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

<style src="../../../../assets/css/ph/home/recommend.scss" lang="scss" scoped></style>
