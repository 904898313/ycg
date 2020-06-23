<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      <span>足球集锦</span>
    </header>
    <div class="collection">
      <div class="tabs">
        <span :class="tabId==0?'active':''" @click="tabId=0">视频集锦</span>
        <span :class="tabId==1?'active':''" @click="tabId=1">比赛集锦</span>
      </div>
      <div class="title">
        <p>视频集锦</p>
        <span>
          查看更多
          <van-icon name="arrow" color="#999999" size=".24rem" />
        </span>
      </div>
      <div class="list">
        <div class="tablist">
          <span
            v-for="(item,index) in navList"
            :key="index"
            :class="currentId==index?'active':''"
            @click="currentId=index"
          >{{item.text}}</span>
        </div>
        <div class="videolist">
          <div class="info" v-for="(item,index) in videolist" :key="index">
            <img
              src="https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100"
              alt
            />
            <p>西甲深盘怎么买？西甲深盘收米技巧（一）</p>
          </div>
        </div>
      </div>
    </div>

    <div class="taglist">
      <div class="title">
        <span>热门标签</span>
      </div>
      <hot-tags :data="tagsList"></hot-tags>
    </div>

    <div class="menusList">
      <league-list :menusList="menusList" :menustags="menustags" :menusInfoList="menusInfoList"></league-list>
    </div>

    <div class="classicvideo">
      <div class="title">足球经典录像</div>
      <video-list :data="videoList"></video-list>
    </div>

    <div class="live">
      <div class="title">
        <span>足球直播</span>
        <span>
          查看更多
          <van-icon name="arrow" color="#999999" size=".24rem" />
        </span>
      </div>
      <div class="matchliveList">
        <div class="info" v-for="(item,index) in liveList" :key="index">
          <span class="time">{{item.time}}</span>
          <span class="text">{{item.text}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    hotTags: () => import("./components/hotTags"),
    videoList: () => import("./components/videoList"),
    leagueList: () => import("./components/leagueList")
  },
  data() {
    return {
      tabId: 0,
      currentId: 0,
      navList: [
        {
          text: "TOP集锦"
        },
        {
          text: "足球宝贝"
        },
        {
          text: "足球打架"
        },
        {
          text: "足球搞笑"
        },
        {
          text: "街头足球"
        }
      ],
      videolist: [
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        },
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        },
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        },
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        },
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        },
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "西甲深盘怎么买？西甲深盘收米技巧（一）"
        }
      ],
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
      menusList: [
        {
          text: "英超"
        },
        {
          text: "西甲"
        },
        {
          text: "德甲"
        },
        {
          text: "意甲"
        },
        {
          text: "法甲"
        },
        {
          text: "中超"
        }
      ],
      menustags: [
        {
          text: "曼联"
        },
        {
          text: "切尔西"
        },
        {
          text: "利物浦"
        },
        {
          text: "西汉姆联"
        },
        {
          text: "曼联"
        },
        {
          text: "切尔西"
        },
        {
          text: "利物浦"
        },
        {
          text: "西汉姆联"
        }
      ],
      menusInfoList: [
        {
          text: "3月11日欧冠-莱比锡红牛vs托特纳姆热刺 全场集锦"
        },
        {
          text: "只存在于录像中的动作.至今没人敢在比赛中模仿，不亏..."
        },
        {
          text: "冠军联赛淘汰制利物浦2-0国际米兰"
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
      liveList: [
        {
          time: "05-16 19:00",
          text: "中超-北京国安vs山东鲁能"
        },
        {
          time: "05-16 19:00",
          text: "中超-北京国安vs山东鲁能"
        },
        {
          time: "05-16 19:00",
          text: "中超-北京国安vs山东鲁能"
        },
        {
          time: "05-16 19:00",
          text: "中超-北京国安vs山东鲁能"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/matchlive/matchvideo.scss" scoped>
</style>