<template>
  <div class="list">
    <div class="info" v-for="(item,index) in data" :key="index">
      <div class="left">
        <img :src="item.imgUrl" alt />
      </div>
      <div class="right">
        <p>
          欧冠杯小组赛有哪些规律？欧冠杯
          小组赛的球队多少？
        </p>
        <div class="count">
          <span class="time">{{item.times}}</span>
          <span class="comment">
            <img src="@/assets/images/matchlive/browse_i@2x.png" alt />
            {{item.comment}}
          </span>
          <span>
            <img src="@/assets/images/matchlive/comment_i@2x.png" alt />
            {{item.flow}}
          </span>
        </div>
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
.list {
  .info {
    border-top: 0.01rem solid #eeeeee;
    display: flex;
    padding: 0rem 0.19rem 0rem 0.24rem;
    justify-content: space-between;

    .left {
      width: 2.4rem;
      display: flex;
      height: 1.35rem;
      align-items: center;
      justify-content: center;
      margin: 0.3rem 0rem;

      img {
        width: 2.4rem;
        height: 1.35rem;
        border-radius: 0.04rem;
      }
    }

    .right {
      width: 4.5rem;
      margin: 0.3rem 0rem;

      > p {
        color: #202021;
        font-size: 0.28rem;
        line-height: .4rem;
      }

      .count {
        display: flex;
        align-items: center;
        margin-top: 0.2rem;

        span {
          display: flex;
          align-items: center;
          font-size: 0.24rem;
          color: #999999;

          img {
            width: 0.23rem;
            height: 0.23rem;
            margin-right: 0.1rem;
          }
        }

        .time {
          margin-right: 0.67rem;
        }

        .comment {
          margin-right: 0.4rem;
        }
      }
    }
  }
}
</style>