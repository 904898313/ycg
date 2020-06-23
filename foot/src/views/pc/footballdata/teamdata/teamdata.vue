<template>
  <div class="bigbox">
    <pcNavBar navActivate='足球资料' navDown='球队一览'></pcNavBar>
    <!-- 导航 -->
    <header>
        <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>足蓝资料<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>曼城<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
        <span>曼彻斯特城</span>
    </header>
    <div class="body">
      <!-- 头部信息 -->
      <div class="title">
        <span>帮众体育为您展示曼彻斯特城的球队资料与数据</span>
        <span><img src="@/assets/images/footballdata/like_filled@2x.png" alt=""> 赞同13人</span>
      </div>
      <!-- content -->
      <div class="content">
        <!-- 左 -->
        <div class="left">
          
          <div class="information">
            <!-- title -->
                <div class="club-content">
                  <div class="imgbox">
                    <img src="" alt="">
                  </div>
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
              <!-- 基本信息 -->
            <div class="information-title">基本信息</div>
            <div class="information-contents">
              <p><span>全名</span><span>曼彻斯特城</span></p>
              <p><span>简称</span><span>曼城</span></p>
              <p><span>粤语名称</span><span>曼城</span></p>
              <p><span>绰号</span><span>蓝月亮</span></p>
              <p>
                <span>主场球衣</span>
                <span class="see" @click="imgfun">
                  <img src="@/assets/images/footballdata/s@2x.png" alt="" class="smallimg">
                  <img src="@/assets/images/footballdata/s@2x.png" alt="" class="bigimg" v-show="imgbool">
                  *点击预览大图
                  </span>
              </p>
              <p><span>主教练</span><span class="blue">瓜迪奥拉</span></p>
              <p><span>球队老板</span><span>曼苏尔</span></p>
              <p><span>球队市值</span><span>10.7亿欧元</span></p>
              <p><span>主队球场</span><span class="blue">伊蒂哈德球场</span><img src="" alt=""></p>
              <p><span>球场容量</span><span>可容纳88354人</span></p>
              <p><span>成立时间</span><span>1880年</span></p>
              <p><span>所在城市</span><span>曼彻斯特</span></p>
              <p>
                <span>社交平台</span>
                <span class="imgspan">
                <img src="@/assets/images/footballdata/s@2x.png" alt="">
                <img src="@/assets/images/footballdata/f@2x.png" alt="">
                <img src="@/assets/images/footballdata/o@2x.png" alt="">
                </span>
              </p>
              <p><span>联系地址</span><span>AnfieldRoad,40TAnfieldRoad,40TAnfieldRoad</span></p>
              <p><span>官方网站</span><span class="blue">进入官网</span></p>
              <p><span>所属联赛</span><span class="blue"><img src="" alt="">英格兰超级联赛</span></p>
              <p><span>联赛排名</span><span><img src="" alt="">第 <em class="blue">3</em> 名</span></p>

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
          <introduce v-show="navnum===0"></introduce>
          <course v-show="navnum===1"></course>
          <Data v-show="navnum===2"></Data>
          <lineup v-show="navnum===3"></lineup>
          <transfer v-show="navnum===4"></transfer>
          <videos v-show="navnum===5"></videos>
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
            text:"简介"
          },
          {
            text:"赛程"
          },
          {
            text:"数据"
          },
          {
            text:"阵容"
          },
          {
            text:"转会"
          },
          {
            text:"视频"
          },
        ],
        navnum:0,
        imgbool:false
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
      },
      imgfun(){
        this.imgbool =! this.imgbool;
      }
    },
    components:{
      introduce:()=>import("./components/introduce.vue"),
      course:()=>import("./components/course.vue"),
      Data:()=>import("./components/data.vue"),
      lineup:()=>import("./components/lineup.vue"),
      transfer:()=>import("./components/transfer.vue"),
      videos:()=>import("./components/videos.vue"),
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/teamdata.scss" lang="scss" scoped></style>
