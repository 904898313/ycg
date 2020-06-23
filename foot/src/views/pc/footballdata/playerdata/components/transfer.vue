<template>
  <div class="bigbox">
    <!-- 转会信息列表 -->
    <div class="transfer">
      <!-- 头部分类区 -->
      <div class="head list">
        <span>赛季</span>
        <span>日期</span>
        <span>转出球队</span>
        <span>转入球队</span>
        <span>身价(欧元)</span>
        <span>转会方式</span>
        <span>转会费（欧元）</span>
      </div>
        <!-- 循环内容 -->
        <div class="contents list" v-for="(v,i) in list" :key="i">
          <span>09/10</span>
          <span>2010-05-01</span>
          <span><img src="" alt="">罗马</span>
          <span><img src="" alt="">罗马</span>
          <span>1300万</span>
          <span>出租</span>
          <span>2300万</span>
        </div>
    </div>
    <!-- 可视化转会信息 -->
    <div class="big">
      <div class="echarts" ref="myChart">

      </div>
      <div class="title">
        <div class="left">凯文·德布劳内身价浮动（欧元）</div>
        <div class="right">
          <p>当前身价：1.50亿（2019-12-10）</p>
          <p>历史最高：1.50亿（2018-10-11）</p>
        </div>
      </div>
    </div>
    <!-- 荣誉记录 -->
    <div class="record">
      <header>德布劳内荣誉记录</header>
      <p><img src="@/assets/images/footballdata/jb@x (2).png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
      <p><img src="@/assets/images/footballdata/jb@x (4).png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
      <p><img src="@/assets/images/footballdata/jb@x (6).png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
      <p><img src="@/assets/images/footballdata/jb@x (8).png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
      <p><img src="@/assets/images/footballdata/jb@x (8).png" alt=""><span>欧洲冠军联赛 X 1</span><span>2018/2019</span></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
  created() {

  },
  methods: {
    echarts(){
      // 基于准备好的dom，初始化echarts实例
      var  myChart  =  this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      myChart.setOption({
        xAxis:  {
          type:  'category',
          boundaryGap:  false,
          data:  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1],
          splitLine:  {
            show:  false
          },
          axisTick:  {
            show:  false
          },
          axisLabel:  {
            show:  false
          },
          axisLine:  {
            show:  false
          },
          show:  false
        },
        yAxis:  {
          type:  'value',
          splitLine:  {
            show:  false
          },
          axisTick:  {
            show:  false
          },
          axisLabel:  {
            show:  false
          },
          axisLine:  {
            show:  false
          },
          show:  false
        },
        series:  [{
          data:  [100,700,300,500,500,600,700,800,900,1000,1100,1200,1300,1400,300,1600,200],
          type:  'line',
          areaStyle:  {},
          color: 'rgba(237, 216, 185, 1)',
          symbolSize:  10,//设置拐点的样式大小
        }],
        //设置表格距离上下左右的距离
        grid:  {
          x:  0,
          y:  80,
          x2: 0,
          y2:  0 //距离下边的距离
        },
      });
    }
  },
  mounted()  {
    this.echarts();
   },
};
</script>

<style src="@/assets/css/pc/footballdata/playerdata/transfer.scss" lang="scss" scoped></style>
