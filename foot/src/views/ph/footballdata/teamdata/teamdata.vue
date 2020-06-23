<template>
  <div class="bigbox">
      <!-- header -->
      <div class="header">
          <header>
              <img src="@/assets/images/footballdata/back_i2@2x.png" alt="" @click="go">
              <div>
                已点赞 16
              </div>
          </header>
          <div class="content">
              <div class="contents">
                  <div class="left">
                      <img src="" alt="">
                  </div>
                  <div class="right">
                      <p class="tit"><span>曼彻斯特城</span><span>Liverpool</span><span>80.5</span></p>
                      <p class="body"><span>联赛排名</span><span>10.7亿总身价</span></p>
                      <div class="record">
                          <div class="records">
                              <p>16胜1平0负</p>
                              <p>联赛战绩</p>
                          </div>
                          <div class="records">
                              <p>
                                  <span>W</span>
                                  <span>W</span>
                                  <span>W</span>
                                  <span>D</span>
                                  <span>L</span>
                              </p>
                              <p>最近5场</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <nav>
          <header>
              <span 
                v-for="(v,i) in navlist" 
                :key="i"
                @click="navfun(i)"
                :class="navnum===i?'select':''"
              >
                {{v.text}}
              </span>
          </header>
          <introduce v-show="navnum===0"></introduce>
          <schedule v-show="navnum===1"></schedule>
          <datas v-show="navnum===2"></datas>
          <lineup v-show="navnum===3"></lineup>
          <transfer v-show="navnum===4"></transfer>
          <videos v-show="navnum===5"></videos>
      </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          navlist:[
              {
                  text:'简介'
              },
              {
                  text:'赛程'
              },
              {
                  text:'数据'
              },
              {
                  text:'阵容'
              },
              {
                  text:'转会'
              },
              {
                  text:'视频'
              },
          ],
          navnum:0
      };
    },
    created() {

    },
    methods: {
        navfun(i){
            this.navnum = i;
        },
        go(){
            this.$router.go(-1)
        }
    },
    components:{
        introduce:()=>import("./components/introduce.vue"),
        schedule:()=>import("./components/schedule.vue"),
        datas:()=>import("./components/datas.vue"),
        lineup:()=>import("./components/lineup.vue"),
        transfer:()=>import("./components/transfer.vue"),
        videos:()=>import("./components/videos.vue"),
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/teamdata/teamdata.scss" lang="scss" scoped></style>
