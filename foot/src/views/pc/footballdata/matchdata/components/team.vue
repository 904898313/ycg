<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 本赛季积分榜 -->
                  <div class="result">
                      <div class="team">
                          <div class="team-contents" v-for="(v,i) in querylist" :key="i" @click="go">
                              <div><img src="" alt=""></div>
                              <div>
                                <p>阿斯顿维拉</p>
                                <p>Manchester United</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <!-- 英超球队名单说明 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>英超球队名单说明</span>
                        </p>
                    </header>
                    <div class="text">
                        <p>1、2019-2020英超联赛共有20球队参加比赛，参赛球队名单分别是: 阿森纳队、 阿斯顿维拉队、 切尔西队、 利物浦队、 曼彻斯特城队、 曼彻斯特联队、 纽卡斯尔联队、 南安普敦队、 埃弗顿队、 托特纳姆热刺队、等球队；</p>
                        <p>2、2019-2020英超足球俱乐部名单列表中最上方图片是英超球队徽，最下方英文是代表球队英超英文名称；</p>
                        <p>3、球队名单查询网址：http://www.uhchina.com/yingchaoqiudui/</p>
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
        go(){
           this.$router.push('pc-teamdata') 
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/team.scss" lang="scss" scoped></style>
