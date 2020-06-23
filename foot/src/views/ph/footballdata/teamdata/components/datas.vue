<template>
    <div class="bigbox">
      <!-- 头部导航 -->
      <header>
          <div class="navlist">
              <span>英超联赛 <img src="@/assets/images/footballdata/arrow_down@2x.png" alt=""></span>
              <ul>
                  <li>英超联赛1</li>
                  <li>英超联赛2</li>
                  <li>英超联赛3</li>
                  <li>英超联赛4</li>
              </ul>
           </div>
          <div class="navlist">
              <span>2018-2019 <img src="@/assets/images/footballdata/arrow_down@2x.png" alt=""></span>
              <ul>
                  <li>2018-20191</li>
                  <li>2018-20192</li>
                  <li>2018-20193</li>
                  <li>2018-20194</li>
              </ul>
          </div>
      </header>
      <!-- 数据表格 -->
      <div class="list">
        <!-- 头部head -->
        <div class="head public">
          <p></p>
          <p>场</p>
          <p>胜</p>
          <p>平</p>
          <p>负</p>
          <p>最近五场</p>
          <p>进球效率</p>
        </div>
        <!-- 总计 -->
        <div class="body public total">
          <p>总计</p>
          <p>29</p>
          <p>14</p>
          <p>6</p>
          <p>9</p>
          <p>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
          </p>
          <p>
            <span>1.66</span>
          </p>
        </div>
        <!-- 主场 -->
        <div class="body public">
          <p>主场</p>
          <p>29</p>
          <p>14</p>
          <p>6</p>
          <p>9</p>
          <p>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
          </p>
          <p>
            <span>1.66</span>
          </p>
        </div>
        <!-- 客场 -->
        <div class="body public">
          <p>客场</p>
          <p>29</p>
          <p>14</p>
          <p>6</p>
          <p>9</p>
          <p>
            <span>W</span>
            <span>W</span>
            <span>W</span>
            <span>D</span>
            <span>L</span>
          </p>
          <p>
            <span>1.66</span>
          </p>
        </div>
        <!-- 主场buff -->
        <div class="homebuff">
          <p>曼彻斯特城在英超联赛 主场增幅BUFF<span>+5%</span></p>
        </div>
      </div>
      <!-- 球队角球统计 -->
      <div class="corner">
        <div class="tit">
          <span>球队角球统计</span>
          <img src="@/assets/images/footballdata/jqICON@2x.png" alt="">
        </div>
        <div class="content">
          <div class="imgbox">
            <img src="@/assets/images/footballdata/jqICON2@2x.png" alt="">
          </div>
          <div class="center">
            <p>8.54</p>
            <p>角球/场数</p>
          </div>
          <div class="datas">
            <p>
              <span>超过9.5：</span>
              <span style="width:10px;height:.16rem;display:block;background-color:#0066c0"></span>
              <span>15场</span></p>
            <p>
              <span>低于9.5：</span>
              <span style="width:10px;height:.16rem;display:block;background-color:#0066c0"></span>
              <span>12场</span></p>
          </div>
        </div>
        <div class="whole">
          29场比赛中产生了241个角球
        </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 进失热度图 -->
      <div class="hotchart">
        <div class="tit">
          <span>曼城进/失热度图</span>
          <img src="" alt="">
          <span>统计维度为英超联赛的全部29场比赛</span>
        </div>
        <div class="nav">
            <div @click="nav(1)" :class="navnum===1?'select':''">进球热图</div>
            <div @click="nav(2)" :class="navnum===2?'select':''">失球热图</div>
        </div>
        <!-- 上半场 -->
        <div class="top">
          <p><span>上半场  :  </span> <span> 43%</span></p>
          <div class="content">
            <p>
              <span v-for="index in 15" :key="index"></span>
              <span class="HT">HT</span>
            </p>
          </div>
        </div>
        <!-- 下半场 -->
        <div class="top">
          <p><span>下半场  :  </span> <span> 57%</span></p>
          <div class="content">
            <p>
              <span class="HT">HT</span>
              <span v-for="index in 15" :key="index"></span>
            </p>
          </div>
        </div>
        <!-- 进球/场数 -->
        <p class="num"><span>进球/场数：</span><span>3.54</span></p>
        <!-- 颜色说明 -->
        <div class="colorbox">
          <p>
            <span class="box1 box"></span><span>0-0.2</span>
            <span class="box2 box"></span><span>0.2-0.4</span>
            <span class="box3 box"></span><span>0.6-0.8</span>
            <span class="box4 box"></span><span>0.8-1</span>
          </p>
          <p>*系数值越接近1，颜色越偏向红色则进球密度越集中</p>
        </div>
      </div>
      <!-- bg -->
      <div class="bg"></div>
      <!-- 联赛数据 -->
      <div class="datasbox">
        <div class="tit">
          本赛季联赛数据
        </div>
        <div class="datas_nav">
          <div 
            v-for="(item,index) in datasnavlist" 
            :key="index"
            @click="datasfun(index)"
            :class="datasnum===index?'select':''"
          >
            {{item}}
          </div>
        </div>
        <div class="head public">
          <p></p>
          <p>赛</p>
          <p>胜</p>
          <p>平</p>
          <p>负</p>
          <p>得</p>
          <p>失</p>
          <p>净</p>
          <p>均得</p>
          <p>均失</p>
          <p>积分</p>
        </div>
        <div class="body public">
          <p>总场次</p>
          <p>30</p>
          <p>30</p>
          <p>30</p>
          <p>30</p>
          <p>30</p>
          <p>30</p>
          <p>30</p>
          <p>1.21</p>
          <p>1.72</p>
          <p>27</p>
        </div>
        <!-- echarts -->
        <div class="echartsbox">

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        navnum:1,
        datasnavlist:['欧赔','让球','大小球','全场',],
        datasnum:0
      };
    },
    created() {

    },
    methods: {
      nav(i){
        this.navnum = i;
      },
      datasfun(i){
        this.datasnum = i;
      }
    }
  };
</script>

<style src="@/assets/css/ph/footballdata/teamdata/datas.scss" lang="scss" scoped></style>
