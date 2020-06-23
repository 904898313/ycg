<template>
  <div>
        <!-- 分类统计 -->
        <div class="sort">
            <!-- 头部/赛季选择 -->
            <div class="nav">
                <div class="head">
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
                <!-- 赛季选择 -->
                <div class="season">
                    <span class="tit">赛季:</span>
                    <div class="list" @click="seasonfun">
                        <span>{{seatext}}</span>
                        <ul :class="seasonbool?'block':''">
                            <li 
                                v-for="(v,i) in seasonlist" 
                                :key="i"
                                @click="sea(v.text)"
                            >
                                {{v.text}}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- 场次总计 -->
            <div class="scene">
                <header class="public">
                    <span>场次</span>
                    <span>胜</span>
                    <span>平</span>
                    <span>负</span>
                    <span>犯规</span>
                    <span>黄牌</span>
                    <span>红牌</span>
                    <span>射门(射正)</span>
                    <span>传球(成功)</span>
                    <span>助攻</span>
                    <span>传球成功率</span>
                    <span>控球率</span>
                    <span>胜率</span>
                </header>
                <div class="content public">
                    <span>24698</span>
                    <span>76</span>
                    <span>76</span>
                    <span>76</span>
                    <span>76</span>
                    <span>76</span>
                    <span>76</span>
                    <span>76(32)</span>
                    <span>76(32)</span>
                    <span>76</span>
                    <span>76%</span>
                    <span>76%</span>
                    <span>76%</span>
                </div>
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
                    <span>半场</span>
                    <span>亚</span>
                    <span>大</span>
                    <span>欧</span>
                    <span>资料</span>
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
                    <span>分析</span>  
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
            <!-- 部分分类 -->
            <div class="part">
                <!-- 积分榜 -->
                <div class="parts">
                    <header>
                        <span>英超积分榜</span>
                        <span>完整积分榜</span>
                    </header>
                    <div class="title pulic">
                        <p>排名</p>
                        <p>球队</p>
                        <p>胜</p>
                        <p>平</p>
                        <p>负</p>
                        <p>积分</p>
                    </div>
                    <!-- 循环 -->
                    <div 
                        class="contents pulic"
                        v-for="(v,i) in list"
                        :key="i"
                    >
                        <p>{{v}}</p>
                        <p>利物浦</p>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>41</p>
                    </div>
                </div>
                <!-- 赛程赛果 -->
                <div class="parts">
                    <header>
                        <span>英超赛程</span>
                        <span>完整英超赛程</span>
                    </header>
                    <div class="match matchpulic">
                        <div class="flexs">
                            <p>时间</p>
                            <p>主队</p>
                            <p>比分</p>
                            <p>客队</p>
                        </div>

                    </div>
                    <div class="match-contents matchpulic" v-for="(v,i) in lists" :key="i">
                        <div class="flexs">
                            <p>04-18 21:30</p>
                            <p>曼城</p>
                            <p>VS</p>
                            <p>利物浦</p>
                        </div>
                        <div class="bot">
                            <span>比赛前瞻</span>
                            <span>暂无直播</span>
                        </div>
                    </div>
                </div>
                <div class="parts">
                    <header>
                        <span>英超赛程</span>
                        <span>完整英超赛程</span>
                    </header>
                    <div class="match matchpulic">
                        <div class="flexs">
                            <p>时间</p>
                            <p>主队</p>
                            <p>比分</p>
                            <p>客队</p>
                        </div>

                    </div>
                    <div class="match-contents matchpulic" v-for="(v,i) in lists" :key="i">
                        <div class="flexs">
                            <p>04-18 21:30</p>
                            <p>曼城</p>
                            <p>VS</p>
                            <p>利物浦</p>
                        </div>
                        <div class="bot">
                            <span>比赛前瞻</span>
                            <span>暂无直播</span>
                        </div>
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
            navlist:[
              {
                  text:"全部"
              },
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
            table:[],
            seasonbool:false,
            seasonlist:[
                {
                    text:'18/11'
                },
                {
                    text:'18/12'
                },
                {
                    text:'18/13'
                },
                {
                    text:'18/14'
                },
            ],
            seatext:'18/19',
            list:[1,2,3,4,5,6,7,8,9,10],
            lists:[1,2,3]
      };
    },
    created() {
        for(var i=0;i<21;i++){
            this.table.push(i)
        }
    },
    methods: {
        navfun(i){
            this.navnum = i;
        },
        seasonfun(){
            this.seasonbool =! this.seasonbool;
        },
        sea(t){
            this.seatext = t;
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/course.scss" lang="scss" scoped></style>
