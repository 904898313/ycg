<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 本赛季积分榜 -->
                  <div class="result">
                    <div class="head">
                        <div 
                            v-for="(v,i) in headlist" 
                            :key="i"
                            @click="headfun(i)"
                            :class="headnum===i?'selection':''"
                        >
                            {{v.text}}
                        </div>
                    </div>
                    <div class="integral">
                        <div class="title distance" >
                            <span>排名</span>
                            <span>球队名</span>
                            <span>赛</span>
                            <span>胜</span>
                            <span>平</span>
                            <span>负</span>
                            <span>得</span>
                            <span>失</span>
                            <span>净</span>
                            <span>胜%</span>
                            <span>平%</span>
                            <span>负%</span>
                            <span>均得</span>
                            <span>均失</span>
                            <span>积分</span>
                            <span>近六轮</span>
                        </div>
                        <div class="title1 distance" v-for="(v,i) in videolist" :key="i">
                            <span><span>{{i+1}}</span></span>
                            <span @click="go">曼彻斯特城<strong class="hong" v-if="1>0">1</strong></span>
                            <span>28</span>
                            <span>15</span>
                            <span>8</span>
                            <span>6</span>
                            <span>44</span>
                            <span>26</span>
                            <span>36</span>
                            <span>92.9%</span>
                            <span>92.9%</span>
                            <span>92.9%</span>
                            <span>0.72</span>
                            <span>78</span>
                            <span>901</span>
                            <span>胜胜胜胜胜胜</span>
                        </div>
                    </div>
                    <div class="bottom">
                        <div>
                            <p class="one"></p>
                            <p>欧冠杯小组赛资格</p>
                        </div>
                        <div>
                            <p class="two"></p>
                            <p>欧冠杯附加</p>
                        </div>
                        <div>
                            <p class="three"></p>
                            <p>欧罗巴联赛杯资格</p>
                        </div>
                        <div>
                            <p class="four"></p>
                            <p>降级球队</p>
                        </div>
                    </div>
                  </div>
                  <!-- 英超历届积分榜数据查询 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>英超球队赛程表查询</span>
                        </p>
                    </header>
                    <div class="query">
                        <div class="query-content" v-for="(v,i) in querylist" :key="i">阿森纳赛程</div>
                    </div>
                  </div>
                  <!-- 关于2019-2020赛季英超积分榜说明介绍 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>关于2019-2020赛季英超积分榜说明介绍</span>
                        </p>
                    </header>
                    <div class="text">
                        <p>1、2019-2020赛事英格兰超级联赛积分规则是比赛分轮次进行，每轮每一个球队将进行一场比赛，获胜得3分、负着得0分、平局则双方各得1分；最后球队积分排名要等2019-2020赛季轮全部比赛完成才最终确定；</p>
                        <p>2、2019-2020英超球队排名榜前三名依次是：第一名：利物浦、积分82分；第二名：曼彻斯特城、积分57分；第三名：莱切斯特城、积分50分；第一名和最后一名队相差积分：61分。</p>
                        <p>*3、2019-2020英超积分榜网址：<a href="http：//www.unchina.com/yingchaojifenbang/2019-2020.htm">http：//www.unchina.com/yingchaojifenbang/2019-2020.htm</a></p>
                        <p>注：<span class="hong">1</span> 表示本场比赛红牌数</p>
                    </div>
                  </div>
              </div>
              <!-- 右 -->
              <div class="right">
                  <!-- 数据统计 -->
                  <div class="repeat">
                      <header>
                          <span>英超联赛数据统计</span>
                          <img src="@/assets/images/footballdata/tongji_i@2x.png" alt="">
                      </header>
                      <div class="repeat-list">
                          <p v-for="(v,i) in repeatlist" :key="i">
                              <img src="" alt="">
                              <span>{{v.text}}</span>
                          </p>
                      </div>
                  </div>
                  <!-- 近期英超直播列表 -->
                  <div class="repeat">
                      <header>
                          <span>近期英超直播列表</span>
                          <img src="@/assets/images/footballdata/video_i2@2x.png" alt="">
                      </header>
                      <div class="repeat-list">
                          <p v-for="(v,i) in repeatlist" :key="i">
                              <img src="" alt="">
                              <span>{{v.text}}</span>
                          </p>
                      </div>
                  </div>
                  <!-- 英超各赛季数据回顾 -->
                  <div class="repeat">
                      <header>
                          <span>近期英超直播列表</span>
                          <img src="@/assets/images/footballdata/hf-icon@2x.png" alt="">
                      </header>
                      <div class="repeat-box">
                          <div v-for="(v,i) in footballvideo" :key="i">2019-2020</div>
                      </div>
                  </div>
                  <!-- 足球视频集锦 -->
                  <div class="repeat">
                      <header>
                          <span>足球视频集锦</span>
                          <img src="@/assets/images/footballdata/jijin_i@2x.png" alt="">
                      </header>
                      <div class="repeat-box">
                          <div v-for="(v,i) in footballvideo" :key="i">{{v.title}}</div>
                      </div>
                  </div>
                  <!-- 足球视频直播专题 -->
                  <div class="repeat">
                      <header>
                          <span>足球视频直播专题</span>
                          <img src="@/assets/images/footballdata/zhuanti@2x.png" alt="">
                      </header>
                      <div class="repeat-box">
                          <div v-for="(v,i) in footballvideo" :key="i">足球集锦</div>
                      </div>
                  </div>
              </div>
          </div>
</template>

<script>
  export default {
    data() {
      return {
          headlist:[
              {
                  text:"英超积分榜"
              },
              {
                  text:"英超主场积分榜"
              },
              {
                  text:"英超客场积分榜"
              },
              {
                  text:"英超半场积分榜"
              },
              {
                  text:"半场主场积分榜"
              },
              {
                  text:"半场客场积分榜"
              },
          ],
          headnum:0,
          videolist:[1,2,3,4,5,6,7,8],
          repeatlist:[
              {text:"2019-2020 英超联赛"},
              {text:"2019-2020 英超赛程表"},
              {text:"2019-2020 英超积分榜"},
              {text:"2019-2020 英超射手榜"},
              {text:"2019-2020 英超常见比分"},
              {text:"2019-2020 英超进球总数及单双统计"},
              {text:"2019-2020 英超进球数较多统计"},
          ],
          footballvideo:[
              {
                  title:"五佳球"
              },
              {
                  title:"十佳进球"
              },
              {
                  title:"过人"
              },
              {
                  title:"任意球"
              },
              {
                  title:"头球"
              },
              {
                  title:"角球"
              },
              {
                  title:"点球"
              },
              {
                  title:"助攻"
              },
              {
                  title:"倒勾"
              },
              {
                  title:"远射"
              },
              {
                  title:"进球"
              },
          ],
          querylist:[]
      };
    },
    created() {
        for (var i = 1; i < 21; i++) {
            this.querylist.push(i);
        }
    },
    mounted(){

    },
    methods: {
        headfun(i){
            this.headnum= i;
        },
        go(){
            this.$router.push('pc-teamdata')
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/integral.scss" lang="scss" scoped></style>
