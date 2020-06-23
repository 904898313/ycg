<template>
  <div class="bigbox">
      <pcNavBar  navActivate='足球资料' navDown='足球图集'></pcNavBar>
        <div class="header">
            <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
            <span>足球资料<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
            <span>足球图集</span>
        </div>
        <div class="content">
            <div class="left">
                <header>
                    <span class="text">足球图集</span>
                    <img src="@/assets/images/footballdata/photo_i@2x.png" alt="">
                </header>
                <div class="chart">
                    <div class="nav">
                        <p 
                            v-for="(item,index) in navlist" 
                            :key="index"
                            @click="navfun(index)"
                        >
                            <span :class="navnum===index?'select':''">{{item.tit}}</span>
                            <strong>/</strong>
                        </p>
                    </div>
                    <div class="contents">
                        <div 
                            class="big"
                            v-for="(v,i) in 16"  
                            :key="i"
                        >
                            <div class="small">
                                <div class="imgbox" @click="go()"> 
                                    <img src="" alt="">
                                    <p><img src="@/assets/images/footballdata/tu-icon@3x.png" alt=""><span>24张</span></p>
                                </div>
                                <div class="text">
                                    <p>德甲联赛即将启动 那些巨星们都准备好了吗</p>
                                    <p>
                                        <span>2019-10-28 </span>
                                        <span><img src="@/assets/images/footballdata/browse_i@2x.png" alt="">1999</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 分页 -->
                    <div class="paging">
                        <el-pagination
                        background
                        layout="prev, pager, next"
                        :total="1000">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="right">
                <!-- 英超最新图集 -->
                <div class="atlas">
                    <header>
                        <span class="text">英超最新图集</span>
                    </header>
                    <div class="new">
                        <div class="news" v-for="index in 2" :key="index" @click="go()">
                            <img src="" alt="">
                            <p><span>哈雷车U19哈雷车U19</span><span><img src="@/assets/images/footballdata/tu-icon@3x.png" alt="">2224张</span></p>
                        </div>
                    </div>
                </div>
                <!-- 英超热门图集 -->
                <div class="atlas">
                    <header>
                        <span class="text">英超热门图集</span>
                    </header>
                    <div class="hot">
                        <div class="hots" v-for="index in 10" :key="index">
                            <p @click="go()"><span ref="num">1</span><span>欧洲杯比赛地点-2020欧洲杯球场...</span></p>
                            <p>245浏览</p>
                        </div>
                    </div>
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
          navlist:[
              {
                  tit:'英超'
              },
              {
                  tit:'欧冠'
              },
              {
                  tit:'西甲'
              },
              {
                  tit:'德甲'
              },
              {
                  tit:'意甲'
              },
              {
                  tit:'中超'
              },
              {
                  tit:'国际足球'
              },
              {
                  tit:'欧洲杯'
              },
              {
                  tit:'美洲杯'
              },
          ],
          navnum:0
      };
    },
    created() {

    },
    mounted(){
        this.$refs.num[0].style.background = "#ffc201";
        this.$refs.num[1].style.background = "#f3d061";
        this.$refs.num[2].style.background = "#eed892";
    },
    methods: {
        navfun(index){
            this.navnum = index;
        },
        go(){
            this.$router.push("/pc-atlas-details")
        }
    }
  };
</script>
<style src="@/assets/css/pc/footballdata/atlas/atlas.scss" lang="scss" scoped></style>
