<template>
  <div class="videoBox">
    <div class="game_lf_top">
      <p>精彩视频</p>
      <span>查看更多>>></span>
    </div>
    <div class="video_bom">
      <div class="video_item" v-for="(item,index) in videlList">
        <div class="video_top">
          <el-image class="video_top_img" :src="imgUrl"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
          <div class="video_top_btn">
            <img src="../../../../assets/images/home/play.png">
            <span>{{item.time}}</span>
          </div>
        </div>
        <p class="singleLineText">{{item.videoTitle}}</p>
        <div class="video_item_bom">
          <span>{{item.createTime}}</span>
          <div class="video_bom_rt">
            <div class="videol_info">
              <img src="../../../../assets/images/home/comment.png"><span>{{item.comment?item.comment:0}}</span>
            </div>
            <div class="videol_info">
              <img src="../../../../assets/images/home/check.png"><span>{{item.browse?item.browse:0}}</span>
            </div>
            <div class="videol_info">
              <img src="../../../../assets/images/home/praise.png"><span>{{item.good?item.good:0}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as home from '../../../../api/home';
  export default {
    data() {
      return {
        imgUrl:'',
        videlList:[]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
      this.getCollegeVidel()
    },
    methods: {
      // 彩经学院
      getCollegeVidel(){
        home.getCollegeVidelList({ current: 1, size: 8 }).then(res => {
          if(res.data.code === 1){
            this.videlList = res.data.data.records;
          }
        })
      },
    }

  };
</script>

<style src="../../../../assets/css/pc/home/greatvideo.scss" lang="scss" scoped></style>
