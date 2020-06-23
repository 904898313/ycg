<template>
  <div class="footBallImg">
    <div class="game_lf_top">
      <p>足球图集</p>
      <span>查看更多>>></span>
    </div>
    <div class="footBall_bom">
      <div class="footBall_bom_lf">
        <el-image class="footBall_lf_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
        <p class="singleLineText">一分钟了解足彩规则让球...</p>
      </div>
      <div class="footBall_bom_cen">
        <div class="cen_top">
          <div class="cen_top_box">
            <el-image class="cen_top_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <p class="singleLineText">一分钟了解足彩规则让球...</p>
          </div>
          <div class="cen_top_box">
            <el-image class="cen_top_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <p class="singleLineText">一分钟了解足彩规则让球...</p>
          </div>
          <div class="cen_top_box">
            <el-image class="cen_top_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <p class="singleLineText">一分钟了解足彩规则让球...</p>
          </div>
        </div>
        <div class="cen_bom">
          <div class="cen_bom_box">
            <el-image class="cen_bom_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <p class="singleLineText">一分钟了解足彩规则让球...</p>
          </div>
          <div class="cen_bom_box">
            <el-image class="cen_bom_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
            <p class="singleLineText">一分钟了解足彩规则让球...</p>
          </div>
        </div>
      </div>
      <div class="footBall_bom_rt">
        <el-image class="footBall_rt_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
        <p class="singleLineText">一分钟了解足彩规则让球...</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        imgUrl:'',
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

<style src="../../../../assets/css/pc/home/footballimg.scss" lang="scss" scoped></style>
