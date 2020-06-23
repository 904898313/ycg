<template>
  <div class="gameBox">
    <div class="game_lf">
      <div class="game_lf_top">
        <p>赛事推荐</p>
        <span>查看更多>>></span>
      </div>
      <div class="game_lf_bom">
        <div class="game_lf_item" v-for="(item,index) in gameList">
          <div class="game_item_top"><span>{{item.seasonName}}第十三轮</span><span>{{item.gameTime}}</span></div>
          <div class="game_pk">
            <div class="game_team">
              <el-image class="game_team_icon" :src="imgUrl"><div slot="error" class="errorImgSmall"><i class="el-icon-picture-outline"></i></div></el-image>
              <span>{{item.hostTeamName}}</span>
            </div>
            <div class="game_vs">VS</div>
            <div class="game_team">
              <el-image class="game_team_icon" :src="imgUrl"><div slot="error" class="errorImgSmall"><i class="el-icon-picture-outline"></i></div></el-image>
              <span>{{item.guestTeamName}}</span>
            </div>
          </div>
          <div class="game_item_bom">
            <div class="game_bom_lf"><span>0</span> 条情报</div>
            <div class="game_bom_lf"><span>0</span> 个初盘AI预测方案</div>
          </div>
        </div>
      </div>
    </div>
    <div class="game_rt">
      <div class="game_lf_top">
        <p>积分榜</p>
      </div>
      <ul class="game_league">
        <li v-for="(item,index) in hotTabList" :class="{leagueActive:index === hotTabIdx}" @click="hotTabBtn(index)">{{item.matchName}}</li>
      </ul>
      <ul class="table_header">
        <li>球队</li>
        <li>场次</li>
        <li>胜</li>
        <li>平</li>
        <li>负</li>
        <li>进失</li>
        <li>积分</li>
      </ul>
      <ul class="table_list">
        <li v-for="(item,index) in teamPoints">
          <ul class="table_item_list">
            <li><span :style="{color:teamRankColor(index)}">{{index+1}}</span>{{item.teamName}}</li>
            <li>{{item.winCount + item.tieCount + item.failCount}}</li>
            <li>{{item.winCount}}</li>
            <li>{{item.tieCount}}</li>
            <li>{{item.failCount}}</li>
            <li>{{item.obtain}}/{{item.lose}}</li>
            <li>{{item.integral}}</li>
          </ul>
        </li>
      </ul>
      <div class="hot_checkMore">查看更多>>></div>
    </div>
  </div>
</template>

<script>
  import * as home from '../../../../api/home';
  export default {
    data() {
      return {
        imgUrl:'',
        // 賽季列表
        gameList:[],
        // 联赛名称
        hotTabList:[],
        hotTabIdx: 0,
        // 球队积分
        teamPoints:[]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
      this.getGameInfo()
      this.getEvent()
    },
    methods: {
      // 比赛列表
      getGameInfo(){
        home.gameInfoList({ current: 1, size: 6 }).then(res => {
          if(res.data.code === 1){
            this.gameList = res.data.data.records;
          }
        })
      },
      // 赛事列表
      getEvent(){
        home.getEventList({ current: 1, size: 9999 }).then(res => {
          if(res.data.code === 1){
            this.hotTabList = res.data.data.records;
            this.getIntegralInfo(this.hotTabList[this.hotTabIdx].id)
          }
        })
      },
      hotTabBtn(idx){
        if(this.hotTabIdx === idx) return
        this.hotTabIdx = idx
        this.getIntegralInfo(this.hotTabList[idx].id)
      },
      // 积分榜查询
      getIntegralInfo(data){
        home.getIntegralInfo({ current: 1, size: 6},{matchId: data}).then(res => {
          if(res.data.code === 1){
            this.teamPoints = res.data.data.records;
          }
        })
      },
      // 排行榜状态
      teamRankColor(idx){
        if(idx === 0){
          return '#c01e2f'
        }else if(idx === 1){
          return '#f59026'
        }else if(idx === 2){
          return '#f4dc26'
        }else {
          return ''
        }
      }
    }

  };
</script>

<style src="../../../../assets/css/pc/home/recommend.scss" lang="scss" scoped></style>
