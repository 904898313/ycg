<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" alt />
      <span>视频直播</span>
    </header>
    <div class="tagslist">
      <div class="title">
        <span>热门赛事直播</span>
      </div>
      <hot-tags :data="tagsList"></hot-tags>
    </div>

    <div class="classicvideo">
      <div class="title">
        <span>足球经典录像</span>
      </div>
      <video-list :data="videoList"></video-list>
    </div>

    <div class="livevideo">
      <div class="title">
        <span>视频直播</span>
      </div>
      <div class="livelist">
        <div class="times">
          <span>01-02 星期四</span>
          <img src="@/assets/images/matchlive/drop-down_i@2x.png" alt />
        </div>
        <div class="info">
          <div class="top">
            <span class="top-time">16:30</span> |
            <span class="xijia">西甲</span>
          </div>
          <div class="mid">
            <span>巴拉多利德</span>
            <i>VS</i>
            <span>莱莱加内斯</span>
          </div>
          <div class="bot">
            <span>超清直播</span>
            <span>其他信号</span>
          </div>
        </div>
        <div class="info">
          <div class="top">
            <span class="top-time">16:30</span> |
            <span class="xijia">西甲</span>
          </div>
          <div class="mid">
            <span>巴拉多利德</span>
            <i>VS</i>
            <span>莱莱加内斯</span>
          </div>
          <div class="bot">
            <span>超清直播</span>
            <span>其他信号</span>
          </div>
        </div>
      </div>
      <div class="livelist">
        <div class="times">
          <span>01-02 星期四</span>
          <img src="@/assets/images/matchlive/drop-down_i@2x.png" alt />
        </div>
        <div class="info">
          <div class="top">
            <span class="top-time">16:30</span> |
            <span class="xijia">西甲</span>
          </div>
          <div class="mid">
            <span>巴拉多利德</span>
            <i>VS</i>
            <span>莱莱加内斯</span>
          </div>
          <div class="bot">
            <span>超清直播</span>
            <span>其他信号</span>
          </div>
        </div>
        <div class="info">
          <div class="top">
            <span class="top-time">16:30</span> |
            <span class="xijia">西甲</span>
          </div>
          <div class="mid">
            <span>巴拉多利德</span>
            <i>VS</i>
            <span>莱莱加内斯</span>
          </div>
          <div class="bot">
            <span>超清直播</span>
            <span>其他信号</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    videoList: () => import("./components/videoList"),
    hotTags: () => import("./components/hotTags")
  },
  data() {
    return {
      tagsList: [
        {
          text: "英超直播"
        },
        {
          text: "西甲直播"
        },
        {
          text: "意甲直播"
        },
        {
          text: "德甲直播"
        },
        {
          text: "法甲直播"
        },
        {
          text: "英超直播"
        },
        {
          text: "西甲直播"
        },
        {
          text: "意甲直播"
        },
        {
          text: "德甲直播"
        },
        {
          text: "法甲直播"
        }
      ],
      videoList: [
        {
          number: 1,
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          number: 2,
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频集锦"
        },
        {
          number: 3,
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          number: 4,
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频集锦"
        },
        {
          number: 5,
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频集锦"
        },

        {
          number: 6,
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/matchlive/matchlive.scss" scoped>
</style>