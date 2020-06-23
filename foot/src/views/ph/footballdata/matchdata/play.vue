<template>
  <div class="bigbox">
      <div class="tou">
          <span>在线直播</span>
      </div>
      <!-- 视频回放 -->
      <div class="content-bigbox"  v-for="(v,i) in list" :key="i">
        <header><span>2020年3月10日英超视频直播列表</span></header>
        <!-- 遍历内容区 -->
        <div class="content" v-for="(v,i) in v" :key="i">
            <div class="one">
                <span><strong>04:00</strong><strong>英超</strong><strong>第29轮</strong></span>
                <span><span>回放</span><span>结束</span></span>
            </div>
            <div class="two">
                <p><span>巴拉多利德</span> <img src="@/assets/images/college/next_i@2x.png" alt=""></p>
                <p> 2-3 </p>
                <p><img src="@/assets/images/college/next_i@2x.png" alt=""><span>莱莱加内斯</span></p>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[
              [1],
              [1],
              [1,2],
              [1],
              [1],
              [1,2],
          ]
      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/matchdata/play.scss" lang="scss" scoped></style>
