<template>
  <div class="bigbox">
    <pcNavBar navActivate="足球资料" navDown="球队一览"></pcNavBar>
    <!-- 导航 -->
    <header>
      <span>
        <img src alt />帮众体育
        <img src="@/assets/images/footballdata/next_i@2x.png" alt />
      </span>
      <span>
        足球资料
        <img src="@/assets/images/footballdata/next_i@2x.png" alt />
      </span>
      <span>球队一览</span>
    </header>
    <!-- content -->
    <div class="content-bigbox">
      <div class="content">
        <!-- 左 -->
        <div class="left">
          <!-- 快速查询 -->
          <div class="query">
            <span>快速查询</span>

            <!-- 列表 -->
            <div class="list" :class="listbool?'select':''" @click="listfun">
              <div class="a">
                <input type="text" placeholder="请选择联赛" :value="tit" class="tit" style="border:0;" />
                <span class="block"></span>
              </div>

              <ul class="oul">
                <li @click="titfun('中超')">中超</li>
                <li @click="titfun('英超')">英超</li>
                <li @click="titfun('意甲')">意甲</li>
              </ul>
            </div>

            <!-- 列表1 -->
            <div class="list" :class="listbool1?'select':''" @click="listfun1">
              <div class="a">
                <input type="text" :value="tit1" placeholder="请选择球队" class="tit" style="border:0;" />
                <span class="block"></span>
              </div>

              <ul class="oul">
                <li @click="titfun1('阿森纳')">阿森纳</li>
                <li @click="titfun1('利物浦')">利物浦</li>
                <li @click="titfun1('曼彻斯特城')">曼彻斯特城</li>
              </ul>
            </div>

            <!-- 列表1 -->
            <div class="list" :class="listbool2?'select':''" @click="listfun2">
              <div class="a">
                <input type="text" :value="tit2" placeholder="请选择球队" class="tit" style="border:0;" />
                <span class="block"></span>
              </div>

              <ul class="oul">
                <li @click="titfun2('阿森纳')">阿森纳</li>
                <li @click="titfun2('利物浦')">利物浦</li>
                <li @click="titfun2('曼彻斯特城')">曼彻斯特城</li>
              </ul>
            </div>

            <!-- 查询 -->
            <div class="btn">查询</div>
          </div>
          <!-- 热门球队 -->
          <div class="popular">
            <!-- title -->
            <div class="title">
              <p>热门赛事</p>
            </div>
            <!-- 队标 -->
            <div class="sign">
              <div
                class="signs"
                v-for="(v,i) in hotteams"
                :key="i"
                @mouseover="signsfun(i,v.id)"
                :class="signsnum===i?'selectsign':''"
                @click="go"
              >
                <img :src="v.logo" alt />
                <p>{{v.simplifiedName}}</p>
                <p>{{v.englishName}}</p>
              </div>
            </div>

            <!-- 联赛介绍 -->
            <div class="text_box">
                <div class="small_text_box">
                    <div class="h">
                        <div class="imgbox">
                            <img src="" alt="">
                        </div>
                        <div class="textbox">
                            <p>德国甲组联赛</p>
                            <p>Arsenal</p>
                            <p>
                                <span>所属:德国甲级联赛</span>
                                <span>非本土球员：232</span>
                                <span>球队数量：18</span>
                                <span>球员数量：434</span>
                            </p>
                            <p>所有球队市值：€ 4,712,900,000</p>
                        </div>
                    </div>
                    <div class="botbox">
                        <p>赛制简介：英超联赛采取主客场双循环赛制比赛，每支队伍与各球队对赛两次，主客各一次。由1995/96赛季开始参赛球
                    队由22队减至20队，每支球队共进行38场赛事，主场和客场比赛各有19场。每场胜方可得3分，平局各得1分，负方得0
                    分，按各队于联赛所得的积分排列。完成所有赛事后总积分最高的队伍可以夺得联赛冠军，而总积分最低的3队球队会降
                    级至英冠联赛。</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <!-- 标题 积分榜 -->
          <div class="head">
            <span>积分榜</span>
          </div>
          <!-- nav -->
          <nav>
            <span
              v-for="(v,i) in navlist"
              :key="i"
              @click="navfun(i)"
              :class="navnum===i?'selectnav':''"
            >{{v.text}}</span>
          </nav>
          <!-- 列表项 -->
          <div class="listhead list">
            <span>排名</span>
            <span>球队</span>
            <span>场次</span>
            <span>胜</span>
            <span>平</span>
            <span>负</span>
            <span>积分</span>
          </div>
          <!-- 列表内容 -->
          <div class="listcontents list" v-for="(v,i) in teamlist" :key="i">
            <!-- 前三条加类名 -->
            <span :class="i===0?'one':i===1?'two':i===2?'san':''">{{i+1}}</span>
            <span>
              <img :src="v.logo" alt />
              {{v.simplifiedName}}
            </span>
            <span>{{v.gameCount}}</span>
            <span>{{v.winCount}}</span>
            <span>{{v.tieCount}}</span>
            <span>{{v.failCount}}</span>
            <span>{{v.integral}}</span>
          </div>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import * as footballdata from "@/api/footballdata/team.js";
export default {
  data() {
    return {
      tit: "",
      tit1: "",
      tit2: "",
      listbool: false,
      listbool1: false,
      listbool2: false,
      teamlist: [],
      hotteams: [],
      // 趣味统计
      // qwtjlist: [],
      navlist: [
        {
          text: "英超"
        },
        {
          text: "西甲"
        },
        {
          text: "意甲"
        },
        {
          text: "德甲"
        },
        {
          text: "法甲"
        }
      ],
      navnum: 0,
      signsnum: 0,
      hotteamsItem: {},
      AttackList: [],
      Lost: [],
      redYellowList: [],
      isdata: true
    };
  },
  created() {
    this._initLeague();
    this._initHotteams();
    this._initgetAttack();
    this._initgetLost();
    this._initgetgetRedYellow();
  },
  methods: {
    // 趣味统计 ---攻击力
    _initgetAttack() {
      const data = {
        matchSeason: "2018-2019"
      };
      footballdata.getAttack(data).then(res => {
        this.AttackList = res.data.data;
      });
    },
    // 趣味统计 ---失球
    _initgetLost() {
      const data = {
        matchSeason: "2018-2019"
      };
      footballdata.getLost(data).then(res => {
        this.Lost = res.data.data;
      });
    },
    // 趣味统计 ---红黄牌
    _initgetgetRedYellow() {
      const data = {
        matchSeason: "2018-2019"
      };
      footballdata.getRedYellow(data).then(res => {
        this.redYellowList = res.data.data;
      });
    },
    // 积分榜
    _initLeague() {
      const data = {
        matchSeason: "2018-2019",
        matchName: this.tit
      };
      footballdata.getIntegral(data).then(res => {
        if (res.data.data.length != 0) {
          this.teamlist = res.data.data;
          this.signsfun();
        }
      });
    },
    // 热门球队
    _initHotteams() {
      const data = {
        matchName: "英超"
      };
      footballdata.getHotteams(data).then(res => {
        this.hotteams = res.data.data;
      });
    },
    // 改变球队详情信息
    signsfun(i, id) {
      if (!id) {
        id = this.teamlist[0].id;
      }
      this.signsnum = i;
      const data = {
        matchSeason: "2018-2019",
        id: id
      };
      footballdata.getIntegral(data).then(res => {
        if (res.data.data[0]) {
          this.hotteamsItem = res.data.data[0];
          this.isdata = true;
        } else {
          this.isdata = false;
        }
      });
    },
    // 联赛
    listfun() {
      this.listbool = !this.listbool;
    },
    titfun(index) {
      this.tit = index;
      this._initLeague();
    },
    // 球队
    listfun1() {
      this.listbool1 = !this.listbool1;
    },
    titfun1(i) {
      this.tit1 = i;
      this._initLeague();
    },
    // 球员
    listfun2() {
      this.listbool2 = !this.listbool2;
    },
    titfun2(i) {
      this.tit2 = i;
      this._initLeague();
    },
    navfun(i) {
      this.navnum = i;
    },
    //跳转
    go() {
      this.$router.push("pc-teamdata");
    }
  }
};
</script>

<style src="@/assets/css/pc/footballdata/teamdata/teamhome.scss" lang="scss" scoped></style>
