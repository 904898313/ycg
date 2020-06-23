<template>
  <div class="container">
    <pcNavBar navDown="足球集锦" navActivate="直播回放"></pcNavBar>
    <div class="inner-container">
      <section>
        <div class="left">
          <div class="matchdata">
            <div class="title">
              <span :class="currId==0?'active':''" @click="changecurr(0)">视频集锦</span>
              <span :class="currId==1?'active':''" @click="changecurr(1)">比赛集锦</span>
            </div>

            <!-- 比赛集锦 -->
            <div class="datalist" v-if="show">
              <div class="info" v-for="(item,index) in data" :key="index" @click="redirectFunc()">
                <p>{{item.text}}</p>
                <span>{{item.times}}</span>
              </div>
            </div>

            <!-- 视频集锦 -->
            <div class="splist" v-else>
              <div class="tablist">
                <span :class="spid==0?'active':''" @click="spid=0">top集锦</span>/
                <span :class="spid==1?'active':''" @click="spid=1">足球宝贝</span>/
                <span :class="spid==2?'active':''" @click="spid=2">足球打架</span>/
                <span :class="spid==3?'active':''" @click="spid=3">足球搞笑</span>/
                <span :class="spid==4?'active':''" @click="spid=4">街头足球</span>
              </div>
              <div class="splistinfo">
                <div class="info" v-for="(item,index) in spdata" :key="index">
                  <img :src="item.url" alt />
                  <span>{{item.text}}</span>
                </div>
              </div>
            </div>

            <!-- 分页 -->
            <div class="pagination-matchhighlights">
              <el-pagination
                :hide-on-single-page="true"
                prev-text="上一页"
                next-text="下一页"
                :page-size="pagesize"
                :background="true"
                layout="prev, pager, next"
                :total="this.total"
                @current-change="currentchange"
              ></el-pagination>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="tags">
            <div class="title">
              <span>英超相关</span>
              <div class="lines">
                <span></span>
                <i></i>
              </div>
            </div>
            <div class="tagslist">
              <span v-for="(item,index) in tags" :key="index">{{item.text}}</span>
            </div>
          </div>
          <div class="highlights">
            <high-lights :data="lightsList"></high-lights>
          </div>
          <div class="video">
            <right-video :data="videoList"></right-video>
          </div>
          <div class="lives">
            <div class="title">
              <div class="more">
                <span>英超直播</span>
                <i>更多></i>
              </div>
              <div class="lines">
                <span></span>
                <i></i>
              </div>
            </div>
            <div class="liveslist">
              <div class="info" v-for="(item,index) in livesdata" :key="index">
                <span class="times">{{item.times}}</span>
                <span class="text">{{item.text}}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="list">
        <highlights-list :data="listdata[index]" v-for="(item,index) in listdata" :key="index"></highlights-list>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
export default {
  components: {
    highLights: () => import("./components/righthot"),
    rightVideo: () => import("./components/rightVideo"),
    highlightsList: () => import("./components/highlightsList")
  },
  data() {
    return {
      currId: 0,
      show: false,
      spid: 0,
      pagesize: 9,
      current: 1,
      total: 10,
      data: [
        {
          text:
            "[ 莱比锡红牛vs托特纳姆热刺集锦 ]3月11日欧冠莱比锡红牛对托特纳姆热刺全场集锦",
          times: "2020-03-09 16:23:21"
        },
        {
          text: "[ 埃瓦尔vs皇家社会集锦 ]3月11日西甲埃瓦尔对皇家社会全场集锦",
          times: "2020-03-10 06:50:21"
        }
      ],
      tags: [
        {
          id: "0",
          text: "欧冠集锦"
        },
        {
          id: "1",
          text: "曼联"
        }
      ],
      lightsList: [
        {
          text: "阿圭罗转身劲射破门 博阿松门前补射扳平"
        },
        {
          text: "此球只应天上有！古蒂“上帝脚后跟”让对方门将投降"
        },
        {
          text: "C罗任意球破门最窒息 皇马本赛季夺冠精彩时刻"
        },
        {
          text: "无可奈何 当世界最强防守球员遭遇梅西"
        }
      ],
      videoList: [
        {
          index: "1",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "2",
          text: "3月17日俄超坦波夫斯巴达vs苏维埃之翼视频..."
        },
        {
          index: "3",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "4",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        },
        {
          index: "5",
          text: "3月10日意甲萨索洛vs布雷西亚录像回放"
        }
      ],
      livesdata: [
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        },
        {
          times: "05-16 19:00",
          text: "中超 - 北京国安vs山东鲁能"
        }
      ],
      listdata: [
        {
          title: "英超集锦",
          tagslist: [
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            }
          ],
          textList: [
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "李铁暗示中超开赛时间，高拉特、阿兰将有望出战40强赛"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            }
          ]
        },
        {
          title: "西甲集锦",
          tagslist: [
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            }
          ],
          textList: [
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "李铁暗示中超开赛时间，高拉特、阿兰将有望出战40强赛"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            }
          ]
        },
        {
          title: "意甲集锦",
          tagslist: [
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            }
          ],
          textList: [
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "李铁暗示中超开赛时间，高拉特、阿兰将有望出战40强赛"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            }
          ]
        },
        {
          title: "德甲集锦",
          tagslist: [
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            },
            {
              id: "0",
              text: "曼联"
            },
            {
              id: "0",
              text: "赫尔城"
            },
            {
              id: "0",
              text: "利物浦"
            },
            {
              id: "0",
              text: "西汉姆联"
            }
          ],
          textList: [
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "李铁暗示中超开赛时间，高拉特、阿兰将有望出战40强赛"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text:
                "只存在于录像中的动作，至今没人敢在比赛中模仿，不亏是“疯子”门将"
            },
            {
              text: "曼联对阿森纳十佳球：鲁尼顺水推舟 坎通纳霹雳远射 经典看不完"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            },
            {
              text: "以为是个王者，看到他踢球的瞬间我笑了，这鞋它不香了吗"
            }
          ]
        }
      ],
      spdata: [
        {
          url:
            "https://vdposter.bdstatic.com/13661f27863966aba5ac736f77c99db9.jpeg?x-bce-process=image/resize,m_fill,w_242,h_182/format,f_jpg/quality,Q_100",
          text: "回顾2年前曼城对热刺官方五佳球 哲科超级世界波领"
        }
      ]
    };
  },
  created() {
    this.copyobj();
    this.copytags();
    this.addspdata();
  },
  mounted() {},
  methods: {
    redirectFunc() {
      this.$router.push({
        name: "pc-highlightsStation"
      });
    },
    // 切换视频/比赛集锦
    changecurr(index) {
      if (this.currId != index) {
        this.currId = index;
        this.show = !this.show;
      } else {
        return;
      }
    },
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
    },
    copyobj() {
      var obj = this.data[0];
      var obj1 = this.data[1];
      for (var i = 0; i <= 23; i++) {
        if (i % 2 === 0) {
          this.data.push(obj);
        } else {
          this.data.push(obj1);
        }
      }
    },
    copytags() {
      var obj = this.tags[0];
      var obj1 = this.tags[1];
      for (var i = 0; i <= 13; i++) {
        if (i % 2 === 0) {
          this.tags.push(obj);
        } else {
          this.tags.push(obj1);
        }
      }
    },
    addspdata() {
      var obj = this.spdata[0];
      for (var i = 0; i <= 38; i++) {
        this.spdata.push(obj);
      }
    }
  },
  computed: {},
  watch: {}
};
</script>
<style src="@/assets/css/pc/match/matchhighlights.scss" lang='scss' scoped>
</style>
<style lang="scss">
.pagination-matchhighlights {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
}
.pagination-matchhighlights
  .el-pagination.is-background
  .el-pager
  li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-matchhighlights
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-matchhighlights .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-matchhighlights .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
</style>