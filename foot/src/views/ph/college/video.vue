<template>
  <div class="bigbox">
      <div class="video-box">
          <video width="320" height="240" controls="controls">
            <source src="movie.mp4" type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            <source src="movie.webm" type="video/webm" />
          </video>
      </div>
      <div class="title-text">
          <p>世界杯流行的精致利己主义战术，被球迷戏称为901式的摆大巴</p>
          <p>
              <span>2020-02-07</span>
              <span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span>
              <span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span>
              <span class="imgspan"><img src="@/assets/images/college/tags_i@2x.png" alt=""><span>0</span></span>
          </p>
      </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>
      <div class="comment">
          <div class="comment-title">
              <span @click="selectfun(1)" :class="[selectnum===1?'select':'']">视频概述</span>
              <span @click="selectfun(2)" :class="[selectnum===2?'select':'']">评论</span>
          </div>
          <div class="comment-content">
            {{selectnum}}
          </div>
      </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>
        <!-- 相关教程 -->
        <div class="content-bigbox">
            <header><span>相关教程</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
            <!-- 遍历内容区 -->
            <div class="content-box"  v-for="(v,i) in ghwj" :key="i">
                <div class="content-imgbox">
                <img src="" alt="">
                </div>
                <div class="content-textbox">
                <p>西甲有默契球吗？西甲有哪些默契球？</p>
                <p><span>2020-02-07</span><span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span><span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span><span class="imgspan"><img src="@/assets/images/college/tags_i@2x.png" alt=""><span>0</span></span></p>
                </div>
            </div>
        </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>
        <!-- 干货推荐 -->
        <div class="content-bigbox">
            <header>
                <span>推荐干货</span>
                <span>
                    <span class="new" @click="newfun(1)" :class="[select===1?'selects':'']">最新</span>
                    <span class="hot" @click="newfun(2)" :class="[select===2?'selects':'']">最热</span>
                </span>
            </header>
            <!-- 遍历内容区 -->
            <div class="content-box"  v-for="(v,i) in ghwj" :key="i">
                <div class="content-imgbox">
                    <img src="" alt="">
                </div>
                <div class="content-textbox">
                    <p>西甲有默契球吗？西甲有哪些默契球？</p>
                    <p id="time">
                        <span>2020-02-07</span>
                        <span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span>
                    </p>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          selectnum:1,
          ghwj:[1,2,3],
          select:1,
      };
    },
    created() {

    },
    methods: {
        selectfun(i){
            this.selectnum = i;
        },
        newfun(i){
            this.select = i;
        }
    }
  };
</script>

<style src="@/assets/css/ph/college/video.scss" lang="scss" scoped></style>
