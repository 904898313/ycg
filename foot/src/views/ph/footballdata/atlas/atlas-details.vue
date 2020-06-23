<template>
  <div class="bigbox">
              <div class="tou">
            <img src="@/assets/images/footballdata/back_i2@2x.png" alt="" @click="go">
            <span>帮众体育</span>
            <img src="@/assets/images/footballdata/share_i@2x.png" alt="">
        </div>
      
      <!-- 图片详情 -->
      <div class="details">
            <p class="tit">德甲联赛即将启动  那些巨星们准备好了吗？</p>
            <p class="text">作者：帮众体育   <span class="time">时间：2020-03-13 08:30</span>   <span class="color">190</span> 浏览</p>
            <div class="imgbox">
                <img src="" alt="" class="img">
                <div class="num">
                    <span>5</span> / 12
                </div>
            </div>
            <div class="preview">
                *长按图片预览并下载图片
            </div>
            <!-- 图集介绍 -->
            <div class="introduce">
                <p class="title">简介：本录像是斯托克城vs托特纳姆热刺之间进行的英格兰超级联赛，比赛时间为2020年3月13日 04:00。</p>
                <div class="zan">
                    <p><span>关键字</span><span>利物浦</span></p>
                    <p><img src="" alt=""><span>13</span></p>
                </div>
            </div>
      </div>
      <div class="see">
          <div class="title">大家都在看</div>
        <div class="nav">
        <div 
            class="big"
            v-for="(v,i) in 9"  
            :key="i"
        >
            <div class="small">
                <div class="imgbox">   
                    <img src="" alt="">
                </div>
                <div class="text">梅西C罗和队友互换发型</div>
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
      };
    },
    created() {

    },
    methods: {
        go(){
            this.$router.go(-1)
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/atlas/atlas-details.scss" lang="scss" scoped></style>
