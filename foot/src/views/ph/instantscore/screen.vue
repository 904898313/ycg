<template>
  <div class="container">
    <header>
      <img src="@/assets/images/mine/backtrack-i@2x.png" @click="back()" class="back" />
      <span>筛选</span>
    </header>
    <div class="tabs">
      <span :class="currid==0?'active':''" @click="changecurr(0)">赛事筛选</span>
      <span :class="currid==1?'active':''" @click="changecurr(1)">盘口筛选</span>
    </div>
    <div class="menus">
      <van-tabs title-active-color="#ffc002" title-inactive-color="#222222" :ellipsis="true">
        <van-tab v-for="(item,index) in navList" :title="item.navName" :key="index"></van-tab>
      </van-tabs>
    </div>
    <div class="navigation">
      <van-index-bar :index-list="indexList">
        <van-index-anchor index="1">
          <i></i> 热门赛事
        </van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="2">
          <i></i>其他赛事
        </van-index-anchor>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
        <van-index-anchor index="3">A</van-index-anchor>
        <div class="cell">
          <van-checkbox v-model="checked" shape="square">英超</van-checkbox>
          <van-checkbox v-model="checked" shape="square">澳超</van-checkbox>
        </div>
      </van-index-bar>
    </div>
    <div class="addheight"></div>
    <div class="checkall">
      <div class="chenk">
        <span>全选</span>
        <i></i>
        <span>反选</span>
      </div>
      <div class="full">确定</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      indexList: ["热", "A", "B", "F", "K", "M", "Q", "S", "T", "W", "X", "Y"],
      currid: 0,
      navList: [
        {
          navName: "全部",
          id: "1"
        },
        {
          navName: "一级",
          id: "2"
        },
        {
          navName: "竞彩",
          id: "3"
        },
        {
          navName: "足彩",
          id: "4"
        },
        {
          navName: "北单",
          id: "5"
        }
      ],
      checked: true
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
<style lang='scss' src="@/assets/css/ph/instantscore/screen.scss" scoped>
</style>
<style lang="scss">
.menus .van-tabs__line {
  background-color: #ffc002;
}
.navigation .van-index-anchor {
  height: 0.8rem;
  font-size: 0.3rem;
  display: flex;
  align-items: center;
  i {
    width: 0.08rem;
    height: 0.24rem;
    background-color: #ffc002;
    margin-right: 0.1rem;
  }
}
.navigation .van-index-bar__index {
  font-size: 0.21rem;
  color: #000000;
  font-weight: bold;
  line-height: 0.34rem;
  padding: 0rem 0.16rem 0.2rem 0rem;
}
.navigation .van-index-bar__sidebar {
  top: 55%;
}
.navigation .cell .van-checkbox {
  width: 2rem;
  height: 0.65rem;
  background-color: #ffffff;
  border-radius: 0.04rem;
  margin-right: 0.3rem;
  border: solid 0.01rem #ffc002;
  margin-bottom: 0.24rem;
  position: relative;
  display: flex;
  justify-content: center;
}
.navigation .cell .van-checkbox__label {
  color: #ffc002;
  font-size: 0.28rem;
  margin-left: 0rem;
}
.navigation .cell .van-checkbox__icon--checked .van-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  border-top: 0.2rem solid #ffffff;
  border-right: 0.2rem solid #ffc002;
  border-bottom: 0.2rem solid #ffc002;
  border-left: 0.2rem solid #ffffff;
  width: 0;
  height: 0;
  display: inline-block;
}
.navigation .cell .van-checkbox__icon .van-icon {
  position: absolute;
  right: 0;
  bottom: 0;
  display: inline-block;
  border-top: 0.22rem solid #ffffff;
  border-right: 0.22rem solid #ffc002;
  border-bottom: 0.22rem solid #ffc002;
  border-left: 0.22rem solid #ffffff;
  width: 0;
  height: 0;
}
.navigation .cell .van-icon-success:before {
  transform: translate3d(-0.05rem, -0.15rem, 0);
  font-size: 0.24rem;
}
</style>