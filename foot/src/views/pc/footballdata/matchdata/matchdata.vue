<template>
  <div class="bigbox">
      <pcNavBar   navActivate='足球资料' navDown='赛事一览'></pcNavBar>
      <!-- 头部导航 -->
      <header>
          <div class="header-nav" v-for="(v,i) in navlist" :key="i">
              <div class="nav-img">
                  <img src="" alt="">
                  <p>{{v.title}}</p>
              </div>
              <div class="nav-text">
                  <p>赛程表</p>
                  <p>{{v.nav}}</p>
                  <p>视频直播</p>
              </div>
          </div>
      </header>
      <!-- 所属模块 -->
      <div class="mod">
          <div class="mod-content">
              <span><img src="" alt="">帮众体育</span>
              <span> > 足球资料</span>
              <span class="current"> > 英格兰超级联赛</span>
          </div>
      </div>
      <!-- 模块分类 -->
      <div class="modular">
          <div class="modular-content">
              <div class="modular-nav">
                      <span 
                        v-for="(v,i) in modularlist" 
                        :key="i" 
                        @click="modularfun(i)"
                        :class="modularnum===i?'select':''"
                        >
                            {{v.title}}
                        </span>
                      <div class="matchname one">
                            <span>各洲赛事</span>
                            <ul>
                                <li>欧洲赛事</li>
                                <li>美洲赛事</li>
                                <li>亚洲赛事</li>
                                <li>大洋洲赛事</li>
                                <li>非洲赛事</li>
                                <li>国际赛事</li>
                                <li>沙滩赛事</li>
                            </ul>
                      </div> 

                      <div class="matchname">
                            <span>各国赛事</span>
                            <ul>
                                <li>亚洲杯</li>
                                <li>欧冠</li>
                                <li>意甲</li>
                            </ul>
                      </div> 

                        <!-- 赛事选择 -->
                      <div class="matchname">
                            <span>{{allnum}}</span>
                            <ul>
                                <li>亚洲杯</li>
                                <li>欧冠</li>
                                <li>意甲</li>
                            </ul>
                      </div> 
                      <div class="see">查看</div>
              </div>
              <div class="modular-title">
                  <div class="imgbox">
                      <img src="" alt="">
                  </div>
                  <div class="text-box">
                      <p class="title">
                          <span>英超联赛</span>
                          <span class="sj">
                              选择赛季：
                            <div class="matchname">
                                <span>各洲赛事</span>
                                <ul>
                                    <li>欧洲赛事</li>
                                    <li>美洲赛事</li>
                                    <li>亚洲赛事</li>
                                </ul>
                            </div> 
                          </span>
                      </p>
                      <p class="text">
                          英超联赛,全称<span>英格兰超级联赛</span>，当前最新比赛数据是2019-2020赛季，英超赛程、积分榜、射手榜等数据查询！
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <!-- 隔层 -->
      <div class="bgbox"></div>
      <!-- 分类详情/组件切换 -->
      <div class="contentbox">
        <Mat v-show="modularnum===0"></Mat>
        <Season v-show="modularnum===1"></Season>
        <Schedule v-show="modularnum===2"></Schedule>
        <Integral v-show="modularnum===3"></Integral>
        <Shooter v-show="modularnum===4"></Shooter>
        <Team v-show="modularnum===5"></Team>
        <Broadcast v-show="modularnum===6"></Broadcast>
        <Videotape v-show="modularnum===7"></Videotape>
      </div>
      <pcFooter></pcFooter>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          navlist:[
              {
                  imgurl:"",
                  title:"NBA",
                  nav:"录像回放"
              },
              {
                  imgurl:"",
                  title:"亚洲杯",
                  nav:"录像回放"
              },
              {
                  imgurl:"",
                  title:"欧冠",
                  nav:"射手榜"
              },
              {
                  imgurl:"",
                  title:"英超",
                  nav:"积分榜"
              },
              {
                  imgurl:"",
                  title:"意甲",
                  nav:"积分榜"
              },
              {
                  imgurl:"",
                  title:"西甲",
                  nav:"积分榜"
              },
              {
                  imgurl:"",
                  title:"德甲",
                  nav:"积分榜  "
              },
              {
                  imgurl:"",
                  title:"欧冠",
                  nav:"积分榜"
              },
          ],
          modularlist:[
              {
                  title:"英超联赛"
              },
              {
                  title:"2019-2020"
              },
              {
                  title:"赛程表"
              },
              {
                  title:"积分榜"
              },
              {
                  title:"射手榜"
              },
              {
                  title:"球队名单"
              },
              {
                  title:"在线直播"
              },
              {
                  title:"视频录像"
              },
          ],
          modularnum:0,
          allnum:'赛事名称'
      };
    },
    components:{
         Mat: () => import('./components/mat.vue'),
         Season:() => import('./components/season.vue'),
         Schedule:() => import('./components/schedule.vue'),
         Integral:() => import('./components/integral.vue'),
         Shooter:() => import('./components/shooter.vue'),
         Team:() => import('./components/team.vue'),
         Broadcast:() => import('./components/broadcast.vue'),
         Videotape:() => import('./components/videotape.vue'),
    },
    mounted(){

    },
    methods: {
        //控制组件切换
        modularfun(i){
            this.modularnum = i;
        },
        // 赛事选择
        matchnamefun(){
            if(this.$refs.matchname.style.overflow === "hidden"){
                this.$refs.matchname.style.overflow = "visible"
            }else{
                this.$refs.matchname.style.overflow = "hidden"
            }
        },
        allfun(i){
            this.allnum = i;
            this.$refs.matchname.style.overflow = "hidden"
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/matchdata.scss" lang="scss" scoped></style>
