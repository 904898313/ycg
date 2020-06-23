<template>
  <div class="container">
    <pcNavBar navDown="录像回放" navActivate="直播回放"></pcNavBar>
    <div class="inner-container">
      <div class="left">
        <section>
          <div class="title">
            <p>英超 斯托克城VS托特纳姆热刺直播</p>
            <span>比赛时间：2020/03/13 08:32</span>
          </div>
          <div class="tags">
            <span>英超</span>
            <span>斯托克城</span>
            <span>托特那姆热刺</span>
          </div>
          <div class="text">
            <p>本场比赛是斯托克城vs托特纳姆热刺之间进行的英格兰超级联赛，比赛时间为2020年3月13日 04:00。</p>
            <p>帮众体育不仅为您提供了斯托克城和托特纳姆热刺的视频直播，还为您提供斯托克城vs托特纳姆热刺的回放集锦、预测、分析等。</p>
          </div>
          <div class="address">
            <div class="title">
              <i></i>
              <span>录像地址</span>
            </div>
            <div class="bifen">
              <ul>
                <li v-for="(item,index) in picturedata" :key="index">
                  <span>{{item.text}}</span>
                </li>
              </ul>
              <div class="bifeninfo">
                <div class="bifeninfo-left">
                  <span>查看本场比赛相关信息：</span>
                  <span>完成复盘</span>
                  <span>录像回放</span>
                </div>
                <div class="bifeninfo-right">
                  <img src="@/assets/images/matchlive/share.png" alt />
                  <span>分享本场比赛录像</span>
                  <img src="@/assets/images/matchlive/weiixn@2x.png" alt class="icons" />
                  <img src="@/assets/images/matchlive/weibo@2x.png" alt class="icons" />
                  <img src="@/assets/images/matchlive/zone@2x.png" alt class="icons" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="list">
          <div class="title">
            <i></i>
            <span>斯托克城VS托特娜姆 相关录像</span>
          </div>
          <div class="versusdata" v-show="versus">
            <versus-data :data="versusdata"></versus-data>
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
        <right-video :data="videoList"></right-video>
        <div class="lives">
          <div class="title">
            <div class="more">
              <span>英超热门集锦</span>
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
    rightVideo: () => import("./components/rightVideo"),
    highLights: () => import("./components/righthot")
  },
  data() {
    return {
      versus: true,
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
<style src="@/assets/css/pc/match/matchreplaydetails.scss" lang='scss' scoped>
</style>