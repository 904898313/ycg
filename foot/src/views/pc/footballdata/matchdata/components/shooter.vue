<template>
            <div class="content-smallbox">
              <!-- 左内容区 -->
              <div class="left">
                  <!-- 本赛季积分榜 -->
                  <div class="result">
                    <div class="integral">
                        <div class="title distance" >
                            <span>排名</span>
                            <span>球员</span>
                            <span>国籍</span>
                            <span>球队</span>
                            <span>总进球</span>
                            <span>主场进球</span>
                            <span>客场进球</span>
                            <span>点球</span>
                        </div>
                        <div class="title1 distance" v-for="(v,i) in querylist" :key="i">
                            <span><span>{{i+1}}</span></span>
                            <span @click="playergo">皮埃尔·奥巴梅扬</span>
                            <span>英格兰</span>
                            <span @click="teamgo">利物浦</span>
                            <span>81</span>
                            <span>6</span>
                            <span>4</span>
                            <span>2</span>
                        </div>
                        <div class="paging">
                            <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000"
                            >
                            </el-pagination>
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
                  <!-- 2019-2020赛季英超射手榜分析 -->
                  <div class="result">
                    <header>
                        <p>
                            <span>2019-2020赛季英超射手榜分析</span>
                        </p>
                    </header>
                    <div class="text">
                        <p>1、2019-2020赛季英超射手榜中进球2以上(含2)的球员总共有100人，射手榜中进球数最多的是进17球;</p>
                        <p>2、本赛季英超射手榜前三名依次是:英超最佳射手是来自阿森纳队球员皮埃尔.奥巴梅扬总共进17球,其中主场进8球，客场进9球；第二名是来自莱切斯特城队球员杰米.瓦尔迪总共进17球,其中主场进8球，客场进9球；第三名是来自利物浦队球员萨拉赫.加利总共进16球,其中主场进14球，客场进2球；</p>
                        <p>3、2019-2020英格兰超级联赛射手榜查看网址：http://www.uhchina.com/yingchaosheshoubang/2019-2020.htm</p>
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
        //跳转
        playergo(){
            this.$router.push('pc-playerdata')
        },
        teamgo(){
            this.$router.push('pc-teamdata')
        },
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/matchdata/shooter.scss" lang="scss" scoped></style>
