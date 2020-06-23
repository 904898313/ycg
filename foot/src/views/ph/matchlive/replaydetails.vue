<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      <span>详情</span>
      <img src="@/assets/images/matchlive/share_i@2x.png" alt class="share" />
    </header>
    <div class="section">
      <div class="title">
        <p class="theme">英超 斯托克城VS特纳姆热刺直播</p>
        <p class="time">比赛时间：2020-03-13 08:32</p>
      </div>

      <div class="yuce">
        <div class="tag">
          <span>英超</span>
          <span>斯托克城</span>
          <span class="color">托特娜姆热刺</span>
        </div>
        <div class="text">
          <p>
            本录像是斯托克城vs托特纳姆热刺之间进行的英格兰超级联赛，比
            赛时间为2020年3月13日 04:00。
          </p>
          <p>
            帮众体育不仅为您提供了斯托克城和托特纳姆热刺的视频直播，还
            为您提供斯托克城vs托特纳姆热刺的回放集锦、预测、分析等。
          </p>
        </div>
      </div>

      <div class="address">
        <p class="theme">录像地址</p>
        <p class="bifen" v-for="(item,index) in scoreList" :key="index">
          <span>{{item.text}}</span>
        </p>
        <div class="relevantInfo">
          <p class="ck">查看本场比赛相关信息：</p>
          <span class="fp">完场复盘</span>
          <span class="hf">录像回放</span>
        </div>
      </div>
    </div>

    <div class="videoList">
      <div class="title">
        <span class="text">英超经典录像</span>
      </div>
      <video-list :data="videoList"></video-list>
    </div>

    <div class="matchlive">
      <div class="title">
        <p>英超直播</p>
        <span>查看更多></span>
      </div>
      <div class="matchliveList">
        <div class="info" v-for="(item,index) in liveList" :key="index">
          <span class="time">{{item.time}}</span>
          <span class="text">{{item.text}}</span>
        </div>
      </div>
    </div>

    <div class="hotcollection">
      <div class="title">
        <p>英超热门集锦</p>
        <span>查看更多></span>
      </div>
      <div class="collectionInfo">
        <hot-collection :data="lightsList"></hot-collection>
      </div>
    </div>

    <div class="relatedvideos">
      <div class="title">
        <span>斯托克城VS托特纳姆 相关录像</span>
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
    <div class="relatedInfo">
      <div class="title">相关资讯</div>
      <related-info :data="data"></related-info>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    videoList: () => import("./components/videoList"),
    hotCollection: () => import("./components/hotcollection"),
    relatedInfo: () => import("./components/relatedInfo")
  },
  data() {
    return {
      scoreList: [
        {
          text: "[PPTV] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[优酷视频] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[PPTV] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[优酷视频] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[PPTV] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[极速体育] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[PP体育] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          text: "[咪咕体育] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
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
      ],
      lightsList: [
        {
          text: "阿圭罗转身劲射破门 博阿松门前补射扳平"
        },
        {
          text: "此球只应天上有！古蒂“上帝脚后跟”让对方门将投降"
        },
        {
          text: "C罗任意球破门最窒息 皇马本赛季夺冠精彩时刻"
        },
        {
          text: "无可奈何 当世界最强防守球员遭遇梅西"
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
      ],
      data: [
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06",
          flow: "763",
          comment: "7"
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
<style lang='scss' src="@/assets/css/ph/matchlive/replaydetails.scss" scoped>
</style>