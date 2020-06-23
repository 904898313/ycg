<template>
  <!--热门球队-->
  <div class="hm_hot">
    <div class="hot_lf">
      <div class="hot_lf_top">
        <div class="hot_img_box">
          <el-image class="img_url" :src="informationList.length > 0?informationList[0].informationPic:''"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
          <div class="img_bg singleLineText">{{informationList.length > 0?informationList[0].title:''}}</div>
        </div>
        <div class="img_figure_box">
          <el-image class="figure_img" :src="informationList.length > 0?informationList[0].informationPic:''"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
          <el-image class="figure_img" :src="informationList.length > 0?informationList[0].informationPic:''"><div slot="error" class="errorImgBig"><i class="el-icon-picture-outline"></i></div></el-image>
        </div>
      </div>
      <div class="hot_lf_bom">
        <div class="hot_tap_top">
          <ul class="hot_tab_title">
            <li class="hot_tab_title_active">热门球队</li>
            <li>当红球队</li>
          </ul>
          <ul class="hot_tab_list">
            <li v-for="(item,index) in hotTabList">{{item.matchName}}</li>
          </ul>
        </div>
        <div class="hot_tap_bom">
          <ul>
            <li v-for="(item,index) in hotTeamList">
              <el-image class="hot_ball_icon" :src="item.logo"><div slot="error" class="errorImgSmall"><i class="el-icon-picture-outline"></i></div></el-image>
              <span>{{item.simplifiedName}}</span>
            </li>
          </ul>
          <div class="hot_more"><p>更多球队 +</p></div>
        </div>
      </div>
    </div>
    <div class="hot_rt">
      <ul>
        <li v-for="(item,index) in hotTeamName">
          <div class="bg_mask">
            <div class="mask_item">
              <p><span>视频直播</span><img src="../../../../assets/images/home/zhibo.png"></p>
              <p><span>滚球预测</span><img src="../../../../assets/images/home/zuqiu_1.png"></p>
            </div>
          </div>
          <div class="hot_Live_top">
            <div class="hot_Live_text">
              <span class="hot_status">正在进行 </span>
              <span class="hot_tag hot_tag_bg_1">直播中</span>
              <img class="hot_Live_icon" src="../../../../assets/images/home/zuqiu.png">
            </div>
            <p>{{item.seasonName}}</p>
          </div>
          <ul class="hot_team_twain">
            <li>
              <div class="hot_team_lf">
                <el-image class="hot_team_name_icon" :src="imgUrl"><div slot="error" class="errorImgSmall"><i class="el-icon-picture-outline"></i></div></el-image>
                <span>{{item.hostTeamName}}</span>
              </div>
              <span>{{item.allScore.split('-')[0]}}</span>
              <div class="hot_team_triangle" v-if="parseInt(item.allScore.split('-')[0]) > parseInt(item.allScore.split('-')[1])"></div>
            </li>
            <li>
              <div class="hot_team_lf">
                <el-image class="hot_team_name_icon" :src="imgUrl"><div slot="error" class="errorImgSmall"><i class="el-icon-picture-outline"></i></div></el-image>
                <span>{{item.guestTeamName}}</span>
              </div>
              <span>{{item.allScore.split('-')[1]}}</span>
              <div class="hot_team_triangle" v-if="parseInt(item.allScore.split('-')[0]) < parseInt(item.allScore.split('-')[1])"></div>
            </li>
          </ul>
        </li>
      </ul>
      <div class="hot_checkMore">查看更多足球比赛>>></div>
    </div>
  </div>
</template>

<script>
  import * as home from '../../../../api/home';
  export default {
    data() {
      return {
        imgUrl:'',
        // 热门资讯
        informationList:[],
        // 赛事列表
        hotTabList:[],
        // 球队列表
        hotTeamList:[],
        // 比赛列表
        hotTeamName:[]
      };
    },
    created() {
      let that = this;
      setTimeout(()=>{
        that.imgUrl = 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1870047295,3520151295&fm=26&gp=0.jpg'
      },2000)
      this.getInformation()
      this.getEvent()
      this.getBallTeam()
      this.getGameInfo()
    },
    methods: {
      // 热门资讯
      getInformation(){
        let that = this;
        home.hotInformation({ current: 1, size: 9999 }).then(res => {
          if(res.data.code === 1){
            let records =  res.data.data.records;
            records.forEach(item => item.isHot === 1?that.informationList.push(item):'')
          }
        })
      },
      // 赛事列表
      getEvent(){
        home.getEventList({ current: 1, size: 9999 }).then(res => {
          if(res.data.code === 1){
            this.hotTabList = res.data.data.records;
          }
        })
      },
      // 球队列表
      getBallTeam(){
        home.getTeamList({ current: 1, size: 17 }).then(res => {
          if(res.data.code === 1){
            this.hotTeamList = res.data.data.records;
          }
        })
      },
      // 比赛列表
      getGameInfo(){
        home.gameInfoList({ current: 1, size: 4 }).then(res => {
          if(res.data.code === 1){
            this.hotTeamName = res.data.data.records;
          }
        })
      }
    }

  };
</script>

<style src="../../../../assets/css/pc/home/hot.scss" lang="scss" scoped></style>
