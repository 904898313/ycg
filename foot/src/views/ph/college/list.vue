<template>
  <div class="bigbox">
      <header ref="header">
          <div v-for="(v,i) in headerlist" :key="i" @click="selectionfun(i)" :class="[headernum===i?'a':'']">{{v}}</div>
          <div class="positionbox" @click="allfun"><img  ref="allimg" src="@/assets/images/college/under@3x.png" alt=""></div>
      </header>
      <div class="content-bigbox">
          <div class="content" v-for="(v,i) in contentlist" :key="i">
              <div class="imgbox">
                  <img src="" alt="">
              </div>
              <div class="textbox">
                  <p>西甲深盘怎么买？西甲西甲深盘怎么买？西甲西甲深盘怎么买？西甲...</p>
                  <p>利物浦一月最佳进球花落萨拉赫 扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红扛着对手奔袭半场破红...</p>
                  <p><span>2020-03-18</span><span><img src="@/assets/images/college/comment_i@2x.png" class="picture" alt="">0</span><span><img src="@/assets/images/college/browse_i@2x.png" class="picture" alt="">20</span></p>
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
              "全部",
              "亚盘分析",
              "大小秘籍",
              "滚球技巧",
              "足彩知识",
              "亚盘分析",
              "大小秘籍",
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
        }
    }
  };
</script>

<style src="@/assets/css/ph/college/list.scss" lang="scss" scoped></style>
