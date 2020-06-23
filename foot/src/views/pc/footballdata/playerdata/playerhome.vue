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
            
            <!-- 列表2 -->
            <div class="list" :class="listbool2?'select':''" @click="listfun2">
              <div class="a">
                <input type="text" :value="tit2" placeholder="请选择球员" class="tit" style="border:0;" />
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
              <p>热门球星</p>
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
              </div>
            </div>
          </div>

          <!-- 趣味统计 -->
          <div class="popular">
            <!-- title -->
            <div class="title">
              <p>趣味统计</p>
            </div>
            <div class="content">
              <div class="contents">
                <div class="tit">
                  攻击力
                  <img src="@/assets/images/footballdata/gjl@2x.png" alt />
                </div>
                <!-- 内循环 -->
                <div class="col" v-for="(v,i) in AttackList" :key="i">
                  <div>{{v.simplifiedName}}</div>
                  <div>{{v.attack.toFixed(2)}}球/场</div>
                </div>
              </div>
              <div class="contents">
                <div class="tit">
                  出场时间
                  <img src="@/assets/images/footballdata/shijian@2x.png" alt />
                </div>
                <!-- 内循环 -->
                <div class="col" v-for="(v,i) in Lost" :key="i">
                  <div>{{v.simplifiedName}}</div>
                  <div>{{v.lost.toFixed(2)}}球/场</div>
                </div>
              </div>
              <div class="contents">
                <div class="tit">
                  红黄牌
                  <img src="@/assets/images/footballdata/hh_i@2x (1).png" alt />
                </div>
                <!-- 内循环 -->
                <div class="col" v-for="(v,i) in redYellowList" :key="i">
                  <div>{{v.simplifiedName}}</div>
                  <div>{{v.yellow}}黄{{v.red}}红</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <!-- 标题 积分榜 -->
          <div class="head">
            <span class="one" @click="titlefun(1)" :class="titlenum===1?'select':''">积分榜</span>
            <span class="one" @click="titlefun(2)" :class="titlenum===2?'select':''">助攻榜</span>
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
          <div class="listhead list1">
            <span>排名</span>
            <span>球员</span>
            <span>球队</span>
            <span>进球</span>
          </div>
          <!-- 列表内容 -->
          <div class="listcontents list1" v-for="(v,i) in teamlist" :key="i">
            <!-- 前三条加类名 -->
            <span :class="i===0?'one':i===1?'two':i===2?'san':''">{{i+1}}</span>
            <span>
              <img :src="v.logo" alt />
              {{v.simplifiedName}}
            </span>
            <span>
              <img :src="v.logo" alt />
              {{v.simplifiedName}}
            </span>
            <span>19</span>
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
      titlenum: 1,
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
        } else {
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
    //right  header 切换
    titlefun(i){
        this.titlenum = i;
    },
    //跳转
    go() {
      this.$router.push("pc-teamdata");
    }
  }
};
</script>

<style src="@/assets/css/pc/footballdata/teamdata/teamhome.scss" lang="scss" scoped></style>
