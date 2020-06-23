<template>
  <div class="news">
    <div class="title">
      <span @click="tabswich(0)" :class="menusId==0?'active':''">
        系统信息
        <i> ({{this.newsList.length}}) </i>
      </span>
      <i></i>
      <span @click="tabswich(1)" :class="menusId==1?'active':''">VIP推送</span>
    </div>
    <div class="newsInfo">
      <div class="newsInfo-item" v-for="(item,index) in newsList" :key="index">
        <img src="@/assets/images/mine/message_i@2x.png" alt />
        <div class="item-cot">
          <div class="top">
            <span>{{item.title}}</span>
            <i>{{item.createTime}}</i>
          </div>
          <p>{{item.message}}</p>
        </div>
      </div>
    </div>
    <div class="pagination-news">
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
</template>

<script>
import * as mine from "@/api/mine";
export default {
  name: "news",
  data() {
    return {
      menusId: 0,
      pagesize: 6,
      total: null,
      newsList: [],
      current: 1
    };
  },
  created() {
    this.getnewsList();
  },
  methods: {
    // 切换系统消息推送
    tabswich(index) {
      this.menusId = index;
      this.current = 1;
      this.getnewsList(index);
    },
    // 获取系统消息列表
    getnewsList(_TYPE) {
      let type = 0;
      if (_TYPE) {
        type = _TYPE;
      }
      let data = {
        type: type
      };
      let params = {
        current: this.current,
        size: this.pagesize
      };
      mine.getnewsList(data, params).then(res => {
        this.newsList = res.data.data.records;
        this.total = res.data.data.total;
      });
    },
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
      this.getnewsList(this.menusId);
    }
  },
  mounted() {}
};
</script>

<style src="../../../../assets/css/pc/mine/news.scss" lang="scss" scoped></style>
<style lang="scss">
.pagination-news {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 60px 0px;
}
.pagination-news .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-news
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-news .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-news .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
</style>
