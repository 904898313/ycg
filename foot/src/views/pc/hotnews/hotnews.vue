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
        <div class="banner">
          <div class="banner-left">
            <img src="https://img.thea.cn/thea/images/contentpic/11/134.png" alt />
            <div class="masking">
              <p v-if="bannerInfo[0]">{{bannerInfo[0].title}}</p>
            </div>
          </div>
          <div class="banner-right">
            <div class="top">
              <img
                src="https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3252521864,872614242&fm=26&gp=0.jpg"
                alt
              />
              <div class="masking">
                <p v-if="bannerInfo[1]">{{bannerInfo[1].title}}</p>
              </div>
            </div>
            <div class="bot">
              <img
                src="https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3855626982,3162868401&fm=85&app=92&f=JPEG?w=121&h=75&s=C8031F745BB3C8CE18DA1C46030060FB"
                alt
              />
              <div class="masking">
                <p v-if="bannerInfo[2]">{{bannerInfo[2].title}}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relevantinfo">
          <div class="title">
            <div class="top">
              <div class="zixun" ref="title">
                相关资讯
                <img src="@/assets/images/hotnews/zixun.png" alt />
              </div>
              <div class="hottest">
                <span :class="hottestIdx==1?'active':''" @click="changeHottest(1)">最热</span>
                |
                <span
                  :class="hottestIdx==0?'active':''"
                  @click="changeHottest(0)"
                >最新</span>
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
      tags: [],
      hottestIdx: 1,
      bannerInfo: [],
      infoList: [],
      articleList: [],
      total: null,
      pagesize: 6,
      current: 1
    };
  },
  created() {},
  mounted() {
    this._initdata();
    this.getinfoList();
    this.getArticleList();
    this.getTagsList();
  },
  methods: {
    // 获取banner信息
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
        const data = res.data.data;
        this.bannerInfo = data.records;
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
        this.total = data.total;
        this.infoList = data.records;
      });
    },
    // 获取最新资讯列表
    getnewsInfo() {
      const parame = {
        current: this.current,
        size: this.pagesize
      };
      const data = {
        location: 1
      };
      newsList.getnewsInfo(parame, data).then(res => {
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
    // 改变最新和最热
    changeHottest(index) {
      if (index == 0 && this.hottestIdx !== index) {
        this.hottestIdx = index;
        this.current = 1;
        this.getnewsInfo();
      } else if (index == 1 && this.hottestIdx !== index) {
        this.hottestIdx = index;
        this.current = 1;
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
      const obj = { tagId: tagId, name: tagName };
      this.$router.push({
        name: "pc-hotnewsList",
        query: {
          data: obj
        }
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
    }
  },
  computed: {},
  watch: {}
};
</script>
<style lang='scss' src="@/assets/css/pc/hotnews/hotnews.scss" scoped>
</style>

<style lang="scss">
.pagination-hotnews .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-hotnews
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-hotnews .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-hotnews .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.checkbox-cover .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #f7c414;
  border: #f7c414;
}
.checkbox-cover .el-checkbox__inner:hover {
  border: #f7c414;
}
.checkbox-cover .el-checkbox__inner::after {
  left: 5px;
  top: 2px;
}
</style>
