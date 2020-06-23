<template>
    <div class="bigbox">
      <!-- 数据统计 -->
      <header>
        <div class="head public">
          <div class="one"><img src="@/assets/images/instantscore/tx_i@2x.png" alt=""></div>
          <div class="two"><p>欧指</p></div>
          <div class="two"><p>亚盘</p></div>
          <div class="two"><p>大小</p></div>
          <div class="two"><p>角球</p></div>
        </div>
        <div class="body public" v-for="index in 3" :key="index">
          <div class="one">全</div>
          <div class="two">
            <div class="hong">1.264</div>
            <div class="lu">1.264</div>
            <div>1.264</div>
          </div>
          <div class="two">
            <div>1.264</div>
            <div>1.264</div>
            <div>1.264</div>
          </div>
          <div class="two">
            <div>1.264</div>
            <div>1.264</div>
            <div>1.264</div>
          </div>
          <div class="two">
            <div>1.264</div>
            <div>1.264</div>
            <div>1.264</div>
          </div>
        </div>
      </header>
      <!--  -->
      <div class="body">
        <div class="left">
          <!-- 详情数据 -->
          <div class="details">
            <!-- 标题分类/ -->
            <div class="tit">
              <p v-if="numbers === 2" @click="titfun(1)" :class="titnum===1?'':'select'">动画直播</p>
              <p @click="titfun(2)" :class="titnum===2?'':'select'">详细数据</p>
            </div>
            <!-- 比赛直播模块 -->
            <div v-if="numbers ===1 || titnum===2">
              <!-- 开赛时间/天气 -->
              <div class="time">
                <p>
                  <span>英超</span>
                  <span>2020-04-11</span>
                  <span>16:40 开赛</span>
                </p>
                <p>
                  <span><img src="" alt=""> <span>多云</span></span>
                  <span><img src="" alt=""> <span>14℃</span></span>
                  <span><img src="" alt=""> <span>3.1m/s</span></span>
                  <span><img src="" alt=""> <span>60%</span></span>
                </p>
              </div>
              <!-- 对战球队 -->
              <div class="team">
                  <p class="team1"><span>利物浦</span><img src="" alt=""></p>
                  <p class="timep1">00:00</p>
                  <p class="center">
                    <span>
                      <strong></strong>
                      <strong></strong>
                    </span>
                  </p>
                  <p class="timep2">00:00</p>
                  <p class="team2"><img src="" alt=""><span>利物浦</span></p>
              </div>
              <!-- 完整 -->
              <!-- 球队数据 -->
              <div class="data">
                <div class="datas" v-for="(item,index) in list" :key="index">
                  <div class="bet">
                    <div>9(4)</div>
                    <p><span class="lan"></span></p>
                  </div>
                  <div class="center">{{item.text}}</div>
                  <div class="bet">
                    <p><span class="hong"></span></p>
                    <div>9(4)</div>
                  </div>
                </div>
              </div>
              <!-- 对阵比分 -->
              <div class="score">
                <div class="timebox">89:46′</div>
                <div class="content">
                  <div class="sign">
                    <p><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt=""><span>1</span></p>
                    <p><img src="@/assets/images/instantscore/redp.png" alt=""><span>2</span></p>
                    <p><img src="@/assets/images/instantscore/yelp.png" alt=""><span>3</span></p>
                  </div>
                  <div class="team team1"><p>曼彻斯特城</p><img src="" alt=""></div>
                  <div class="scores">
                    <div>1</div>
                    <p>:</p>
                    <div>2</div>
                  </div>
                  <div class="team"><img src="" alt=""><p>利物浦</p></div>  
                  <div class="sign">
                    <p><span>1</span><img src="@/assets/images/instantscore/yelp.png" alt=""></p>
                    <p><span>2</span><img src="@/assets/images/instantscore/redp.png" alt=""></p>
                    <p><span>3</span><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt=""></p>
                  </div>  
                </div>
                <p class="lastscore">半场比分：0:1</p>
              </div>
            </div>
            <!-- 完场战报模块 -->
            <div v-else>
              <!-- 开赛时间/天气 -->
              <div class="time">
                <p>
                  <span>英超</span>
                  <span>2020-04-11</span>
                  <span>16:40 开赛</span>
                </p>
                <p>
                  <span><img src="" alt=""> <span>多云</span></span>
                  <span><img src="" alt=""> <span>14℃</span></span>
                  <span><img src="" alt=""> <span>3.1m/s</span></span>
                  <span><img src="" alt=""> <span>60%</span></span>
                </p>
              </div>              
              <!-- 完场战报/动画直播 -->
              <div class="playdiv">
                <!-- 动画接口 -->
              </div>
              <!-- 对阵比分 -->
              <div class="score">
                <div class="timebox">89:46′</div>
                <div class="content">
                  <div class="sign">
                    <p><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt=""><span>1</span></p>
                    <p><img src="@/assets/images/instantscore/redp.png" alt=""><span>2</span></p>
                    <p><img src="@/assets/images/instantscore/yelp.png" alt=""><span>3</span></p>
                  </div>
                  <div class="team team1"><p>曼彻斯特城</p><img src="" alt=""></div>
                  <div class="scores">
                    <div>1</div>
                    <p>:</p>
                    <div>2</div>
                  </div>
                  <div class="team"><img src="" alt=""><p>利物浦</p></div>  
                  <div class="sign">
                    <p><span>1</span><img src="@/assets/images/instantscore/yelp.png" alt=""></p>
                    <p><span>2</span><img src="@/assets/images/instantscore/redp.png" alt=""></p>
                    <p><span>3</span><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt=""></p>
                  </div>  
                </div>
              </div>
              <!-- 完场战报/球队数据 -->
              <div class="data">
                <div class="datas" v-for="(item,index) in lists" :key="index">
                  <div class="bet">
                    <div>9(4)</div>
                    <p><span class="lan"></span></p>
                  </div>
                  <div class="center">{{item.text}}</div>
                  <div class="bet">
                    <p><span class="hong"></span></p>
                    <div>9(4)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 比赛进度 -->
          <div class="label">
            <div class="labels">
              <div class="lefts">
                <p><span>曼彻斯特城</span><img src="" alt=""></p>
                <p><span>利物浦</span><img src="" alt=""></p>
              </div>
              <div class="rights">
                <div class="xian">
                  <!-- 时间进度 -->
                  <span class="speed"></span>
                  <!-- 中场 -->
                  <p class="center">HT</p>
                  <!-- 原点标记 -->
                  <div class="j">
                    <div class="yuan"></div>
                    <!-- 主场球队 -->
                    <img src="" alt="" class="zhu">
                    <!-- 客场球队 -->
                    <img src="" alt="" class="ge">
                  </div>
                </div>
                <!-- 标记 -->
                <div class="signs" v-for="index in 5" :key="index">

                </div>
              </div>
            </div>
          </div>
          <!-- 文字直播 -->
          <div class="play">
            <div class="title">
              <p @click="playfun(1)" :class="playnum ===1 ?'select':''">文字直播</p>
              <p @click="playfun(2)" :class="playnum ===2 ?'select':''">阵容数据</p>
              <p @click="playfun(3)" :class="playnum ===3 ?'select':''">用户评论</p>
            </div>
            <div class="content">
              <!-- 文字直播 -->
              <div class="text" v-show="playnum ===1">
                <!-- 结束 -->
                <div class="end">
                  <p>本场比赛结束</p>
                  <p>本场比赛结束,最终比分为0-3，感谢大家关注帮众体育，再会！</p>
                  <div class="pos">
                      FT
                  </div>
                </div>
                <!-- 进球 -->
                <div class="contents">
                  <p><span>90′</span> 第3个进球-库克涛斯</p>
                  <div class="pos">
                    <img src="@/assets/images/instantscore/jinqiu-icon@2x.png" alt="">
                  </div>
                </div>
                <div class="contents">
                  <p><span>90′</span> 第3个进球-库克涛斯</p>
                  <div class="pos">
                    <img src="@/assets/images/instantscore/redp.png" alt="">
                  </div>
                </div>
                <div class="contents">
                  <p><span>90′</span> 第3个进球-库克涛斯</p>
                  <div class="pos">
                    <img src="@/assets/images/instantscore/yelp.png" alt="">
                  </div>
                </div>
                <div class="contents">
                  <p><span>90′</span> 第3个进球-库克涛斯</p>
                  <div class="pos">
                    <img src="@/assets/images/instantscore/post_i@2x.png" alt="" class="zhongchang">
                  </div>
                </div>
              </div>
              <!-- 阵容数据 -->
              <div class="data" v-show="playnum ===2">
                阵容数据
              </div>
              <!-- 用户评论 -->
              <div class="comment" v-show="playnum ===3">
                <div class="inputbox">
                  <textarea maxlength="500" cols="30" rows="10" style="resize:none" placeholder="写下您想说的话..."></textarea>
                  <div class="commit">
                    <div class="btn">发布评论</div>
                    <span>请自觉遵守互联网相关政策法规，评论内容只代表网友观点，与本站立场无关！</span>
                  </div>
                  <div class="title"><span>网友最新评论</span><span>共<b>4</b>条评论</span></div>
                  <div class="conents" v-for="index in 4" :key="index">
                    <div class="imgbox"></div>
                    <div class="text">
                      <p>游客416546432</p>
                      <p>2019年10月6日 20:37</p>
                      <p>这个游戏怎么说呢，玩起来自由度很高。但是保存的时候有点卡</p>
                      <p><img src="@/assets/images/instantscore/tags_i@2x.png" alt=""><img src="" alt=""></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 图例注释 -->
          <div class="last" v-show="playnum ===1">
            <span class="one">图例注释：</span>
            <span><img src="@/assets/images/instantscore/jinqiu-icon@2x.png" alt="">进球</span>
            <span><img src="@/assets/images/instantscore/dianqiu-icon@2x.png" alt="">点球</span>
            <span><img src="@/assets/images/instantscore/wulongqiu-icon@2x.png" alt="">乌龙球</span>
            <span><img src="@/assets/images/instantscore/shiqiu.png" alt="">点球未进</span>
            <span><img src="@/assets/images/instantscore/yelp.png" alt="">黄牌</span>
            <span><img src="@/assets/images/instantscore/huanren-icon@2x.png" alt="">换人</span>
            <span><img src="@/assets/images/instantscore/jaioqiu@2x.png" alt="">角球</span>
            <span><img src="@/assets/images/instantscore/zhugong.png" alt="">助攻</span>
            <span><img src="@/assets/images/instantscore/lianghuangyihong-icon@2x.png" alt="">两黄一红</span>
            <span><img src="@/assets/images/instantscore/redp.png" alt="">红牌</span>
          </div>
        </div>
        <div class="right">
          <!-- 聊天室 -->
          <div class="chat" v-if="numbers === 1">
            <div class="title">
              <p><span>聊天室</span><img src="" alt=""></p>
              <p>1654人</p>
            </div>
            <div class="content">
              <!-- 欢迎 -->
              <div>欢迎<img src="" alt=""><span>大老吴</span>进入聊天室</div>
              <div>欢迎<img src="" alt=""><span>大老吴</span>进入聊天室</div>
              <!-- 发言 -->
              <div>
                <img src="" alt=""> 
                <p>LV 27</p>
                <img src="" alt="">
                <span>快要射了：</span>
                <strong>6666</strong>
              </div>
              <div>欢迎<img src="" alt=""><span>大老吴</span>进入聊天室</div>
              <div>欢迎<img src="" alt=""><span>大老吴</span>进入聊天室</div>
              <div>
                <img src="" alt=""> 
                <p>LV 27</p>
                <img src="" alt="">
                <span>快要射了：</span>
                <strong>6666</strong>
              </div>
            </div>
            <div class="AI">
              <div class="lefts">
                <p><span>AI预测</span><span class="zhi">（信心指数 7.6）</span></p>
                <p> 符合AI规则13条，推荐60分钟时，大5上车！</p>
              </div>
              <div class="rights">
                <img src="/assets/images/instantscore/tags_i@2x.png" alt="">
                <span>23</span>
              </div>
            </div>
            <div class="inputbox">
              <!-- <input type="text"> -->
              <textarea name="" id="" cols="30" rows="10" style="resize:none" placeholder="在此输入你想说的话..." maxlength="200"></textarea>
              <el-button type="warning"  size="small" class="btn">发表评论</el-button>
            </div>
          </div>
          <!-- 盘口复盘解密 -->
          <div class="decrypt" v-if="numbers == 2">
            <div class="title"><p>盘口复盘解密</p><p></p></div>
            <div class="nav">
              <p @click="decrypt(1)" :class="decryptnum === 1?'select':''">概述</p>
              <p @click="decrypt(2)" :class="decryptnum === 2?'select':''">欧赔</p>
              <p @click="decrypt(3)" :class="decryptnum === 3?'select':''">让球</p>
              <p @click="decrypt(4)" :class="decryptnum === 4?'select':''">大小</p>
              <p @click="decrypt(5)" :class="decryptnum === 5?'select':''">理论</p>
            </div>
            <div class="textbox">
              <div v-show="decryptnum===1">
                <p>本场比赛，索尔斯克亚派出了3中卫、5后卫的防守阵型，林德洛夫搭档马奎尔、卢克肖，坐镇后防线，小将威廉姆斯和万比萨卡一左一右，封住曼联两条边路，马蒂奇和弗雷德筑起强硬中场屏障，马夏尔、詹姆斯以及布鲁诺组成了反击第一梯队</p>
                <p>概述</p>
              </div>
              <div v-show="decryptnum===2">
                <p>欧赔</p>
              </div>
              <div v-show="decryptnum===3">
                <p>让球</p>
              </div>
              <div v-show="decryptnum===4">
                <p>大小</p>
              </div>
              <div v-show="decryptnum===5">
                <p>理论</p>
              </div>
            </div>
          </div>
          <!-- 曼城VS利物浦相关新闻 -->
          <div class="VS" v-if="numbers == 2">
            <div class="title"><p>曼城VS利物浦相关新闻</p></div>
            <div class="conent">
              <div class="conents" v-for="index in 4" :key="index">
                <div class="imgbox">
                  <img src="" alt="">
                </div>
                <div class="textbox">
                  <p class="one">足球战争是怎么回事？足球为什么是和平年代的战争？</p>
                  <p class="two">发布于2020-01-06 16:32:14</p>
                </div>
              </div>
            </div>
          </div>
          <!-- 其他滚球推荐 -->
          <div class="recommend">
            <div class="title">
              <p v-text="numbers === 2?'其他比赛复盘推荐':'其他滚球推荐'"></p>
              <p v-text="numbers === 2?'':'更多>'"></p>
            </div>
            <div class="head public">
              <div class="one">时间</div>
              <div class="two">
                <p class="imgp">主队</p>
                <p>比分</p>
                <p class="imgp">客队</p>
              </div>
            </div>
            <div class="bodys">
              <div class="contents public" v-for="index in 5" :key="index">
                <div class="one">
                  <p><strong></strong><span>46:18</span></p>
                  <p>
                    <!-- <span>滚球直播</span>
                    <span>预测分析</span> -->
                    <span class="hui">暂无回放</span>
                    <span class="hong">比赛回放</span>
                  </p>
                </div>               
                <div class="two">
                  <p class="imgp"><span>曼城</span><img src="" alt=""></p>
                  <p>3-1</p>
                  <p class="imgp"><img src="" alt=""><span>利物浦</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
// @/assets/images/instantscore/tx_i@2x.png
  export default {
    props:{
      numbers:{
        type:Number,
        default:''
      }
    },
    data() {
      return {
        list:[
          {
            text:'半场角球'
          },
          {
            text:'半场控球率'
          },
          {
            text:'传球'
          },
          {
            text:'传球成功率'
          },
          {
            text:'犯规'
          },
          {
            text:'越位'
          },
          {
            text:'头球'
          },
          {
            text:'头球成功'
          },
          {
            text:'成功抢断'
          },
        ],
        lists:[
          {
            text:'控球率'
          },
          {
            text:'射门（射正）'
          },
          {
            text:'进攻（威胁）'
          },
        ],
        playnum:1,
        titnum:1,
        decryptnum:1
      };
    },
    created() {

    },
    mounted(){

    },
    methods: {
      playfun(index){
        this.playnum = index;
      },
      titfun(i){
        this.titnum = i;
      },
      decrypt(i){
        this.decryptnum = i;
      }
    }

  };
</script>

<style src="@/assets/css/pc/instantscore/components/play.scss" lang="scss" scoped></style>