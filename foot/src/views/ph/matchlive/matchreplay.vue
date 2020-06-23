<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" alt />
      <span>录像回放</span>
    </header>
    <div class="tagslist">
      <div class="title">
        <span>热门赛事直播</span>
      </div>
      <hot-tags :data="tagsList"></hot-tags>
    </div>

    <div class="classicvideo">
      <div class="title">
        <span ref="abc">足球经典录像</span>
      </div>
      <video-list :data="videoList"></video-list>
    </div>

    <div class="videoreplay">
      <div class="title">
        <p>录像回放</p>
        <span>
          目前共有
          <i>13场</i>比赛即将直播，去看看视频直播
        </span>
      </div>
      <div class="replaylist">
        <div class="info" v-for="(item,index) in replaylist" :key="index">
          <div class="top">
            <img src="@/assets/images/matchlive/live@2x.png" alt />
            <p>{{item.text}}</p>
          </div>
          <span>{{item.time}}</span>
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
      ],
      replaylist: [
        {
          text:
            "全北现代汽车vs全南天龙录像2016年9月10日 英超斯托克城对托特纳姆热刺的回放",
          time: "2020-03-09 16:23:21"
        },
        {
          text:
            "全北现代汽车vs全南天龙录像2016年9月10日 英超斯托克城对托特纳姆热刺的回放",
          time: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像2016年9月10日 日职联仙台夕对横滨水手回放",
          time: "2020-03-09 16:23:21"
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
<style lang='scss' src="@/assets/css/ph/matchlive/matchreplay.scss" scoped>
</style>