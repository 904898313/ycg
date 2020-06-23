<template>
  <div class="container">
    <!--导航栏-->
    <ph-nav-bar nav-activate="滚球专栏"></ph-nav-bar>
    <nav>
      <span
        v-for="(item,index) in navList"
        :key="index"
        @click="changecurr(index)"
        :class="currid==index?'active':''"
      >{{item}}</span>
    </nav>
    <div class="list">
      <div class="title">
        <div class="left">
          <img src alt />
          <p>
            英格兰
            <span>(今日赛事19场)</span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="league">
        <div class="left">
          <p>
            英超
            <span>(6场)</span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="info" v-for="(item,index) in 3" :key="index">
        <div class="inner-info">
          <div class="top">
            <p>
              10-11 16:30
              <span>英超</span>
            </p>
            <span>
              <img src="@/assets/images/instantscore/time_i@2x.png" alt />59'
            </span>
            <span></span>
          </div>
          <div class="mid">
            <div class="left">
              <span>1</span>
              <p>[3]SC奥萨</p>
            </div>
            <div class="mmid">
              <span>3:2</span>
            </div>
            <div class="right">
              <p>撒冷马比[13]</p>
              <span>1</span>
            </div>
          </div>
          <div class="bot">
            <span>(1:2)</span>
          </div>
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
        </div>
      </div>
    </div>
    <div class="list">
      <div class="title">
        <div class="left">
          <img src alt />
          <p>
            英格兰
            <span>(今日赛事19场)</span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="league">
        <div class="left">
          <p>
            英超
            <span>(6场)</span>
          </p>
        </div>
        <div class="right">
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
          <van-icon name="arrow-down" />
        </div>
      </div>
      <div class="info" v-for="(item,index) in 3" :key="index">
        <div class="inner-info">
          <div class="top">
            <p>
              10-11 16:30
              <span>英超</span>
            </p>
            <span>
              <img src="@/assets/images/instantscore/time_i@2x.png" alt />59'
            </span>
            <span></span>
          </div>
          <div class="mid">
            <div class="left">
              <span>1</span>
              <p>[3]SC奥萨</p>
            </div>
            <div class="mmid">
              <span>3:2</span>
            </div>
            <div class="right">
              <p>撒冷马比[13]</p>
              <span>1</span>
            </div>
          </div>
          <div class="bot">
            <span>(1:2)</span>
          </div>
          <img src="@/assets\images\instantscore\collection_i3@2x.png" alt class="collection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      navList: ["全部", "比分相同", "强队落后", "分叉悬殊", "收藏"],
      currid: 0
    };
  },
  created() {},
  mounted() {},
  methods: {
    changecurr(index) {
      this.currid = index;
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets\css\ph\rollingball\rollingball.scss" scoped>
</style>