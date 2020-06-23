<template>
  <div>
    <div class="tabs">
      <span :class="teamid==0?'active':''" @click="teamid=0">戈洛迪亚后备队</span>
      <span :class="teamid==1?'active':''" @click="teamid=1">索利戈尔斯克矿工后备队</span>
    </div>
    <div class="textList">
      <div class="text" v-for="(item,index) in list" :key="index">
        <div class="left">
          <span :class="item.jushi.charAt(0)=='优'?'':'changeColor'">{{item.jushi}}</span>
        </div>
        <div class="right">
          <p>{{item.text}}</p>
        </div>
      </div>
    </div>
    <div class="more">
        <span>查看更多</span>
        <i class="el-icon-arrow-down"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamid: 0,
      list: [
        {
          jushi: "优势",
          text:
            "戈洛迪亚后备队主场成绩要比客场强，本赛季至今赢球的场次都发生在主场，而客场至今还没有首胜，明显主场得分重地。"
        },
        {
          jushi: "优势",
          text:
            "戈洛迪亚后备队主场成绩要比客场强，本赛季至今赢球的场次都发生在主场，而客场至今还没有首胜，明显主场得分重地。"
        },
        {
          jushi: "优势",
          text:
            "奇南德加的主教练雷纳埃斯皮萨诺是尼加拉瓜历史上第一名女性主教练，是场内外备受尊敬的人。她喜欢C罗的比赛态度，喜欢雷纳尔多·鲁达教练的指挥方式。"
        },
        {
          jushi: "劣势",
          text:
            "戈洛迪亚后备队主场成绩要比客场强，本赛季至今赢球的场次都发生在主场，而客场至今还没有首胜，明显主场得分重地。"
        },
        {
          jushi: "劣势",
          text:
            "戈洛迪亚后备队主场成绩要比客场强，本赛季至今赢球的场次都发生在主场，而客场至今还没有首胜，明显主场得分重地。"
        }
      ]
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style src="../../../../assets/css/pc/match/tab4.scss" lang="scss" scoped></style>