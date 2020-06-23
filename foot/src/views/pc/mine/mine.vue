<template>
  <div class="box">
    <pcNavBar navActivate=""></pcNavBar>
    <div class="list">
      <div class="list-head">
        <i class="el-icon-s-home"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">帮众体育</el-breadcrumb-item>
          <el-breadcrumb-item>个人中心</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="content">
      <!-- 导航列表 -->
      <nav-list @fromchild="getchild"></nav-list>
      <div class="view-right">
        <user-info v-if="navIndex==0" @fromchildIndex="getInfoIndex"></user-info>
        <news-info v-if="navIndex==1"></news-info>
        <mine-vips v-if="navIndex==2" :data="userInfo"></mine-vips>
        <mine-booksing v-if="navIndex==3"></mine-booksing>
        <mine-record v-if="navIndex==4"></mine-record>
        <mine-help v-if="navIndex==5"></mine-help>
        <mine-ideaback v-if="navIndex==6"></mine-ideaback>
        <mine-systempage v-if="navIndex==7"></mine-systempage>
        <mine-recharge v-if="navIndex==8"></mine-recharge>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import userInfo from "./components/userinfo"; //我的资料
import navList from "./components/navList"; // 左侧导航菜单
import newsInfo from "./components/news"; //系统信息
import mineVips from "./components/vips"; // vip专区
import mineBooksing from "./components/booksing"; //记账本
import mineRecord from "./components/record"; // 消费记录
import mineHelp from "./components/help"; // 帮助中心
import mineIdeaback from "./components/ideaBack"; // 意见反馈
import mineSystempage from "./components/systempage"; // 系统配置
import mineRecharge from "./components/recharge"; // 充值
import * as mine from "@/api/mine";
export default {
  name: "mine",
  components: {
    navList,
    userInfo,
    newsInfo,
    mineVips,
    mineBooksing,
    mineRecord,
    mineHelp,
    mineIdeaback,
    mineSystempage,
    mineRecharge
  },
  data() {
    return {
      navIndex: 0,
      userInfo: {},
      vipsInfo: {}
    };
  },
  computed: {
    // 获取个人信息
    getuserInfo() {
      return JSON.parse(sessionStorage.getItem("UserInfro"));
    }
  },
  mounted() {},
  created() {},
  methods: {
    // 接收nav组件传递的index
    getchild(val) {
      this.navIndex = val;
    },
    getInfoIndex(val) {
      this.navIndex = val;
    }
  }
};
</script>

<style src="../../../assets/css/pc/mine.scss" lang="scss" scoped></style>
