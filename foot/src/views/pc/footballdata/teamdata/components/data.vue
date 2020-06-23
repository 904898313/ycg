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
            <!-- 统计 -->
            <div class="statistic">
                <div class="left">
                    <!-- header -->
                    <header class="pulic">
                        <p></p>
                        <p>场</p>
                        <p>胜</p>
                        <p>平</p>
                        <p>负</p>
                        <p>最近五场</p>
                        <p>进球效率</p>
                    </header>
                    <!-- 循环 -->
                    <div 
                        class="contents pulic"
                        v-for="(v,i) in list"
                        :key="i"
                    >
                        <p>{{v.text}}</p>
                        <p>29</p>
                        <p>14</p>
                        <p>6</p>
                        <p>6</p>
                        <p>
                            <span>W</span>
                            <span>W</span>
                            <span>W</span>
                            <span>D</span>
                            <span>L</span>
                        </p>
                        <p>
                            <span>1.66</span>
                        </p>
                    </div>
                    <!-- bot -->
                    <div class="bot">
                        <span>曼彻斯特城在英超联赛 主场增幅BUFF</span><span>+5%</span>
                    </div>
                </div>
                <div class="right">
                    <!-- header -->
                    <header>
                        <span>球队角球统计</span>
                        <img src="@/assets/images/footballdata/jqICON@2x.png" alt="">
                    </header>
                    <!-- 角球统计 -->
                    <div class="contents">
                        <img src="@/assets/images/footballdata/jqICON2@2x.png" alt="">
                        <div class="center">
                            <p  class="weight">8.54</p>
                            <p>角球/场数</p>
                        </div>
                        <div>
                            <p class="data">
                                <span>超过9.5:</span>
                                <span></span>
                                <span class="col">15场</span>
                            </p>
                            <p class="data">
                                <span>超过9.5:</span>
                                <span></span>                                
                                <span class="col">14场</span>
                            </p>
                        </div>
                    </div>
                    <!-- bot -->
                    <div class="bot">
                        <span>29场比赛中产生了241个角球。</span>
                    </div>
                </div>
            </div>
            <!-- 进失球热度图 -->
            <div class="hoc">
                <!-- 头部 -->
                <header>
                    <p class="left">
                        <img src="" alt="">
                        <span>曼彻斯特城进/失 热度图。</span>
                    </p>
                    <p class="right">统计维度为英超联赛全部的29场比赛</p>
                </header>
                <!-- 热度图 -->
                <div class="body">
                    <!-- 进球失球切换 -->
                    <div class="title">
                        <div @click="selectfun(1)" :class="selectnum===1?'select':''">进球热图</div>
                        <div @click="selectfun(2)" :class="selectnum===2?'select':''">失球热图</div>
                    </div>
                    <div class="data">
                        <p>
                            <span>43%</span>
                            <span>上半场</span>
                        </p>
                        <p>
                            <span>3.54</span>
                            <span>{{selectnum===1?'进球':'失球'}}/场数</span>
                        </p>
                        <p>
                            <span>57%</span>
                            <span>下半场</span>
                        </p>
                    </div>

                    <div class="chart">
                        <span v-for="(v,i) in chartlist" :key="i">{{i===15?text:''}}</span>
                        <p class="p1">15′</p>
                        <p class="p2">30′</p>
                        <p class="p3">60′</p>
                        <p class="p4">75′</p>
                    </div>
                    <div class="colordiv">
                            <div class="color1"></div>
                            <span>0-0.2</span>
                            <div class="color2"></div>
                            <span>0.2-0.4</span>
                            <div class="color3"></div>
                            <span>0.6-0.8</span>
                            <div class="color4"></div>
                            <span>0.8-1</span>
                            <p>*系数值越接近1，颜色越偏向红色则进球密度越集中。</p>
                    </div>
                </div>
            </div>
            <!-- 比赛数据 -->
            <div class="match">
                <!-- 头部 -->
                <header>
                    <p class="left">
                        <img src="" alt="">
                        <span>曼彻斯特城比赛数据时间分布</span>
                    </p>
                </header>
                <!-- 场次选择 -->
                <div class="title">
                    <div class="left">
                        <span>曼彻斯特城</span>
                        <span>数据时间分布</span>
                        <img src="@/assets/images/footballdata/shuju_i@2x.png" alt="">
                    </div>
                    <div class="right">
                        
                        <div class="list" @click="seasonfun1">
                            <span>{{seatext1}}</span>
                            <ul :class="seasonbool1?'block1':''">
                                <li 
                                    v-for="(v,i) in seasonlist1" 
                                    :key="i"
                                    @click="sea1(v.text)"
                                >
                                    {{v.text}}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <!-- 比赛数据 -->
                <div class="data">
                    <p>时间为<span>36</span>分钟时</p>
                    <p>之后最多<span>5</span>个进球</p>
                    <p>之前的平均进球数<span>0.22</span></p>
                    <p>之后的平均进球数<span>0.22</span></p>
                    <p><span>26%</span>之前会进球</p>
                    <p><span>26%</span>之后会进球</p>
                    <p>之前的平均失球数<span>0.22</span></p> 
                    <p>之后的平均失球数<span>0.22</span></p>
                </div>
                <!-- 数据详情 -->
                <div class="details">
                    <header class="pulic">
                        <p>日期</p>
                        <p>主队</p>
                        <p></p>
                        <p>客队</p>
                        <p>
                            
                            <span><img src="@/assets/images/footballdata/icon18-jq2@2x.png" alt="">曼城进球</span>
                            
                            <span><img src="@/assets/images/footballdata/icon18-sq@2x.png" alt="">曼城失球</span>
                        </p>
                        <p>总进球</p>
                    </header>
                    <div 
                        class="contents pulic"
                        v-for="(v,i) in chartlist"
                        :key="i"
                    >
                        <p>17-04-21</p>
                        <p>切尔西<img src="" alt=""></p>
                        <p>1-2</p>
                        <p><img src="" alt="">曼彻斯特城</p>
                        <p>
                            <img src="" alt="">
                        </p>
                        <p>3</p>
                    </div>
                </div>
            </div>
            <!-- 本赛季数据 -->
            <div class="total">
                <div 
                    class="totals"
                    v-for="(v,i) in totallist"
                    :key="i"
                >
                    <header>{{v.text}}</header>
                    <div class="list head">
                        <p></p>
                        <p>赛</p>
                        <p>胜</p>
                        <p>平</p>
                        <p>负</p>
                        <p>得</p>
                        <p>失</p>
                        <p>净</p>
                        <p>胜%</p>
                        <p>平%</p>
                        <p>负%</p>
                        <p>均得</p>
                        <p>均失</p>
                        <p>积分</p>
                    </div>
                    <div class="list body">
                        <p>总场次</p>
                        <p>76</p>
                        <p>76</p>
                        <p>76</p>
                        <p>76</p>
                        <p>76</p>
                        <p>76</p>
                        <p>76</p>
                        <p>24.1%</p>
                        <p>20.7%</p>
                        <p>55.2%</p>
                        <p>1.21</p>
                        <p>1.72</p>
                        <p>27</p>
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
            seasonbool:false,
            seasonbool1:false,
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
            seasonlist1:[
                {
                    text:'近50场比赛'
                },
                {
                    text:'近40场比赛'
                },
                {
                    text:'近30场比赛'
                },
                {
                    text:'近20场比赛'
                },
                {
                    text:'近10场比赛'
                },
            ],
            seatext:'18/19',
            seatext1:'近20场比赛',
            list:[
                {
                    text:'总计'
                },
                {
                    text:'主场'
                },
                {
                    text:'客场'
                },
            ],
            selectnum:1,
            chartlist:[],
            text:'HT',
            totallist:[
                {
                    text:"本赛季 全场联赛数据"
                },
                {
                    text:"本赛季 半场联赛数据"
                },
                {
                    text:"本赛季 全场让球盘路"
                },
                {
                    text:"本赛季 半场让球盘路"
                },
                {
                    text:"本赛季 全场大小盘路"
                },
                {
                    text:"本赛季 半场大小盘路"
                },
            ]
      };
    },
    created() {
        for(var i =0;i<31;i++){
            this.chartlist.push(i)
        }
    },
    methods: {
        navfun(i){
            this.navnum = i;
        },
        seasonfun(){
            this.seasonbool =! this.seasonbool;
        },
        seasonfun1(){
            this.seasonbool1 =! this.seasonbool1;
        },
        sea(t){
            this.seatext = t;
        },
        sea1(t){
            this.seatext1 = t;
        },
        selectfun(i){
            this.selectnum = i;
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/data.scss" lang="scss" scoped></style>
