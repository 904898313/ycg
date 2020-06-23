
<template>
  <div class="answerBox">
    <div class="navTitle">
      <b>足球问答</b>
      <p><span>查看更多</span><van-icon class="nav_icon" name="arrow" color="#999999" size="12"/></p>
    </div>
    <div class="answerList">
      <div class="answer_item" v-for="(item,index) in answerList">
        <p class="multilineText2">下赛季拥有维金斯和水花追梦再加上状元签的勇士能否重 回巅峰吗？</p>
        <div class="item_info">
          <em>2020-05-09 11:27:20</em>
          <span>0人回答 · 0人浏览</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        answerList:[0,0,0]
      };
    },
    created() {

    },
    methods: {}

  };
</script>

<style src="../../../../assets/css/ph/home/answer.scss" lang="scss" scoped></style>
