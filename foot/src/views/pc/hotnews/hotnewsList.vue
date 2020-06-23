<template>
  <div class="container">
    <pcNavBar navActivate="热门资讯"></pcNavBar>
    <div class="lists">
      <div class="list-head">
        <i class="el-icon-s-home"></i>
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">帮众体育</el-breadcrumb-item>
          <el-breadcrumb-item>热门资讯</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="inner-container">
      <div class="left">
        <div class="relevantinfo">
          <div class="title">
            <div class="top">
              <div class="zixun" ref="title">
                {{queryData.name}}
                <img src="@/assets/images/hotnews/zixun.png" alt />
              </div>
            </div>
            <div class="bot">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="list">
            <relevant-info v-for="(item,index) in infoList" :key="index" :data="item"></relevant-info>
          </div>
        </div>
        <div class="pagination-hotnews">
          <el-pagination
            :hide-on-single-page="true"
            prev-text="上一页"
            next-text="下一页"
            :page-size="pagesize"
            :background="true"
            layout="prev, pager, next"
            :total="this.total"
            @current-change="currentchange"
          ></el-pagination>
        </div>
      </div>
      <div class="right">
        <div class="tags">
          <div class="title">
            <span>英超相关</span>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="tagslist">
            <span
              v-for="(item,index) in tags"
              :key="index"
              @click="tagFind(item.id,item.name)"
            >{{item.name}}</span>
          </div>
        </div>
        <div class="article">
          <div class="title">
            <span>文章推荐</span>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="articleList">
            <div class="details" v-for="(item,index) in articleList" :key="index">
              <div class="article-left">
                <img :src="item.informationPic" alt class="bgimg" />
              </div>
              <div class="article-right">
                <p>{{item.content}}</p>
                <div class="flow">
                  <span>{{item.createTime}}</span>
                  <p>
                    <img src="@/assets/images/matchlive/browse_i@2x.png" alt />
                    {{item.lookNum}}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="atlas">
          <div class="title">
            <span>相关图集</span>
            <div class="lines">
              <span></span>
              <i></i>
            </div>
          </div>
          <div class="atlasList">
            <div class="picture">
              <img src="http://img2.imgtn.bdimg.com/it/u=3991417656,2886122634&fm=26&gp=0.jpg" alt />
              <div class="masking">
                <img src="@/assets/images/hotnews/tu-icon@2x.png" alt />
                <span>12张</span>
              </div>
            </div>
            <div class="picture">
              <img src="http://img2.imgtn.bdimg.com/it/u=3991417656,2886122634&fm=26&gp=0.jpg" alt />
              <div class="masking">
                <img src="@/assets/images/hotnews/tu-icon@2x.png" alt />
                <span>12张</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <pcFooter></pcFooter>
  </div>
</template>

<script>
import * as newsList from "@/api/hotnews";
export default {
  components: {
    relevantInfo: () => import("./components/relevantinfo")
  },
  data() {
    return {
      infoList: [],
      tags: [],
      articleList: [],
      queryData: {},
      total: null,
      pagesize: 6,
      current: 1
    };
  },
  created() {},
  mounted() {
    this.queryData = this.$route.query.data;
    this.getinfoList();
    this.getArticleList();
    this.getTagsList();
  },
  methods: {
    // 获取最热资讯信息列表
    getinfoList() {
      const parame = {
        current: this.current,
        size: this.pagesize
      };
      const data = {
        labelId: this.queryData.tagId
      };
      newsList.getHotnews(parame, data).then(res => {
        const data = res.data.data;
        this.total = data.total;
        this.infoList = data.records;
      });
    },
    // 获取文章推荐列表
    getArticleList() {
      const parame = {
        current: this.current,
        size: this.pagesize
      };
      const data = {
        location: 1
      };
      newsList.getHotnews(parame, data).then(res => {
        const data = res.data.data;
        this.total = data.total;
        this.articleList = data.records;
      });
    },
    // 接收currentpage
    currentchange(currentVal) {
      this.current = currentVal;
      if (this.hottestIdx === 0) {
        this.getnewsInfo();
      } else {
        this.getinfoList();
      }
    },
    // tags的列表数据
    getTagsList() {
      const data = {};
      newsList.getTagsList(data).then(res => {
        const data = res.data.data;
        this.tags = data;
      });
    },
    // 跳转对应资讯列表
    tagFind(tagId, tagName) {
      this.queryData.tagId = tagId;
      this.queryData.name = tagName;
      this.getinfoList();
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/pc/hotnews/hotnews.scss" scoped>
</style>