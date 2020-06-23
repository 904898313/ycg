<template>
  <div class="container">
    <pcNavBar navDown="足球集锦" navActivate="直播回放"></pcNavBar>
    <div class="inner-container">
      <div class="left">
        <section>
          <collection-video :data="picturedata" v-if="Isdata"></collection-video>
          <collection-data v-else></collection-data>
        </section>
        <div class="versusdatas">
          <div class="title">
            <i></i>
            <span>斯托克城VS托特纳姆 相关集锦</span>
          </div>
          <versus-data :data="versusdata"></versus-data>
        </div>
        <div class="lists" v-if="Isdata">
          <div class="toggle">
            <span>英超相关直播</span>
            <p>收起</p>
          </div>
          <div class="versusdata" v-show="versus">
            <div class="info" v-for="(item,index) in relevantdata" :key="index">
              <ul>
                <li class="time">{{item.times}}</li>
                <li class="versusname">{{item.leaguename}}</li>
                <li class="clubname">{{item.team1}}VS{{item.team2}}</li>
                <li class="zhibo">超清直播</li>
                <li class="zhibo">其他信号</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="collectionAtlas">
          <div class="title">
            <div class="top">
              <span>
                相关图集
                <img src="1.png" alt />
              </span>
              <span class="more">更多></span>
            </div>
            <div class="bot">
              <span></span>
              <i></i>
            </div>
          </div>

          <div class="atlaslist">
            <ul>
              <li>
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1074063000,1255903851&fm=26&gp=0.jpg"
                  alt
                />
                <span>莱昂呐多女友</span>
              </li>
              <li>
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1074063000,1255903851&fm=26&gp=0.jpg"
                  alt
                />
                <span>莱昂呐多女友</span>
              </li>
              <li>
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1074063000,1255903851&fm=26&gp=0.jpg"
                  alt
                />
                <span>少女时代献唱美职棒</span>
              </li>
              <li>
                <img
                  src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1074063000,1255903851&fm=26&gp=0.jpg"
                  alt
                />
                <span>莱昂呐多女友</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="relevantinfo">
          <div class="title">
            <div class="top">
              <span>相关资讯</span>
              <img src="1.png" alt />
            </div>
            <div class="bot">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="list">
            <relevant-info v-for="(item,index) in data" :key="index" :data="item"></relevant-info>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="tag">
          <div class="title">
            <span>英超相关</span>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="tagslist">
            <span>英超赛程</span>
            <span>英超直播</span>
            <span>英超回放</span>
          </div>
        </div>
        <div class="hottag">
          <div class="title">
            <span>热门集锦标签</span>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="tagslist">
            <span>英超赛程</span>
            <span>英超直播</span>
            <span>英超回放</span>
            <span>英超赛程</span>
            <span>英超直播</span>
            <span>英超回放</span>
          </div>
        </div>

        <div class="lives">
          <div class="title">
            <div class="more">
              <span>英超直播</span>
              <i>更多></i>
            </div>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="liveslist">
            <div class="info" v-for="(item,index) in livesdata" :key="index">
              <span class="times">{{item.times}}</span>
              <span class="text">{{item.text}}</span>
            </div>
          </div>
        </div>

        <div class="highlights">
          <high-lights :data="lightsList"></high-lights>
        </div>
        <div class="video">
          <right-video :data="videoList"></right-video>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
export default {
  components: {
    versusData: () => import("./components/versusdata"),
    relevantInfo: () => import("./components/relevantinfo"),
    highLights: () => import("./components/righthot"),
    rightVideo: () => import("./components/rightVideo"),
    collectionVideo: () => import("./components/collectionVideo"),
    collectionData: () => import("./components/collectionData")
  },
  data() {
    return {
      Isdata: false,
      picturedata: [
        {
          id: 0,
          text: "[PPTV] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          id: 1,
          text: "[腾讯直播] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          id: 2,
          text: "[优酷视频] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        },
        {
          id: 3,
          text: "[360足球] 03月13日 英超 斯托克城VS托特纳姆热刺 全场录像"
        }
      ],
      versusdata: [
        {
          id: "0",
          text:
            "斯托克城vs托特纳姆录像 2016年9月10日 法甲 巴黎圣日耳曼对圣埃蒂安回放",
          times: "2020-03-09 16:23:21"
        },
        {
          id: "0",
          text: "斯托克城vs布鲁日录像 2016年9月10日 比甲A 贝弗伦对布鲁日回放",
          times: "2020-03-09 16:23:21"
        },
        {
          id: "0",
          text:
            "斯托克城vs托特纳姆录像 2016年9月10日 法甲 巴黎圣日耳曼对圣埃蒂安回放",
          times: "2020-03-09 16:23:21"
        },
        {
          id: "0",
          text: "斯托克城vs布鲁日录像 2016年9月10日 比甲A 贝弗伦对布鲁日回放",
          times: "2020-03-09 16:23:21"
        },
        {
          id: "0",
          text:
            "斯托克城vs托特纳姆录像 2016年9月10日 法甲 巴黎圣日耳曼对圣埃蒂安回放",
          times: "2020-03-09 16:23:21"
        }
      ],
      versus: true,
      relevantdata: [
        {
          times: "15:30",
          leaguename: "塔吉克斯坦超级联赛",
          team1: "斯托克",
          team2: "伊斯塔拉夫山足球俱乐部"
        },
        {
          times: "15:30",
          leaguename: "塔吉克斯坦超级联赛",
          team1: "斯托克",
          team2: "伊斯塔拉夫山足球俱乐部"
        },
        {
          times: "15:30",
          leaguename: "塔吉克斯坦超级联赛",
          team1: "斯托克",
          team2: "伊斯塔拉夫山足球俱乐部"
        }
      ],
      data: [
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06 16:23:45",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06 16:23:45",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06 16:23:45",
          flow: "763",
          comment: "7"
        },
        {
          imgUrl:
            "http://p4.img.cctvpic.com/photoworkspace/2020/04/23/2020042315043537261.jpg",
          title: "足球战争是怎么回事？足球为什么是和平年代的战争？",
          text:
            "不打其实无所谓了。勇士主教练科尔在接表示：勇士这个赛季是几乎结束了，球队的目标的目标的目标是准备下一个赛季。对于勇士队来说...",
          times: "2020-01-06 16:23:45",
          flow: "763",
          comment: "7"
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
      videoList: [
        {
          index: "1",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "2",
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频..."
        },
        {
          index: "3",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "4",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "5",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        }
      ],
      livesdata: [
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
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
<style src="@/assets/css/pc/match/highlightsStation.scss" lang='scss' scoped>
</style>