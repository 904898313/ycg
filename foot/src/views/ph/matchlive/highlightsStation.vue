<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      <span>足球集锦</span>
      <img src="@/assets/images/matchlive/share_i@2x.png" alt class="share" />
    </header>

    <section v-if="isshow">
      <div class="title">
        <p>2019-04-30 英超 斯托克城VS特纳姆热刺集锦</p>
        <span>
          更新时间：2020-03-13 08:30 共有
          <i>13213</i>人看过此视频
        </span>
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
        <p class="theme">视频集锦地址</p>
        <p class="bifen">
          <span>[土超全场集锦] 土超-波尔蒂失良机 安塔利亚体育1-0锡瓦斯体育</span>
        </p>
        <div class="relevantInfo">
          <p class="ck">查看本场比赛相关信息：</p>
          <span class="hf">预测分析</span>
        </div>
      </div>

      <div class="order">
        <div class="prev">
          <p>上个集锦：托妞职业生涯高光时刻 2012欧冠托雷斯绝杀巴萨</p>
        </div>
        <div class="next">
          <p>下个集锦：托妞职业生涯高光时刻 2012欧冠托雷斯绝杀巴萨</p>
        </div>
      </div>
    </section>

    <div class="section" v-else>
      <div class="title">
        <p>2019-04-30 英超 斯托克城VS特纳姆热刺集锦</p>
        <span>
          更新时间：2020-03-13 08:30 共有
          <i>13213</i>人看过此视频
        </span>
      </div>
      <div class="yuce">
        <div class="tag">
          <span>英超</span>
          <span>斯托克城</span>
          <span class="color">托特娜姆热刺</span>
        </div>
      </div>
      <div class="videoInfo">
        <div class="video">
          <video src="movie.ogg" controls="controls" width="100%" height="100%"></video>
        </div>
        <div class="info">
          <div class="top">
            <span>编辑：Hacker</span>
            <span>视频来源：Youtube</span>
            <span>清晰度：高清</span>
          </div>
          <div class="bot">
            <span>有无字幕：无</span>
            <span>是否包含广告：无广告、无弹框</span>
            <span>语言：简体中文</span>
          </div>
        </div>
        <div class="play">
          <span>点击此处下载本视频 156MB</span>
          <p>
            观看提示：视频播放后如有卡顿，请
            <i>点此刷新</i>即可正常播放。
          </p>
        </div>

        <div class="line"></div>
        <div class="theme">
          <p>
            <i>视频简介：</i>2011-12赛季，切西尔在欧冠赛场半决赛与巴萨狭路相
            逢，次回合的比赛中切西尔客场1-2落后于巴萨，比赛最后时刻托
            雷斯晃掉巴尔德斯，推射空门得分，这就是有名的托雷斯绝杀巴萨
            更多精彩足球视频集锦尽在帮众体育。
          </p>
        </div>
        <div class="line"></div>
        <div class="relevantInfo">
          <p class="ck">查看本场比赛相关信息：</p>
          <span class="hf">预测分析</span>
        </div>
        <div class="order">
          <div class="prev">
            <p>上个集锦：托妞职业生涯高光时刻 2012欧冠托雷斯绝杀巴萨</p>
          </div>
          <div class="next">
            <p>下个集锦：托妞职业生涯高光时刻 2012欧冠托雷斯绝杀巴萨</p>
          </div>
        </div>
      </div>
    </div>

    <div class="videoList" v-if="isshow==false">
      <div class="title">
        <span class="text">英超经典录像</span>
        <span class="more">查看更多></span>
      </div>
      <video-list :data="videoList"></video-list>
    </div>

    <!-- 英超直播 -->
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
    <div class="hottags">
      <div class="title">
        <span>热门赛事直播</span>
      </div>
      <hot-tags :data="tagsList"></hot-tags>
    </div>
    <!-- 足球热门集锦 -->
    <div class="hotcollection">
      <div class="title">
        <p>英超热门集锦</p>
        <span>查看更多></span>
      </div>
      <div class="collectionInfo">
        <hot-collection :data="lightsList"></hot-collection>
      </div>
    </div>

    <!-- 英超热门录像 -->
    <div class="hotvideo">
      <div class="title">
        <p>英超热门录像</p>
        <span>查看更多></span>
      </div>
      <div class="hotvideoList">
        <div class="info" v-for="(item,index) in hotvideoList" :key="index">
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <!-- 相关集锦 -->
    <div class="relatedcollection">
      <div class="title">
        <span>斯托克城VS托特纳姆 相关集锦</span>
      </div>
      <div class="list">
        <div
          class="info"
          v-for="(item,index) in collectionlist"
          :key="index"
          @click="redirectFunc()"
        >
          <p>{{item.text}}</p>
          <span>{{item.time}}</span>
        </div>
      </div>
    </div>
    <!-- 相关直播 -->
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
    <div class="imgList">
      <div class="title">
        <p>相关图集</p>
        <span>查看更多></span>
      </div>
      <div class="list">
        <div class="info">
          <img src="http://img2.imgtn.bdimg.com/it/u=182784460,19314718&fm=26&gp=0.jpg" alt />
          <span>
            莱昂纳多的女友内衣
            魅惑
          </span>
        </div>
        <div class="info">
          <img src="http://img2.imgtn.bdimg.com/it/u=182784460,19314718&fm=26&gp=0.jpg" alt />
          <span>
            莱昂纳多的女友内衣
            魅惑
          </span>
        </div>
        <div class="info">
          <img src="http://img2.imgtn.bdimg.com/it/u=182784460,19314718&fm=26&gp=0.jpg" alt />
          <span>
            莱昂纳多的女友内衣
            魅惑
          </span>
        </div>
      </div>
    </div>
    <!-- 相关资讯 -->
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
    relatedInfo: () => import("./components/relatedInfo"),
    hotTags: () => import("./components/hotTags")
  },
  data() {
    return {
      isshow: false,
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
      hotvideoList: [
        {
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        }
      ],
      collectionlist: [
        {
          text:
            "[沃尔夫斯堡vs顿涅茨克矿工集锦]3月13日欧联沃尔夫斯堡对顿涅茨克矿工全场集锦",
          time: "2020-03-09 16:23:21"
        },
        {
          text:
            "[沃尔夫斯堡vs顿涅茨克矿工集锦]3月13日欧联沃尔夫斯堡对顿涅茨克矿工全场集锦",
          time: "2020-03-09 16:23:21"
        },
        {
          text:
            "[沃尔夫斯堡vs顿涅茨克矿工集锦]3月13日欧联沃尔夫斯堡对顿涅茨克矿工全场集锦",
          time: "2020-03-09 16:23:21"
        },
        {
          text:
            "[沃尔夫斯堡vs顿涅茨克矿工集锦]3月13日欧联沃尔夫斯堡对顿涅茨克矿工全场集锦",
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
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    redirectFunc() {
      this.$router.push({ name: "highlightsStation" });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/matchlive/highlightsStation.scss" scoped>
</style>