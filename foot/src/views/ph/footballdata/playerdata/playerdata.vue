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
                      <p class="tit">
                        <span>罗纳尔多</span>
                        <span>
                          <img src="" alt="">
                          <span>Liverpools</span>
                          <span>></span>
                        </span>
                      </p>
                      <p class="body"><span>中场</span><span>31岁</span><span>187cm</span><span>70kg</span></p>
                      <div class="record">
                          <div class="records">
                              <p>7500万欧元</p>
                              <p>身价$</p>
                          </div>
                          <div class="records">
                              <p>右脚</p>
                              <p>惯用脚<img src="" alt=""></p>
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
          <datas v-show="navnum===0"></datas>
          <information v-show="navnum===1"></information>
          <transfer v-show="navnum===2"></transfer>
          <videos v-show="navnum===3"></videos>
          <atlas v-show="navnum===4"></atlas>
          
      </nav>
      
  </div>
</template>

<script>
  export default {
    data() {
      return {
          navlist:[
              {
                  text:'资料'
              },
              {
                  text:'数据'
              },
              {
                  text:'转会'
              },
              {
                  text:'视频'
              },
              {
                  text:'图集'
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
        videos:()=>import("./components/videos.vue"),
        atlas:()=>import("./components/atlas.vue"),
        datas:()=>import("./components/datas.vue"),
        information:()=>import("./components/information.vue"),
        transfer:()=>import("./components/transfer.vue"),
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/playerdata/playerdata.scss" lang="scss" scoped></style>
