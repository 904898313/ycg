<template>
    <div class="bigbox">
        <!-- 场均数据 -->
        <header>
            <div class="contents" v-for="(item,index) in list" :key="index">
                <div>
                    <p>0.38进球</p>
                    <p>场均数据</p>
                </div>
                <div>
                    <img :src="item.img" alt="">
                </div>
            </div>
        </header>
        <!-- 数据统计 -->
        <div class="total">
            <!-- 头部/赛季选择 -->
            <div class="title">
                <span class="tit">凯文德布劳内数据统计</span>
                <div class="match">
                    <span>赛季：</span>

                    <div class="listbox">
                        <span>18/19</span>
                        <ul class="listul">
                            <li>18/19</li>
                            <li>18/19</li>
                            <li>18/19</li>
                        </ul>
                    </div>

                </div>
            </div>
            <!-- 表格内容 -->
            <div class="table">
                <!-- header -->
                <div class="row">
                    <span>效力赛事</span>
                    <span>最佳球员</span>
                    <span>进球(点球)</span>
                    <span>助攻</span>
                    <span>解围</span>
                    <span>黄牌</span>
                    <span>红牌</span>
                    <span>首发（替补）</span>
                    <span>上场时间</span>
                </div>
                <!-- 循环 -->
                <div class="row rowcenter" v-for="(v,i) in table" :key="i">
                    <span><img src="" alt="">英格兰超级联赛</span>
                    <span>20</span>
                    <span>16(3)</span>
                    <span>7</span>
                    <span>116</span>
                    <span>6</span>
                    <span>3</span>
                    <span>115(65)</span>
                    <span>1654′</span>
                </div>
                <!-- footer -->
                <div class="row lastrow">
                    <span>总计2019/2020赛季</span>
                    <span>20</span>
                    <span>16(3)</span>
                    <span>7</span>
                    <span>116</span>
                    <span>6</span>
                    <span>3</span>
                    <span>115(65)</span>
                    <span>1654′</span>
                </div>
            </div>
            <p class="text">
                *并非凯文·德布劳内参加的所有比赛我们都有统计数据，别担心，我们在不久的将来即将添加它们。
            </p>
        </div>
        <!-- 分类统计 -->
        <div class="sort">
            <!-- 头部/赛季选择 -->
            <div class="nav">
                <span 
                    v-for="(v,i) in navlist" 
                    :key="i"
                    @click="navfun(i)"
                    :class="navnum===i?'select':''"
                >
                    <img src="" alt="">
                    {{v.text}}
                </span>
            </div>
            <!-- 表格内容 -->
            <div class="table">
                <!-- header -->
                <div class="row">
                    <span>赛事</span>
                    <span>时间</span>
                    <span>主队</span>
                    <span>比分</span>
                    <span>客队</span>
                    <span>进球（点球）</span>
                    <span>助攻</span>
                    <span>黄牌</span>
                    <span>红牌</span>
                    <span>上场时间</span>
                </div>
                <!-- 循环 -->
                <div class="row rowcenter" v-for="(v,i) in table" :key="i">
                    <span>英超</span>
                    <span>2020-07-14</span>
                    <span>利物浦</span>
                    <span>1-2</span>
                    <span>阿森纳</span>
                    <span>3(1)</span>
                    <span>3</span>
                    <span>1</span>
                    <span>0</span>
                    <span>87′</span>  
                </div>
            </div>
            <div class="paging">
                <el-pagination
                background
                layout="prev, pager, next"
                :total="1000">
                </el-pagination>
            </div>
        </div>
        <!-- 数据频率统计 -->
        <div class="rate">
            <header>数据频率统计</header>
            <div class="contents">
                <div v-for="(v,i) in ratelist" :key="i">
                    <span class="left"><img :src="v.img" alt=""><span class="weight">进球</span></span>
                    <span>每<span class="weight">224分钟</span>进球一次</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
          list:[
              {
                  img:require("@/assets/images/footballdata/icon18-jq@2x.png")
              },
              {
                  img:require("@/assets/images/footballdata/zg@2x (1).png")
              },
              {
                  img:require("@/assets/images/footballdata/jw@2x.png")
              },
              {
                  img:require("@/assets/images/footballdata/hp@2x.png")
              },
          ],
          table:[1,2,3,4,5],
          navlist:[
              {
                  text:"英超联赛"
              },
              {
                  text:"社区盾"
              },
              {
                  text:"欧洲冠军联赛"
              },
              {
                  text:"联赛杯"
              },
              {
                  text:"足总杯"
              },
          ],
          navnum:0,
          ratelist:[
              {
                  img:require("@/assets/images/footballdata/jqicon56@2x (1).png")
              },
              {
                  img:require("@/assets/images/footballdata/ljicon56@2x (1).png")
              },
              {
                  img:require("@/assets/images/footballdata/zgicon56@2x (1).png")
              },
              {
                  img:require("@/assets/images/footballdata/zjicon56@2x (1).png")
              },
              {
                  img:require("@/assets/images/footballdata/hp-icon56@2x.png")
              },
              {
                  img:require("@/assets/images/footballdata/hpicon56@2x (1).png")
              },
          ]
      };
    },
    created() {

    },
    methods: {
        navfun(i){
            this.navnum = i;
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/playerdata/record.scss" lang="scss" scoped></style>
