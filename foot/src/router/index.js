import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // 入口页面
  {
    path: "/",
    name: "page",
    component: () => import(/* webpackChunkName: "page" */ "../views/page/index")
  },

  // pc端
  {
    path: "/pc-home",
    name: "pc-home",
    component: () => import(/* webpackChunkName: "pc-home" */ "../views/pc/home/home")
  },

  // 个人中心
  {
    path: "/pc-mine",
    name: "pc-mine",
    component: () => import(/* webpackChunkName: "pc-mine" */ "../views/pc/mine/mine"),
  },
  // alis支付页面
  {
    path: "/pc-minealisPay",
    name: "pc-minealisPay",
    component: () => import(/* webpackChunkName: "pc-mine" */ "../views/pc/mine/alipay"),
  },
  {
    path: "/pc-questions",
    name: "pc-questions",
    component: () => import(/* webpackChunkName: "pc-questions" */ "../views/pc/questions/questions")
  },
  {
    path: "/pc-questions-details",
    name: "pc-questions-details",
    component: () => import(/* webpackChunkName: "pc-questions" */ "../views/pc/questions/questions-details")
  },
  {
    path: "/pc-college",
    name: "pc-college",
    component: () => import(/* webpackChunkName: "pc-college" */ "../views/pc/college/college")
  },
  {
    path: "/pc-college1",
    name: "pc-college1",
    component: () => import(/* webpackChunkName: "pc-college1" */ "../views/pc/college/college1")
  },
  {
    path: "/pc-list",
    name: "pc-list",
    component: () => import(/* webpackChunkName: "pc-college" */ "../views/pc/college/list")
  },
  // 赛事推荐
  {
    path: "/pc-match",
    name: "pc-match",
    component: () => import(/* webpackChunkName: "pc-match" */ "../views/pc/match/match")
  },
  // 赛事直播
  {
    path: "/pc-matchlive",
    name: "pc-matchlive",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/matchlive")
  },
  {
    path: "/pc-matchlivedetails",
    name: "pc-matchlivedetails",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/matchlivedetails")
  },
  {
    path: "/pc-matchreplay",
    name: "pc-matchreplay",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/matchreplay")
  },
  {
    path: "/pc-matchreplaydetails",
    name: "pc-matchreplaydetails",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/matchreplaydetails")
  },
  {
    path: "/pc-highlightsStation",
    name: "pc-highlightsStation",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/highlightsStation")
  },
  {
    path: "/pc-matchhighlights",
    name: "pc-matchhighlights",
    component: () => import(/* webpackChunkName: "pc-matchlive" */ "../views/pc/matchlive/matchhighlights")
  },

  //  热门资讯
  {
    path: "/pc-hotnews",
    name: "pc-hotnews",
    component: () => import(/* webpackChunkName: "pc-hotnews" */ "../views/pc/hotnews/hotnews")
  },
  {
    path: "/pc-hotnewsList",
    name: "pc-hotnewsList",
    component: () => import(/* webpackChunkName: "pc-hotnews" */ "../views/pc/hotnews/hotnewsList")
  },
  {
    path: "/pc-text",
    name: "pc-text",
    component: () => import(/* webpackChunkName: "pc-college" */ "../views/pc/college/text")
  },
  {
    path: "/pc-video",
    name: "pc-video",
    component: () => import(/* webpackChunkName: "pc-college" */ "../views/pc/college/video")
  },
  {
    path: "/pc-matchdata",
    name: "pc-matchdata",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/matchdata/matchdata")
  },
  {
    path: "/pc-playerdata",
    name: "pc-playerdata",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/playerdata/playerdata")
  },
  {
    path: "/pc-matchhome",
    name: "pc-matchhome",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/matchdata/matchhome")
  },
  {
    path: "/pc-playerhome",
    name: "pc-playerhome",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/playerdata/playerhome")
  },
  {
    path: "/pc-teamhome",
    name: "pc-teamhome",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/teamdata/teamhome")
  },
  {
    path: "/pc-teamdata",
    name: "pc-teamdata",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/teamdata/teamdata")
  },
  //足球图集
  {
    path: "/pc-atlas",
    name: "pc-atlas",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/atlas/atlas")
  },
  {
    path: "/pc-atlas-details",
    name: "pc-atlas-details",
    component: () => import(/* webpackChunkName: "pc-matchdata" */ "../views/pc/footballdata/atlas/atlas-details")
  },
  //滚球专栏
  {
    path: "/pc-rollingball",
    name: "pc-rollingball",
    component: () => import(/* webpackChunkName: "pc-rollingball" */ "../views/pc/rollingball/rollingball")
  },
  {
    path: "/pc-rollingball-details",
    name: "pc-rollingball-details",
    component: () => import(/* webpackChunkName: "pc-rollingball-details" */ "../views/pc/rollingball/rollingball-details")
  },
  //即时比分
  {
    path: "/pc-instantscore-home",
    name: "pc-instantscore-home",
    component: () => import(/* webpackChunkName: "pc-instantscore" */ "../views/pc/instantscore/instantscore-home")
  },
  {
    path: "/pc-instantscore",
    name: "pc-instantscore",
    component: () => import(/* webpackChunkName: "pc-instantscore" */ "../views/pc/instantscore/instantscore")
  },
  //热门标签
  {
    path: "/pc-hottags",
    name: "pc-hottags",
    component: () => import(/* webpackChunkName: "pc-hottags" */ "../views/pc/hottags/hottags")
  },
  

  // 移动端
  {
    path: "/ph-home",
    name: "ph-home",
    component: () => import(/* webpackChunkName: "ph-home" */ "../views/ph/home/home")
  },
  // 赛事推荐
  {
    path: "/ph-match",
    name: "ph-match",
    component: () => import(/* webpackChunkName: "ph-match" */ "../views/ph/match/match")
  },
  {
    path: "/ph-match-old",
    name: "ph-match-old",
    component: () => import(/* webpackChunkName: "ph-match" */ "../views/ph/match/match-old")
  },
  {
    path: "/ph-questions",
    name: "ph-questions",
    component: () => import(/* webpackChunkName: "ph-questions" */ "../views/ph/questions/questions")
  },
  {
    path: "/ph-questions-details",
    name: "ph-questions-details",
    component: () => import(/* webpackChunkName: "ph-questions" */ "../views/ph/questions/questions-details")
  },
  {
    path: "/ph-submission",
    name: "ph-submission",
    component: () => import(/* webpackChunkName: "ph-questions" */ "../views/ph/questions/submission")
  },
  // 个人中心
  {
    path: "/ph-mine",
    name: "ph-mine",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/mine")
  },
  {
    path: "/ph-userInfo",
    name: "ph-userInfo",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/userInfo")
  },
  {
    path: "/ph-vipzone",
    name: "ph-vipzone",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/vipzone")
  },
  {
    path: "/ph-booking",
    name: "ph-booking",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/booking"),
  },
  {
    path: "/ph-booking/addbooks",
    name: "ph-booking/addbooks",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/addbooks")
  },
  {
    path: "/ph-booking/bookdetails",
    name: "ph-booking/bookdetails",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/bookdetails")
  },
  {
    path: "/ph-records",
    name: "ph-records",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/mineRecords")
  },
  {
    path: "/ph-help",
    name: "ph-help",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/mineHelp")
  },
  {
    path: "/ph-ideaback",
    name: "ph-ideaback",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/mineIdeaback")
  },
  {
    path: "/ph-sign",
    name: "ph-sign",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/mineSignin")
  },
  {
    path: "/ph-recharge",
    name: "ph-recharge",
    component: () => import(/* webpackChunkName: "ph-mine" */ "../views/ph/mine/components/mineRecharge")
  },
  {
    path: "/ph-messages",
    name: "ph-messages",
    component: () => import(/* webpackChunkName: "ph-messages" */ "../views/ph/mine/components/messages")
  },

  // 热门资讯
  {
    path: "/ph-hotnews",
    name: 'ph-hotnews',
    component: () => import(/* webpackChunkName: "ph-hotnews" */ "../views/ph/hotnews/hotnews")
  },
  // ph 赛事直播
  {
    path: "/ph-matchlive",
    name: "ph-matchlive",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/matchlive")
  },
  {
    path: "/ph-livedetails",
    name: "ph-livedetails",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/livedetails")
  },
  {
    path: "/ph-matchreplay",
    name: "ph-matchreplay",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/matchreplay")
  },
  {
    path: "/ph-replaydetails",
    name: "ph-replaydetails",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/replaydetails")
  },
  {
    path: "/ph-highlightsStation",
    name: "ph-highlightsStation",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/highlightsStation")
  },
  {
    path: "/ph-matchcollection",
    name: "ph-matchcollection",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/matchcollection")
  },
  {
    path: "/ph-matchvideo",
    name: "ph-matchvideo",
    component: () => import(/* webpackChunkName: "ph-matchlive" */ "../views/ph/matchlive/matchvideo")
  },
  // 滚球专栏
  {
    path: "/ph-rollingball",
    name: "ph-rollingball",
    component: () => import(/* webpackChunkName: "ph-college" */ "../views/ph/rollingball/rollingball")
  },
  // 即时比分
  {
    path: "/ph-instantscore-home",
    name: "ph-instantscore-home",
    component: () => import(/* webpackChunkName: "ph-instantscore" */ "../views/ph/instantscore/index")
  },
  {
    path: "/ph-instantscore",
    name: "ph-instantscore",
    component: () => import(/* webpackChunkName: "ph-instantscore" */ "../views/ph/instantscore/instantscore")
  },
  {
    path: "/ph-kelly",
    name: "ph-kelly",
    component: () => import(/* webpackChunkName: "ph-instantscore" */ "../views/ph/instantscore/kelly")
  },
  {
    path: "/ph-indemnity",
    name: "ph-indemnity",
    component: () => import(/* webpackChunkName: "ph-instantscore" */ "../views/ph/instantscore/indemnity")
  },
  {
    path: "/ph-college",
    name: "ph-college",
    component: () => import(/* webpackChunkName: "ph-college" */ "../views/ph/college/college")
  },
  {
    path: "/ph-college1",
    name: "ph-college1",
    component: () => import(/* webpackChunkName: "ph-college1" */ "../views/ph/college/college1")
  },
  {
    path: "/ph-list",
    name: "ph-list",
    component: () => import(/* webpackChunkName: "ph-college" */ "../views/ph/college/list")
  },
  {
    path: "/ph-text",
    name: "ph-text",
    component: () => import(/* webpackChunkName: "ph-college" */ "../views/ph/college/text")
  },
  {
    path: "/ph-video",
    name: "ph-video",
    component: () => import(/* webpackChunkName: "ph-college" */ "../views/ph/college/video")
  },

  //足球资料
  {
    path: "/ph-matchhome",
    name: "ph-matchhome",
    component: () => import(/* webpackChunkName: "ph-matchhome" */ "../views/ph/footballdata/matchdata/matchhome.vue")
  },
  {
    path: "/ph-matchdata",
    name: "ph-matchdata",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/matchdata.vue")
  },
  {
    path: "/ph-matchdata-region",
    name: "ph-matchdata-region",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/region.vue")
  },
  {
    path: "/ph-matchdata-season",
    name: "ph-matchdata-season",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/season.vue")
  },
  {
    path: "/ph-matchdata-schedule",
    name: "ph-matchdata-schedule",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/schedule.vue")
  },
  {
    path: "/ph-matchdata-integral",
    name: "ph-matchdata-integral",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/integral.vue")
  },
  {
    path: "/ph-matchdata-shooter",
    name: "ph-matchdata-shooter",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/shooter.vue")
  },
  {
    path: "/ph-matchdata-team",
    name: "ph-matchdata-team",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/team.vue")
  },
  {
    path: "/ph-matchdata-play",
    name: "ph-matchdata-play",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/play.vue")
  },
  {
    path: "/ph-matchdata-video",
    name: "ph-matchdata-video",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/matchdata/video.vue")
  },
  //球队
  {
    path: "/ph-teamhome",
    name: "ph-teamhome",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/teamdata/teamhome.vue")
  },
  {
    path: "/ph-teamdata",
    name: "ph-teamdata",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/teamdata/teamdata.vue")
  },
  //球员
  {
    path: "/ph-playerhome",
    name: "ph-playerhome",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/playerdata/playerhome.vue")
  },
  {
    path: "/ph-playerdata",
    name: "ph-playerdata",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/playerdata/playerdata.vue")
  },
  //足球图集
  {
    path: "/ph-atlas",
    name: "ph-atlas",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/atlas/atlas.vue")
  },
  {
    path: "/ph-atlas-details",
    name: "ph-atlas-details",
    component: () => import(/* webpackChunkName: "ph-matchdata" */ "../views/ph/footballdata/atlas/atlas-details.vue")
  },

];

const router = new VueRouter({
  // mode: "history",
  routes
});

// 解决使用router.push warning 问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default router;
