<template>
  <div class="bigbox">
      <!-- 球队介绍 -->
      <div class="introduce">
          <!-- 标题 -->
          <header>
              <p>曼城俱乐部介绍</p>
          </header>
          <!-- 内容 -->
          <div class="content">
              <p>多特蒙德成立于1909年，威斯特法伦、下萨克森和中莱因州的足球联合会合并成西部上区联赛。这个联赛一直办到1963年，多特蒙德俱乐部在该联赛中战绩最好。历史上分别在1957年、1959年、1963年1995年、1996年和2002年六捧德国甲级联赛冠军奖杯。1989年才获得一次德国足协杯冠军而迅速崛起。夺得1994～1995赛季联赛冠军。在1997年的欧洲赛场上，多特蒙德队一路过关斩将，在决赛中以3：1击败尤文图斯队获得了欧洲冠军杯冠军，之后还把丰田杯的冠军奖杯揽入囊中。最近几个赛季，球队始终没能挤进第一集团，经过大换血后，新赛季的夺冠前景主要取决于全队磨合的效果。</p>
          </div>
      </div>
      <!-- 球队荣誉 -->
      <div class="introduce">
          <!-- 标题 -->
          <header>
              <p>球队荣誉</p>
          </header>
          <!-- 内容 -->
          <div class="honor">
              <p><img src="@/assets/images/footballdata/jiangveu_i2@2x.png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
              <p><img src="@/assets/images/footballdata/jiangveu_i3@2x.png" alt=""><span>世界俱乐部杯 X 1</span><span>2018/2019</span></p>
              <p><img src="@/assets/images/footballdata/jiangveu_i4@2x.png" alt=""><span>欧洲超级杯 X 1</span><span>2018/2019</span></p>
              <p><img src="@/assets/images/footballdata/jiangveu_i5@2x.png" alt=""><span>瑞士球队超级联赛 X 1</span><span>2018/2019</span></p>
              <p><img src="@/assets/images/footballdata/jiangveu_i5@2x.png" alt=""><span>英超亚洲杯 X 1</span><span>2018/2019</span></p>
          </div>
      </div>
      <!-- 相关问答 -->
      <div class="introduce">
          <!-- 标题 -->
          <header>
              <p>曼城相关问答</p>
          </header>
          <!-- 内容 -->
          <div class="reply">
              <div class="contents">
                  <div class="num">
                      <div>
                          <p>8</p>
                          <p>回答</p>
                          <img src="@/assets/images/footballdata/star@2x.png" alt="">
                      </div>
                      <div>
                          <p>680</p>
                          <p>浏览</p>
                      </div>
                  </div>
                  <div class="text">
                      <div class="texts">
                          <div class="imgbox">
                              <img src="@/assets/images/footballdata/q@2x.png" alt="">
                          </div>
                          <div class="key">
                              <p>这么多的赔率公司，一般应该多关注那家的数据比较好一些？</p>
                              <p>5个回答</p>
                          </div>
                      </div>
                      <div class="texts">
                          <div class="imgbox">
                              <span>答</span>
                          </div>
                          <p class="p">当然选BET365或者帮众体育比较靠谱了因为这几家赔率公司及时司及时司及时司及性非常快赔率公司及时司及时司及时司赔率公司赔赔率公司及时司及时司及时司及性非常快当然选BET365或者帮众体育比较靠谱了因为这几家赔率公司及时司及时司及时司及性非常快赔率公司及时司及时司及时司赔率公司赔赔率公司及时司及时司及时司及性非常快</p>
                      </div>
                  </div>
              </div>
              <!-- 分页 -->
              <div class="paging">
                  <p 
                    v-for="(v,i) in list"
                    :key="i"
                    @click="fun(i)"
                    :class="listnum===i?'select':''"
                  >
                  </p>
              </div>
          </div>
      </div>
      <!-- 相关新闻 -->
      <div class="introduce">
          <!-- 标题 -->
          <header>
              <p>曼城相关新闻</p>
          </header>
          <!-- 内容 -->
          <div class="new">
              <div 
                class="news" 
                v-for="(v,i) in list"
                :key="i"
                
              >
                  <div class="img">

                  </div>
                  <div class="news-text">
                      <p>足球战争是怎么回事？足球为什么是和平年代的战争？</p>
                      <p>足球在近代史中真实的引发了一场战争，称之为“足球战争”或“一百小时战争”。</p>
                      <p>
                          <span>发布于2020-01-06</span>
                          <span><img src="@/assets/images/footballdata/comment_i@2x.png" alt="">6</span>
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
          list:[1,2,3],
          listnum:0
      };
    },
    created() {

    },
    methods: {
        fun(i){
            this.listnum = i;
        }
    }
  };
</script>

<style src="@/assets/css/pc/footballdata/teamdata/introduce.scss" lang="scss" scoped></style>
