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

    <div class="vision">
      <video src="movie.ogg" controls="controls" width="810px"></video>
    </div>

    <div class="brief">
      <div class="brief-top">
        <span>编辑：Hacker</span>
        <span class="yotube">视频来源：Yotube</span>
        <span>视频清晰度：高清</span>
        <span class="mb">点击此处下载本视频156MB</span>
      </div>
      <div class="brief-bottom">
        <span>有无字幕：无</span>
        <span>是否包含广告：无广告、无弹窗</span>
        <span>视频语言：简体中文</span>
        <span>
          观看提示：视频播放后如有卡顿，请
          <i>点此刷新</i>即可正常播放。
        </span>
      </div>
    </div>

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
.bifeninfo {
  display: flex;
  margin: 29px 21px;
  justify-content: space-between;
  height: 47px;
  align-items: center;
  border: solid 1px #eeeeee;

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
.vision {
  margin-top: 16px;
  display: flex;
  justify-content: center;
}
.brief {
  width: 810px;
  margin: 0 auto;
  .brief-top {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #999999;
    }
    .mb {
      width: 309px;
      height: 30px;
      background-color: #f6f6fa;
      border: solid 1px #eeeeee;
      color: #333333;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
    }
  }
  .brief-bottom {
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
    span {
      font-size: 12px;
      color: #999999;
      i {
        color: #6579b1;
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