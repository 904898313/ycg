<template>
  <div class="soccergame">
    <div class="gameBox">
      <div class="gameItem" v-for="(item,index) in gameList">
        <div class="item_status">
          <a>正在进行中36′</a>
          <span>中甲</span>
        </div>
        <div class="item_team">
          <div class="tean_row">
            <div class="row_lf">
              <van-image class="team_icon" :src="imgUrl"></van-image>
              <span>广州恒大</span>
            </div>
            <span>0</span>
            <div class="team_triangle"></div>
          </div>
          <div class="tean_row">
            <div class="row_lf">
              <van-image class="team_icon" :src="imgUrl"></van-image>
              <span>广州恒大</span>
            </div>
            <span>0</span>
            <div class="team_triangle"></div>
          </div>
        </div>
        <div class="status_btn status_btn_1">直播中</div>
      </div>
    </div>
    <div class="checkMore">查看更多足球比赛 ></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl:'',
        gameList: [0,0,0,0]
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

<style src="../../../../assets/css/ph/home/soccergame.scss" lang="scss" scoped></style>
