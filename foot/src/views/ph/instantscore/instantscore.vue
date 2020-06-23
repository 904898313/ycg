<template>
  <div class="container">
    <div class="live">
      <header>
        <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
        <span>{{gameInfo.matchFullName}}</span>
        <img src="@/assets/images/matchlive/share_i@2x.png" alt class="share" />
      </header>
      <div class="score">
        <div class="score-left">
          <i>{{gameInfo.hostYellowCard}}</i>
          <img :src="gameInfo.hostTeamLogo" alt />
          <span>{{gameInfo.hostTeamName}}</span>
        </div>
        <div class="score-mid">
          <span class="msec">
            <img src="@/assets/images/instantscore/time_i@2x.png" alt /> 59:03″
          </span>
          <span class="scoreNumber">{{gameInfo.hostAllScore}}:{{gameInfo.guestAllScore}}</span>
          <span class="number">({{gameInfo.halfSocre}})</span>
        </div>
        <div class="score-right">
          <i>{{gameInfo.guestYellowCard}}</i>
          <img :src="gameInfo.guestTeamLogo" alt />
          <span>{{gameInfo.guestTeamName}}</span>
        </div>
      </div>
      <div class="video">
        <span>视频直播</span>
        <i>|</i>
        <span>动画直播</span>
      </div>
      <div class="fabulous">
        <div class="stamp">
          <img src="@/assets/images/instantscore/support-red_i@2x.png" alt />
          <span>{{gameInfo.hostLikeCount}}</span>
        </div>
        <div class="stamp">
          <span>{{gameInfo.guestLikeCount}}</span>
          <img src="@/assets/images/instantscore/support-blue_i@2x.png" alt />
        </div>
      </div>
    </div>
    <div class="navList">
      <van-tabs
        title-active-color="#ffc002"
        title-inactive-color="#9297a8"
        :ellipsis="true"
        @click="changeTab"
      >
        <van-tab v-for="(item,index) in navList" :title="item.name" :key="index"></van-tab>
      </van-tabs>
    </div>
    <div class="content">
      <matchlive v-if="currid==0"></matchlive>
      <chatroom v-if="currid==1"></chatroom>
      <matchanalysis v-if="currid==2"></matchanalysis>
      <aicalculate v-if="currid==3"></aicalculate>
      <ouindemnity v-if="currid==4"></ouindemnity>
      <exponent v-if="currid==5" :gameId="this.$route.params.id"></exponent>
      <warreport v-if="currid==6"></warreport>
    </div>
  </div>
</template>

<script>
import * as scoreInfo from "@/api/instantscore";
import { mapState, mapGetter } from "vuex";
export default {
  components: {
    matchlive: () => import("./components/matchlive"), //比赛直播
    chatroom: () => import("./components/chatroom"), // 聊天室
    matchanalysis: () => import("./components/matchanalysis"), //对阵分析
    aicalculate: () => import("./components/aicalculate"), // ai比分
    ouindemnity: () => import("./components/ouindemnity"), // 百家欧赔
    exponent: () => import("./components/exponent"), // 指数
    warreport: () => import("./components/warreport") // 完场战报
  },
  data() {
    return {
      navList: [
        {
          id: "0",
          name: "比赛直播"
        },
        {
          id: "0",
          name: "聊天"
        },
        {
          id: "0",
          name: "对阵分析"
        },

        {
          id: "0",
          name: "AI预测"
        },
        {
          id: "1",
          name: "百家欧赔"
        },
        {
          id: "0",
          name: "指数"
        },
        {
          id: "0",
          name: "完场战报"
        }
      ],
      currid: 0,
      gameInfo: {},
      gameId: ""
    };
  },
  created() {},
  mounted() {
    this._initdata();
  },
  methods: {
    // 对阵详情数据
    _initdata() {
      const data = {
        gameId: this.$store.state.score.gameId
      };
      scoreInfo.getLeagueTitle(data).then(res => {
        const data = res.data.data;
        this.gameInfo = data.gameInfo;
      });
    },
    // 获取tabs下标，切换子组件
    changeTab(name) {
      this.currid = name;
    },
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    // ...mapState({
    //   gameId: state => state.gameId
    // })
  },
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/instantscore/instantscore.scss" scoped>
</style>
<style lang="scss">
.navList .van-tabs__line {
  background-color: #ffc002;
  width: 0.28rem !important;
  height: 0.06rem;
  border-radius: 0.03rem;
}
</style>