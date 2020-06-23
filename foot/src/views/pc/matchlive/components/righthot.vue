<template>
  <div class="lights">
    <div class="title">
      <div class="more">
        <span>英超热门集锦</span>
        <i>更多></i>
      </div>
      <div class="lines">
        <span></span>
        <i></i>
      </div>
    </div>

    <div class></div>
    <div class="ullist">
      <div class="bgimg">
        <img
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1439794979,2672901501&fm=26&gp=0.jpg"
          alt
        />
        <div class="layer">
          <p class="text">
            <img src="@/assets/images/matchlive/video2x.png" alt />席尔瓦精彩集锦！曼城真核！
          </p>
          <p class="count">
            2020/03/18 14:50:13
            <i></i> 12314人看过
          </p>
        </div>
        <div class="masking">时长：08:18</div>
      </div>
      <div class="info" v-for="(item,index) in data" :key="index">
        <p>{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.lights {
  width: 100%;
  background-color: #fff;
  margin-top: 16px;
  .title {
    .more {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-right: 15px;
      i {
        font-size: 12px;
        color: #999999;
        line-height: 12px;
      }
      span {
        line-height: 50px;
        color: #333333;
        font-size: 16px;
        font-weight: bold;
        padding-left: 15px;
      }
    }
    .lines {
      display: flex;
      justify-content: space-between;
      span {
        width: 92px;
        height: 3px;
        background-color: #ffc201;
      }
      i {
        width: 235px;
        height: 3px;
        background-color: #e8e8e8;
      }
    }
  }
  .ullist {
    .bgimg {
      display: flex;
      flex-direction: column;
      margin-top: 13px;
      position: relative;
      > img {
        width: 298px;
        height: auto;
        margin: 0 auto;
      }
      .layer {
        position: absolute;
        left: 16px;
        bottom: 0px;
        width: 298px;
        height: 60px;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .text {
          color: rgba(255, 255, 255, 1);
          font-size: 14px;
          margin-left: 16px;
          display: flex;
          align-items: center;
          > img {
            width: 16px;
            height: 11px;
            margin-right: 5px;
          }
        }
        .count {
          color: #ffffff;
          font-size: 12px;
          display: flex;
          align-items: center;
          margin-left: 14px;
          opacity: 0.5;
          i {
            display: inline-block;
            width: 2px;
            height: 2px;
            background-color: #dddddd;
            margin: 0px 8px;
            opacity: 0.5;
          }
        }
      }
      .masking {
        width: 88px;
        height: 24px;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 12px;
        position: absolute;
        color: #ffffff;
        font-size: 12px;
        top: 12px;
        right: 31px;
        text-align: center;
        line-height: 24px;
      }
    }
    .info {
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        color: #555555;
        line-height: 40px;
        margin-left: 30px;
        position: relative;
        &:before {
          content: ".";
          position: absolute;
          left: -10px;
          top: 18px;
          background-color: #e5e5e5;
          color: #e5e5e5;
          width: 4px;
          height: 4px;
          display: inline-block;
          line-height: 40px;
        }
      }
    }
  }
}
</style>