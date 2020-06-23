<template>
  <div class="bigbox">
      <ph-nav-bar nav-activate="足球图集"></ph-nav-bar>
      <header ref="header">
          <div v-for="(v,i) in headerlist" :key="i" @click="selectionfun(i)" :class="[headernum===i?'a':'']">{{v}}</div>
          <div class="positionbox" @click="allfun"><img  ref="allimg" src="@/assets/images/college/under@3x.png" alt=""></div>
      </header>
      <div class="content-bigbox">
          <div class="content" v-for="(v,i) in contentlist" :key="i">
              <div class="imgbox" @click="godetails">
                  <img src="" alt="">
                  <div class="bg">
                      <img src="@/assets/images/footballdata/tu-icon@2x.png" alt="">
                      <span>12张</span>
                  </div>
              </div>
              <div class="textbox">
                  <p>利物浦一月最佳进球花落萨拉赫 扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红...</p>
                  <p><span>2020-03-18</span><span><img src="@/assets/images/college/browse_i@2x.png" class="picture" alt="">2000</span></p>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          num:1,
          headerlist:[
              "英超",
              "欧冠",
              "西甲",
              "德甲",
              "意甲",
              "中超",
              "国际足球",
              "滚球技巧",
              "足彩知识"
            ],
          headernum:0,
          contentlist:[1,2,3,4,5,6]
      };
    },
    created() {

    },
    methods: {
        selectionfun(i){
            this.headernum = i;
        },
        allfun(){
            if(this.num === 1){
                this.$refs.header.style.height = "1.6"+"rem";
                this.$refs.allimg.src = require("@/assets/images/college/up@3x.png");
                this.num = 2;
            }else if(this.num === 2){
                this.$refs.header.style.height = "0.8"+"rem";
                this.$refs.allimg.src = require("@/assets/images/college/under@3x.png");
                this.num = 1;
            }
        },
        go(){
            this.$router.go(-1)
        },
        godetails(){
            this.$router.push('ph-atlas-details')
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/atlas/atlas.scss" lang="scss" scoped></style>
