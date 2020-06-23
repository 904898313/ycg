<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 英超历届积分榜数据查询 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2020年3月10日英超视频直播列表</span>
                        </p>
                    </header>
                    <!-- 循环 -->
                    <div class="contents">
                        <div class="contents-time">
                            <span>23:00</span>
                            <span>英超 第261轮</span>
                        </div>
                        <div class="contents-name">
                            <span>
                                那不勒斯
                                <img src="" alt="">
                            </span>
                            <span>3 -  3</span>
                            <span>
                                <img src="" alt="">
                                莱切
                            </span>
                        </div>
                        <div class="contents-right">
                            <span>回放</span>
                            <span>已结束</span>
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
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/broadcast.scss" lang="scss" scoped></style>
