<template>
  <div class="bigbox">
      <!-- header轮播 -->
      <div class="Wheel">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>
      </div>
      <!-- 分类轮播 -->
      <div class="Wheeltwo">
        <van-swipe @change="onChange">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        <template #indicator>
            <div class="custom-indicator">
            {{ current + 1 }}/4
            </div>
        </template>
        </van-swipe>
      </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>
      <!-- 干货文荐 -->
      <div class="content-bigbox">
        <header><span>干货文荐</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
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
      <!-- 精彩视频 -->
      <div class="content-bigbox">
        <header><span>精彩视频</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></header>
        <div class="flexbox">
            <!-- 遍历内容区 -->
            <div class="content-box content-box2" v-for="(v,i) in sp" :key="i">
                <div class="content-imgbox">
                  <img src="" alt="">
                </div>
                <div class="content-textbox">
                  <p>西甲有默契球吗？西甲有哪些默契球？</p>
                  <p><span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span><span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span><span class="imgspan"><img src="@/assets/images/college/tags_i@2x.png" alt=""><span>0</span></span></p>
                </div>
            </div>
        </div>
      </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>

      <!-- 课程推荐 -->
      <div class="content-bigbox curriculum">
        <header><span>课程推荐</span><span><img src="@/assets/images/college/update_i@2x.png" alt="">换一批</span></header>
        <div class="title"><p><span class="recommend">推荐</span><span class="text">欧赔思维</span></p><p>查看更多课程<img src="@/assets/images/college/next_i@2x.png" alt=""></p></div> 
        <div class="flexbox">
            <!-- 遍历内容区 -->
            <div class="content-box content-box2 content-box3" v-for="(v,i) in sp" :key="i">
                <div class="content-imgbox">
                  <img src="" alt="">
                </div>  
                <div class="content-textbox">
                  <p>西甲有默契球吗？西甲有哪些默契球？</p>
                  <p>利物浦一月最佳进球花落萨拉赫 扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红...</p>
                  <p><span>2020-02-07</span><span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span><span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span></p>
                </div>
            </div>
        </div>
        <!-- 2 -->
        <div class="title"><p><span class="recommend recommend2">推荐</span><span class="text">亚盘分析</span></p><p>查看更多课程<img src="@/assets/images/college/next_i@2x.png" alt=""></p></div> 
        <div class="flexbox">
            <!-- 遍历内容区 -->
            <div class="content-box content-box2 content-box3" v-for="(v,i) in sp" :key="i">
                <div class="content-imgbox">
                  <img src="" alt="">
                </div>  
                <div class="content-textbox">
                  <p>西甲有默契球吗？西甲有哪些默契球？</p>
                  <p>利物浦一月最佳进球花落萨拉赫 扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红...</p>
                  <p><span>2020-02-07</span><span class="imgspan"><img src="@/assets/images/college/comment_i@2x.png" alt=""><span>0</span></span><span class="imgspan"><img src="@/assets/images/college/browse_i@2x.png" alt=""><span>20</span></span></p>
                </div>
            </div>
        </div>
      </div>

      <!-- 隔层 -->
      <div class="bgbox"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          current: 0,
          // 干货文荐
          ghwj:[1,2,3],
          //视频
          sp:[1,2],
      };
    },
    created() {

    },
    methods: {
        onChange(index) {
        this.current = index;
        },
    }
  };
</script>

<style src="@/assets/css/ph/college/college.scss" lang="scss" scoped></style>
