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
                            <span>让球</span>
                            <span>大小球</span>
                            <span>比分/半</span>
                            <span>资料</span>
                        </div>
                            <div class="data distance" v-for="(v,i) in value" :key="i">
                                <span>28</span>
                                <span>02-29 04:00</span>
                                <span class="colour">诺维奇</span>
                                <span class="colour">1:2</span>
                                <span class="colour">莱切斯特城</span>
                                <span>三球半/两球</span>
                                <span>2.5/3</span>
                                <span>0 : 0</span>
                                <span class="colour">谁会赢 | 直播</span>
                            </div>
                    </div>
                  </div>
                  <!-- 本赛季积分榜 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020英超积分榜</span>
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
                  <!-- 2019-2020英超射手榜 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020英超射手榜</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="shooter">
                        <div class="shooter-title distance">
                            <span>排名</span>
                            <span>球员</span>
                            <span>国籍</span>
                            <span>球队</span>
                            <span>总进球</span>
                            <span>主场进球</span>
                            <span>客场进球</span>
                            <span>点球</span>
                        </div>
                        <div class="shooter-body distance" v-for="(v,i) in value" :key="i">
                            <span>1</span>
                            <span>皮埃尔 · 奥巴梅杨</span>
                            <span>阿根廷</span>
                            <span>莱切斯特城</span>
                            <span>17</span>
                            <span>8</span>
                            <span>10</span>
                            <span>1</span>
                        </div>
                    </div>
                  </div>
                  <!-- 2019-2020英超进球总数及单双统计数据列表 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020英超进球总数及单双统计数据列表
                                <span class="total">单位：场次</span>
                            </span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="total">
                        <div class="total-title distance">
                            <span>球队名</span>
                            <span>总赛</span>
                            <span>进0球</span>
                            <span>进1球</span>
                            <span>进2球</span>
                            <span>进3球</span>
                            <span>进4球</span>
                            <span>进5球</span>
                            <span>6球以上</span>
                            <span>单数</span>
                            <span>双数</span>
                        </div>
                        <div class="total-body distance" v-for="(v,i) in videolist" :key="i">
                            <span>利物浦</span>
                            <span>28</span>
                            <span>2</span>
                            <span>3</span>
                            <span>7</span>
                            <span>8</span>
                            <span>10</span>
                            <span>1</span>
                            <span>7</span>
                            <span>8</span>
                            <span>10</span>
                        </div>
                    </div>
                  </div>
                 <!-- 2019-2020英超常见比分 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020英超常见比分</span>
                            <span>查看更多 > </span>
                        </p>
                    </header>
                    <div class="common">
                        <div class="common-title distance">
                            <span>排名</span>
                            <span>常见比分</span>
                            <span>总赛场数</span>
                            <span>出现场数</span>
                            <span>所在比例</span>
                        </div>
                        <div class="common-body distance" v-for="(v,i) in value" :key="i">
                            <span>{{i}}</span>
                            <span>1：1</span>
                            <span>278</span>
                            <span>35</span>
                            <span>12.59%</span>
                        </div>
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
        };
    },
    created() {
        //timelist 原始数据
        for (var i = 1; i < 39; i++) {
            this.timelist.push(i);
        }
    },
    mounted() {
        //前三条数据高亮
        // 本赛季
        var list = this.$refs.num;
        // 上赛季
        for (var i = 0; i < 3; i++) {
            list[i].style.background = "#f55e53";
            list[i].style.color = "#ffffff";
        }
        list[2].style.background = "$ffc002";
    },
    methods: {
        timefun(i) {
            this.timenum = i;
        }
    }
};
</script>

<style src="@/assets/css/pc/footballdata/matchdata/season.scss" lang="scss" scoped></style>
