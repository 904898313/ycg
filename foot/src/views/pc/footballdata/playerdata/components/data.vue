<template>
  <div class="bigbox">
    <!-- 场上位置 -->
    <div class="contents">
      <!-- title头部 -->
      <header>场上位置</header>
      <!-- body内容 -->
      <section>
        <!-- 左 -->
        <div class="left">
          <div src="" alt="" class="head">
            <img src="@/assets/images/footballdata/cd@3x.png" alt="">
          </div>
          <div class="text">
            <p>一级位置 <span>中锋(FW)</span></p>
            <p>二级位置 <span>右边锋(FWR)</span></p>
          </div>
          <div class="styles">
            <p class="title">比赛风格<img src="" alt=""></p>
            <p>经常被侵犯、喜欢内切、喜欢长传、喜欢二过一喜欢远射</p>
          </div>
        </div>
        <!-- 右 -->
        <div class="right">
          <!-- 优势 -->
          <div class="excellent">
            <!-- 头部 -->
            <div class="tit">
              <div>
                <p>优势<img src="@/assets/images/footballdata/advantage_i@2x.png" alt=""></p>
                <p>ADVANTAGE</p>
              </div>
            </div>
            <!-- 优势点 -->
            <div class="content">
              <!-- 循环区 -->
              <div 
                class="contents" 
                v-for="(item,index) in youshi" 
                :key="index"
              >
                <div class="l">
                  <img :src="item.img" alt="">
                  <span>{{item.text}}</span>
                </div>
                <div class="r">
                  <span>一般</span>
                  <div class="numbox">
                    <div v-for="(v,i) in num" :key="i"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 劣势 -->
          <div class="inferior">
            <!-- 头部 -->
            <div class="tit">
              <div>
                <p>弱点<img src="@/assets/images/footballdata/advantage_i2@2x.png" alt=""></p>
                <p>ADVANTAGE</p>
              </div>
            </div>
            <!-- 劣势点 -->
            <div class="content">
              <!-- 循环区 -->
              <div 
                class="contents"
                v-for="(v,i) in lueshi"
                :key="i"
              >
                <div class="l">
                  <img :src="v.img" alt="">
                  <span>{{v.text}}</span>
                </div>
                <div class="r">
                  <span>一般</span>
                  <div class="numbox">
                    <div v-for="(v,i) in num" :key="i"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <!-- 球员相关简介 -->
    <div class="introduce">
      <header><p>球员相关简介</p></header>
      <div class="text">
        <p><span>凯文·德布劳内</span> （Kevin De Bruyne）是<span>曼城</span> 的进攻型中场。他们的球队数量为17。Kevin De Bruyne来自比利时，目前年龄为28。他们的身高为181cm，体重为68kg。</p>
        <p class="two">在2019/20赛季的英超联赛中，凯文·德·布鲁因（Kevin De Bruyne）出战19场比赛（加1分）。他们的总射门数为43，有18球，并进球7（3.90 xG） 。凯文·德·布鲁因（Kevin De Bruyne）平均每场比赛有55次传球，传球完成率为82％，并有13次助攻。凯文·德布鲁因（Kevin De Bruyne）已收到2张黄牌和0张红牌。</p>
        
        <p>在2019/20赛季 <span>欧洲冠军联赛</span> 中，凯文·德布鲁因（Kevin De Bruyne）进行了4场比赛。他们的3球命中率是1球，并且进球数为0（0.25 xG）。凯文·德·布鲁因（Kevin De Bruyne）每场比赛平均传球40次，传球完成率达78％，并有2次助攻。凯文·德布鲁因（Kevin De Bruyne）已收到1张黄牌和0张红牌。"</p>
        <p class="two"><span>凯文·德布劳内</span>（Kevin De Bruyne）是<span>曼城</span>的进攻型中场。他们的球队数量为17。Kevin De Bruyne来自比利时，目前年龄为28。他们的身高为181cm，体重为68kg。</p>
        
        <p>在2019/20赛季的英超联赛中，凯文·德·布鲁因（Kevin De Bruyne）出战19场比赛（加1分）。他们的总射门数为43，有18球，并进球7（3.90 xG） 。凯文·德·布鲁因（Kevin De Bruyne）平均每场比赛有55次传球，传球完成率为82％，并有13次助攻。凯文·德布鲁因（Kevin De Bruyne）已收到2张黄牌和0张红牌。</p>
        <p>在2019/20赛季<span>欧洲冠军联赛</span>中，凯文·德布鲁因（Kevin De Bruyne）进行了4场比赛。他们的3球命中率是1球，并且进球数为0（0.25 xG）。凯文·德·布鲁因（Kevin De Bruyne）每场比赛平均传球40次，传球完成率达78％，并有2次助攻。凯文·德布鲁因（Kevin De Bruyne）已收到1张黄牌和0张红牌。"</p>
      </div>
    </div>
    <!-- 球员相关新闻 -->
    <div class="report">
      <header><p>球员相关新闻</p></header>
      <div class="content">
        <!-- 循环区 -->
        <div class="contents">
          <img src="" alt="">
          <div class="text">
            <p>足球战争是怎么回事？足球为什么是和平年代的战争？</p>
            <p>为和平年代的战争和平年代什么成为和代的战争和平年代的战争呢...代的战争和平年代的战代的战争和平年代的战代的战争和平年代的战代的战争和平年代的战代的战争和平年代的战</p>
            <p>
              发布于<span>2020-01-06</span>
              <span><img src="@/assets/images/footballdata/browse_i@2x.png" alt="">7</span>
              <span><img src="@/assets/images/footballdata/comment_i@2x.png" alt="">763</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        youshi:[
          {
            img:require('@/assets/images/footballdata/cq@2x.png'),
            text:"传球"
          },
          {
            img:require('@/assets/images/footballdata/zq@2x.png'),
            text:"直塞球"
          },
          {
            img:require('@/assets/images/footballdata/gj@2x.png'),
            text:"关键传球"
          },
          {
            img:require('@/assets/images/footballdata/pd@2x.png'),
            text:"盘带"
          },
          {
            img:require('@/assets/images/footballdata/zj@2x.png'),
            text:"终结能力"
          },
          {
            img:require('@/assets/images/footballdata/ys@2x.png'),
            text:"远射"
          },
          {
            img:require('@/assets/images/footballdata/ry@2x.png'),
            text:"直接任意球"
          },
          {
            img:require('@/assets/images/footballdata/21@2x.png'),
            text:"二过一"
          }
        ],
        lueshi:[
          {
            img:require('@/assets/images/footballdata/fs@2x.png'),
            text:"防守"
          },
          {
            img:require('@/assets/images/footballdata/tq@2x.png'),
            text:"头球"
          }
        ],
        num:[0,1,2,3,4,5,6,7]
      };
    },
    created() {

    },
    methods: {
        
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/playerdata/data.scss" lang="scss" scoped></style>
