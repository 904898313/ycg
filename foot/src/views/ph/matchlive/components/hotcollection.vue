<template>
  <div class="lights">
    <div class="ullist">
      <div class="bgimg">
        <img
          src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1439794979,2672901501&fm=26&gp=0.jpg"
          alt
        />
        <div class="layer">
          <p class="text">
            <img src="@/assets/images/matchlive/video_i@2x.png" alt />席尔瓦精彩集锦！曼城真核！
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
  .ullist {
    .bgimg {
      display: flex;
      flex-direction: column;
      margin-top: 0.2rem;
      position: relative;
      > img {
        width: 7rem;
        height: auto;
        margin: 0 auto;
      }
      .layer {
        position: absolute;
        left: 0.25rem;
        bottom: 0px;
        width: 7rem;
        height: 0.88rem;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        .text {
          color: rgba(255, 255, 255, 1);
          font-size: 0.24rem;
          margin-left: 0.2rem;
          display: flex;
          align-items: center;
          > img {
            width: 0.29rem;
            height: 0.19rem;
            margin-right: 0.1rem;
          }
        }
        .count {
          color: #ffffff;
          font-size: 0.2rem;
          display: flex;
          align-items: center;
          margin-left: 0.2rem;
          opacity: 0.5;
          i {
            display: inline-block;
            width: 0.04rem;
            height: 0.04rem;
            background-color: #dddddd;
            margin: 0rem 0.15rem;
            opacity: 0.5;
          }
        }
      }
      .masking {
        width: 1.63rem;
        height: 0.45rem;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.23rem;
        position: absolute;
        color: #ffffff;
        font-size: 0.22rem;
        top: 0.2rem;
        right: 0.46rem;
        text-align: center;
        line-height: 0.45rem;
      }
    }
    .info {
      display: flex;
      align-items: center;
      p {
        font-size: 0.26rem;
        color: #555555;
        line-height: 0.6rem;
        margin-left: 0.24rem;
        display: flex;
        align-items: center;
        &:before {
          content: ".";
          background-color: #e5e5e5;
          color: #e5e5e5;
          width: 0.08rem;
          height: 0.08rem;
          margin-right: 0.12rem;
        }
      }
    }
  }
}
</style>