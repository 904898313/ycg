<template>
    <div class="bigbox">
        <!-- 分类导航 -->
        <nav>
            <div 
                v-for="(item,index) in navlist" 
                :key="index"
                @click="navfun(index)"
                class="nav"
                :class="navindex===index?'select':''"
            >
                {{item}}
            </div>
        </nav>
        <!-- 积分榜 -->
        <div class="integral" v-show="navindex===0">
            <header class="public">
                <p>排名</p>
                <p>球队</p>
                <p>胜</p>
                <p>平</p>
                <p>负</p>
                <p>积分</p>
            </header>
            <div class="body public" v-for="(item,index) in 6" :key="index">
                <p ref="one">{{item}}</p>
                <p><img src="" alt=""><span>利物浦</span></p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
                <p>22</p>
            </div>
            <div class="all">
                查看完整英超积分榜 <img src="@/assets/images/footballdata/next_i@2x.png" alt="">
            </div>
        </div>


        <!-- 赛果 -->
        <div class="gain" v-show="navindex===1 || navindex===2">
            <div class="head">
                <p>时间</p>
                <p>主队</p>
                <p class="cent">比分</p>
                <p>客队</p>
            </div>
            <div class="body" v-for="index in 5" :key="index">
                <div class="tit">
                    <p>
                        <span>03-26</span>
                        <span> 16:30</span>
                    </p>
                    <p>
                        <span>比赛前瞻</span>
                        <span>暂无直播</span>
                    </p>
                </div>
                <div class="bodys public">
                    <p><span>利物浦</span><span>1 : 2</span><span>水晶宫</span></p>
                </div>
            </div>
            <div class="all">
                查看完整英超积分榜 <img src="@/assets/images/footballdata/next_i@2x.png" alt="">
            </div>
        </div>


        <!-- gb -->
        <div class="bg"></div>
        <!-- 数据展示 -->
        <div class="data">
            <!-- 头部导航 -->
            <header>
                <div class="navlist">
                    <span>英超联赛 <img src="@/assets/images/footballdata/arrow_down@2x.png" alt=""></span>
                    <ul>
                        <li>英超联赛1</li>
                        <li>英超联赛2</li>
                        <li>英超联赛3</li>
                        <li>英超联赛4</li>
                    </ul>
                </div>
                <div class="navlist">
                    <span>2018-2019 <img src="@/assets/images/footballdata/arrow_down@2x.png" alt=""></span>
                    <ul>
                        <li>2018-20191</li>
                        <li>2018-20192</li>
                        <li>2018-20193</li>
                        <li>2018-20194</li>
                    </ul>
                </div>
            </header>
            <!-- 表格 -->
            <div class="content">
                <div class="head public">
                    <p>场次</p>
                    <p>胜/平/负</p>
                    <p>犯规</p>
                    <p>红牌</p>
                    <p>黄牌</p>
                    <p>助攻</p>
                    <p>胜率</p>
                </div>
                <div class="body public">
                    <p>24698</p>
                    <p>76/76/76</p>
                    <p>76</p>
                    <p>76</p>
                    <p>76</p>
                    <p>76</p>
                    <p>76%</p>
                </div>
            </div>
            <!-- echarts -->
            <div class="echarts">

            </div>
            <!-- 对阵数据 -->
            <div class="listbox">
                <div class="head public">
                    <p>对阵</p>
                    <p>半场</p>
                    <p>亚</p>
                    <p>大</p>
                    <p>欧</p>
                    <p>资料</p>
                </div>
                <div class="body" v-for="index in 5" :key="index">
                    <div class="tit">
                        <p>20-10/12</p>
                        <p>英超</p>
                    </div>
                    <div class="bodys public">
                        <p><span>利物浦</span><span>1 : 2</span><span>水晶宫</span></p>
                        <p>0-1</p>
                        <p>赢</p>
                        <p>大</p>
                        <p>负</p>
                        <p>分析</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          navlist:['积分榜','赛程','赛果',],
          navindex:0
      };
    },
    created() {

    },
    mounted(){
        this.$refs.one[0].style.color = "#f55e53";
        this.$refs.one[1].style.color = "#e89916";
        this.$refs.one[2].style.color = "#5fb864";
    },
    methods: {
        navfun(index){
            this.navindex = index;
        }
    }
  };
</script>
<style lang="scss">

</style>

<style src="@/assets/css/ph/footballdata/teamdata/schedule.scss" lang="scss" scoped></style>
