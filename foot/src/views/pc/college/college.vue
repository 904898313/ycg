<template>
  <div class="bigbgbox">
      <pcNavBar></pcNavBar>
      <header>
        <img src="" alt="">
      </header>
      <div class="bigcontent-box">
          <div class="content-topbox">
              <div><img src="@/assets/images/college/opsw@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/fx@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/dxmj@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/gqjq@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/zs@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/fpjx@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/qt@3x.png" alt=""></div>
              <div><img src="@/assets/images/college/qb@3x.png" alt=""></div>
          </div>
          <!-- 干货文荐 -->
          <div class="content-bottombox">
              <p class="content-title"><span>干货文荐</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></p>
              <div class="content-text">
                  <div class="content-text-smallbox" v-for="(k,i) in contentlist" :key="i">
                      <div class="small-imgbox">
                          <img src="" alt="">
                      </div>
                      <div class="small-textbox">
                          <p class="textbox-title">默契球什么意思？默契球有哪些特点？默契球什么意思？默契球有哪些特点？</p>
                          <p class="textbox-text">利物浦一月最佳进球花落萨拉赫 扛着对手奔袭半场破红魔，利物浦一月最佳进球花落萨拉赫扛着对手奔袭半场破红魔，利物浦一月最佳进球花落萨拉赫 扛...</p>
                          <p class="textbox-time">
                              <span>2019-10-28</span>
                               <span><img src="@/assets/images/college/browse_i@2x.png" alt="">0</span>
                               <span><img src="@/assets/images/college/comment_i@2x.png" alt="">14</span>
                               <span><img src="@/assets/images/college/tags_i@2x.png" alt="">0</span>
                          </p>
                      </div>
                  </div> 
              </div>
          </div>
          <!-- 视频区 -->
          <div class="content-bottombox2-big">
            <div class="content-bottombox content-bottombox2">
                <p class="content-title"><span>精彩视频</span><span>查看更多<img src="@/assets/images/college/next_i@2x.png" alt=""></span></p>
                <div class="content-text" >
                    <div class="video" v-for="(k,i) in videocontentlist" :key="i">
                        <div class="video-imgbox">
                            <img src="@/assets/images/college/qb@3x.png" alt="" class="img">
                            <div class="time">
                                <img src="@/assets/images/college/bofang-icon@2x.png" alt="">
                                <span>0:30</span>
                            </div>
                        </div>
                        <p class="video-text">一分钟了解足彩规则让球盘</p>
                        <p class="textbox-time textbox-time2">
                            <span>2019-10-28</span>
                             <span><img src="@/assets/images/college/browse_i@2x.png" alt="">0</span>
                             <span><img src="@/assets/images/college/comment_i@2x.png" alt="">14</span>
                             <span><img src="@/assets/images/college/tags_i@2x.png" alt="">0</span>
                        </p>
                    </div>
                </div>
            </div>
          </div>
          <!-- 课程推荐 -->
          <div class="curriculum-bigbox">
            <div class="curriculum">
                 <!-- 1 -->
                <div class="curriculum-contentbox">
                     <div class="curriculum-header"><p><span>推荐</span><span>欧赔思维</span></p><p>查看更多<img src="@/assets/images/college/next_i@2x.png" alt="" class="img"></p></div>
                     <div class="content">
                         <div class="leftbox">
                             <p>欧赔思维</p>
                             <p>跟着帮众学技巧</p>
                             <p>查看更多教程 > </p>
                             <img src="@/assets/images/college/opswkp-bg@3x (2).png" alt="">
                         </div>
                         <div class="contents" v-for="(k,i) in kecheng" :key="i">
                             <div class="contents-img">
                                <div class="time">
                                    <span>初窥门径</span>
                                </div>
                             </div>
                             <p>曼城夺冠希望渺茫 分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距</p>
                             <p>在输给曼联落后利物浦14分之后，基本宣告了曼联重回榜首无望。下面我们就从数据...</p>
                             <p class="textbox-time textbox-time2">
                                 <span>2019-10-28</span> 
                                <span><img src="@/assets/images/college/browse_i@2x.png" alt="">0</span>
                                <span><img src="@/assets/images/college/comment_i@2x.png" alt="">14</span>
                                <span><img src="@/assets/images/college/tags_i@2x.png" alt="">0</span>
                             </p>
                         </div>
                     </div>
                </div>
                <!-- 2 -->
                <div class="curriculum-contentbox">
                     <div class="curriculum-header"><p><span>推荐</span><span>亚盘分析</span></p><p>查看更多<img src="@/assets/images/college/next_i@2x.png" alt="" class="img"></p></div>
                     <div class="content">
                         <div class="leftbox">
                             <p>亚盘分析</p>
                             <p>跟着帮众学技巧</p>
                             <p>查看更多教程 > </p>
                             <img src="@/assets/images/college/fpjxkp-bg@2x (1).png" alt="">
                         </div>
                         <div class="contents" v-for="(k,i) in kecheng" :key="i">
                             <div class="contents-img">
                                <div class="time">
                                    <span>初窥门径</span>
                                </div>
                             </div>
                             <p>曼城夺冠希望渺茫 分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距分析本赛季曼城和利物浦的差距</p>
                             <p>在输给曼联落后利物浦14分之后，基本宣告了曼联重回榜首无望。下面我们就从数据...</p>
                             <p class="textbox-time textbox-time2">
                                 <span>2019-10-28</span> 
                                <span><img src="@/assets/images/college/browse_i@2x.png" alt="">0</span>
                                <span><img src="@/assets/images/college/comment_i@2x.png" alt="">14</span>
                                <span><img src="@/assets/images/college/tags_i@2x.png" alt="">0</span>
                             </p>
                         </div>
                     </div>
                </div>
            </div>
          </div>
            <!-- 换一批 -->
            <div class="change">
                <img src="@/assets/images/college/update_i@2x.png" alt="">
                换一批
            </div>
            <!-- 底部隔层 -->
            <div class="bottom-bgbox"></div>
      </div>
      <pcFooter></pcFooter>
  </div>
</template>

<script>
  import * as college from "@/api/college";
  export default {
    data() {
      return {
          contentlist:[1,2,3,4,5,6],
          videocontentlist:[1,2,3,4,5,6,7,8],
          kecheng:[1,2,3,4]
      };
    },
    created() {
    },
    methods: {
    }
  };
</script>

<style src="@/assets/css/pc/college/college.scss" lang="scss" scoped></style>
