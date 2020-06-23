<template>
  <div class="bigbox">
    <pcNavBar   navActivate='足球资料' navDown='球员一览'></pcNavBar>
    <!-- 导航 -->
    <header>
        <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>足球资料<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>曼城<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>德布劳内</span>
    </header>
    <div class="body">
      <!-- 头部信息 -->
      <div class="title">
        <span>帮众体育为您展示凯文·德布劳内（Kevin De Bruyne）的球员资料与数据</span>
        <span> <img src="@/assets/images/footballdata/like_filled@2x.png" alt=""> 赞同13人</span>
      </div>
      <!-- content -->
      <div class="content">
        <!-- 左 -->
        <div class="left">
          <div class="head"></div>
          <div class="information">
            <div class="information-title">基本信息</div>
            <div class="information-contents">
              <p><span>全名</span><span>凯文·德布劳内</span></p>
              <p><span>简称</span><span>德布劳内</span></p>
              <p><span>绰号</span><span>丁丁</span></p>
              <p><span>国籍</span><span><img src="" alt="">比利时</span></p>
              <p><span>位置</span><span>中场</span></p>
              <p><span>年龄(生日)</span><span>31岁（1989-06-18）</span></p>
              <p><span>身高</span><span>187cm</span></p>
              <p><span>惯用脚</span><span>右脚</span></p>
              
              <p :class="bool?'block':'none'">
                <span>社交平台</span>
                <span class="imgspan">
                <img src="@/assets/images/footballdata/s@2x.png" alt="">
                <img src="@/assets/images/footballdata/f@2x.png" alt="">
                <img src="@/assets/images/footballdata/o@2x.png" alt="">
                </span>
              </p>
              <p  :class="bool?'block':'none'"><span>入队时间</span><span>2018-01-31</span></p>
              <p  :class="bool?'block':'none'"><span>合同到期</span><span>2021-01-31</span></p>
              <p  :class="bool?'block':'none'"><span>所属联赛</span><span>英超</span></p>
              <div class="club">
                <p class="tit">效力俱乐部</p>
                <div class="club-content">
                  <img src="" alt="">
                  <div class="club-text">
                    <p class="city">曼彻斯特城</p>
                    <p class="ranking">联赛排名3</p>
                    <div class="flex-box">
                      <p>W</p>
                      <p>W</p>
                      <p>W</p>
                      <p>D</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="club"  :class="bool?'blockclub':'none'">
                <p class="tit">效力国家队</p>
                <div class="club-content">
                  <img src="" alt="">
                  <div class="club-text">
                    <p class="city">比利时</p>
                    <p class="ranking">联赛排名5</p>
                    <div class="flex-box">
                      <p>W</p>
                      <p>W</p>
                      <p>W</p>
                      <p>D</p>
                      <p>L</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="all" @click="allfun" :class="bool?'none':'block'">
              查看全部
            </div>
          </div>

        </div>
        <!-- 右 -->
        <div class="right">
          <nav>
            <p 
              @click="navfun(i)"
              v-for="(v,i) in navlist"
              :key="i"
            > 
              <span :class="navnum===i?'select':''"></span>
              {{v.text}}
            </p>
          </nav>
          <Data v-show="navnum===0"></Data>
          <Record v-show="navnum===1"></Record>
          <Transfer v-if="navnum===2"></Transfer>
          <Video v-show="navnum===3"></Video>
          <Atlas v-show="navnum===4"></Atlas>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bool:false,
        navlist:[
          {
            text:"资料"
          },
          {
            text:"数据"
          },
          {
            text:"转会"
          },
          {
            text:"视频"
          },
          {
            text:"图集"
          },
        ],
        navnum:0
      };
    },
    created() {

    },
    methods: {
      allfun(){
        this.bool =! this.bool;
      },
      navfun(i){
        this.navnum = i;
      }
    },
    components:{
      Data:()=>import('./components/data.vue'),
      Record:()=>import('./components/record.vue'),
      Transfer:()=>import('./components/transfer.vue'),
      Video:()=>import('./components/video.vue'),
      Atlas:()=>import('./components/atlas.vue'),
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/playerdata/playerdata.scss" lang="scss" scoped></style>
