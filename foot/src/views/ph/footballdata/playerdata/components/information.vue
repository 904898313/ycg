<template>
  <div class="bigbox">
      <!-- 场均数据统计 -->
      <div class="public">
          <header>
              <span class="header-tit">场均数据统计</span>
              <div>
                  <p><span>赛季筛选</span><img src="" alt=""></p>
                  <p><span>联赛筛选</span><img src="" alt=""></p>
              </div>
          </header>
          <div class="data">
              <div class="datas">
                  <p>0.38</p>
                  <p>进球<img src="@/assets/images/footballdata/jqicon56@2x (1).png" alt=""></p>
                  <p>场均数据</p>
              </div>
              <div class="datas">
                  <p>0.38</p>
                  <p>进球<img src="@/assets/images/footballdata/zgicon56@2x (1).png" alt=""></p>
                  <p>场均数据</p>
              </div>
              <div class="datas">
                  <p>0.38</p>
                  <p>进球<img src="@/assets/images/footballdata/ljicon56@2x (1).png" alt=""></p>
                  <p>场均数据</p>
              </div>
              <div class="datas">
                  <p>0.38</p>
                  <p>进球<img src="@/assets/images/footballdata/hp-icon56@2x.png" alt=""></p>
                  <p>场均数据</p>
              </div>
          </div>
      </div>
      <!-- 数据频率统计 -->
      <div class="public">
          <header>
              <span class="header-tit">数据频率统计</span>
          </header>
          <div class="list">
              <p><img src="@/assets/images/footballdata/jqicon56@2x (1).png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
          <div class="list">
              <p><img src="@/assets/images/footballdata/ljicon56@2x (1).png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
          <div class="list">
              <p><img src="@/assets/images/footballdata/zgicon56@2x (1).png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
          <div class="list">
              <p><img src="@/assets/images/footballdata/zjicon56@2x (1).png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
          <div class="list">
              <p><img src="@/assets/images/footballdata/hp-icon56@2x.png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
          <div class="list">
              <p><img src="@/assets/images/footballdata/hpicon56@2x (1).png" alt=""><span>进球</span></p>
              <p>每<span>236分钟</span>进球一次</p>
          </div>
      </div>
      <!-- 数据统计 -->
      <div class="public">
          <header>
              <span class="header-tit">凯文德布劳内数据统计</span>
          </header>
          <div class="Statistics">
                <div class="title">
                    <div class="one">
                        <div class="ones" v-for="index in 4" :key="index">
                            <p>20个</p>
                            <p>最佳球员</p>
                        </div>
                    </div>
                    <div class="one two">
                        <div class="ones" v-for="index in 4" :key="index">
                            <p>20个</p>
                            <p>最佳球员</p>
                        </div>
                    </div>
                    <p class="text">*并非凯文·德布劳内参加的所有比赛我们都有统计数据，别担心，我们在不久的将来即将添加它们。    </p>
                </div>
                <!-- 对阵数据 -->
                <div class="listbox">
                    <div class="head public">
                        <p>对阵</p>
                        <p>进球(点球)</p>
                        <p>助攻</p>
                        <p>上场时间</p>
                    </div>
                    <div class="body" v-for="index in 5" :key="index">
                        <div class="tit">
                            <p>20-10/12</p>
                            <p>英超</p>
                        </div>
                        <div class="bodys public">
                            <p><span>利物浦</span><span>1 : 2</span><span>水晶宫</span></p>
                            <p>3(1)</p>
                            <p>3</p>
                            <p>87′</p>
                        </div>
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

      };
    },
    created() {

    },
    methods: {

    }
  };
</script>

<style src="@/assets/css/ph/footballdata/playerdata/components/information.scss" lang="scss" scoped></style>
