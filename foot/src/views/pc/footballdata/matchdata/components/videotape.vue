<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 英超球队名单说明 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>最新英超比赛录像回放列表</span>
                            <span>共有25065个英超视频录像</span>
                        </p>
                    </header>
                    <div class="body">
                        <div class="body-video" v-for="(v,i) in querylist" :key="i">
                            <img src="" alt="">
                            <p>12月17日 英超第17轮 水晶宫vs 布莱特 全场录像</p>
                        </div>
                    </div>
                    <div class="paging">
                        <el-pagination
                        class="page"
                        background
                        layout="prev, pager, next"
                        :total="1000">
                        </el-pagination>
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

    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/videotape.scss" lang="scss" scoped></style>
