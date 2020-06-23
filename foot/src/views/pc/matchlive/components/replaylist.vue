<template>
  <div class="list">
    <div class="info" v-for="(item,index) in data" :key="index" @click="redirectFunc">
      <img src="@/assets/images/matchlive/play_i5@3x.png" alt />
      <p>{{item.text}}</p>
      <span>{{item.times}}</span>
    </div>
    <!-- 分页 -->
    <div class="pagination-matchreplayList">
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
export default {
  components: {},
  data() {
    return {
      data: [
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        },
        {
          text:
            "仙台七夕vs横滨水手录像 2016年9月10日 日职联 仙台七夕对横滨水手回放",
          times: "2020-03-09 16:23:21"
        }
      ],
      pagesize: 9,
      current: 1,
      total: 10
    };
  },
  created() {},

  methods: {
    // 获取分页当前页数
    currentchange(currentVal) {
      this.current = currentVal;
    },
    redirectFunc() {
      this.$router.push({
        name: "pc-matchreplaydetails"
      });
    }
  },
  mounted() {},
  computed: {},
  watch: {}
};
</script>
<style lang='scss' scoped>
.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  .info {
    width: 100%;
    display: flex;
    height: 45px;
    align-items: center;
    cursor: pointer;
    img {
      width: 14px;
      height: 14px;
      margin-left: 20px;
      margin-right: 5px;
    }
    p {
      color: #555555;
      font-size: 14px;
      flex: 1;
    }
    span {
      color: #999999;
      font-size: 14px;
      margin-right: 20px;
    }
  }
}
</style>

<style lang="scss">
.pagination-matchreplayList {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  margin: 10px 0px;
}
.pagination-matchreplayList
  .el-pagination.is-background
  .el-pager
  li:not(.disabled) {
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-matchreplayList
  .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #30303d;
}

.pagination-matchreplayList .el-pagination.is-background .btn-next {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
.pagination-matchreplayList .el-pagination.is-background .btn-prev {
  width: 63px;
  height: 28px;
  background-color: #ffffff;
  border: solid 1px #e1e1e1;
}
</style>