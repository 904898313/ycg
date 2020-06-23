<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 赛果  -->
                  <div class="result">
                    <header>
                        <p>
                            <span>最新英超赛程赛果</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="body">
                        <div class="body-title distance">
                            <span>轮次</span>
                            <span>时间</span>
                            <span>主队</span>
                            <span>比分</span>
                            <span>客队</span>
                            <span>让球</span>
                            <span>大小球</span>
                            <span>比分/半</span>
                            <span>资料</span>
                        </div>
                            <div class="data distance" v-for="(v,i) in value" :key="i">
                                <span>28</span>
                                <span>02-29 04:00</span>
                                <span class="colour">诺维奇</span>
                                <span>1:2</span>
                                <span class="colour">莱切斯特城</span>
                                <span>三球半/两球</span>
                                <span>2.5/3</span>
                                <span class="colour">0 : 0</span>
                                <span>谁会赢 | 直播</span>
                            </div>
                    </div>
                  </div>
                  <!-- 最新英超视频直播录像 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>最新英超视频直播录像</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="video">
                        <div class="video-content" v-for="(v,i) in videolist" :key="i">
                            <img src="" alt="">
                            <p>12月17日 英超第17轮 水晶宫vs 布莱特 全场录像 </p>
                        </div>
                    </div>
                  </div>
                  <!-- 本赛季积分榜 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>本赛季（2019-2020）英超积分榜</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
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
                            <span>积分</span>
                        </div>
                        <div class="title1 distance" v-for="(v,i) in videolist" :key="i">
                            <span><span ref="num">{{i+1}}</span></span>
                            <span>曼彻斯特城</span>
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
                            <span>90</span>
                        </div>
                    </div>
                  </div>
                  <!-- 上赛季积分榜 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>上个赛季（2018-2019）英超积分榜</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
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
                            <span>积分</span>
                        </div>
                        <div class="title1 distance" v-for="(v,i) in videolist" :key="i">
                            <span><span ref="upnum">{{i+1}}</span></span>
                            <span>曼彻斯特城</span>
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
                            <span>90</span>
                        </div>
                    </div>
                  </div>
                  <!-- 英格兰超级联赛规则、赛制说明 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>英格兰超级联赛规则、赛制说明</span>
                        </p>
                    </header>
                    <div class="text">
                        <p>英格兰足球超级联赛共由20支球队组成，采取双循环赛制（每支球队分别以主、客场身份和其他球队交锋两次）。单场比赛积分计算方法是胜者得3分、负者得0分、平局则双方各得1分，赛季末按累计积分高低排名。积分相同得球队由净胜球和总进球数等来决定排名，如果争冠球队通过以上条件仍不分上下就需要进行附加赛。</p>
                        <p>联赛前三名直接参加下赛季冠军联赛小组赛，第四名取得参加下赛季冠军联赛外国赛得资格，第五名参加下赛季欧霸杯（英格兰足总冠军和联赛冠军也参加欧霸杯，如果足总冠军已经取得欧战资格，则其名额给足总监亚军，而如果联赛冠军已经取得欧战资格，则其名额给联赛中排名靠前的球队）。另外，本赛季英超联赛规定升3降3，联赛排名榜尾得3支球队下赛季将降到英冠。</p>
                        <p>*注：根据欧足联得相关规定，切尔西将作为欧冠联赛的卫冕冠军获得参加下赛季欧冠联赛资格，而本赛季英超排名第4得热刺队不幸被剥夺名额。</p>
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
          value: [1,2,3],
          //视频list
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
      };
    },
    created() {

    },
    mounted(){
        //前三条数据高亮
        // 本赛季
        var list = this.$refs.num;
        // 上赛季
        var uplist = this.$refs.upnum;
        for(var i=0;i<3;i++){
            list[i].style.background = "#f55e53";
            list[i].style.color = "#ffffff";
            uplist[i].style.background = "#f55e53";
            uplist[i].style.color = "#ffffff";
        }
        list[2].style.background = "$ffc002";
        uplist[2].style.background = "$ffc002";
    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/mat.scss" lang="scss" scoped></style>
