<template>
  <div class="container">
    <!--导航栏-->
    <ph-nav-bar nav-activate="热门资讯"></ph-nav-bar>
    <!--Swipe 轮播-->
    <van-swipe class="swipeBox" :autoplay="5000" indicator-color="#feb920">
      <div v-for="(item,index) in bannerInfo" :key="index" ref="swiper">
        <van-swipe-item class="swipe_item">
          <van-image class="swipe_img" :src="item.informationPic"></van-image>
          <div class="swipe_text singleLineText">{{item.title}}</div>
        </van-swipe-item>
      </div>
    </van-swipe>

    <div class="relatedInfo">
      <div class="title">
        <p class="text">相关资讯</p>
        <div class="opt">
          <span :class="currid==0?'active':''" @click="changecurr(0)">最新</span>
          |
          <span :class="currid==1?'active':''" @click="changecurr(1)">最热</span>
        </div>
      </div>
      <div class="relatedlist">
        <div class="details" v-for="(item,index) in infoList" :key="index">
          <div class="left">
            <img :src="item.imgurl" alt />
          </div>
          <div class="right">
            <p class="titles">{{item.title}}</p>
            <p class="content">{{item.content}}</p>
            <div class="flows">
              <span class="time">{{item.createTime}}</span>
              <span class="comment">
                <img src="@/assets/images/matchlive/comment_i@2x.png" alt />
                {{item.commentNum}}
              </span>
              <span class="flow">
                <img src="@/assets/images/matchlive/browse_i@2x.png" alt />
                {{item.lookNum}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as newsList from "@/api/hotnews";
export default {
  components: {},
  data() {
    return {
      imgUrl: "",
      currid: 0,
      swipeList: [0, 0, 0],
      infoList: [],
      pagesize: 6,
      current: 1,
      data: [],
      bannerInfo: []
    };
  },
  created() {
    this.getinfoList();
    this._initdata();
  },
  mounted() {},
  methods: {
    // 获取轮播图信息
    _initdata() {
      const parame = {
        current: this.current,
        size: this.pagesize
      };
      const data = {
        location: 0
      };
      newsList.getHotnews(parame, data).then(res => {
        console.log(res);
        let data = res.data.data.records;
        data.forEach((element, index) => {
          element.informationPic = "https://img.yzcdn.cn/vant/logo.png";
        });
        console.log(data);
        this.bannerInfo = data;
      });
    },
    // 获取最热资讯信息列表
    getinfoList() {
      const parame = {
        current: this.current,
        size: this.pagesize
      };
      const data = {
        location: 1
      };
      newsList.getHotnews(parame, data).then(res => {
        const data = res.data.data;
        // this.total = data.total;
        this.infoList = data.records;
      });
    },
    // 获取最新资讯列表
    getNewsInfoList() {
      const data = {
        location: 2
      };
      newsList.getnewsInfo(data).then(res => {
        const data = res.data.data;
        this.infoList = data.records;
      });
    },
    // 改变相关资讯最新最热
    changecurr(index) {
      if (index == 0 && this.currid !== index) {
        this.currid = index;
        this.getinfoList();
      } else if (index == 1 && this.currid !== index) {
        this.currid = index;
        this.getNewsInfoList();
      }
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/ph/hotnews.scss" scoped>
</style>
<style lang="scss">
.swipeBox .van-swipe__indicators {
  right: 0;
  left: auto;
}
</style>