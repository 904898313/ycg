<template>
  <div class="collection">
    <div class="title">
      <p>英超 斯托克城VS托特纳姆热刺直播</p>
      <span>比赛时间：2020/03/13 08:32</span>
    </div>
    <div class="tags">
      <span>英超</span>
      <span>斯托克城</span>
      <span>托特那姆热刺</span>
    </div>
    <div class="text">
      <p>本场比赛是斯托克城vs托特纳姆热刺之间进行的英格兰超级联赛，比赛时间为2020年3月13日 04:00。</p>
      <p>帮众体育不仅为您提供了斯托克城和托特纳姆热刺的视频直播，还为您提供斯托克城vs托特纳姆热刺的回放集锦、预测、分析等。</p>
    </div>
    <div class="address">
      <div class="title">
        <i></i>
        <span>视频集锦地址</span>
      </div>
      <div class="bifen">
        <ul>
          <li v-for="(item,index) in data" :key="index">
            <span>{{item.text}}</span>
          </li>
        </ul>
        <div class="bifeninfo">
          <div class="bifeninfo-left">
            <span>查看本场比赛相关信息：</span>
            <span>预测分析</span>
          </div>
          <div class="bifeninfo-right">
            <img src="@/assets/images/matchlive/share.png" alt />
            <span>分享本场比赛录像</span>
            <img src="@/assets/images/matchlive/weiixn@2x.png" alt class="icons" />
            <img src="@/assets/images/matchlive/weibo@2x.png" alt class="icons" />
            <img src="@/assets/images/matchlive/zone@2x.png" alt class="icons" />
          </div>
        </div>
      </div>
    </div>
    <div class="order">
      <div class="prev">
        <span>上个集锦：</span>
        <p>
          托妞职业生涯高光时刻 2012欧冠
          托雷斯绝杀巴萨
        </p>
      </div>
      <div class="next">
        <span>下个集锦：</span>
        <p>
          托妞职业生涯高光时刻 2012欧冠
          托雷斯绝杀巴萨
        </p>
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
.collection {
  > .title {
    width: 807px;
    height: 79px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px dashed #eeeeee;
    margin: 0 auto;

    p {
      color: #333333;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }

    span {
      color: #999999;
      font-size: 12px;
      text-align: center;
    }
  }
}

.tags {
  width: 100%;
  display: flex;
  padding: 0px 20px;

  span {
    padding: 0px 13px;
    font-size: 12px;
    color: #202021;
    background-color: #f3f3f8;
    line-height: 30px;
    margin-right: 8px;
    margin-top: 20px;
  }

  :nth-child(3) {
    background-color: #30303d;
    color: #fff;
  }
}

.text {
  margin-top: 20px;

  p {
    font-size: 14px;
    color: #202021;
    padding-left: 20px;
    line-height: 28px;
  }
}

.address {
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  justify-content: center;

  > .title {
    width: 100%;
    display: flex;
    align-items: center;

    i {
      width: 8px;
      height: 12px;
      background-color: $ffc002;
    }

    span {
      color: #333333;
      font-size: 16px;
      font-weight: bold;
      margin-left: 12px;
    }
  }

  .bifen {
    width: 807px;
    border: solid 1px #eeeeee;
    margin: 20px auto;

    ul {
      margin: 10px 0px;

      li {
        padding-left: 15px;

        span {
          display: flex;
          align-items: center;
          color: #4280c9;
          font-size: 14px;
          line-height: 30px;

          &:before {
            content: "";
            margin-right: 5px;
            display: inline-block;
            width: 4px;
            height: 4px;
            background-color: #4280c9;
            line-height: 30px;
          }
        }
      }
    }
  }

  .bifeninfo {
    display: flex;
    justify-content: space-between;
    height: 40px;
    align-items: center;
    border-top: solid 1px #eeeeee;

    .bifeninfo-left {
      :nth-child(1) {
        font-size: 12px;
        color: #333333;
        margin-left: 15px;
      }

      :nth-child(2) {
        font-size: 12px;
        margin: 0px 10px;
        text-decoration: underline;
      }

      :nth-child(3) {
        color: #333333;
        font-size: 12px;
        text-decoration: underline;
      }
    }

    .bifeninfo-right {
      display: flex;
      align-items: center;
      padding-right: 15px;

      :nth-child(1) {
        width: 16px;
        height: 16px;
        margin-right: 5px;
      }

      :nth-child(2) {
        font-size: 12px;
        color: #777777;
      }

      .icons {
        margin-left: 15px;
      }
    }
  }
}

.order {
  width: 100%;
  padding: 0px 21px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  .prev {
    display: flex;
    width: 320px;
    background-color: #f6f6fa;
    align-items: center;

    span {
      font-size: 14px;
      color: #999999;
      min-width: 70px;
      margin-right: 19px;
      margin-left: 12px;
    }

    p {
      font-size: 14px;
      color: #333333;
      padding: 17px 0px;
    }
  }

  .next {
    @extend .prev;
    background-color: #eaeaea;
    align-items: center;

    p {
      text-decoration: underline;
    }
  }
}
</style>
