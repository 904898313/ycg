<template>
  <div class="collegeBox">
    <div class="navTitle">
      <b>彩经学院</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <div class="collegeList">
      <div class="college_item" v-for="(item,index) in collegeList">
        <div class="item_lf">
          <van-image class="college_img" :src="imgUrl"></van-image>
          <span class="tag_one">欧赔思维</span>
          <span class="tag_two">新手小白</span>
        </div>
        <div class="item_rt">
          <p class="multilineText2">西甲有默契球吗？西甲有哪些默契 球？</p>
          <div class="item_rt_bom">
            <span>2020-02-07</span>
            <div class="item_comment">
              <div class="comment_icon">
                <img src="../../../../assets/images/home/comment.png">
                <span>0</span>
              </div>
              <div class="comment_icon">
                <img src="../../../../assets/images/home/check.png">
                <span>0</span>
              </div>
              <div class="comment_icon">
                <img src="../../../../assets/images/home/praise.png">
                <span>0</span>
              </div>
            </div>
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
        collegeList:[0,0,0,0]
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
  .college_img img{
    border-radius: 0.04rem;
  }
</style>
<style src="../../../../assets/css/ph/home/college.scss" lang="scss" scoped></style>
