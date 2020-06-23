<template>
  <div class="bigbox">
      <!-- 基本信息 -->
      <div class="data">
          <header>基本信息</header>
          <div class="databox" v-for="(i) in datalist" :key="i" v-show="i<datanum">
              <span>全名</span>
              <span>曼彻斯特城</span>
          </div>
          <div class="databox all" @click="datafun()" ref="all">
              查看更多
          </div>
      </div>
      <!-- 曼城俱乐部介绍 -->
      <div class="data">
          <header>曼城俱乐部介绍</header>
          <div class="text">
            <p>多特蒙德成立于1909年，威斯特法伦、下萨克森和中
            莱因州的足球联合会会合并成西部上区联赛。这个联赛一
            直办到1963年，多特蒙德俱乐部在该联赛中战绩最好。历
            史上分别在1957年、1959年、1963年、1995年、1996
            年和2002年六捧德国甲级联赛冠军奖杯。1989年才获得
            一次德国足协杯冠军而迅速崛起。夺得1994~1995赛季联
            赛冠军。在1997年的欧洲赛场上，多特蒙德队一路过关斩
            将，在决赛中以3:1击败尤文图斯队获得欧洲冠军杯冠军，
            之后还把丰田杯的冠军杯揽入囊中。最近几个赛季，球队
            始终没能挤进第一集团，经过大换血，新赛季的 夺冠前景
            主要取决于全队磨合的效果。</p>
          </div>
      </div>
      <!-- 100 -->
      <!-- 球队荣誉 -->
      <div class="public">
          <header><span>球队荣誉</span></header>
          <div class="content">
              <div class="contents" v-for="(v,i) in list" :key="i">
                  <div class="head">
                      欧洲冠军联赛<span>{{v.length}}</span>个
                  </div>
                  <div class="body">
                      <div class="bodys" v-for="(item,index) in v" :key="index">
                          <img src="" alt="">
                          <p>利物浦</p>
                          <p>2018/2019</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- 曼城相关问答 -->
      <div class="public">
          <header><span>曼城相关问答</span><span>查看更多<img src="@/assets/images/footballdata/next_i@2x.png" alt=""></span></header>
          <div class="text">
              <div class="ask">
                  <div>
                      <img src="@/assets/images/footballdata/q@2x.png" alt="">
                  </div>
                  <div>
                      <p>这么多的赔率公司，一般应该多关注那家的数据比较好一些？</p>
                      <p>5个回答</p>
                  </div>
              </div>
              <div class="answer">
                  <div>
                      答
                  </div>
                  <div>
                        当然选BET365或者帮众体育比较靠谱了因为这几家赔率公司及时司及
                        时司及时司及性非常快赔率公司及时司及时司及时司赔率公司赔赔率
                        公司及时司及时司及时司及性非常快
                  </div>
              </div>
          </div>
      </div>
      <!-- 曼城相关新闻 -->
      <div class="public">
          <header><span>曼城相关新闻</span></header>
          <div class="new">
              <div class="news">
                  <div class="left">
                      <img src="" alt="">
                  </div>
                  <div class="right">
                    <p>欧冠杯小组赛有哪些规律？欧冠杯小组赛的球队多少？</p>
                    <p>
                        <span>2020-02-07</span>
                        <span><img src="@/assets/images/footballdata/comment_i@2x.png" alt="">0</span>
                        <span><img src="@/assets/images/footballdata/browse_i@2x.png" alt="">20</span>
                    </p>
                  </div>
              </div>
              <div class="news">
                  <div class="left">
                      <img src="" alt="">
                  </div>
                  <div class="right">
                    <p>欧冠杯小组赛有哪些规律？欧冠杯小组赛的球队多少？</p>
                    <p>
                        <span>2020-02-07</span>
                        <span><img src="@/assets/images/footballdata/comment_i@2x.png" alt="">0</span>
                        <span><img src="@/assets/images/footballdata/browse_i@2x.png" alt="">20</span>
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
          datalist:[1,2,3,4,5,6,7,8],
          datanum:6,
          list:[
              [1,2],
              [1,2],
          ]
      };
    },
    created() {

    },
    methods: {
        datafun(){
            this.datanum =this.datalist.length;
            this.$refs.all.style.display = 'none';
        }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/teamdata/introduce.scss" lang="scss" scoped></style>
