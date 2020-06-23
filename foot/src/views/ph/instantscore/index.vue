<template>
  <div class="container">
    <!--导航栏-->
    <ph-nav-bar nav-activate="即时比分"></ph-nav-bar>
    <!-- 内部导航 -->
    <nav>
      <span
        :class="navid==index?'active':''"
        v-for="(item,index) in navlist"
        :key="index"
        @click="changeNavid(index)"
      >{{item}}</span>
    </nav>
    <!-- 列表 -->
    <div class="info" v-for="(item,index) in data" :key="index" @click="redirectFunc(item.id)">
      <div class="inner-info">
        <div class="top">
          <p>
            {{item.gameTime}}
            <span>{{item.matchName}}</span>
          </p>
          <span>
            <img src="@/assets/images/instantscore/time_i@2x.png" alt />59'
          </span>
        </div>
        <div class="mid">
          <div class="left">
            <span>{{item.hostAllScore}}</span>
            <p>[{{item.hostAllScore}}]{{item.hostTeamName}}</p>
          </div>
          <div class="mmid">
            <span>{{item.allScore}}</span>
          </div>
          <div class="right">
            <p>{{item.guestTeamName}}[{{item.guestAllScore}}]</p>
            <span>1</span>
          </div>
        </div>
        <div class="bot">
          <span>(1:2)</span>
        </div>
        <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
      </div>
    </div>
  </div>
</template>
<script>
import * as scoreInfo from "@/api/instantscore";
export default {
  components: {},
  data() {
    return {
      navlist: ["全部", "进行", "赛程", "赛果", "关注"],
      navid: 0,
      data: []
    };
  },
  created() {
    this.getscoreList();
  },
  mounted() {},
  methods: {
    // 获取比赛信息
    getscoreList() {
      const data = {};
      scoreInfo.getscoreList(data).then(res => {
        const data = res.data.data.filter((item, index, arr) => {
          return index < 10;
        });
        this.data = data;
      });
    },
    // 获取关注列表信息
    getFollowList() {
      const data = {};
      scoreInfo.getFollowList(data).then(res => {
        // console.log(res);
        const data = res.data.data.filter((item, index, arr) => {
          return index < 10;
        });
        this.data = data;
      });
    },

    // 获取赛程列表信息
    getScheduleList() {
      const data = {};
      scoreInfo.getScheduleList(data).then(res => {
        // console.log(res);
      });
    },
    changeNavid(index) {
      this.navid = index;
      switch (index) {
        case 0:
          this.getscoreList();
        case 2:
          this.getScheduleList();
        case 4:
          this.getFollowList();
      }
    },
    // 跳转比赛详情
    redirectFunc(id) {
      this.$store.commit("getGameId", id);
      this.$router.push({
        path: "/ph-instantscore"
      });
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss'  src="@/assets\css\ph\instantscore\index.scss" scoped>
</style>