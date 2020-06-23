<template>
    <div class="bigbox">
        <pcNavBar navActivate="即时比分"></pcNavBar>
        <!-- 面包屑 -->
        <header>
            <span><img src="" alt="">帮众体育<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span>
            <span>滚球专栏</span>
        </header>
        <!-- 对阵球队 -->
        <div class="against">
            <p class="tit">球会友谊 2020-04-21 01:15</p>
            <div class="cont">
                <div class="team"><p>利物浦[1]</p><img src="" alt=""></div>
                <div class="cent">3-1</div>
                <div class="team"><img src="" alt=""><p>利物浦[1]</p></div>
            </div>
            <p class="time">正在进行 59′ | 直播</p>
            <p class="information">场地：安菲尔德球场   天气：微雨    温度：8℃～9℃</p>
        </div>
        <!-- 导航 -->
        <nav>
            <div class="nav">
                <div 
                    v-for="(item,index) in navlist" 
                    :key="index" 
                    class="navs"
                    @click="navfun(index)"
                    :class="navnum === index?'select':''"
                >
                    <div></div>
                    <p v-text="item"></p>
                </div>
            </div>
        </nav>
        <!-- 组件 -->
        <div class="component">
            <div class="components">
                <play v-show="navnum===0" :numbers=1></play>
                <against v-show="navnum===1"></against>
                <AI v-show="navnum===2"></AI>
                <compensate v-show="navnum===3"></compensate>
                <exponent v-show="navnum===4"></exponent>
                <bigsmall v-show="navnum===5"></bigsmall>
                <play v-show="navnum===7"  :numbers=2></play>
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
              '比赛直播',
              '对阵分析',
              'AI预测',
              '百家欧赔',
              '让球指数',
              '大小指数',
              '必发指数',
              '完场战报',
          ],
          navnum:0
      };
    },
    created() {

    },
    mounted(){

    },
    methods: {
        navfun(index){
            this.navnum = index;
        }
    },
    components:{
        play:()=>import("./components/play.vue"),
        against:()=>import("./components/against.vue"),
        AI:()=>import("./components/AI.vue"),
        compensate:()=>import("./components/compensate.vue"),
        exponent:()=>import("./components/exponent.vue"),
        bigsmall:()=>import("./components/bigsmall.vue"),
    }
  };
</script>

<style src="@/assets/css/pc/instantscore/instantscore.scss" lang="scss" scoped></style>