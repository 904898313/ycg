<template>
    <div class="content-smallbox">
        <!-- 左内容区 -->
        <div class="left">
                  <!-- 赛程时间表 -->
                  <div class="time">
                      <div class="time-title">
                          <p>2019-2020</p>
                          <p>英超联赛赛程</p>
                      </div>
                      <div class="time-num">
                          <div 
                            v-for="(v,i) in timelist" 
                            :key="i"
                            @click="timefun(i)"
                            :class="timenum===i?'selections':''"
                          >{{v}}</div>
                      </div>
                  </div>
                  <!-- 赛果  -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020英超比赛时间表安排</span>
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
                            <span class="full">
                                <span class="full-top">让球</span>
                                <span class="full-bottom"> 
                                    <span>全场</span>
                                    |
                                    <span>半场</span>
                                </span>
                            </span>
                            <span class="full">
                                <span class="full-top">大小球</span>
                                <span class="full-bottom">
                                    <span>全场</span>
                                    |
                                    <span>半场</span>
                                </span>
                            </span>
                            <span>比分/半</span>
                            <span>资料</span>
                        </div>
                            <div class="data distance" v-for="(v,i) in value" :key="i">
                                <span>28</span>
                                <span>02-29 04:00</span>
                                <span class="colour">诺维奇</span>
                                <span class="colour">1:2</span>
                                <span class="colour">莱切斯特城</span>
                                <span>
                                    <span>平手</span>
                                    <span>半球</span>
                                </span>
                                <span>
                                    <span>平手</span>
                                    <span>半球</span> 
                                </span>
                                <span>0 : 0</span>
                                <span class="colour">谁会赢 | 直播</span>
                            </div>
                    </div>
                  </div>
                  <!-- 英超球队赛程表查询 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>英超球队赛程表查询</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="query">
                        <div class="query-content" v-for="(v,i) in querylist" :key="i">阿森纳赛程</div>
                    </div>
                  </div>
                  <!-- 关于英超赛程表说明 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>关于英超赛程表说明</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="explain">
                        <p>1、英超赛程表共分为38轮次进行，当前2019-2020赛季正在进行第29轮比赛，本赛季英超联赛赛程还要进行9轮比赛才能最终确定英格兰超级联赛排名；</p>
                        <p>2、点击各轮次序号链接可查看英超当前轮次赛程安排及比分情况，点击球队链接可查看英超球队各队的赛程表！</p>
                        <p><span>3、英超赛程表网址：<a href="http://www.unchina.com/yingchaocheng/">http://www.unchina.com/yingchaocheng/</a></span></p>
                        <p><span>英格兰超级联赛历届赛程回顾：</span> 2019-2020英超赛程表、2017-2018英超赛程表、2016-2017英超赛程表、2015-2016英超赛程表2014-2015英超赛程表、2013-2014英超赛程表、2012-2013英超赛程表、2011-2012英超赛程表、2010-2011英超赛程表、2009-2010英超赛程表、2008-2009英超赛程表、2007-2008英超赛程表、2006-2007英超赛程表、2005-2006英超赛程表、2004-2005英超赛程表、2003-2004英超赛程表。</p>
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
            value: [1, 2, 3],
            //视频list
            videolist: [1, 2, 3, 4, 5, 6, 7, 8],

            repeatlist: [
                { text: "2019-2020 英超联赛" },
                { text: "2019-2020 英超赛程表" },
                { text: "2019-2020 英超积分榜" },
                { text: "2019-2020 英超射手榜" },
                { text: "2019-2020 英超常见比分" },
                { text: "2019-2020 英超进球总数及单双统计" },
                { text: "2019-2020 英超进球数较多统计" },
            ],
            footballvideo: [
                {
                    title: "五佳球"
                },
                {
                    title: "十佳进球"
                },
                {
                    title: "过人"
                },
                {
                    title: "任意球"
                },
                {
                    title: "头球"
                },
                {
                    title: "角球"
                },
                {
                    title: "点球"
                },
                {
                    title: "助攻"
                },
                {
                    title: "倒勾"
                },
                {
                    title: "远射"
                },
                {
                    title: "进球"
                },
            ],

            //赛程时间表
            timelist: [],
            timenum: null,
            querylist:[]
        };
    },
    created() {
        for (var i = 1; i < 39; i++) {
            this.timelist.push(i);
        }
        for (var i = 1; i < 21; i++) {
            this.querylist.push(i);
        }
    },
    mounted() {
        
    },
    methods: {
        timefun(i) {
            this.timenum = i;
        }
    }
};
</script>

<style src="@/assets/css/pc/footballdata/matchdata/schedule.scss" lang="scss" scoped></style>
